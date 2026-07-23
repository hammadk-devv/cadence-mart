import { describe, test, expect } from "vitest";
import { AppError } from "../../errors/AppError.js";
import { ValidationError, AuthenticationError, NotFoundError } from "../../errors/SubErrors.js";

describe("Custom Errors Unit Tests", () => {
  test("AppError base should default status code, operational flag, and format status name", () => {
    const error = new AppError("Something went wrong", 500);

    expect(error.message).toBe("Something went wrong");
    expect(error.statusCode).toBe(500);
    expect(error.status).toBe("error");
    expect(error.isOperational).toBe(true);
  });

  test("ValidationError should configure HTTP status 400 and code VALIDATION_ERROR", () => {
    const error = new ValidationError("Invalid inputs", { field: "email required" });

    expect(error.statusCode).toBe(400);
    expect(error.status).toBe("fail");
    expect(error.code).toBe("VALIDATION_ERROR");
    expect(error.details).toEqual({ field: "email required" });
  });

  test("AuthenticationError should configure HTTP status 401 and code AUTHENTICATION_ERROR", () => {
    const error = new AuthenticationError("User is not registered");

    expect(error.statusCode).toBe(401);
    expect(error.code).toBe("AUTHENTICATION_ERROR");
  });

  test("NotFoundError should configure HTTP status 404 and code NOT_FOUND", () => {
    const error = new NotFoundError("Resource not found");

    expect(error.statusCode).toBe(404);
    expect(error.code).toBe("NOT_FOUND");
  });
});
