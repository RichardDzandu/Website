import productModel from "../models/productsModel.js";
import { removeUploadedFile, saveDataUrl, saveImageDataUrl } from "../lib/localUploads.js";
import siteSettingsModel from "../models/siteSettingsModel.js";

export const createProduct = async (req, res) => {
  try {
    const { name, price, image, video, quantity, description, brand, color, topSell, featured, discount, category, slug, tag } = req.body;

    // Validate required fields
    if (!name || !price || !quantity) {
      return res.status(400).json({ success: false, message: 'Missing Required Details' });
    }

    // Validate data types
    if (typeof price !== 'number' || price < 0) {
      return res.status(400).json({ success: false, message: 'Invalid price' });
    }

    if (typeof quantity !== 'number' || quantity < 1 || quantity % 1 !== 0) {
      return res.status(400).json({ success: false, message: 'Invalid quantity' });
    }

    if (!image) return res.status(400).json({ success: false, message: 'Product image is required' });
    const imageUrl = await saveImageDataUrl(image);
    let videoUrl;
    let productSaved = false;
    try {
      if (video) videoUrl = await saveDataUrl(video);
      const product = new productModel({ name, price, quantity, description, brand, color, image: imageUrl, video: videoUrl, topSell, featured, discount, category, slug, tag });
      await product.save();
      productSaved = true;
      await siteSettingsModel.findOneAndUpdate({}, { $set: { catalogManaged: true } }, { upsert: true, setDefaultsOnInsert: true });
      return res.json({ success: true, message: "Product successfully added" });
    } catch (error) {
      if (!productSaved) {
        await Promise.all([removeUploadedFile(imageUrl), removeUploadedFile(videoUrl)]);
      }
      throw error;
    }
  } catch (error) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ success: false, message: error.message });
  }
}

export const updateProduct = async (req, res) => {
  let uploadedImage;
  try {
    const { productId, productImage, ...fields } = req.body;
    const product = await productModel.findById(productId);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    const oldImage = product.image;
    if (productImage) {
      uploadedImage = await saveImageDataUrl(productImage);
      product.image = uploadedImage;
    }
    for (const field of ['name', 'price', 'quantity', 'description', 'category', 'slug', 'tag']) {
      if (fields[field] !== undefined) product[field] = fields[field];
    }
    await product.save();
    if (uploadedImage) {
      try {
        await removeUploadedFile(oldImage);
      } catch (error) {
        console.error('Could not remove replaced product photo:', error);
      }
    }
    return res.json({ success: true, product });
  } catch (error) {
    if (uploadedImage) {
      try {
        await removeUploadedFile(uploadedImage);
      } catch (cleanupError) {
        console.error('Could not clean up failed product photo upload:', cleanupError);
      }
    }
    console.error(error);
    return res.status(error.statusCode || 500).json({ success: false, message: error.message || 'Failed to update product' });
  }
}

export const deleteProduct = async (req, res) => {

    const { productId } = req.body

  try {
    const product = await productModel.findByIdAndDelete(productId);
    await siteSettingsModel.findOneAndUpdate({}, { $set: { catalogManaged: true } }, { upsert: true, setDefaultsOnInsert: true });
    if (product) await Promise.all([removeUploadedFile(product.image), removeUploadedFile(product.video)]);
    return res.json({ success: true, message: "Product Deleted!" });
  } catch (error) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ success: false, message: 'Failed to delete product' });
  }
}

export const getProductData = async (req, res) => {
  try {
    const products = await productModel.find();
    return res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: 'Failed to get products' });
  }
}