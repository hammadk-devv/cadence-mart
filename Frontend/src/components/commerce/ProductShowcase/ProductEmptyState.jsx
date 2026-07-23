import Typography from "../../ui/Typography";

export default function ProductEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-lg)]">
      <Typography variant="h4" className="mb-2">
        No Products Available
      </Typography>
      <Typography variant="body-sm">
        We couldn&apos;t load the product catalog. Please check back later.
      </Typography>
    </div>
  );
}
