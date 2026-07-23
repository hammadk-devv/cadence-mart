import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { slideUpVariants } from "../../../styles/motion";
import ProductContext from "../../../context/Product/ProductContext.jsx";
import CartContext from "../../../context/Cart/CartContext.jsx";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";
import ProductActions from "./ProductActions";
import ProductBadges from "./ProductBadges";
import WishlistButton from "../WishlistButton";

export default function ProductCard({ item, showActions = true, view = "grid", className = "" }) {
  const { setProductId } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [isAdding, setIsAdding] = useState(false);
  const [isFav, setIsFav] = useState(false);

  React.useEffect(() => {
    const updateFavState = () => {
      try {
        const stored = localStorage.getItem("cadence_favorites");
        const favs = stored ? JSON.parse(stored) : [];
        setIsFav(favs.includes(item._id));
      } catch (e) {
        console.error(e);
      }
    };

    updateFavState();
    window.addEventListener("cadence_favorites_updated", updateFavState);
    return () => window.removeEventListener("cadence_favorites_updated", updateFavState);
  }, [item._id]);

  const handleCartAdd = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    try {
      await addToCart(item._id, "M");
    } finally {
      setIsAdding(false);
    }
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const stored = localStorage.getItem("cadence_favorites");
      let favs = stored ? JSON.parse(stored) : [];

      if (isFav) {
        favs = favs.filter((id) => id !== item._id);
      } else {
        favs.push(item._id);
      }

      localStorage.setItem("cadence_favorites", JSON.stringify(favs));
      window.dispatchEvent(new Event("cadence_favorites_updated"));
    } catch (err) {
      console.error(err);
    }
  };

  if (view === "list") {
    return (
      <motion.div
        variants={slideUpVariants}
        whileHover={{ y: -2, boxShadow: "var(--shadow-md)", borderColor: "var(--color-primary)" }}
        transition={{ duration: 0.2 }}
        className="w-full rounded-[var(--radius-lg)] border border-[var(--color-card-border)] overflow-hidden bg-[var(--color-card-bg)] p-4 transition-colors duration-300"
      >
        <Link
          to="/product"
          onClick={() => setProductId(item._id)}
          className={`flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between group focus-ring ${className}`}
          aria-label={`View details for ${item.name}`}
        >
          {/* Image & Badges */}
          <div className="relative w-full sm:w-44 h-40 flex-shrink-0 bg-[var(--color-bg-secondary)] rounded-[var(--radius-md)] overflow-hidden flex items-center justify-center">
            <ProductBadges
              price={item.price}
              originalPrice={item.originalPrice}
              stock={item.stock}
              className="absolute top-2 left-2 z-10"
            />
            <WishlistButton
              isFavorited={isFav}
              onClick={handleWishlistToggle}
              className="absolute top-2 right-2 z-10"
            />
            <ProductImage src={item.image[0]} alt={item.name} />
          </div>

          {/* Product Details & Description */}
          <div className="flex-1 flex flex-col gap-1.5 min-w-0">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider">
              <span>{item.category}</span>
              {item.brand && (
                <>
                  <span>•</span>
                  <span className="text-[var(--color-text-secondary)]">{item.brand}</span>
                </>
              )}
            </div>
            <h3 className="text-base font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors truncate">
              {item.name}
            </h3>
            <ProductRating value={item.rating || 4.5} reviewCount={item.reviewCount || 95} />
            <p className="text-xs text-[var(--color-text-secondary)] line-clamp-2 mt-1">
              {item.description ||
                "Premium craftsmanship engineered for modern daily lifestyle and performance."}
            </p>
          </div>

          {/* Price & Action Button */}
          <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-[var(--color-border)]">
            <ProductPrice value={item.price} originalValue={item.originalPrice} />
            {showActions && (
              <ProductActions
                onClick={handleCartAdd}
                isLoading={isAdding}
                isDisabled={item.stock <= 0}
                className="w-full sm:w-auto"
              />
            )}
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={slideUpVariants}
      whileHover={{ y: -6, boxShadow: "var(--shadow-md)", borderColor: "var(--color-primary)" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="h-full w-full flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-card-border)] overflow-hidden bg-[var(--color-card-bg)] transition-colors duration-300"
    >
      <Link
        to="/product"
        onClick={() => setProductId(item._id)}
        className={`group flex flex-col h-full relative p-4 focus-ring ${className}`}
        aria-label={`View details for ${item.name}`}
      >
        {/* Badges in top-left */}
        <ProductBadges
          price={item.price}
          originalPrice={item.originalPrice}
          stock={item.stock}
          className="absolute top-6 left-6 z-10"
        />

        {/* Wishlist in top-right */}
        <WishlistButton
          isFavorited={isFav}
          onClick={handleWishlistToggle}
          className="absolute top-6 right-6 z-10"
        />

        {/* Image */}
        <ProductImage src={item.image[0]} alt={item.name} />

        {/* Info Details */}
        <ProductInfo name={item.name} category={item.category} className="mb-2" />

        {/* Rating */}
        <ProductRating
          value={item.rating || 4.5}
          reviewCount={item.reviewCount || 95}
          className="mb-2"
        />

        {/* Price */}
        <ProductPrice value={item.price} originalValue={item.originalPrice} className="mb-4" />

        {/* Cart Action button */}
        {showActions && (
          <div className="mt-auto">
            <ProductActions
              onClick={handleCartAdd}
              isLoading={isAdding}
              isDisabled={item.stock <= 0}
            />
          </div>
        )}
      </Link>
    </motion.div>
  );
}
