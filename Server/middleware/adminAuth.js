import jwt from 'jsonwebtoken'

const adminAuth = (req, res, next) => {
  const { adminToken } = req.cookies

  if (!adminToken) {
    return res.status(401).json({ success: false, message: 'Admin authentication required' })
  }

  try {
    const decoded = jwt.verify(adminToken, process.env.JWT_SECRET)
    if (decoded.role !== 'admin') throw new Error('Invalid admin token')
    req.adminPhone = decoded.phone
    next()
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Admin session expired' })
  }
}

export default adminAuth
