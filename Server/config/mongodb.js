import mongoose from "mongoose";

const connectDB = async () => {
    const uri = process.env.MONGODB_URI?.trim();

    if (!uri) {
        throw new Error('MONGODB_URI is required');
    }

    try {
        await mongoose.connect(uri, {
            dbName: process.env.MONGODB_DB_NAME,
        });
        console.log('Database Connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        throw error;
    }
};

export default connectDB;