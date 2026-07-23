import express from "express";
import { loginUser, registerUser, getUserDetails } from "../controllers/userControllers.js";
import { validate } from "../middleware/validate.js";
import { userRegisterSchema, userLoginSchema } from "../validation/schemas.js";
import { authLimiter } from "../middleware/rateLimiter.js";
import authUser from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", authLimiter, validate(userRegisterSchema), registerUser);
userRouter.post("/login", authLimiter, validate(userLoginSchema), loginUser);
userRouter.post("/details", getUserDetails);
// userRouter.get("/users", user);
userRouter.get("/user-details", authUser, getUserDetails);

export default userRouter;
