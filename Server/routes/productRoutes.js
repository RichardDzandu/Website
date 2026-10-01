import express from 'express';
import { deleteProduct, getProductData } from '../controllers/productController.js';
import { createProduct } from '../controllers/productController.js';
import { updateProduct } from '../controllers/productController.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

productRouter.get('/data', getProductData);
productRouter.post('/create-product', adminAuth, createProduct);
productRouter.put('/update-product', adminAuth, updateProduct);
productRouter.post('/delete-product', adminAuth, deleteProduct);

export default productRouter;