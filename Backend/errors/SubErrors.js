import { AppError } from "./AppError.js";
import { HTTP_STATUS } from "../constants/index.js";

export class ValidationError extends AppError {
  constructor(message, details = {}) {
    super(message, HTTP_STATUS.BAD_REQUEST, "VALIDATION_ERROR", details);
  }
}

export class AuthenticationError extends AppError {
  constructor(message, details = {}) {
    super(message, HTTP_STATUS.UNAUTHORIZED, "AUTHENTICATION_ERROR", details);
  }
}

export class AuthorizationError extends AppError {
  constructor(message, details = {}) {
    super(message, HTTP_STATUS.FORBIDDEN, "AUTHORIZATION_ERROR", details);
  }
}

export class NotFoundError extends AppError {
  constructor(message, details = {}) {
    super(message, HTTP_STATUS.NOT_FOUND, "NOT_FOUND", details);
  }
}

export class ConflictError extends AppError {
  constructor(message, details = {}) {
    super(message, HTTP_STATUS.CONFLICT, "CONFLICT_ERROR", details);
  }
}
