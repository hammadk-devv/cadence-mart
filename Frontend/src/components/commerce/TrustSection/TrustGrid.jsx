import TrustCard from "./TrustCard";
import TrustEmptyState from "./TrustEmptyState";

export default function TrustGrid({ items = [], variant = "standard" }) {
  if (items.length === 0) {
    return <TrustEmptyState />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <TrustCard key={item.id} item={item} variant={variant} />
      ))}
    </div>
  );
}
