import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../ProductShowcase/ProductCard";
import ProductGridEmptyState from "./ProductGridEmptyState";
import { staggerContainerVariants } from "../../../styles/motion";

function ProductGrid({ items = [], view = "grid" }) {
  if (items.length === 0) {
    return <ProductGridEmptyState />;
  }

  return (
    <motion.div
      layout
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
      className={
        view === "list"
          ? "flex flex-col gap-4"
          : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      }
    >
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <motion.div
            key={item._id}
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            <ProductCard item={item} view={view} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export default React.memo(ProductGrid);
