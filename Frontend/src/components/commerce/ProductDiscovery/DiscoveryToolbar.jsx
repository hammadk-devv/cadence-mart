import Typography from "../../ui/Typography";
import Button from "../../ui/Button";
import { SlidersHorizontal } from "lucide-react";

export default function DiscoveryToolbar({
  resultsCount = 0,
  activeFiltersCount = 0,
  onOpenFilters,
  className = "",
}) {
  return (
    <div
      className={`flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b border-[var(--color-border)] mb-6 gap-4 ${className}`}
    >
      <Typography variant="body-sm" className="text-[var(--color-text-secondary)] font-semibold">
        Showing {resultsCount} {resultsCount === 1 ? "product" : "products"}
      </Typography>

      {/* Control row */}
      <div className="flex gap-3 w-full sm:w-auto justify-between sm:justify-start items-center">
        {/* Mobile filter button trigger */}
        <Button
          variant="outline"
          size="sm"
          onClick={onOpenFilters}
          className="lg:hidden flex items-center gap-2 border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)]"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
        </Button>

        <div className="flex gap-3 items-center">
          <div className="hidden lg:block px-4 py-2 border border-[var(--color-border)] rounded-[var(--radius-md)] text-xs text-[var(--color-text-secondary)] bg-[var(--color-card-bg)] select-none">
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </div>
          <div className="px-4 py-2 border border-[var(--color-border)] rounded-[var(--radius-md)] text-xs text-[var(--color-text-secondary)] bg-[var(--color-card-bg)] select-none">
            Sort: Default (Placeholder)
          </div>
        </div>
      </div>
    </div>
  );
}
