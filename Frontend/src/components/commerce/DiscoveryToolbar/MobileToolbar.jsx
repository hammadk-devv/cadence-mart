import { SlidersHorizontal } from "lucide-react";
import Button from "../../ui/Button";
import SortMenu from "./SortMenu";
import ViewSwitcher from "./ViewSwitcher";

export default function MobileToolbar({
  sorting,
  onSortChange,
  view,
  onViewChange,
  activeFiltersCount = 0,
  onOpenFilters,
  className = "",
}) {
  return (
    <div className={`flex items-center justify-between w-full lg:hidden gap-3 ${className}`}>
      {/* Mobile filter button trigger */}
      <Button
        variant="outline"
        size="sm"
        onClick={onOpenFilters}
        className="flex items-center gap-2 border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)]"
      >
        <SlidersHorizontal className="w-3.5 h-3.5" />
        <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
      </Button>

      <div className="flex gap-2 items-center">
        <SortMenu value={sorting} onChange={onSortChange} />
        <ViewSwitcher view={view} onChange={onViewChange} />
      </div>
    </div>
  );
}
