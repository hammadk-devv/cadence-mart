import Card from "../ui/Card";
import Typography from "../ui/Typography";

export default function CategoryCard({ name, image, itemCount, onClick, className = "" }) {
  return (
    <Card
      isHoverable
      onClick={onClick}
      className={`flex flex-col items-center text-center p-6 bg-white hover:border-[var(--color-primary)] transition-colors ${className}`}
    >
      <div className="w-16 h-16 rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center overflow-hidden mb-4 border border-[var(--color-border)]">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div className="w-full h-full bg-[var(--color-primary)] opacity-10" />
        )}
      </div>
      <Typography variant="h4" className="mb-1">
        {name}
      </Typography>
      {itemCount !== undefined && <Typography variant="body-sm">{itemCount} Items</Typography>}
    </Card>
  );
}
