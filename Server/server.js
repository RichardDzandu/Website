import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import http from "http";
import { fileURLToPath } from "node:url";
import productRouter from "./routes/productRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import adminRouter from "./routes/adminRoutes.js";

//Create Express app and HTTP  server
const app = express();
const server = http.createServer(app);
const uploadsDirectory = fileURLToPath(new URL('./uploads/', import.meta.url));

//Middleware setup
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
const allowedOrigins = new Set([
  'https://sojamart.vercel.app',
  'http://localhost:5175',
  'http://localhost:5174',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://192.168.1.169:5173',
  ...(process.env.CLIENT_URLS || '').split(',').map(origin => origin.trim()).filter(Boolean),
]);
app.use(cors({
  origin: (origin, callback) => callback(null, !origin || allowedOrigins.has(origin)),
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'token']
}));
app.use('/uploads', express.static(uploadsDirectory, {
  dotfiles: 'deny',
  fallthrough: false,
  index: false,
  setHeaders: response => response.setHeader('X-Content-Type-Options', 'nosniff'),
}));

// API Endpoints
app.use('/api/status', (req, res) => res.send("API Working"));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/order', orderRouter);
app.use('/api/admin', adminRouter);

await connectDB();

if(process.env.NODE_ENV !== "production"){
    const PORT = process.env.PORT || 5004;
    server.listen(PORT, ()=> console.log("Server Started on PORT: " + PORT));
}

//Export server for vercel
export default server;