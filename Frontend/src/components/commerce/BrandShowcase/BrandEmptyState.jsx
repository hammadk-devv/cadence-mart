import Typography from "../../ui/Typography";

export default function BrandEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-lg)]">
      <Typography variant="h4" className="mb-2">
        Brands Data Unavailable
      </Typography>
      <Typography variant="body-sm">
        We couldn&apos;t retrieve brand listings. Please try again later.
      </Typography>
    </div>
  );
}
