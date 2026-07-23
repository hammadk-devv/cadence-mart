import { describe, test, expect } from "vitest";
import {
  databaseConfig,
  jwtConfig,
  cloudinaryConfig,
  adminConfig,
  securityConfig,
} from "../../config/index.js";

describe("Centralized Configuration Unit Tests", () => {
  test("should load database url parameter object", () => {
    expect(databaseConfig).toHaveProperty("url");
  });

  test("should load JWT configurations", () => {
    expect(jwtConfig).toHaveProperty("secret");
    expect(jwtConfig).toHaveProperty("expiresIn");
    expect(jwtConfig.issuer).toBe("cadence-mart");
    expect(jwtConfig.audience).toBe("cadence-mart-client");
  });

  test("should load Cloudinary integration config", () => {
    expect(cloudinaryConfig).toHaveProperty("cloudName");
    expect(cloudinaryConfig).toHaveProperty("apiKey");
    expect(cloudinaryConfig).toHaveProperty("apiSecret");
  });

  test("should load Administrator Credentials", () => {
    expect(adminConfig).toHaveProperty("email");
    expect(adminConfig).toHaveProperty("password");
  });

  test("should load default Allowed Origins array", () => {
    expect(Array.isArray(securityConfig.allowedOrigins)).toBe(true);
    expect(securityConfig.allowedOrigins.length).toBeGreaterThan(0);
  });
});
