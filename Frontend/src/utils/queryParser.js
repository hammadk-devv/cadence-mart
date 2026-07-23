export function parseQuery(searchParams) {
  const state = {
    filters: {
      category: [],
      brand: [],
      gender: [],
      subcategory: [],
      price: { min: 0, max: 1000 },
      rating: null,
      availability: false,
    },
    sorting: "featured",
    search: "",
    view: "grid",
    pagination: {
      page: 1,
      pageSize: 12,
    },
  };

  const search = searchParams.get("search");
  if (search) state.search = search;

  const sort = searchParams.get("sort");
  if (sort) state.sorting = sort;

  const view = searchParams.get("view");
  if (view) {
    state.view = view;
  } else {
    try {
      const storedView = localStorage.getItem("cadence_shop_view");
      if (storedView === "grid" || storedView === "list") {
        state.view = storedView;
      }
    } catch (e) {
      console.error(e);
    }
  }

  const page = searchParams.get("page");
  if (page) state.pagination.page = Number(page);

  const pageSize = searchParams.get("pageSize");
  if (pageSize) state.pagination.pageSize = Number(pageSize);

  const category = searchParams.get("category");
  if (category) {
    state.filters.category = category
      .split(",")
      .map((cat) => {
        const lower = cat.toLowerCase().trim();
        if (lower === "electronics") return "Electronics";
        if (lower === "fashion") return "Fashion";
        if (lower === "home" || lower === "home & living" || lower === "home-living")
          return "Home & Living";
        if (lower === "sports" || lower === "sports & fitness" || lower === "sports-fitness")
          return "Sports & Fitness";
        if (lower === "beauty") return "Beauty";
        return cat;
      })
      .filter(Boolean);
  }

  const brand = searchParams.get("brand");
  if (brand) {
    state.filters.brand = brand.split(",").filter(Boolean);
  }

  const gender = searchParams.get("gender");
  if (gender) {
    state.filters.gender = gender.split(",").filter(Boolean);
  }

  const subcategory = searchParams.get("subcategory");
  if (subcategory) {
    state.filters.subcategory = subcategory.split(",").filter(Boolean);
  }

  const rating = searchParams.get("rating");
  if (rating) {
    state.filters.rating = Number(rating);
  }

  const availability = searchParams.get("availability");
  if (availability === "true") {
    state.filters.availability = true;
  }

  const priceMin = searchParams.get("priceMin");
  if (priceMin) {
    state.filters.price.min = Number(priceMin);
  }

  const priceMax = searchParams.get("priceMax");
  if (priceMax) {
    state.filters.price.max = Number(priceMax);
  }

  return state;
}
