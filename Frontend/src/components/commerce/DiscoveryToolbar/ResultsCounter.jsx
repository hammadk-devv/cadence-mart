import Typography from "../../ui/Typography";

export default function ResultsCounter({ count = 0, className = "" }) {
  return (
    <Typography
      variant="body-sm"
      className={`text-[var(--color-text-secondary)] font-semibold ${className}`}
    >
      Showing {count} {count === 1 ? "product" : "products"}
    </Typography>
  );
}
