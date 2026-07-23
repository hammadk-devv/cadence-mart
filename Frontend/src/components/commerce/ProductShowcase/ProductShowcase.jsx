import { useContext, useMemo } from "react";
import ProductContext from "../../../context/Product/ProductContext.jsx";
import ProductGrid from "./ProductGrid";
import ProductSkeleton from "./ProductSkeleton";
import Container from "../../ui/Container";
import Typography from "../../ui/Typography";

const MOCK_PRODUCTS = [
  {
    _id: "mock-1",
    name: "Classic Leather Jacket",
    brand: "Heritage Wear",
    price: 189,
    originalPrice: 249,
    rating: 4.8,
    reviews: 124,
    featured: true,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80",
    stock: 12,
  },
  {
    _id: "mock-2",
    name: "Active Noise-Cancelling Headphones",
    brand: "SonicTech",
    price: 249,
    originalPrice: 299,
    rating: 4.6,
    reviews: 89,
    featured: true,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
    stock: 8,
  },
  {
    _id: "mock-3",
    name: "Minimalist Leather Watch",
    brand: "Tempo",
    price: 129,
    originalPrice: 159,
    rating: 4.5,
    reviews: 56,
    featured: true,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
    stock: 15,
  },
  {
    _id: "mock-4",
    name: "Ergonomic Office Chair",
    brand: "ComfortSpace",
    price: 349,
    originalPrice: 429,
    rating: 4.7,
    reviews: 210,
    featured: true,
    image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=600&auto=format&fit=crop&q=80",
    stock: 5,
  },
];

export default function ProductShowcase({
  title = "Featured Products",
  subtitle = "Our top picks curated for your style",
  className = "",
}) {
  const { product = [] } = useContext(ProductContext);

  const featuredItems = useMemo(() => {
    const list = product || [];
    if (list.length > 0) {
      const featured = list.filter((p) => p.featured).slice(0, 4);
      return featured.length > 0 ? featured : list.slice(0, 4);
    }
    return MOCK_PRODUCTS;
  }, [product]);

  const loading = !product || product.length === 0;

  return (
    <section
      className={`w-full py-6 lg:py-8 bg-[var(--color-bg-primary)] border-b border-gray-200 dark:border-zinc-800 ${className}`}
    >
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6 lg:mb-8 flex flex-col gap-2">
          <Typography
            variant="h2"
            as="h2"
            className="font-extrabold text-2xl md:text-3xl text-[var(--color-text-primary)]"
          >
            {title}
          </Typography>
          {subtitle && <Typography variant="body-sm">{subtitle}</Typography>}
        </div>

        {/* Product content displays */}
        {loading ? <ProductSkeleton /> : <ProductGrid items={featuredItems} />}
      </Container>
    </section>
  );
}
