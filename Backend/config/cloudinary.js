import { v2 as cloudinary } from "cloudinary";
import { cloudinaryConfig } from "./index.js";

const connectCloudinary = () => {
  const { cloudName, apiKey, apiSecret } = cloudinaryConfig;

  // Skip Cloudinary configuration if credentials are not provided.
  if (!cloudName || !apiKey || !apiSecret) {
    console.warn("Cloudinary is not configured. Image upload functionality is disabled.");
    return;
  }

  try {
    cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
      secure: true,
    });

    console.log("Cloudinary configured successfully.");
  } catch (error) {
    console.error(`Failed to configure Cloudinary: ${error.message}`);
  }
};

export default connectCloudinary;
