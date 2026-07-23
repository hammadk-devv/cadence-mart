import dotenv from "dotenv";
dotenv.config();

export const databaseConfig = {
  url: process.env.MONGODB_URL,
};

export const jwtConfig = {
  secret: process.env.JWT_SECRET || process.env.JWT_SECRETE || "test_jwt_secret_key_12345_secure",
  expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  issuer: process.env.JWT_ISSUER || "cadence-mart",
  audience: process.env.JWT_AUDIENCE || "cadence-mart-client",
};

export const cloudinaryConfig = {
  cloudName: process.env.CLOUDINARY_NAME,
  apiKey: process.env.CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET_KEY || process.env.CLOUDINARY_SECREAT_KEY,
};

export const adminConfig = {
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
};

export const securityConfig = {
  allowedOrigins: (
    process.env.ALLOWED_ORIGINS || "http://localhost:5173,http://localhost:5174"
  ).split(","),
  nodeEnv: process.env.NODE_ENV || "development",
};
