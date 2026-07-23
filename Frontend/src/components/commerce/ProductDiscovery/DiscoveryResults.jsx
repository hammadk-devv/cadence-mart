import ProductGrid from "./ProductGrid";
import ProductGridSkeleton from "./ProductGridSkeleton";

export default function DiscoveryResults({ items = [], isLoading = false, view = "grid" }) {
  if (isLoading) {
    return <ProductGridSkeleton />;
  }

  return <ProductGrid items={items} view={view} />;
}
