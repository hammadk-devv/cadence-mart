import Typography from "../../ui/Typography";

export default function PaginationInfo({ page, pageSize, total, className = "" }) {
  const start = Math.min((page - 1) * pageSize + 1, total);
  const end = Math.min(page * pageSize, total);

  return (
    <Typography
      variant="body-sm"
      className={`text-[var(--color-text-secondary)] font-semibold ${className}`}
    >
      Showing{" "}
      <span className="text-[var(--color-text-primary)]">
        {total === 0 ? 0 : `${start}–${end}`}
      </span>{" "}
      of <span className="text-[var(--color-text-primary)]">{total}</span>{" "}
      {total === 1 ? "product" : "products"}
    </Typography>
  );
}
