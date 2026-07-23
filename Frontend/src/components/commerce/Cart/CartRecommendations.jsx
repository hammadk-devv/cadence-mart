import ProductCard from "../ProductCard";
import Typography from "../../ui/Typography";

export default function CartRecommendations({ products = [] }) {
  const suggestions = products.slice(0, 4);

  if (suggestions.length === 0) return null;

  return (
    <div className="py-8 border-t border-[var(--color-border)] mt-12">
      <Typography variant="h3" className="font-extrabold mb-6 text-[var(--color-text-primary)]">
        You May Also Like
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {suggestions.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
