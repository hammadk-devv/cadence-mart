
export default function Textarea({
  label,
  id,
  placeholder = "",
  error = "",
  isDisabled = false,
  className = "",
  rows = 4,
  value,
  onChange,
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="text-xs font-semibold text-[var(--color-text-primary)]">
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full px-3 py-2 text-sm bg-[var(--color-bg-primary)] border rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder-gray-400 focus-ring disabled:opacity-50 disabled:bg-[var(--color-bg-secondary)] ${
          error
            ? "border-[var(--color-danger)] focus-visible:outline-[var(--color-danger)]"
            : "border-[var(--color-border)]"
        }`}
        {...props}
      />
      {error && (
        <span id={`${id}-error`} className="text-xs text-[var(--color-danger)]">
          {error}
        </span>
      )}
    </div>
  );
}
