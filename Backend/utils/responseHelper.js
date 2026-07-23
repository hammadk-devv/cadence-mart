export const successResponse = (res, message, data = {}, statusCode = 200, meta = {}) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    meta,
    // Spreading data properties onto root ensures 100% compatibility with existing frontend
    ...data,
  });
};

export const createdResponse = (res, message, data = {}) => {
  return successResponse(res, message, data, 201);
};

export const deletedResponse = (res, message) => {
  return successResponse(res, message, {}, 200);
};

export const paginatedResponse = (res, message, data = [], page, limit, total) => {
  const hasNext = page * limit < total;
  const hasPrevious = page > 1;
  return res.status(200).json({
    success: true,
    message,
    data,
    meta: {
      page,
      limit,
      total,
      hasNext,
      hasPrevious,
    },
    // Keep backward-compatibility spread
    products: data,
  });
};
