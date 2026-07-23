import Typography from "../../ui/Typography";

export default function CampaignContent({ title, subtitle, description, className = "" }) {
  return (
    <div className={`flex flex-col gap-2 z-10 text-white select-none ${className}`}>
      {subtitle && (
        <Typography
          variant="caption"
          className="text-white/80 font-extrabold text-[10px] uppercase tracking-widest leading-none"
        >
          {subtitle}
        </Typography>
      )}
      <Typography
        variant="h2"
        as="h3"
        className="font-black text-2xl md:text-3xl text-white tracking-tight"
      >
        {title}
      </Typography>
      {description && (
        <Typography variant="body-sm" className="text-white/80 text-xs max-w-md leading-relaxed">
          {description}
        </Typography>
      )}
    </div>
  );
}
