import Typography from "../../ui/Typography";

export default function PaymentMethodCard({ label, isSelected, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-4 border rounded-[var(--radius-md)] flex items-center justify-between text-left focus-ring transition-all w-full ${
        isSelected
          ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5"
          : "border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)]"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
            isSelected ? "border-[var(--color-primary)]" : "border-[var(--color-border)]"
          }`}
        >
          {isSelected && <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />}
        </div>
        <Typography variant="body-sm" className="font-extrabold text-[var(--color-text-primary)]">
          {label}
        </Typography>
      </div>
      {children}
    </button>
  );
}
