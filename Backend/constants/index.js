export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

export const ERROR_MESSAGES = {
  UNAUTHORIZED: "Not Authorized Login Again.",
  INVALID_CREDENTIALS: "Invalid credentials",
  FILL_ALL_FIELDS: "Please fill all the fields",
  USER_EXISTS: "User already exists",
  ADMIN_EXISTS: "Admin already exists",
  ADMIN_NOT_FOUND: "Admin is not registered",
  USER_NOT_FOUND: "User does not exist.",
  PRODUCT_NOT_FOUND: "Product not found",
  SERVER_ERROR: "Server error",
};
