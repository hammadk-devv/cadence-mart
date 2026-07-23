import { HTTP_STATUS } from "../constants/index.js";
import { securityConfig } from "../config/index.js";

const errorHandler = (err, req, res, _next) => {
  let statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  let message = err.message || "An unexpected error occurred.";
  let code = err.code || "INTERNAL_SERVER_ERROR";
  let details = err.details || {};

  console.error(
    `[Error] Request ID: ${req.id || "N/A"} | URL: ${req.method} ${req.originalUrl} | Code: ${code} | Message: ${message}`
  );

  if (statusCode === HTTP_STATUS.INTERNAL_SERVER_ERROR) {
    console.error(err.stack);
  }

  if (err.name === "CastError") {
    statusCode = HTTP_STATUS.BAD_REQUEST;
    message = `Invalid ${err.path}: ${err.value}`;
    code = "INVALID_ID";
  }

  if (err.code === 11000) {
    statusCode = HTTP_STATUS.CONFLICT;
    message = "Duplicate field value entered";
    code = "DUPLICATE_KEY";
  }

  const response = {
    success: false,
    message,
    error: {
      code,
      details,
    },
  };

  if (securityConfig.nodeEnv === "development") {
    response.error.stack = err.stack;
    response.error.requestId = req.id;
  }

  res.status(statusCode).json(response);
};

export default errorHandler;
