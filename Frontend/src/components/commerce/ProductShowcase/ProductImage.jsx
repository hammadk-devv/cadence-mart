
export default function ProductImage({ src, alt, className = "" }) {
  return (
    <div
      className={`aspect-square w-full rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] flex items-center justify-center overflow-hidden mb-3 border border-[var(--color-card-border)] relative ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-[var(--color-bg-secondary)]" />
      )}
    </div>
  );
}
