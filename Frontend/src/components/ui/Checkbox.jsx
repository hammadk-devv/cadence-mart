export default function Checkbox({
  label,
  id,
  error = "",
  isDisabled = false,
  className = "",
  checked,
  onChange,
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      <div className="flex items-center gap-2">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={isDisabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className="w-4 h-4 text-[var(--color-primary)] border-[var(--color-border)] rounded-[var(--radius-sm)] focus:ring-[var(--color-primary)] focus-ring"
          {...props}
        />
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-[var(--color-text-primary)] select-none"
          >
            {label}
          </label>
        )}
      </div>
      {error && (
        <span id={`${id}-error`} className="text-xs text-[var(--color-danger)] ml-6">
          {error}
        </span>
      )}
    </div>
  );
}
