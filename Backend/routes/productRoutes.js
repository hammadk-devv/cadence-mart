import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import { addProduct, addListProduct, removeProduct } from "../controllers/productControllers.js";
import upload from "../middleware/multer.js";
import { validate } from "../middleware/validate.js";
import { productCreateSchema } from "../validation/schemas.js";
import { productWriteLimiter } from "../middleware/rateLimiter.js";

const productRouter = express.Router();

productRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  productWriteLimiter,
  validate(productCreateSchema),
  addProduct
);
productRouter.post("/remove", adminAuth, productWriteLimiter, removeProduct);
productRouter.get("/addlist", addListProduct);

export default productRouter;
