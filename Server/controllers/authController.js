import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createHash, randomUUID } from 'node:crypto';
import userModel from '../models/userModel.js';
import transporter from '../config/nodemailer.js';
import { EMAIL_VERIFY_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from '../config/emailTemplates.js';

const passwordResetResponse = {
    success: true,
    message: 'If an account with that email exists, a password reset link will be sent.',
};
const passwordResetTokenHash = token => createHash('sha256').update(token).digest('hex');

//Register user
export const register = async (req, res) => {
    const body = req.body || {};
    const { name, password, number } = body;
    const email = String(body.email || '').trim().toLowerCase();

    console.info('[auth.signup] request fields', Object.keys(body).sort());

    if (typeof name !== 'string' || !name.trim() || !email || !password || typeof number !== 'string' || !number.trim()) {
        return res.status(400).json({ success: false, message: 'Missing Details' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ success: false, message: 'Enter a valid email address' });
    }
    if (String(password).length < 8) {
        return res.status(400).json({ success: false, message: 'Password must be at least 8 characters' });
    }
    if (!process.env.JWT_SECRET) {
        return res.status(503).json({ success: false, message: 'Authentication is not configured' });
    }

    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                code: 'ACCOUNT_EXISTS',
                message: 'An account with this email already exists. Log in or reset your password.',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({ name: name.trim(), email, number: number.trim(), password: hashedPassword });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Welcome to toKenPop',
            html: WELCOME_EMAIL_TEMPLATE.replace('{{user.name}}', user.name)
        };
        try {
            await transporter.sendMail(mailOptions);
        } catch (mailError) {
            console.error('Welcome email failed:', mailError.message);
        }

        return res.status(201).json({ success: true });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                code: 'ACCOUNT_EXISTS',
                message: 'An account with this email already exists. Log in or reset your password.',
            });
        }
        console.error('[auth.signup] failed', error.name);
        return res.status(500).json({ success: false, message: 'Could not create account' });
    }
};

//Log in user
export const login = async (req, res) => {
    const email = String(req.body.email || '').trim().toLowerCase();
    const { password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and Password required' });
    }
    if (!process.env.JWT_SECRET) {
        return res.status(503).json({ success: false, message: 'Authentication is not configured' });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ success: false, message: 'Incorrect Password Or Username' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return res.json({ success: true, role: 'customer' });
    } catch (error) {
        console.error('[auth.login] failed', error.name);
        return res.status(500).json({ success: false, message: 'Could not sign in' });
    }
};

//Log out user
export const logout = async (req, res)=>{
    try{
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })

        return res.json({success: true, message: 'Logged Out'});

    }catch(error){
        res.json({success: false, message: error.message});
    }
}

//Send verification OTP to user's mail
export const sendVerifyOtp = async (req, res)=>{
    try{

        const {userId} = req.body;

        const user = await userModel.findById(userId);

        if(user.isAccountVerified){
            return res.json({success: false, message: "Account Already Verified"});
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));

        user.verifyOtp = otp;
        user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000;

        await user.save();

        const mailOption = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Account Verification OTP',
            html: EMAIL_VERIFY_TEMPLATE.replace("{{otp}}", otp).replace("{{email}}", user.email)
        }

        await transporter.sendMail(mailOption);

        res.json({success: true, message: 'Verification OTP sent on Email'});

    }catch(error){
        res.json({success: false, message: error.message});
    }
} 

//Verify user
export const verifyEmail = async (req, res)=>{

    const { otp, userId } = req.body;

    if(!userId || !otp){
        return res.json({success: false, message: 'Missing Details'});
    }

    try{
        const user = await userModel.findById(userId);

        if(!user){
            return res.json({success: false, message: 'User not found'});
        }

        if(user.verifyOtp === '' || user.verifyOtp !== otp){
            return res.json({success: false, message: 'Invalid OTP'});
        }

        if(user.verifyOtpExpireAt < Date.now()){
            return res.json({success: false, message: 'OTP expired'});
        }

        user.isAccountVerified = true;
        user.verifyOtp = '';
        user.verifyOtpExpireAt = 0;

        await user.save();
        return res.json({success: true, message: 'Email Verified'});

    }catch(error){
        return res.json({success: false, message: error.message});
    }
}

//Check if user is authenticated
export const isAuthenticated = async (req, res)=>{

    try {
        res.json({ success: true, message: 'Loggedin' });
    } catch (error) {
        return res.json({success: false, message: error.message});
    }
}

// Send a short-lived, single-use password reset link.
export const sendPasswordResetLink = async (req, res) => {
    const email = String(req.body?.email || '').trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ success: false, message: 'Enter a valid email address' });
    }
    if (!process.env.JWT_SECRET || !process.env.FRONTEND_URL) {
        return res.status(503).json({ success: false, message: 'Password reset is not configured' });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user) return res.json(passwordResetResponse);

        const token = jwt.sign(
            { sub: user._id.toString(), purpose: 'password-reset' },
            process.env.JWT_SECRET,
            { expiresIn: '15m', jwtid: randomUUID() },
        );
        const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
        user.passwordResetTokenHash = passwordResetTokenHash(token);
        user.passwordResetTokenExpiresAt = expiresAt;
        await user.save();

        const resetUrl = new URL('/reset-password', process.env.FRONTEND_URL);
        resetUrl.searchParams.set('token', token);
        try {
            await transporter.sendMail({
                from: process.env.EMAIL_FROM || process.env.SENDER_EMAIL,
                to: user.email,
                subject: 'Reset your Berry’s Closet password',
                text: `Use this link within 15 minutes to reset your password: ${resetUrl.href}`,
                html: `<p>We received a request to reset your Berry’s Closet password.</p><p><a href="${resetUrl.href}">Reset your password</a></p><p>This link expires in 15 minutes. If you did not request a reset, you can ignore this email.</p>`,
            });
        } catch (mailError) {
            user.passwordResetTokenHash = '';
            user.passwordResetTokenExpiresAt = null;
            await user.save();
            console.error('[auth.password-reset] email delivery failed', mailError.name);
            return res.status(503).json({ success: false, message: 'Could not send password reset email' });
        }

        return res.json(passwordResetResponse);
    } catch (error) {
        console.error('[auth.password-reset] request failed', error.name);
        return res.status(500).json({ success: false, message: 'Could not request password reset' });
    }
};

export const resetPassword = async (req, res) => {
    const { token, newPassword } = req.body || {};
    if (typeof token !== 'string' || !token || typeof newPassword !== 'string') {
        return res.status(400).json({ success: false, message: 'Reset link and new password are required' });
    }
    if (newPassword.length < 8) {
        return res.status(400).json({ success: false, message: 'Password must be at least 8 characters' });
    }
    if (!process.env.JWT_SECRET) {
        return res.status(503).json({ success: false, message: 'Password reset is not configured' });
    }

    try {
        const claims = jwt.verify(token, process.env.JWT_SECRET);
        if (claims.purpose !== 'password-reset' || typeof claims.sub !== 'string') {
            return res.status(400).json({ success: false, message: 'Invalid or expired reset link' });
        }

        const user = await userModel.findById(claims.sub);
        const tokenHash = passwordResetTokenHash(token);
        if (
            !user ||
            !user.passwordResetTokenHash ||
            user.passwordResetTokenHash !== tokenHash ||
            !user.passwordResetTokenExpiresAt ||
            user.passwordResetTokenExpiresAt.getTime() <= Date.now()
        ) {
            return res.status(400).json({ success: false, message: 'Invalid or expired reset link' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const updated = await userModel.updateOne(
            {
                _id: user._id,
                passwordResetTokenHash: tokenHash,
                passwordResetTokenExpiresAt: { $gt: new Date() },
            },
            {
                $set: { password: hashedPassword },
                $unset: { passwordResetTokenHash: 1, passwordResetTokenExpiresAt: 1 },
            },
        );
        if (updated.modifiedCount !== 1) {
            return res.status(400).json({ success: false, message: 'Invalid or expired reset link' });
        }

        return res.json({ success: true, message: 'Password successfully updated' });
    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return res.status(400).json({ success: false, message: 'Invalid or expired reset link' });
        }
        console.error('[auth.password-reset] completion failed', error.name);
        return res.status(500).json({ success: false, message: 'Could not reset password' });
    }
};
// Customer registration, login, logout, verification, and password recovery operations.