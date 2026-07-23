import { formatCurrency } from "../../utils/format";

export default function Price({
  value,
  originalValue,
  size = "md", // sm, md, lg
  className = "",
}) {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base font-semibold",
    lg: "text-xl font-bold",
  };

  return (
    <div className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className={`text-[var(--color-primary)] ${sizeClasses[size]}`}>
        {formatCurrency(value)}
      </span>
      {originalValue && originalValue > value && (
        <span className="text-xs text-[var(--color-text-secondary)] line-through">
          {formatCurrency(originalValue)}
        </span>
      )}
    </div>
  );
}
