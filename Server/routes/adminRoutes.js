import express from 'express'
import { adminLogout, getAdminDashboard, requestAdminCode, verifyAdminCode } from '../controllers/adminController.js'
import adminAuth from '../middleware/adminAuth.js'
import { adminLimiter } from '../config/rateLimiters.js'

const adminRouter = express.Router()

adminRouter.post('/request-code', adminLimiter, requestAdminCode)
adminRouter.post('/verify-code', adminLimiter, verifyAdminCode)
adminRouter.post('/logout', adminLogout)
adminRouter.get('/dashboard', adminAuth, getAdminDashboard)

export default adminRouter
