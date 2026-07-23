import { Grid, List } from "lucide-react";
import IconButton from "../../ui/IconButton";

export default function ViewSwitcher({ view = "grid", onChange, className = "" }) {
  return (
    <div
      className={`flex items-center gap-1 border border-[var(--color-border)] rounded-[var(--radius-md)] p-1 bg-[var(--color-card-bg)] ${className}`}
    >
      <IconButton
        icon={Grid}
        variant={view === "grid" ? "primary" : "ghost"}
        size="sm"
        onClick={() => onChange("grid")}
        label="Switch to Grid View"
        className="rounded-[var(--radius-sm)]"
      />
      <IconButton
        icon={List}
        variant={view === "list" ? "primary" : "ghost"}
        size="sm"
        onClick={() => onChange("list")}
        label="Switch to List View"
        className="rounded-[var(--radius-sm)]"
      />
    </div>
  );
}
