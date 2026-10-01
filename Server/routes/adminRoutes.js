import express from 'express'
import { addLook, adminLogout, deleteAllLooks, deleteAllProducts, deleteLook, getAdminDashboard, getProductsForAdmin, getPublicSiteSettings, getSiteSettings, getTrackedOrder, initializeStorefront, requestAdminCode, updateSiteSettings, updateTrackedOrder, verifyAdminCode } from '../controllers/adminController.js'
import adminAuth from '../middleware/adminAuth.js'
import { adminLimiter } from '../config/rateLimiters.js'

const adminRouter = express.Router()

adminRouter.get('/public-settings', getPublicSiteSettings)
adminRouter.get('/track/:trackingId', getTrackedOrder)
adminRouter.get('/session', adminAuth, (req, res) => res.json({ success: true, role: 'admin' }))
adminRouter.post('/request-code', adminLimiter, requestAdminCode)
adminRouter.post('/verify-code', adminLimiter, verifyAdminCode)
adminRouter.post('/logout', adminLogout)
adminRouter.get('/dashboard', adminAuth, getAdminDashboard)
adminRouter.post('/storefront/initialize', adminAuth, initializeStorefront)
adminRouter.get('/products', adminAuth, getProductsForAdmin)
adminRouter.get('/site-settings', adminAuth, getSiteSettings)
adminRouter.put('/site-settings', adminAuth, updateSiteSettings)
adminRouter.post('/looks', adminAuth, addLook)
adminRouter.delete('/looks', adminAuth, deleteLook)
adminRouter.delete('/looks/clear', adminAuth, deleteAllLooks)
adminRouter.delete('/products/clear', adminAuth, deleteAllProducts)
adminRouter.patch('/tracking', adminAuth, updateTrackedOrder)

export default adminRouter
