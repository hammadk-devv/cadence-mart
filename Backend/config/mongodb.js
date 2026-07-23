import mongoose from "mongoose";
import { databaseConfig } from "./index.js";
import { seedInitialProducts } from "./seedProducts.js";

const connectDB = async () => {
  try {
    if (!databaseConfig.url) {
      throw new Error("MONGODB_URL environment variable is missing.");
    }

    mongoose.connection.on("connected", () => {
      console.log(" MongoDB Connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error(" MongoDB Connection Error:", err.message);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDB Disconnected");
    });

    await mongoose.connect(databaseConfig.url, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("Successfully connected to MongoDB Atlas");

    await seedInitialProducts();
  } catch (error) {
    console.error("Failed to connect to MongoDB:");
    console.error(error.message);
  }
};

export default connectDB;
