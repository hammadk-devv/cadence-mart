import { describe, test, expect, vi } from "vitest";
import { successResponse, createdResponse, deletedResponse } from "../../utils/responseHelper.js";

describe("Response Helper Unit Tests", () => {
  test("successResponse should spread data onto root level for backward compatibility", () => {
    const jsonMock = vi.fn();
    const resMock = {
      status: vi.fn().mockImplementation(() => ({ json: jsonMock })),
    };

    successResponse(resMock, "Success message", { token: "secret_token_123" });

    expect(resMock.status).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        message: "Success message",
        data: { token: "secret_token_123" },
        token: "secret_token_123", // root-spreading check
      })
    );
  });

  test("createdResponse should return HTTP status 201", () => {
    const jsonMock = vi.fn();
    const resMock = {
      status: vi.fn().mockImplementation(() => ({ json: jsonMock })),
    };

    createdResponse(resMock, "Item Created", { id: "123" });

    expect(resMock.status).toHaveBeenCalledWith(201);
    expect(jsonMock).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        message: "Item Created",
        id: "123",
      })
    );
  });

  test("deletedResponse should return empty data block and status 200", () => {
    const jsonMock = vi.fn();
    const resMock = {
      status: vi.fn().mockImplementation(() => ({ json: jsonMock })),
    };

    deletedResponse(resMock, "Item Removed");

    expect(resMock.status).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        message: "Item Removed",
        data: {},
      })
    );
  });
});
