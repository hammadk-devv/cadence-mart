import { verifyToken } from "../utils/jwtHelper.js";

const authUser = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    let token = null;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    } else if (req.headers.token) {
      token = req.headers.token;
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized. Please sign in again.",
      });
    }

    const token_decode = verifyToken(token);

    if (!token_decode) {
      return res.status(401).json({
        success: false,
        message: "Not authorized. Session expired or invalid token.",
      });
    }

    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error.message);
    res.status(401).json({
      success: false,
      message: error.message || "Authentication error",
    });
  }
};

export default authUser;
