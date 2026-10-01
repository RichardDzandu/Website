import mongoose from 'mongoose'

const siteSettingsSchema = new mongoose.Schema({
  accent: { type: String, default: '#e94f70' },
  paper: { type: String, default: '#f7f3f1' },
  ink: { type: String, default: '#171516' },
  lookbookManaged: { type: Boolean, default: false },
  catalogManaged: { type: Boolean, default: false },
  looks: [{
    title: { type: String, required: true },
    description: { type: String, default: '' },
    image: { type: String, required: true },
  }],
})

export default mongoose.models.siteSettings || mongoose.model('siteSettings', siteSettingsSchema)