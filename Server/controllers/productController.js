import productModel from "../models/productsModel.js";
import cloudinary from "../lib/cloudinary.js";
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

    let imageUrl, videoUrl;

    // Upload image
    if (image) {
      const uploadImg = await cloudinary.uploader.upload(image, { resource_type: 'image' });
      imageUrl = uploadImg.secure_url;
    }

    // Upload video
    if (video) {
      const uploadVid = await cloudinary.uploader.upload(video, { resource_type: 'video' });
      videoUrl = uploadVid.secure_url;
    }

    // Create product
    const product = new productModel({ name, price, quantity, description, brand, color, image: imageUrl, video: videoUrl, topSell, featured, discount, category, slug, tag });
    await product.save();
    await siteSettingsModel.findOneAndUpdate({}, { $set: { catalogManaged: true } }, { upsert: true, setDefaultsOnInsert: true });

    return res.json({ success: true, message: "Product successfully added" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
}

export const updateProduct = async (req, res) => {
  try {
    const { productId, productImage, ...fields } = req.body;
    const product = await productModel.findById(productId);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    if (productImage) {
      const uploadImg = await cloudinary.uploader.upload(productImage, { resource_type: 'image' });
      const oldImage = product.image;
      product.image = uploadImg.secure_url;
      if (oldImage?.includes('res.cloudinary.com')) {
        const uploadedPath = new URL(oldImage).pathname.split('/upload/')[1] || '';
        const publicId = uploadedPath.replace(/^v\d+\//, '').replace(/\.[^.]+$/, '');
        if (publicId) await cloudinary.uploader.destroy(publicId, { resource_type: 'image' });
      }
    }
    for (const field of ['name', 'price', 'quantity', 'description', 'category', 'slug', 'tag']) {
      if (fields[field] !== undefined) product[field] = fields[field];
    }
    await product.save();
    return res.json({ success: true, product });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: 'Failed to update product' });
  }
}

export const deleteProduct = async (req, res) => {

    const { productId } = req.body

  try {
    const product = await productModel.findByIdAndDelete(productId);
    await siteSettingsModel.findOneAndUpdate({}, { $set: { catalogManaged: true } }, { upsert: true, setDefaultsOnInsert: true });
    if (product?.image?.includes('res.cloudinary.com')) {
      const uploadedPath = new URL(product.image).pathname.split('/upload/')[1] || '';
      const publicId = uploadedPath.replace(/^v\d+\//, '').replace(/\.[^.]+$/, '');
      if (publicId) await cloudinary.uploader.destroy(publicId, { resource_type: 'image' });
    }
    return res.json({ success: true, message: "Product Deleted!" });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: 'Failed to delete product' });
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