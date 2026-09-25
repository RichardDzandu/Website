import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import orderModel from '../models/orderModel.js'
import orderAModel from '../models/orderAModel.js'
import consultModel from '../models/consultationModel.js'
import adminOtpModel from '../models/adminOtpModel.js'
import { sendSms, toGhanaNumber } from '../config/sms.js'

const allowedNumbers = new Set(
  (process.env.ADMIN_PHONE_NUMBERS || '0535331890,0206914685')
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
