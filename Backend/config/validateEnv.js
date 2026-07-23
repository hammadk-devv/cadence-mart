import { databaseConfig, jwtConfig, adminConfig } from "./index.js";

export const validateEnv = () => {
  if (process.env.VITEST) return;

  const missing = [];

  if (!databaseConfig.url) missing.push("MONGODB_URL");
  if (!jwtConfig.secret) missing.push("JWT_SECRET / JWT_SECRETE");
  if (!adminConfig.email) missing.push("ADMIN_EMAIL");
  if (!adminConfig.password) missing.push("ADMIN_PASSWORD");

  if (missing.length > 0) {
    console.error("FATAL CONFIGURATION ERROR: Missing required environment variables:");
    missing.forEach((envVar) => console.error(`  - ${envVar}`));
    process.exit(1);
  }
};