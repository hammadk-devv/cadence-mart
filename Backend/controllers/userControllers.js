import userService from "../services/userService.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { successResponse, createdResponse } from "../utils/responseHelper.js";

const registerUser = asyncHandler(async (req, res) => {
  const { email, name, password } = req.body;
  const result = await userService.register(name, email, password);

  return createdResponse(res, "Registration successful", result);
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const result = await userService.authenticate(email, password);

  return successResponse(res, "Login successful", result);
});

const getUserDetails = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  const user = await userService.getUserDetails(userId);

  return successResponse(res, "User details fetched successfully", { user });
});

export { loginUser, registerUser, getUserDetails };
