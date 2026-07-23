import Typography from "../../ui/Typography";

export default function FilterEmptyState() {
  return (
    <div className="py-6 text-center bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-md)] p-4">
      <Typography variant="body-sm">No filters configured for this layout.</Typography>
    </div>
  );
}
