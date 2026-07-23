import ResultsCounter from "./ResultsCounter";
import ToolbarActions from "./ToolbarActions";
import MobileToolbar from "./MobileToolbar";

export default function DiscoveryToolbar({
  resultsCount = 0,
  activeFiltersCount = 0,
  onOpenFilters,
  sorting,
  onSortChange,
  view,
  onViewChange,
  className = "",
}) {
  return (
    <div
      className={`flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b border-[var(--color-border)] mb-6 gap-4 ${className}`}
    >
      <ResultsCounter count={resultsCount} />

      <ToolbarActions
        sorting={sorting}
        onSortChange={onSortChange}
        view={view}
        onViewChange={onViewChange}
        className="hidden lg:flex"
      />

      <MobileToolbar
        sorting={sorting}
        onSortChange={onSortChange}
        view={view}
        onViewChange={onViewChange}
        activeFiltersCount={activeFiltersCount}
        onOpenFilters={onOpenFilters}
      />
    </div>
  );
}
