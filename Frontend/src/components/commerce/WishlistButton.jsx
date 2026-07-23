import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import IconButton from "../ui/IconButton";

export default function WishlistButton({ isFavorited = false, onClick, className = "" }) {
  return (
    <IconButton
      icon={() => (
        <motion.div
          animate={isFavorited ? { scale: [1, 1.35, 1] } : { scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <Heart className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
        </motion.div>
      )}
      variant={isFavorited ? "primary" : "outline"}
      onClick={onClick}
      label={isFavorited ? "Remove from wishlist" : "Add to wishlist"}
      className={`${
        isFavorited
          ? "bg-red-500 text-white hover:bg-red-600 border border-transparent"
          : "text-gray-400 hover:text-red-500"
      } ${className}`}
    />
  );
}
