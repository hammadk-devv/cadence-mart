
export default function Spinner({ size = "md", className = "" }) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-10 h-10 border-3",
  };

  return (
    <div
      className={`animate-spin rounded-full border-gray-200 border-t-current ${sizeClasses[size]} ${className}`}
      role="status"
      aria-label="loading"
    />
  );
}
