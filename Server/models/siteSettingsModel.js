import mongoose from 'mongoose'

const siteSettingsSchema = new mongoose.Schema({
  accent: { type: String, default: '#b49a6a' },
  paper: { type: String, default: '#f7f6f3' },
  ink: { type: String, default: '#171715' },
  lookbookManaged: { type: Boolean, default: false },
  catalogManaged: { type: Boolean, default: false },
  looks: [{
    title: { type: String, required: true },
    description: { type: String, default: '' },
    image: { type: String, required: true },
  }],
})

export default mongoose.models.siteSettings || mongoose.model('siteSettings', siteSettingsSchema)
// Mongoose model for published storefront colors and lookbook settings.