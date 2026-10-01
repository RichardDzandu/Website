import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import orderModel from '../models/orderModel.js'
import orderAModel from '../models/orderAModel.js'
import consultModel from '../models/consultationModel.js'
import productModel from '../models/productsModel.js'
import siteSettingsModel from '../models/siteSettingsModel.js'
import cloudinary from '../lib/cloudinary.js'
import adminOtpModel from '../models/adminOtpModel.js'
import { sendSms, toGhanaNumber } from '../config/sms.js'

const allowedNumbers = new Set(
  (process.env.ADMIN_PHONE_NUMBERS || '')
    .split(',')
    .map(number => number.replace(/\D/g, ''))
    .filter(Boolean),
)

const codeHash = code => crypto.createHash('sha256').update(code).digest('hex')
const hashesMatch = (left, right) => {
  const leftBuffer = Buffer.from(left, 'hex')
  const rightBuffer = Buffer.from(right, 'hex')
  return leftBuffer.length === rightBuffer.length && crypto.timingSafeEqual(leftBuffer, rightBuffer)
}
const normalizeLocalNumber = number => {
  const international = toGhanaNumber(number)
  return international ? `0${international.slice(4)}` : null
}

export const requestAdminCode = async (req, res) => {
  const passwordHash = process.env.ADMIN_PASSWORD_HASH
  if (!passwordHash) {
    return res.status(503).json({ success: false, message: 'Admin password is not configured' })
  }

  const passwordMatches = await bcrypt.compare(String(req.body.password || ''), passwordHash)
  if (!passwordMatches) {
    return res.status(401).json({ success: false, message: 'Invalid admin credentials' })
  }

  const localNumber = normalizeLocalNumber(req.body.number)

  if (!localNumber || !allowedNumbers.has(localNumber)) {
    return res.status(403).json({ success: false, message: 'This number is not authorized' })
  }

  const existing = await adminOtpModel.findOne({ phone: localNumber }).lean()
  if (existing?.lastSentAt && Date.now() - existing.lastSentAt.getTime() < 60 * 1000) {
    return res.status(429).json({ success: false, message: 'Please wait before requesting another code' })
  }

  const code = String(crypto.randomInt(100000, 1000000))
  const challenge = {
    phone: localNumber,
    hash: codeHash(code),
    expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    attempts: 0,
    lastSentAt: new Date(),
  }

  try {
    await adminOtpModel.findOneAndUpdate({ phone: localNumber }, challenge, { upsert: true, new: true, setDefaultsOnInsert: true })
    await sendSms(toGhanaNumber(localNumber), `Berry's Closet admin code: ${code}. It expires in 10 minutes.`)
    return res.json({ success: true, message: 'Verification code sent' })
  } catch (error) {
    await adminOtpModel.deleteOne({ phone: localNumber }).catch(() => {})
    console.error('Admin SMS failed:', error.message)
    return res.status(503).json({ success: false, message: 'Could not send verification code' })
  }
}

export const verifyAdminCode = async (req, res) => {
  const localNumber = normalizeLocalNumber(req.body.number)
  const code = String(req.body.code || '')
  const pending = localNumber && await adminOtpModel.findOne({ phone: localNumber })

  if (!pending || pending.expiresAt.getTime() < Date.now() || pending.attempts >= 5) {
    return res.status(401).json({ success: false, message: 'Invalid or expired code' })
  }

  pending.attempts += 1
  if (!hashesMatch(pending.hash, codeHash(code))) {
    await pending.save()
    return res.status(401).json({ success: false, message: 'Invalid or expired code' })
  }

  await pending.deleteOne()
  const token = jwt.sign({ role: 'admin', phone: localNumber }, process.env.JWT_SECRET, { expiresIn: '8h' })
  res.cookie('adminToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
    maxAge: 8 * 60 * 60 * 1000,
  })

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
  return res.json({ success: true, settings: settings || { accent: '#e94f70', paper: '#f7f3f1', ink: '#171516', looks: [], lookbookManaged: false, catalogManaged: false } })
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
  const uploaded = await cloudinary.uploader.upload(image, { resource_type: 'image', folder: 'berrys-closet/lookbook' })
  const settings = await siteSettingsModel.findOneAndUpdate({}, { $push: { looks: { title: title.trim(), description: description || '', image: uploaded.secure_url } }, $set: { lookbookManaged: true } }, { new: true, upsert: true, setDefaultsOnInsert: true })
  return res.json({ success: true, settings })
}

export const deleteLook = async (req, res) => {
  const settings = await siteSettingsModel.findOne()
  const look = settings?.looks.id(req.body.lookId)
  if (!look) return res.status(404).json({ success: false, message: 'Photo not found' })
  const uploadedPath = new URL(look.image).pathname.split('/upload/')[1] || ''
  const publicId = uploadedPath.replace(/^v\d+\//, '').replace(/\.[^.]+$/, '')
  settings.looks.id(req.body.lookId).deleteOne()
  settings.lookbookManaged = true
  await settings.save()
  if (new URL(look.image).hostname === 'res.cloudinary.com' && publicId) {
    await cloudinary.uploader.destroy(publicId, { resource_type: 'image' })
  }
  return res.json({ success: true, settings })
}

export const deleteAllLooks = async (req, res) => {
  let settings = await siteSettingsModel.findOne()
  if (!settings) settings = await siteSettingsModel.create({})
  const publicIds = settings.looks.map(look => {
    if (!look.image.includes('res.cloudinary.com')) return null
    const uploadedPath = new URL(look.image).pathname.split('/upload/')[1] || ''
    return uploadedPath.replace(/^v\d+\//, '').replace(/\.[^.]+$/, '')
  }).filter(Boolean)
  settings.looks = []
  settings.lookbookManaged = true
  await settings.save()
  await Promise.all(publicIds.map(publicId => cloudinary.uploader.destroy(publicId, { resource_type: 'image' })))
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
  const products = await productModel.find().select('image').lean()
  const publicIds = products.map(product => {
    if (!product.image?.includes('res.cloudinary.com')) return null
    const uploadedPath = new URL(product.image).pathname.split('/upload/')[1] || ''
    return uploadedPath.replace(/^v\d+\//, '').replace(/\.[^.]+$/, '')
  }).filter(Boolean)
  await productModel.deleteMany({})
  await siteSettingsModel.findOneAndUpdate({}, { $set: { catalogManaged: true } }, { new: true, upsert: true, setDefaultsOnInsert: true })
  await Promise.all(publicIds.map(publicId => cloudinary.uploader.destroy(publicId, { resource_type: 'image' })))
  return res.json({ success: true })
}
