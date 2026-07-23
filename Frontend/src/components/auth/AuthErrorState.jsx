import Typography from "../ui/Typography";

export default function AuthErrorState({ error, className = "" }) {
  if (!error) return null;

  return (
    <div
      className={`p-3 border border-[var(--color-danger)] bg-red-50/50 rounded-[var(--radius-md)] flex flex-col gap-0.5 select-none ${className}`}
      role="alert"
    >
      <Typography variant="body-xs" className="font-extrabold text-[var(--color-danger)] uppercase">
        Authentication Error
      </Typography>
      <Typography variant="body-xs" className="text-[var(--color-text-secondary)] font-medium">
        {error}
      </Typography>
    </div>
  );
}
