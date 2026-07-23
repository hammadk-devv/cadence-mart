export function serializeQuery(state) {
  const params = {};

  if (state.search) params.search = state.search;
  if (state.sorting && state.sorting !== "featured") params.sort = state.sorting;
  if (state.view && state.view !== "grid") params.view = state.view;

  if (state.pagination) {
    if (state.pagination.page && state.pagination.page !== 1) {
      params.page = String(state.pagination.page);
    }
    if (state.pagination.pageSize && state.pagination.pageSize !== 12) {
      params.pageSize = String(state.pagination.pageSize);
    }
  }

  const filters = state.filters || {};
  if (filters.category && filters.category.length > 0) {
    params.category = filters.category.join(",");
  }
  if (filters.brand && filters.brand.length > 0) {
    params.brand = filters.brand.join(",");
  }
  if (filters.gender && filters.gender.length > 0) {
    params.gender = filters.gender.join(",");
  }
  if (filters.subcategory && filters.subcategory.length > 0) {
    params.subcategory = filters.subcategory.join(",");
  }
  if (filters.rating) {
    params.rating = String(filters.rating);
  }
  if (filters.availability) {
    params.availability = "true";
  }
  if (filters.price) {
    if (filters.price.min > 0) params.priceMin = String(filters.price.min);
    if (filters.price.max < 1000) params.priceMax = String(filters.price.max);
  }

  return params;
}
