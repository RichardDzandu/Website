import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    number: {type: String, required: true},
    verifyOtp: {type: String, default: ''},
    verifyOtpExpireAt: {type: Number, default: 0},
    isAccountVerified: {type: Boolean, default: false},
    passwordResetTokenHash: {type: String, default: ''},
    passwordResetTokenExpiresAt: {type: Date, default: null},
    isAdmin: {type: Boolean, default: false},
})

const userModel = mongoose.models.user1 || mongoose.model('user1', userShema);

export default userModel;