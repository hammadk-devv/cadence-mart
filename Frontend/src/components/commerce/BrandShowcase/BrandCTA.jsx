import Button from "../../ui/Button";

export default function BrandCTA({ label = "Explore Brand", onClick, className = "" }) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onClick}
      className={`text-xs py-1 px-3 border border-[var(--color-border)] rounded-full hover:bg-[var(--color-bg-secondary)] ${className}`}
    >
      {label}
    </Button>
  );
}
