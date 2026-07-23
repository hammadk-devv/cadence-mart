export default function SortOption({ label, isActive, onClick, className = "" }) {
  return (
    <button
      type="button"
      role="option"
      aria-selected={isActive}
      onClick={onClick}
      className={`w-full text-left px-3 py-2 text-xs rounded hover:bg-[var(--color-bg-secondary)] transition-colors focus-ring font-semibold ${
        isActive
          ? "text-[var(--color-primary)] bg-[var(--color-bg-secondary)]"
          : "text-[var(--color-text-primary)]"
      } ${className}`}
    >
      {label}
    </button>
  );
}
