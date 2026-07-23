import { Star, StarHalf } from "lucide-react";

export default function Rating({
  value = 0,
  max = 5,
  reviewCount,
  size = "md", // sm, md
  className = "",
}) {
  const stars = [];
  const fullStars = Math.floor(value);
  const hasHalf = value % 1 >= 0.5;

  const starSize = size === "sm" ? "w-3 h-3" : "w-4 h-4";

  for (let i = 1; i <= max; i++) {
    if (i <= fullStars) {
      stars.push(<Star key={i} className={`${starSize} fill-yellow-400 text-yellow-400`} />);
    } else if (i === fullStars + 1 && hasHalf) {
      stars.push(<StarHalf key={i} className={`${starSize} fill-yellow-400 text-yellow-400`} />);
    } else {
      stars.push(<Star key={i} className={`${starSize} text-gray-300`} />);
    }
  }

  return (
    <div
      className={`flex items-center gap-1.5 ${className}`}
      aria-label={`Rating: ${value} out of ${max}`}
    >
      <div className="flex">{stars}</div>
      {reviewCount !== undefined && (
        <span className="text-xs text-[var(--color-text-secondary)]">({reviewCount})</span>
      )}
    </div>
  );
}
