import Typography from "../../ui/Typography";

export default function CheckoutErrorState({ error, className = "" }) {
  if (!error) return null;

  return (
    <div
      className={`p-4 border border-[var(--color-danger)] bg-red-50/50 rounded-[var(--radius-lg)] flex flex-col gap-1 select-none ${className}`}
      role="alert"
    >
      <Typography variant="body-sm" className="font-extrabold text-[var(--color-danger)] uppercase">
        Checkout Error
      </Typography>
      <Typography variant="body-xs" className="text-[var(--color-text-secondary)] leading-relaxed">
        {error}
      </Typography>
    </div>
  );
}
