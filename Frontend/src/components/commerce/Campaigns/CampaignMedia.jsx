
export default function CampaignMedia({ src, alt, className = "" }) {
  if (!src) return null;

  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden z-0 select-none pointer-events-none ${className}`}
    >
      <img
        src={src}
        alt={alt || "Campaign backdrop image"}
        className="w-full h-full object-cover opacity-25 scale-105 group-hover:scale-100 transition-transform duration-500"
        loading="lazy"
      />
    </div>
  );
}
