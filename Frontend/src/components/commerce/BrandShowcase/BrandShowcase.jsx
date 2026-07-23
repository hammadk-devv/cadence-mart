import BrandGrid from "./BrandGrid";
import Container from "../../ui/Container";

const brandsConfig = [
  {
    id: 1,
    name: "Apple",
    slug: "apple",
    description: "Consumer electronics and smart devices",
    verified: true,
  },
  {
    id: 2,
    name: "Nike",
    slug: "nike",
    description: "Premium athletic apparel and footwear",
    verified: true,
  },
  { id: 3, name: "Sony", slug: "sony", description: "Studio acoustics and cinematic cameras" },
  {
    id: 4,
    name: "Samsung",
    slug: "samsung",
    description: "Innovative mobile technology and displays",
  },
  {
    id: 5,
    name: "Adidas",
    slug: "adidas",
    description: "Sportswear accessories and lifestyle garments",
  },
];

export default function BrandShowcase({ variant = "logo-only", className = "" }) {
  return (
    <section
      className={`w-full py-6 lg:py-8 bg-[var(--color-bg-primary)] border-b border-gray-200 dark:border-zinc-800 ${className}`}
    >
      <Container size="xl">
        <BrandGrid items={brandsConfig} variant={variant} />
      </Container>
    </section>
  );
}
