export function serializeQuery(state) {
  const params = {};

  params.search = state.search || "";
  params.sort = state.sorting && state.sorting !== "featured" ? state.sorting : "";
  params.view = state.view && state.view !== "grid" ? state.view : "";

  if (state.pagination) {
    params.page =
      state.pagination.page && state.pagination.page !== 1 ? String(state.pagination.page) : "";
    params.pageSize =
      state.pagination.pageSize && state.pagination.pageSize !== 12
        ? String(state.pagination.pageSize)
        : "";
  } else {
    params.page = "";
    params.pageSize = "";
  }

  const filters = state.filters || {};
  params.category =
    filters.category && filters.category.length > 0 ? filters.category.join(",") : "";
  params.brand = filters.brand && filters.brand.length > 0 ? filters.brand.join(",") : "";
  params.gender = filters.gender && filters.gender.length > 0 ? filters.gender.join(",") : "";
  params.subcategory =
    filters.subcategory && filters.subcategory.length > 0 ? filters.subcategory.join(",") : "";
  params.rating = filters.rating ? String(filters.rating) : "";
  params.availability = filters.availability ? "true" : "";

  if (filters.price) {
    params.priceMin = filters.price.min > 0 ? String(filters.price.min) : "";
    params.priceMax = filters.price.max < 1000 ? String(filters.price.max) : "";
  } else {
    params.priceMin = "";
    params.priceMax = "";
  }

  return params;
}
