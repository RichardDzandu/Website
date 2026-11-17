import rateLimit from 'express-rate-limit'

const apiLimit = (max, message) => rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: max,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { success: false, message },
})

export const authLimiter = apiLimit(20, 'Too many authentication attempts. Try again later.')
export const adminLimiter = apiLimit(10, 'Too many admin access attempts. Try again later.')
// Shared request-rate limits for authentication and public API endpoints.
