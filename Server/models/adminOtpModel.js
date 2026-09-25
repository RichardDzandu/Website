import mongoose from 'mongoose'

const adminOtpSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  hash: { type: String, required: true },
  expiresAt: { type: Date, required: true, index: { expires: 0 } },
  attempts: { type: Number, default: 0 },
  lastSentAt: { type: Date, required: true },
}, { timestamps: true })

const adminOtpModel = mongoose.models.adminOtp || mongoose.model('adminOtp', adminOtpSchema)

export default adminOtpModel
