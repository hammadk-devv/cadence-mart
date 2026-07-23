import SortMenu from "./SortMenu";
import ViewSwitcher from "./ViewSwitcher";

export default function ToolbarActions({
  sorting,
  onSortChange,
  view,
  onViewChange,
  className = "",
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <SortMenu value={sorting} onChange={onSortChange} />
      <ViewSwitcher view={view} onChange={onViewChange} />
    </div>
  );
}
