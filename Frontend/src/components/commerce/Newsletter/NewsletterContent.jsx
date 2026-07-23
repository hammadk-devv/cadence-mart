import Typography from "../../ui/Typography";

export default function NewsletterContent({ title, subtitle, description, className = "" }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {subtitle && (
        <Typography
          variant="caption"
          className="text-[var(--color-primary)] font-extrabold text-[10px] uppercase tracking-widest leading-none"
        >
          {subtitle}
        </Typography>
      )}
      <Typography
        variant="h2"
        as="h2"
        className="font-extrabold text-2xl md:text-3xl text-[var(--color-text-primary)] tracking-tight"
      >
        {title}
      </Typography>
      {description && <Typography variant="body-sm">{description}</Typography>}
    </div>
  );
}
