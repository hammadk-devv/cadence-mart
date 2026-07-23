import adminService from "../services/adminService.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { successResponse, createdResponse } from "../utils/responseHelper.js";

const adminRegister = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const result = await adminService.register(name, email, password);

  return createdResponse(res, "Admin registered successfully", result);
});

const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const result = await adminService.authenticate(email, password);

  return successResponse(res, "Admin logged in successfully", result);
});

export { adminRegister, adminLogin };
