export default function Skeleton({
  variant = "text", // text, rect, circle
  width = "100%",
  height,
  className = "",
}) {
  const styles = {
    text: "h-4 rounded-[var(--radius-sm)]",
    rect: "rounded-[var(--radius-md)]",
    circle: "rounded-full",
  };

  const defaultHeights = {
    text: "1rem",
    rect: "10rem",
    circle: "3rem",
  };

  return (
    <div
      className={`animate-pulse bg-gray-200 dark:bg-gray-700 ${styles[variant]} ${className}`}
      style={{
        width,
        height: height || defaultHeights[variant],
      }}
      role="progressbar"
      aria-busy="true"
      aria-label="loading..."
    />
  );
}
