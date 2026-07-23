import Button from "../../ui/Button";

export default function ClearFilters({ onClick, className = "" }) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onClick}
      className={`text-[10px] uppercase font-bold py-1 px-3 tracking-wider rounded-full border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] ${className}`}
    >
      Clear All
    </Button>
  );
}
