import BrandCard from "./BrandCard";
import BrandEmptyState from "./BrandEmptyState";

export default function BrandGrid({ items = [], variant = "logo-only" }) {
  if (items.length === 0) {
    return <BrandEmptyState />;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {items.map((item) => (
        <BrandCard key={item.id} item={item} variant={variant} />
      ))}
    </div>
  );
}
