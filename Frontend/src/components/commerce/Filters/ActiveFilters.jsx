import { X } from "lucide-react";
import ClearFilters from "./ClearFilters";
import Typography from "../../ui/Typography";

export default function ActiveFilters({ filters, onRemove, onClearAll, className = "" }) {
  const chips = [];

  if (filters.category && filters.category.length > 0) {
    filters.category.forEach((cat) => {
      chips.push({ type: "category", value: cat, label: `Category: ${cat}` });
    });
  }

  if (filters.brand && filters.brand.length > 0) {
    filters.brand.forEach((br) => {
      chips.push({ type: "brand", value: br, label: `Brand: ${br}` });
    });
  }

  if (filters.rating) {
    chips.push({ type: "rating", value: filters.rating, label: `${filters.rating}★ & Up` });
  }

  if (filters.gender && filters.gender.length > 0) {
    filters.gender.forEach((g) => {
      chips.push({
        type: "gender",
        value: g,
        label: `Gender: ${g.charAt(0).toUpperCase() + g.slice(1)}`,
      });
    });
  }

  if (filters.subcategory && filters.subcategory.length > 0) {
    filters.subcategory.forEach((sub) => {
      chips.push({ type: "subcategory", value: sub, label: `Style: ${sub}` });
    });
  }

  if (filters.availability) {
    chips.push({ type: "availability", value: true, label: "In Stock Only" });
  }

  if (chips.length === 0) return null;

  return (
    <div
      className={`flex flex-wrap items-center gap-2 py-3 border-b border-[var(--color-border)] mb-4 ${className}`}
    >
      <Typography
        variant="body-sm"
        className="font-bold text-xs text-[var(--color-text-secondary)] select-none mr-2"
      >
        Active Filters:
      </Typography>
      {chips.map((chip, idx) => (
        <div
          key={idx}
          className="flex items-center gap-1.5 px-3 py-1 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full text-xs font-semibold text-[var(--color-text-primary)]"
        >
          <span>{chip.label}</span>
          <button
            onClick={() => onRemove(chip.type, chip.value)}
            className="text-gray-400 hover:text-[var(--color-danger)] transition-colors focus-ring rounded-full"
            aria-label={`Remove filter: ${chip.label}`}
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      ))}
      <ClearFilters onClick={onClearAll} className="ml-2" />
    </div>
  );
}
