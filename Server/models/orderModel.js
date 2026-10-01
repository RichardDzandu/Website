import mongoose from "mongoose";
import crypto from "crypto";

const ordersShema = new mongoose.Schema({
    clientName: {type: String, required: true},
    notes: {type: String},
    date: {type: String, required: true},
    time: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    serviceName:{type: String, required: true},
    servicePrice:{type: Number, required: true},
    status: {type: String, default: "order made"},
    trackingId: {type: String, default: () => `BC-${crypto.randomBytes(4).toString('hex').toUpperCase()}`},
},{timestamps: true},)

const orderModel = mongoose.models.worders || mongoose.model('worders', ordersShema);

export default orderModel;