import Typography from "../ui/Typography";

export default function DashboardHeader({ title, description }) {
  return (
    <div className="border-b border-[var(--color-border)] pb-4 mb-6 select-none">
      <Typography variant="h2" as="h1" className="font-extrabold text-[var(--color-text-primary)]">
        {title}
      </Typography>
      {description && (
        <Typography
          variant="body-xs"
          className="text-[var(--color-text-secondary)] mt-1 font-semibold uppercase tracking-wider"
        >
          {description}
        </Typography>
      )}
    </div>
  );
}
