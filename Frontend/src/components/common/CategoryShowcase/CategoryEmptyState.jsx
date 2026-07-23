import Typography from "../../ui/Typography";

export default function CategoryEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-lg)]">
      <Typography variant="h4" className="mb-2">
        No Categories Found
      </Typography>
      <Typography variant="body-sm">
        We couldn&apos;t load the categories list. Please try again later.
      </Typography>
    </div>
  );
}
