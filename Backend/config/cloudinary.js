import { v2 as cloudinary } from "cloudinary";
import { cloudinaryConfig } from "./index.js";

const connectCloudinary = () => {
  try {
    cloudinary.config({
      cloud_name: cloudinaryConfig.cloudName,
      api_key: cloudinaryConfig.apiKey,
      api_secret: cloudinaryConfig.apiSecret,
    });
  } catch (error) {
    console.error(`Failed to configure Cloudinary: ${error.message}`);
  }
};
export default connectCloudinary;
