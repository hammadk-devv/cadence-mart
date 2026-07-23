import { useState, useEffect, useMemo, useCallback } from "react";
import DiscoveryContainer from "./DiscoveryContainer";
import DiscoveryHeader from "./DiscoveryHeader";
import DiscoveryToolbar from "../DiscoveryToolbar";
import DiscoveryResults from "./DiscoveryResults";
import { FilterSidebar, FilterDrawer, ActiveFilters } from "../Filters";
import { SearchBar, SearchResultsInfo, SearchEmptyState } from "../Search";
import Pagination from "../Pagination";
import useDebounce from "../../../hooks/useDebounce";
import useDiscoveryQuery from "../../../hooks/useDiscoveryQuery";
import { matchesSearch } from "../../../utils/searchNormalizer";

export default function DiscoveryLayout({
  title = "Shop All Products",
  description = "Explore our premium, handpicked catalog collections",
  items = [],
  isLoading = false,
  className = "",
}) {
  const [discoveryState, setDiscoveryState] = useDiscoveryQuery();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);

  const debouncedSearch = useDebounce(discoveryState.search, 300);

  const filtersSerialized = JSON.stringify(discoveryState.filters);

  useEffect(() => {
    let result = [...items];

    if (debouncedSearch) {
      result = result.filter((p) => matchesSearch(p, debouncedSearch));
    }

    if (discoveryState.filters.category.length > 0) {
      const lowerCategories = discoveryState.filters.category.map((c) => c.toLowerCase());
      result = result.filter(
        (p) => p.category && lowerCategories.includes(p.category.toLowerCase())
      );
    }

    if (discoveryState.filters.brand.length > 0) {
      const lowerBrands = discoveryState.filters.brand.map((b) => b.toLowerCase());
      result = result.filter((p) => p.brand && lowerBrands.includes(p.brand.toLowerCase()));
    }

    if (discoveryState.filters.gender && discoveryState.filters.gender.length > 0) {
      const lowerGenders = discoveryState.filters.gender.map((g) => g.toLowerCase());
      result = result.filter((p) => p.gender && lowerGenders.includes(p.gender.toLowerCase()));
    }

    if (discoveryState.filters.subcategory && discoveryState.filters.subcategory.length > 0) {
      const lowerSubcategories = discoveryState.filters.subcategory.map((s) => s.toLowerCase());
      result = result.filter(
        (p) => p.subcategory && lowerSubcategories.includes(p.subcategory.toLowerCase())
      );
    }

    if (discoveryState.filters.price) {
      result = result.filter(
        (p) =>
          p.price >= discoveryState.filters.price.min && p.price <= discoveryState.filters.price.max
      );
    }

    if (discoveryState.filters.rating) {
      result = result.filter((p) => (p.rating || 4.5) >= discoveryState.filters.rating);
    }

    if (discoveryState.filters.availability) {
      result = result.filter((p) => p.stock > 0);
    }

    if (discoveryState.sorting === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (discoveryState.sorting === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (discoveryState.sorting === "rating") {
      result.sort((a, b) => {
        const ratingDiff = (b.rating || 0) - (a.rating || 0);
        if (ratingDiff !== 0) return ratingDiff;
        return (b.reviewCount || 0) - (a.reviewCount || 0);
      });
    } else if (discoveryState.sorting === "newest") {
      result.sort((a, b) => b._id.localeCompare(a._id));
    }

    setFilteredItems(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, debouncedSearch, filtersSerialized, discoveryState.sorting]);

  const currentPage = discoveryState.pagination?.page || 1;
  const pageSize = discoveryState.pagination?.pageSize || 12;
  const totalItems = filteredItems.length;
  const totalPages = Math.max(Math.ceil(totalItems / pageSize), 1);

  const handlePageChange = useCallback(
    (newPage) => {
      setDiscoveryState((prev) => ({
        ...prev,
        pagination: { ...prev.pagination, page: newPage },
      }));
    },
    [setDiscoveryState]
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      handlePageChange(totalPages);
    }
  }, [currentPage, totalPages, handlePageChange]);

  const handlePageSizeChange = useCallback(
    (newPageSize) => {
      setDiscoveryState((prev) => ({
        ...prev,
        pagination: { page: 1, pageSize: newPageSize },
      }));
    },
    [setDiscoveryState]
  );

  const handleFilterChange = useCallback(
    (newFilters) => {
      setDiscoveryState((prev) => ({
        ...prev,
        filters: newFilters,
        pagination: { ...prev.pagination, page: 1 },
      }));
    },
    [setDiscoveryState]
  );

  const handleSortChange = useCallback(
    (newSort) => {
      setDiscoveryState((prev) => ({
        ...prev,
        sorting: newSort,
        pagination: { ...prev.pagination, page: 1 },
      }));
    },
    [setDiscoveryState]
  );

  const handleViewChange = useCallback(
    (newView) => {
      setDiscoveryState((prev) => ({ ...prev, view: newView }));
    },
    [setDiscoveryState]
  );

  const handleSearchChange = useCallback(
    (newSearch) => {
      setDiscoveryState((prev) => ({
        ...prev,
        search: newSearch,
        pagination: { ...prev.pagination, page: 1 },
      }));
    },
    [setDiscoveryState]
  );

  const handleRemoveFilter = useCallback(
    (type, value) => {
      setDiscoveryState((prev) => {
        const newFilters = { ...prev.filters };
        if (type === "category") {
          newFilters.category = newFilters.category.filter((cat) => cat !== value);
        } else if (type === "brand") {
          newFilters.brand = newFilters.brand.filter((br) => br !== value);
        } else if (type === "gender") {
          newFilters.gender = (newFilters.gender || []).filter((g) => g !== value);
        } else if (type === "subcategory") {
          newFilters.subcategory = (newFilters.subcategory || []).filter((s) => s !== value);
        } else if (type === "rating") {
          newFilters.rating = null;
        } else if (type === "availability") {
          newFilters.availability = false;
        }
        return {
          ...prev,
          filters: newFilters,
          pagination: { ...prev.pagination, page: 1 },
        };
      });
    },
    [setDiscoveryState]
  );

  const handleClearAllFilters = useCallback(() => {
    setDiscoveryState((prev) => ({
      ...prev,
      filters: {
        category: [],
        brand: [],
        gender: [],
        subcategory: [],
        price: { min: 0, max: 1000 },
        rating: null,
        availability: false,
      },
      pagination: { ...prev.pagination, page: 1 },
    }));
  }, [setDiscoveryState]);

  const activeFiltersCount = useMemo(() => {
    return (
      discoveryState.filters.category.length +
      discoveryState.filters.brand.length +
      (discoveryState.filters.gender || []).length +
      (discoveryState.filters.subcategory || []).length +
      (discoveryState.filters.rating ? 1 : 0) +
      (discoveryState.filters.availability ? 1 : 0)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersSerialized]);

  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const slicedItems = useMemo(() => {
    return filteredItems.slice(startIdx, endIdx);
  }, [filteredItems, startIdx, endIdx]);

  return (
    <DiscoveryContainer className={className}>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
        <DiscoveryHeader title={title} description={description} className="mb-0" />
        <SearchBar
          value={discoveryState.search}
          onChange={handleSearchChange}
          className="md:mt-2"
        />
      </div>

      <SearchResultsInfo query={discoveryState.search} onClear={() => handleSearchChange("")} />

      <DiscoveryToolbar
        resultsCount={filteredItems.length}
        activeFiltersCount={activeFiltersCount}
        onOpenFilters={() => setIsMobileFiltersOpen(true)}
        sorting={discoveryState.sorting}
        onSortChange={handleSortChange}
        view={discoveryState.view}
        onViewChange={handleViewChange}
      />

      {/* Active chips list bar */}
      <ActiveFilters
        filters={discoveryState.filters}
        onRemove={handleRemoveFilter}
        onClearAll={handleClearAllFilters}
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar for desktop */}
        <aside className="hidden lg:block lg:col-span-1">
          <FilterSidebar filters={discoveryState.filters} onChange={handleFilterChange} />
        </aside>

        {/* Right main grid results */}
        <main className="lg:col-span-3">
          {filteredItems.length === 0 && debouncedSearch ? (
            <SearchEmptyState query={debouncedSearch} />
          ) : (
            <>
              <DiscoveryResults
                items={slicedItems}
                isLoading={isLoading}
                view={discoveryState.view}
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                pageSize={pageSize}
                totalItems={totalItems}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
              />
            </>
          )}
        </main>
      </div>

      {/* Mobile filter drawer overlay */}
      <FilterDrawer
        isOpen={isMobileFiltersOpen}
        onClose={() => setIsMobileFiltersOpen(false)}
        filters={discoveryState.filters}
        onChange={handleFilterChange}
      />
    </DiscoveryContainer>
  );
}
