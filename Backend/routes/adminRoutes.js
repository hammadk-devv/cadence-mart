import express from "express";
import { adminLogin, adminRegister } from "../controllers/adminController.js";
import { validate } from "../middleware/validate.js";
import { adminLoginSchema, adminRegisterSchema } from "../validation/schemas.js";
import { authLimiter } from "../middleware/rateLimiter.js";

const adminRouter = express.Router();

adminRouter.post("/register", authLimiter, validate(adminRegisterSchema), adminRegister);
adminRouter.post("/login", authLimiter, validate(adminLoginSchema), adminLogin);

export default adminRouter;
