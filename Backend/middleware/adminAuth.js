import { verifyToken } from "../utils/jwtHelper.js";
import adminRepository from "../repositories/adminRepository.js";

const adminAuth = async (req, res, next) => {
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
        message: "Not authorized. Please log in again.",
      });
    }

    // check is authorized admin in the database.
    const token_decode = verifyToken(token);
    if (!token_decode || !token_decode.id) {
      return res.status(401).json({
        success: false,
        message: "Not authorized. Session invalid or expired.",
      });
    }

    const adminExists = await adminRepository.findById(token_decode.id);
    if (!adminExists) {
      return res.status(401).json({
        success: false,
        message: "Not authorized. Admin access required.",
      });
    }

    // Pass admin details down if needed
    req.body.adminId = token_decode.id;
    next();
  } catch (error) {
    console.error("Admin Auth Error:", error.message);
    res.status(401).json({
      success: false,
      message: error.message || "Authentication error",
    });
  }
};

export default adminAuth;
