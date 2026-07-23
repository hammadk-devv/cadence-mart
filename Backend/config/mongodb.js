import mongoose from "mongoose";
import { databaseConfig } from "./index.js";
import { seedInitialProducts } from "./seedProducts.js";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB Connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error(`MongoDB connection error: ${err.message}`);
    });

    const url = databaseConfig.url || "mongodb://localhost:27017";
    const connectionString = url.endsWith("/e-commerce") ? url : `${url}/e-commerce`;

    await mongoose.connect(connectionString);
    await seedInitialProducts();
  } catch (error) {
    console.error(`Failed to connect to database: ${error.message}`);
  }
};

export default connectDB;
