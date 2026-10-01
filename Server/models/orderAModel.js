import mongoose from "mongoose";
import crypto from "crypto";

const ordersShema = new mongoose.Schema({
    customerName: {type: String, required: true},
    itemName: {type: String, required: true},
    address: {type: String, required: true},
    price: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    quantity:{type: Number, required: true},
    total:{type: Number, required: true},
    paymentRef:{type: String, required: true},
    status: {type: String, default: "order made"},
    trackingId: {type: String, default: () => `BC-${crypto.randomBytes(4).toString('hex').toUpperCase()}`},
},{timestamps: true},)

const orderAModel = mongoose.models.wordersA || mongoose.model('wordersA', ordersShema);

export default orderAModel;