import Typography from "../ui/Typography";

export default function DashboardErrorState({ error }) {
  if (!error) return null;

  return (
    <div
      className="p-4 border border-[var(--color-danger)] bg-red-50/50 rounded-[var(--radius-lg)] select-none"
      role="alert"
    >
      <Typography
        variant="body-xs"
        className="font-extrabold text-[var(--color-danger)] uppercase mb-0.5"
      >
        Account Settings Error
      </Typography>
      <Typography variant="body-xs" className="text-[var(--color-text-secondary)] font-medium">
        {error}
      </Typography>
    </div>
  );
}
