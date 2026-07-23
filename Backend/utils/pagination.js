export const getPaginationOptions = (query) => {
  const page = Math.max(1, parseInt(query.page) || 1);
  const limit = Math.max(1, Math.min(100, parseInt(query.limit) || 10));
  const skip = (page - 1) * limit;

  return {
    page,
    limit,
    skip,
  };
};

export const buildPaginatedMeta = (total, page, limit) => {
  const hasNext = page * limit < total;
  const hasPrevious = page > 1;
  return {
    page,
    limit,
    total,
    hasNext,
    hasPrevious,
  };
};
