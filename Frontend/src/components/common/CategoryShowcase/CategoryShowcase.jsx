import CategoryGrid from "./CategoryGrid";
import Container from "../../ui/Container";
import Typography from "../../ui/Typography";

import electronicsImg from "../../../assets/category_electronics.png";
import fashionImg from "../../../assets/category_fashion.png";
import homeImg from "../../../assets/category_home.png";

const categoriesConfig = [
  {
    id: 1,
    title: "Electronics",
    slug: "electronics",
    image: electronicsImg,
    description: "Sleek smartwatches, premium headphones, and gadgets.",
  },
  {
    id: 2,
    title: "Fashion",
    slug: "fashion",
    image: fashionImg,
    description: "Folded essential clothes, designer leather bags, and lifestyle items.",
  },
  {
    id: 3,
    title: "Home & Living",
    slug: "home",
    image: homeImg,
    description: "Minimal lounge chairs, designer lamps, and kitchenware.",
  },
];

export default function CategoryShowcase({ className = "" }) {
  return (
    <section
      id="explore-categories-section"
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
            Explore Categories
          </Typography>
          <Typography variant="body-sm">
            Discover premium, high-quality, and modern items handpicked to fit your lifestyle needs.
          </Typography>
        </div>

        {/* Content displays */}
        <CategoryGrid categories={categoriesConfig} />
      </Container>
    </section>
  );
}
