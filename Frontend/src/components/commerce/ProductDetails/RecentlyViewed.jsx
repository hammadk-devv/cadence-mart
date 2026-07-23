import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import Typography from "../../ui/Typography";

export default function RecentlyViewed({ products = [], currentId }) {
  const [historyItems, setHistoryItems] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cadence_viewed_products");
      let ids = stored ? JSON.parse(stored) : [];

      const history = ids
        .map((id) => products.find((p) => p._id === id))
        .filter((p) => p && p._id !== currentId)
        .slice(0, 4);

      setHistoryItems(history);

      if (currentId) {
        ids = ids.filter((id) => id !== currentId);
        ids.unshift(currentId);
        localStorage.setItem("cadence_viewed_products", JSON.stringify(ids.slice(0, 10)));
      }
    } catch (e) {
      console.error("Failed to parse recently viewed history", e);
    }
  }, [products, currentId]);

  if (historyItems.length === 0) return null;

  return (
    <div className="py-6 border-t border-[var(--color-border)] my-6">
      <Typography variant="h3" className="font-extrabold mb-6 text-[var(--color-text-primary)]">
        Recently Viewed
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {historyItems.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
