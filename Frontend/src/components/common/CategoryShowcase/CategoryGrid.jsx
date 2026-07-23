import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import CategoryEmptyState from "./CategoryEmptyState";
import { staggerContainerVariants } from "../../../styles/motion";

export default function CategoryGrid({ categories = [] }) {
  if (categories.length === 0) {
    return <CategoryEmptyState />;
  }

  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {categories.map((cat) => (
        <CategoryCard
          key={cat.id}
          id={cat.id}
          title={cat.title}
          slug={cat.slug}
          image={cat.image}
          description={cat.description}
        />
      ))}
    </motion.div>
  );
}
