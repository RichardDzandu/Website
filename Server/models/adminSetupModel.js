import mongoose from 'mongoose'

const adminSetupSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  state: { type: String, enum: ['pending', 'complete'], required: true },
  claimId: { type: String, default: '' },
  expiresAt: { type: Date, default: null },
}, { versionKey: false })

const adminSetupModel = mongoose.models.adminSetup || mongoose.model('adminSetup', adminSetupSchema)

export default adminSetupModel
