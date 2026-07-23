import Typography from "../../ui/Typography";

export default function BrandContent({ name, description, className = "" }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <Typography variant="body" className="font-bold text-sm text-[var(--color-text-primary)]">
        {name}
      </Typography>
      {description && (
        <Typography variant="body-sm" className="text-xs">
          {description}
        </Typography>
      )}
    </div>
  );
}
