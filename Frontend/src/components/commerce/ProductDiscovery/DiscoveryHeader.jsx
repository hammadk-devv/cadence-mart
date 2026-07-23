import Typography from "../../ui/Typography";

export default function DiscoveryHeader({
  title = "Shop All Products",
  description,
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-2 mb-8 ${className}`}>
      <Typography
        variant="h1"
        className="font-extrabold text-3xl md:text-4xl text-[var(--color-text-primary)]"
      >
        {title}
      </Typography>
      {description && <Typography variant="body-sm">{description}</Typography>}
    </div>
  );
}
