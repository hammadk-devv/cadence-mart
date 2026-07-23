import Badge from "../ui/Badge";

export default function DiscountBadge({ value, originalValue, className = "" }) {
  if (!value || !originalValue || originalValue <= value) return null;

  const percentage = Math.round(((originalValue - value) / originalValue) * 100);

  if (percentage <= 0) return null;

  return (
    <Badge variant="danger" className={className}>
      -{percentage}%
    </Badge>
  );
}
