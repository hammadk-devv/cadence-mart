import { describe, test, expect, vi } from "vitest";
import request from "supertest";

// Mock DB and Cloudinary connections to avoid actual execution
vi.mock("../../config/mongodb.js", () => ({
  default: vi.fn(),
}));
vi.mock("../../config/cloudinary.js", () => ({
  default: vi.fn(),
}));

import app from "../../server.js";

describe("Health API Integration Tests", () => {
  test("GET /health should return 200 with standard health stats", async () => {
    const response = await request(app).get("/health").expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        status: "OK",
        uptime: expect.any(Number),
        environment: "test",
        version: expect.any(String),
        timestamp: expect.any(Number),
      })
    );
  });
});
