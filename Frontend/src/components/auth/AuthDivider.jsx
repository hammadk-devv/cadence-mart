export default function AuthDivider() {
  return (
    <div className="flex items-center gap-4 py-2 select-none">
      <div className="flex-grow h-px bg-[var(--color-border)]" />
      <span className="text-[10px] font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">
        Or Continue With
      </span>
      <div className="flex-grow h-px bg-[var(--color-border)]" />
    </div>
  );
}
