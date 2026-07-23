import { ChevronDown } from "lucide-react";
import Dropdown from "../../ui/Dropdown";
import SortOption from "./SortOption";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "popular", label: "Most Popular" },
  { value: "discount", label: "Discount" },
];

export default function SortMenu({ value, onChange, className = "" }) {
  const activeOption = SORT_OPTIONS.find((opt) => opt.value === value) || SORT_OPTIONS[0];

  const triggerButton = (
    <button
      type="button"
      role="combobox"
      aria-haspopup="listbox"
      aria-expanded="false"
      className="flex items-center gap-2 px-4 py-2 border border-[var(--color-border)] rounded-[var(--radius-md)] text-xs text-[var(--color-text-secondary)] font-semibold bg-[var(--color-card-bg)] hover:bg-[var(--color-bg-secondary)] transition-colors focus-ring"
    >
      <span>Sort: {activeOption.label}</span>
      <ChevronDown className="w-3.5 h-3.5" />
    </button>
  );

  return (
    <div className={className}>
      <Dropdown trigger={triggerButton} align="right">
        <div role="listbox" aria-label="Product sorting options" className="flex flex-col gap-1">
          {SORT_OPTIONS.map((opt) => (
            <SortOption
              key={opt.value}
              value={opt.value}
              label={opt.label}
              isActive={opt.value === value}
              onClick={() => onChange(opt.value)}
            />
          ))}
        </div>
      </Dropdown>
    </div>
  );
}
