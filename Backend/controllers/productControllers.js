import productService from "../services/productService.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { successResponse, createdResponse } from "../utils/responseHelper.js";

const addProduct = asyncHandler(async (req, res) => {
  const product = await productService.publishProduct(req.body, req.files || {});
  return createdResponse(res, "Product Added.", { product });
});

const addListProduct = asyncHandler(async (req, res) => {
  const products = await productService.listProducts();
  return successResponse(res, "Products fetched successfully", { products });
});

const removeProduct = asyncHandler(async (req, res) => {
  const { id } = req.body;
  await productService.archiveProduct(id);
  return successResponse(res, "Product Removed.");
});

export { addProduct, addListProduct, removeProduct };
