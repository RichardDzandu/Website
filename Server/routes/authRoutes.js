import express from "express";
import { register, login, logout, sendVerifyOtp, verifyEmail, isAuthenticated, sendPasswordResetLink, resetPassword } from "../controllers/authController.js";
import userAuth from "../middleware/userAuth.js";
import { authLimiter } from "../config/rateLimiters.js";

const authRouter = express.Router();

authRouter.post('/register', authLimiter, register);
authRouter.post('/signup', authLimiter, register);
authRouter.post('/login', authLimiter, login);
authRouter.post('/logout', logout);
authRouter.post('/send-verify-otp', userAuth, sendVerifyOtp);
authRouter.put('/verify-account', userAuth, verifyEmail);
authRouter.get('/is-auth', userAuth, isAuthenticated);
authRouter.post('/request-password-reset', authLimiter, sendPasswordResetLink);
authRouter.put('/reset-password', authLimiter, resetPassword);

export default authRouter;
// HTTP routes for customer registration, login, verification, and password recovery.