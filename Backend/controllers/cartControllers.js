import cartService from "../services/cartService.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { successResponse } from "../utils/responseHelper.js";

const addToCart = asyncHandler(async (req, res) => {
  const { userId, itemId, quantity } = req.body;
  const cartData = await cartService.addItem(userId, itemId, quantity);

  return successResponse(res, "Added to cart", { cartData });
});

const updateCart = asyncHandler(async (req, res) => {
  const { userId, itemId, quantity } = req.body;
  const cartData = await cartService.updateQuantity(userId, itemId, quantity);

  return successResponse(res, "Cart updated successfully", { cartData });
});

const getUserCart = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  const cartData = await cartService.getUserCart(userId);

  return successResponse(res, "Cart fetched successfully", { cartData });
});

export { addToCart, updateCart, getUserCart };
