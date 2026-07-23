import Typography from "../../ui/Typography";

export default function CheckoutSection({
  title,
  children,
  isCompleted = false,
  isActive = false,
}) {
  return (
    <div
      className={`border rounded-[var(--radius-lg)] p-6 bg-[var(--color-card-bg)] shadow-[var(--shadow-sm)] transition-all ${
        isActive
          ? "border-[var(--color-primary)] ring-1 ring-[var(--color-primary)]/20"
          : "border-[var(--color-border)] opacity-85"
      }`}
    >
      <div className="flex justify-between items-center select-none border-b border-[var(--color-border)] pb-3 mb-4">
        <Typography variant="h4" className="font-extrabold text-[var(--color-text-primary)]">
          {title}
        </Typography>
        {isCompleted && (
          <span className="text-[10px] font-black text-[var(--color-success)] uppercase tracking-wider">
            Completed
          </span>
        )}
      </div>
      {isActive && <div className="py-1">{children}</div>}
    </div>
  );
}
