import Typography from "../../ui/Typography";

export default function ProductInfo({ name, category, className = "" }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {category && (
        <Typography
          variant="caption"
          className="text-[var(--color-text-secondary)] font-bold text-[10px]"
        >
          {category}
        </Typography>
      )}
      <Typography
        variant="body"
        className="font-semibold line-clamp-1 text-[var(--color-text-primary)]"
      >
        {name}
      </Typography>
    </div>
  );
}
