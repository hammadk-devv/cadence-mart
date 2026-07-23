import ProductCard from "./ProductCard";
import ProductEmptyState from "./ProductEmptyState";

export default function ProductGrid({ items = [] }) {
  if (items.length === 0) {
    return <ProductEmptyState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <ProductCard key={item._id} item={item} />
      ))}
    </div>
  );
}
