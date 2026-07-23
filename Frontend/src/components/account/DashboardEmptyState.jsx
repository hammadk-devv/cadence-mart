import Typography from "../ui/Typography";

export default function DashboardEmptyState({ message = "No records found" }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 border border-dashed border-[var(--color-border)] rounded-[var(--radius-lg)] text-center select-none py-12">
      <Typography variant="body" className="text-[var(--color-text-secondary)] font-semibold">
        {message}
      </Typography>
    </div>
  );
}
