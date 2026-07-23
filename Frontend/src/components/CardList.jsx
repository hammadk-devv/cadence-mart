import { useContext, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import "./CardList.css";
import Card from "./Card";
import ProductContext from "../context/Product/ProductContext.jsx";
import HomePageShimmer from "./HomePageShimmer.jsx";
import { staggerContainerVariants, slideUpVariants } from "../styles/motion";

function CardList({ category, sortItem }) {
  const context = useContext(ProductContext) || {};
  const { setFilteredItems = () => {}, product = [], sortCategory = [] } = context;
  const key = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const filteredData = useMemo(() => {
    return (product || [])
      .filter((item) => {
        if (category === "Women") {
          return item.gender === "women";
        }
        if (category === "Men") {
          return item.gender === "men";
        }
        if (category === "Kids") {
          return item.gender === "kids";
        }
        return true;
      })
      .filter((item) => {
        if (sortCategory.length > 0) {
          return sortCategory.some(
            (sortItem) => sortItem.toLowerCase() === (item.subcategory || "").toLowerCase()
          );
        }
        return true;
      })
      .sort((a, b) => {
        switch (sortItem) {
          case "Price (Low to High)":
            return a.price - b.price;
          case "Price (High to Low)":
            return b.price - a.price;
          case "Ratings": {
            const ratingDiff = (b.rating || 0) - (a.rating || 0);
            if (ratingDiff !== 0) return ratingDiff;
            return (b.reviewCount || 0) - (a.reviewCount || 0);
          }
          case "Relevance":
          default: {
            const idA = parseInt((a._id || "").replace("prod-", ""), 10) || 0;
            const idB = parseInt((b._id || "").replace("prod-", ""), 10) || 0;
            return idA - idB;
          }
        }
      });
  }, [product, category, sortCategory, sortItem]);

  const displayedData = useMemo(() => {
    return filteredData.slice(0, 20);
  }, [filteredData]);

  useEffect(() => {
    setFilteredItems(displayedData.length);
  }, [displayedData.length, setFilteredItems]);

  const loding = !product || product.length === 0;

  if (!loding && displayedData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-lg)] max-w-2xl mx-auto my-8">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4 text-[var(--color-primary)]">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
          No Products Found
        </h3>
        <p className="text-[var(--color-text-secondary)] mb-6 max-w-md">
          We couldn&apos;t find any products in this collection matching your active filter
          criteria. Try adjusting your sidebar selections or click below to reset.
        </p>
        <button
          type="button"
          onClick={() => {
            window.location.reload();
          }}
          className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold py-2.5 px-6 rounded-[var(--radius-md)] transition-colors focus-ring"
        >
          Browse All Products
        </button>
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
      className="card-container"
    >
      {loding
        ? key.map((item) => (
            <motion.div key={item} variants={slideUpVariants}>
              <HomePageShimmer />
            </motion.div>
          ))
        : displayedData.map((item) => (
            <motion.div key={item._id} variants={slideUpVariants}>
              <Card item={item} />
            </motion.div>
          ))}
    </motion.div>
  );
}

export default CardList;
