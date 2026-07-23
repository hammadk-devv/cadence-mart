import Typography from "../../ui/Typography";

export default function TrustEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-lg)]">
      <Typography variant="h4" className="mb-2">
        Service Details Unavailable
      </Typography>
      <Typography variant="body-sm">
        We couldn&apos;t load service benefits details. Please check again.
      </Typography>
    </div>
  );
}
