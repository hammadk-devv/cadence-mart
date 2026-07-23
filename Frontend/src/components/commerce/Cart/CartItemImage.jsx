
export default function CartItemImage({ src, alt, className = "" }) {
  return (
    <div
      className={`w-24 h-24 sm:w-28 sm:h-28 border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-bg-secondary)] flex-shrink-0 select-none ${className}`}
    >
      <img
        src={src || "/placeholder.png"}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
