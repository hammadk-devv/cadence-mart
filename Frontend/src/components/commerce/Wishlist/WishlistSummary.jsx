import Price from "../Price";
import Typography from "../../ui/Typography";

export default function WishlistSummary({ totalValue, itemCount = 0, className = "" }) {
  return (
    <div
      className={`p-4 border border-[var(--color-border)] rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] select-none ${className}`}
    >
      <Typography
        variant="body-xs"
        className="font-bold text-[var(--color-text-secondary)] uppercase tracking-wider mb-1"
      >
        Favorites Value Summary
      </Typography>
      <div className="flex justify-between items-baseline mt-2">
        <Typography variant="body-sm" className="font-medium text-[var(--color-text-secondary)]">
          Total Items:{" "}
          <span className="font-semibold text-[var(--color-text-primary)]">{itemCount}</span>
        </Typography>
        <div className="flex gap-2 items-baseline">
          <span className="text-xs text-[var(--color-text-secondary)] font-medium">
            Estimated Value:
          </span>
          <Price value={totalValue} size="md" />
        </div>
      </div>
    </div>
  );
}
