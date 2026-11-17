import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { randomUUID } from 'node:crypto'
import userModel from '../models/userModel.js'
import adminSetupModel from '../models/adminSetupModel.js'
import orderModel from '../models/orderModel.js'
import orderAModel from '../models/orderAModel.js'
import consultModel from '../models/consultationModel.js'
import productModel from '../models/productsModel.js'
import siteSettingsModel from '../models/siteSettingsModel.js'
import { removeUploadedFile, saveImageDataUrl } from '../lib/localUploads.js'

const normalizeLocalNumber = number => {
  const digits = String(number || '').replace(/\D/g, '')
  if (digits.length === 10 && digits.startsWith('0')) return digits
  if (digits.length === 12 && digits.startsWith('233')) return `0${digits.slice(3)}`
  return null
}

const allowedNumbers = new Set(
  (process.env.ADMIN_PHONE_NUMBERS || '')
    .split(',')
    .map(normalizeLocalNumber)
    .filter(Boolean),
)
const allowedAdminEmail = String(process.env.ADMIN_EMAIL || '').trim().toLowerCase()

const setAdminCookie = (res, token) => res.cookie('adminToken', token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
  maxAge: 8 * 60 * 60 * 1000,
})

const setupDocumentId = 'initial-admin'
const setupClaimDurationMs = 5 * 60 * 1000
const adminSetupConfigurationMessage = 'Admin setup requires ADMIN_EMAIL, ADMIN_PHONE_NUMBERS, and JWT_SECRET in the backend environment.'

export const getAdminSetupStatus = async (req, res) => {
  if (!process.env.JWT_SECRET || !allowedAdminEmail || !allowedNumbers.size) {
    return res.status(503).json({ success: false, message: adminSetupConfigurationMessage })
  }

  const [existingAdmin, setupRecord] = await Promise.all([
    userModel.exists({ isAdmin: true }),
    adminSetupModel.findById(setupDocumentId).lean(),
  ])
  const setupClaimed = setupRecord?.state === 'complete'
    || (setupRecord?.state === 'pending' && setupRecord.expiresAt?.getTime() > Date.now())
  return res.json({
    success: true,
    available: !existingAdmin && !setupClaimed,
  })
}

export const createInitialAdmin = async (req, res) => {
  if (!process.env.JWT_SECRET || !allowedAdminEmail || !allowedNumbers.size) {
    return res.status(503).json({ success: false, message: adminSetupConfigurationMessage })
  }

  const body = req.body || {}
  const email = String(body.email || '').trim().toLowerCase()
  const phone = normalizeLocalNumber(body.number)
  const password = body.password
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email !== allowedAdminEmail || !phone || !allowedNumbers.has(phone)) {
    return res.status(400).json({ success: false, message: 'Enter a valid email and an authorized phone number' })
  }
  if (typeof password !== 'string' || password.length < 12) {
    return res.status(400).json({ success: false, message: 'Admin password must be at least 12 characters' })
  }
  if (await userModel.exists({ isAdmin: true })) {
    return res.status(409).json({ success: false, message: 'Initial admin setup has already been completed' })
  }

  const claimId = randomUUID()
  const claim = {
    _id: setupDocumentId,
    state: 'pending',
    claimId,
    expiresAt: new Date(Date.now() + setupClaimDurationMs),
  }
  try {
    const existingClaim = await adminSetupModel.findOneAndUpdate(
      { _id: setupDocumentId, state: 'pending', expiresAt: { $lte: new Date() } },
      { $set: { claimId, expiresAt: claim.expiresAt } },
      { new: true },
    )
    if (!existingClaim) {
      try {
        await adminSetupModel.create(claim)
      } catch (error) {
        if (error.code === 11000) {
          return res.status(409).json({ success: false, message: 'Admin setup is already in progress or complete' })
        }
        throw error
      }
    }

    if (await userModel.exists({ isAdmin: true })) {
      await adminSetupModel.updateOne({ _id: setupDocumentId, claimId }, { $set: { state: 'complete' }, $unset: { expiresAt: 1 } })
      return res.status(409).json({ success: false, message: 'Initial admin setup has already been completed' })
    }

    const admin = new userModel({
      name: 'Admin',
      email,
      number: phone,
      password: await bcrypt.hash(password, 12),
      isAdmin: true,
      isAccountVerified: true,
    })
    await admin.save()
    await adminSetupModel.updateOne(
      { _id: setupDocumentId, claimId },
      { $set: { state: 'complete' }, $unset: { expiresAt: 1 } },
    )
    const sessionToken = jwt.sign(
      { role: 'admin', phone, sub: admin._id.toString() },
      process.env.JWT_SECRET,
      { expiresIn: '8h' },
    )
    setAdminCookie(res, sessionToken)
    return res.status(201).json({ success: true, message: 'Admin account created. You can now log in.' })
  } catch (error) {
    await adminSetupModel.deleteOne({ _id: setupDocumentId, claimId, state: 'pending' })
    if (error.code === 11000) {
      return res.status(409).json({ success: false, message: 'An account with that email already exists' })
    }
    console.error('Initial admin setup failed:', error)
    return res.status(500).json({ success: false, message: 'Could not create the admin account' })
  }
}

export const adminLogin = async (req, res) => {
  if (!process.env.JWT_SECRET) {
    return res.status(503).json({ success: false, message: 'Admin authentication is not configured' })
  }
  const email = String(req.body.email || '').trim().toLowerCase()
  const password = String(req.body.password || '')
  if (!email || !password) {
    return res.status(401).json({ success: false, message: 'Invalid admin credentials' })
  }

  const admin = await userModel.findOne({ email, isAdmin: true })
  if (!admin) {
    if (!await userModel.exists({ isAdmin: true })) {
      return res.status(503).json({ success: false, message: 'Admin account is not configured' })
    }
    return res.status(401).json({ success: false, message: 'Invalid admin credentials' })
  }

  const localNumber = normalizeLocalNumber(admin.number)
  if (!localNumber || !allowedNumbers.has(localNumber)) {
    return res.status(401).json({ success: false, message: 'Invalid admin credentials' })
  }
  if (!admin.password) {
    return res.status(503).json({ success: false, message: 'Admin account is not configured' })
  }
  const passwordMatches = await bcrypt.compare(password, admin.password)
  if (!passwordMatches) {
    return res.status(401).json({ success: false, message: 'Invalid admin credentials' })
  }

  const token = jwt.sign({ role: 'admin', phone: localNumber, sub: admin._id.toString() }, process.env.JWT_SECRET, { expiresIn: '8h' })
  setAdminCookie(res, token)
  return res.json({ success: true, message: 'Admin access granted' })
}

export const adminLogout = (req, res) => {
  res.clearCookie('adminToken', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
  })
  return res.json({ success: true })
}

export const getAdminDashboard = async (req, res) => {
  try {
    const [serviceOrders, itemOrders, itemRequests] = await Promise.all([
      orderModel.find().sort({ createdAt: -1 }).limit(100).lean(),
      orderAModel.find().sort({ createdAt: -1 }).limit(100).lean(),
      consultModel.find().sort({ createdAt: -1 }).limit(100).lean(),
    ])

    return res.json({ success: true, serviceOrders, itemOrders, itemRequests })
  } catch (error) {
    console.error('Admin dashboard failed:', error)
    return res.status(500).json({ success: false, message: 'Could not load admin data' })
  }
}

export const getSiteSettings = async (req, res) => {
  const settings = await siteSettingsModel.findOne().lean()
  return res.json({ success: true, settings: settings || { accent: '#b49a6a', paper: '#f7f6f3', ink: '#171715', looks: [], lookbookManaged: false, catalogManaged: false } })
}

export const getPublicSiteSettings = async (req, res) => getSiteSettings(req, res)

export const updateSiteSettings = async (req, res) => {
  const { accent, paper, ink } = req.body
  const colors = { accent, paper, ink }
  if (Object.values(colors).some(color => typeof color !== 'string' || !/^#[0-9a-fA-F]{6}$/.test(color))) {
    return res.status(400).json({ success: false, message: 'Colors must be six-digit hex values' })
  }
  const settings = await siteSettingsModel.findOneAndUpdate({}, colors, { new: true, upsert: true, setDefaultsOnInsert: true })
  return res.json({ success: true, settings })
}

export const addLook = async (req, res) => {
  const { title, description, image } = req.body
  if (!title?.trim() || !/^data:image\/(png|jpe?g|webp);base64,/.test(image || '')) {
    return res.status(400).json({ success: false, message: 'A title and image are required' })
  }
  let imagePath
  try {
    imagePath = await saveImageDataUrl(image)
    const settings = await siteSettingsModel.findOneAndUpdate({}, { $push: { looks: { title: title.trim(), description: description || '', image: imagePath } }, $set: { lookbookManaged: true } }, { new: true, upsert: true, setDefaultsOnInsert: true })
    return res.json({ success: true, settings })
  } catch (error) {
    if (imagePath) {
      try {
        await removeUploadedFile(imagePath)
      } catch (cleanupError) {
        console.error('Could not clean up failed lookbook photo upload:', cleanupError)
      }
    }
    console.error('Could not save lookbook photo:', error)
    return res.status(error.statusCode || 500).json({ success: false, message: error.message || 'Could not save lookbook photo' })
  }
}

export const deleteLook = async (req, res) => {
  const settings = await siteSettingsModel.findOne()
  const look = settings?.looks.id(req.body.lookId)
  if (!look) return res.status(404).json({ success: false, message: 'Photo not found' })
  settings.looks.id(req.body.lookId).deleteOne()
  settings.lookbookManaged = true
  await settings.save()
  await removeUploadedFile(look.image)
  return res.json({ success: true, settings })
}

export const deleteAllLooks = async (req, res) => {
  let settings = await siteSettingsModel.findOne()
  if (!settings) settings = await siteSettingsModel.create({})
  const imagePaths = settings.looks.map(look => look.image)
  settings.looks = []
  settings.lookbookManaged = true
  await settings.save()
  await Promise.all(imagePaths.map(removeUploadedFile))
  return res.json({ success: true })
}


export const updateTrackedOrder = async (req, res) => {
  const { orderId, type, status } = req.body
  const statuses = ['Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
  const model = type === 'item' ? orderAModel : type === 'service' ? orderModel : null
  if (!model || !statuses.includes(status)) return res.status(400).json({ success: false, message: 'Invalid order update' })
  const order = await model.findByIdAndUpdate(orderId, { status }, { new: true })
  if (!order) return res.status(404).json({ success: false, message: 'Order not found' })
  return res.json({ success: true, order })
}

export const getProductsForAdmin = async (req, res) => {
  const products = await productModel.find().sort({ createdAt: -1 }).lean()
  return res.json({ success: true, products })
}

export const initializeStorefront = async (req, res) => {
  let settings = await siteSettingsModel.findOne()
  if (!settings) settings = await siteSettingsModel.create({})
  if (!settings.lookbookManaged && !settings.looks.length && Array.isArray(req.body.looks)) {
    settings.looks = req.body.looks.filter(look => typeof look.title === 'string' && typeof look.image === 'string' && (/^https:\/\//.test(look.image) || look.image.startsWith('/'))).slice(0, 30)
    settings.lookbookManaged = true
  }
  if (!settings.catalogManaged) {
    const existingProducts = await productModel.countDocuments()
    if (!existingProducts && Array.isArray(req.body.products)) {
      const uniqueProducts = new Map(req.body.products.map(product => [`${product.slug}:${product.name}`, product]))
      const seedProducts = [...uniqueProducts.values()].filter(product => product.name && product.image && Number(product.price) >= 0).map(product => ({
        name: product.name,
        price: Number(product.price),
        image: product.image,
        quantity: 1,
        description: product.description || '',
        category: product.category,
        slug: product.slug,
        tag: product.tag || '',
      }))
      if (seedProducts.length) await productModel.insertMany(seedProducts)
    }
    settings.catalogManaged = true
  }
  await settings.save()
  return res.json({ success: true })
}

export const getTrackedOrder = async (req, res) => {
  const trackingId = String(req.params.trackingId || '').trim()
  const query = [{ trackingId }]
  if (/^[a-f\d]{24}$/i.test(trackingId)) query.push({ _id: trackingId })
  let order = await orderAModel.findOne({ $or: query }).select('trackingId itemName serviceName status createdAt updatedAt').lean()
  if (!order) order = await orderModel.findOne({ $or: query }).select('trackingId serviceName status createdAt updatedAt').lean()
  if (!order) return res.status(404).json({ success: false, message: 'Tracking number not found' })
  return res.json({ success: true, order: { ...order, itemName: order.itemName || order.serviceName } })
}

export const deleteAllProducts = async (req, res) => {
  const products = await productModel.find().select('image video').lean()
  await productModel.deleteMany({})
  await siteSettingsModel.findOneAndUpdate({}, { $set: { catalogManaged: true } }, { new: true, upsert: true, setDefaultsOnInsert: true })
  await Promise.all(products.flatMap(product => [removeUploadedFile(product.image), removeUploadedFile(product.video)]))
  return res.json({ success: true })
}
// Administrator authentication, setup, dashboard, settings, and tracking operations.
