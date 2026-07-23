import Typography from "../../ui/Typography";

export default function TrustContent({ title, description, className = "" }) {
  return (
    <div className={`flex flex-col gap-0.5 ${className}`}>
      <Typography variant="body" className="font-bold text-sm text-[var(--color-text-primary)]">
        {title}
      </Typography>
      <Typography variant="body-sm" className="text-xs leading-normal">
        {description}
      </Typography>
    </div>
  );
}
