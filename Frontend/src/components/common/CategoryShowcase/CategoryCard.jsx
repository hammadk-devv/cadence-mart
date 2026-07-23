import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CategoryMedia from "./CategoryMedia";
import CategoryOverlay from "./CategoryOverlay";
import CategoryContent from "./CategoryContent";

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 1, boxShadow: "var(--shadow-sm)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    boxShadow: "var(--shadow-sm)",
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "var(--shadow-lg)",
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

export default function CategoryCard({ title, slug, image, description, className = "" }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
      className={`relative aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden cursor-pointer border border-[var(--color-border)] ${className}`}
    >
      <Link
        to={`/shop?category=${slug}`}
        className="group w-full h-full block relative"
        aria-label={`View category: ${title}`}
      >
        <CategoryMedia src={image} alt={title} />
        <CategoryOverlay />
        <CategoryContent title={title} description={description} />
      </Link>
    </motion.div>
  );
}
