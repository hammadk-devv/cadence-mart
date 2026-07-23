import jwt from "jsonwebtoken";
import { jwtConfig } from "../config/index.js";

export const signToken = (payload, options = {}) => {
  return jwt.sign(payload, jwtConfig.secret, {
    algorithm: "HS256",
    expiresIn: jwtConfig.expiresIn,
    issuer: jwtConfig.issuer,
    audience: jwtConfig.audience,
    ...options,
  });
};

export const verifyToken = (token, options = {}) => {
  return jwt.verify(token, jwtConfig.secret, {
    algorithms: ["HS256"],
    issuer: jwtConfig.issuer,
    audience: jwtConfig.audience,
    ...options,
  });
};
