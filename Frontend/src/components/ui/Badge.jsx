
export default function Badge({
  children,
  variant = "primary", // primary, secondary, success, danger, warning, info
  size = "md", // sm, md
  className = "",
}) {
  const baseStyle = "inline-flex items-center font-semibold rounded-full";

  const variants = {
    primary: "bg-[var(--color-ring)] text-[var(--color-primary)]",
    secondary:
      "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]",
    success: "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20",
    danger: "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20",
    warning: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20",
    info: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-0.5 text-xs",
  };

  return (
    <span className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
}
