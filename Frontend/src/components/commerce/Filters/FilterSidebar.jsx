import React from "react";
import FilterSection from "./FilterSection";
import FilterGroup from "./FilterGroup";
import FilterPrice from "./FilterPrice";
import FilterRating from "./FilterRating";
import FilterAvailability from "./FilterAvailability";
import { mockProducts } from "../../../data/mockProducts";

export default function FilterSidebar({ filters, onChange, className = "" }) {
  const categoryOptions = [
    { label: "Electronics", value: "Electronics" },
    { label: "Fashion", value: "Fashion" },
    { label: "Home & Living", value: "Home & Living" },
    { label: "Sports & Fitness", value: "Sports & Fitness" },
    { label: "Beauty", value: "Beauty" },
  ];

  const brandOptions = React.useMemo(() => {
    const brands = Array.from(new Set(mockProducts.map((p) => p.brand).filter(Boolean)));
    return brands.sort().map((brand) => ({ label: brand, value: brand }));
  }, []);

  const genderOptions = [
    { label: "Men", value: "men" },
    { label: "Women", value: "women" },
    { label: "Kids", value: "kids" },
  ];

  const handleFilterUpdate = (key, value) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {/* Category Section */}
      <FilterSection title="Categories">
        <FilterGroup
          options={categoryOptions}
          selected={filters.category}
          onChange={(val) => handleFilterUpdate("category", val)}
        />
      </FilterSection>

      {/* Brand Section */}
      <FilterSection title="Brands">
        <FilterGroup
          options={brandOptions}
          selected={filters.brand}
          onChange={(val) => handleFilterUpdate("brand", val)}
        />
      </FilterSection>

      {/* Gender Section */}
      <FilterSection title="Gender">
        <FilterGroup
          options={genderOptions}
          selected={filters.gender || []}
          onChange={(val) => handleFilterUpdate("gender", val)}
        />
      </FilterSection>

      {/* Fashion Styles Section */}
      {(filters.category || []).map((c) => c.toLowerCase()).includes("fashion") && (
        <FilterSection title="Fashion Styles">
          <FilterGroup
            options={[
              { label: "Topwear", value: "Topwear" },
              { label: "Bottomwear", value: "Bottomwear" },
              { label: "Winterwear", value: "Winterwear" },
            ]}
            selected={filters.subcategory || []}
            onChange={(val) => handleFilterUpdate("subcategory", val)}
          />
        </FilterSection>
      )}

      {/* Price Section */}
      <FilterSection title="Price Range">
        <FilterPrice value={filters.price} onChange={(val) => handleFilterUpdate("price", val)} />
      </FilterSection>

      {/* Rating Section */}
      <FilterSection title="Ratings">
        <FilterRating
          value={filters.rating}
          onChange={(val) => handleFilterUpdate("rating", val)}
        />
      </FilterSection>

      {/* Availability Section */}
      <FilterSection title="Availability">
        <FilterAvailability
          value={filters.availability}
          onChange={(val) => handleFilterUpdate("availability", val)}
        />
      </FilterSection>
    </div>
  );
}
