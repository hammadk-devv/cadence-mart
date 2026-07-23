
export default function LoadingSpinner({ size = "md" }) {
  const sizeClasses = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div
        className={`animate-spin rounded-full border-4 border-gray-200 border-t-green-800 ${sizeClasses[size]}`}
      />
    </div>
  );
}
