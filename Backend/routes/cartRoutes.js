import express from "express";
import { addToCart, updateCart, getUserCart } from "../controllers/cartControllers.js";
import authUser from "../middleware/auth.js";
import { validate } from "../middleware/validate.js";
import { cartUpdateSchema } from "../validation/schemas.js";

const cartRouter = express.Router();

cartRouter.post("/get", authUser, getUserCart);
cartRouter.post("/add", authUser, validate(cartUpdateSchema), addToCart);
cartRouter.post("/update", authUser, validate(cartUpdateSchema), updateCart);

export default cartRouter;
