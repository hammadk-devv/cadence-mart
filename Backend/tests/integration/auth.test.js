import { describe, test, expect, vi, beforeEach } from "vitest";
import request from "supertest";
import bcrypt from "bcrypt";

// Mock DB and Cloudinary connections
vi.mock("../../config/mongodb.js", () => ({
  default: vi.fn(),
}));
vi.mock("../../config/cloudinary.js", () => ({
  default: vi.fn(),
}));

// Mock repositories to isolate tests
import userRepository from "../../repositories/userRepository.js";
vi.mock("../../repositories/userRepository.js", () => {
  return {
    default: {
      findByEmail: vi.fn(),
      create: vi.fn(),
      findById: vi.fn(),
    },
  };
});

import app from "../../server.js";

describe("User Authentication API Integration Tests", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("POST /api/user/register should fail Zod validation with invalid email", async () => {
    const response = await request(app)
      .post("/api/user/register")
      .send({
        name: "Test User",
        email: "not-an-email",
        password: "short",
      })
      .expect(400);

    expect(response.body.success).toBe(false);
    expect(response.body.error.code).toBe("VALIDATION_ERROR");
  });

  test("POST /api/user/register should succeed with valid inputs", async () => {
    userRepository.findByEmail.mockResolvedValue(null);
    userRepository.create.mockResolvedValue({
      _id: "user_12345",
      name: "Valid User",
      email: "valid@example.com",
    });

    const response = await request(app)
      .post("/api/user/register")
      .send({
        name: "Valid User",
        email: "valid@example.com",
        password: "validsecurepassword123",
      })
      .expect(201);

    expect(response.body.success).toBe(true);
    expect(response.body).toHaveProperty("token");
  });

  test("POST /api/user/login should authenticate user with valid credentials", async () => {
    const hashedMockPassword = await bcrypt.hash("validpassword123", 10);
    userRepository.findByEmail.mockResolvedValue({
      _id: "user_123",
      name: "Login User",
      email: "login@example.com",
      password: hashedMockPassword,
    });

    const response = await request(app)
      .post("/api/user/login")
      .send({
        email: "login@example.com",
        password: "validpassword123",
      })
      .expect(200);

    expect(response.body.success).toBe(true);
    expect(response.body).toHaveProperty("token");
  });

  test("POST /api/user/login should fail authentication with invalid credentials", async () => {
    userRepository.findByEmail.mockResolvedValue(null);

    const response = await request(app)
      .post("/api/user/login")
      .send({
        email: "notfound@example.com",
        password: "anypassword",
      })
      .expect(401);

    expect(response.body.success).toBe(false);
    expect(response.body.error.code).toBe("AUTHENTICATION_ERROR");
  });
});
