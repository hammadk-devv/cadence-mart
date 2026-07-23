import Button from "../../ui/Button";

export default function CategoryCTA({ label = "Explore", onClick, className = "" }) {
  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={onClick}
      className={`bg-white text-[var(--color-primary)] hover:bg-gray-100 border-none py-1.5 px-4 font-semibold text-xs rounded-full shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] ${className}`}
    >
      {label}
    </Button>
  );
}
