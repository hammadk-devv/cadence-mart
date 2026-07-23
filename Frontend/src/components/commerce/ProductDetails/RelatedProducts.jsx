import ProductCard from "../ProductCard";
import Typography from "../../ui/Typography";

export default function RelatedProducts({ products = [], category = "", currentId }) {
  const recommendations = products
    .filter((p) => p.category === category && p._id !== currentId)
    .slice(0, 4);

  if (recommendations.length === 0) return null;

  return (
    <div className="py-6 border-t border-[var(--color-border)] my-6">
      <Typography variant="h3" className="font-extrabold mb-6 text-[var(--color-text-primary)]">
        Related Products
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {recommendations.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
