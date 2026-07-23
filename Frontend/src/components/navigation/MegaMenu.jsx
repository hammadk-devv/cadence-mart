import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import Typography from "../ui/Typography";

const menuConfig = [
  {
    category: "Electronics",
    items: ["Smartwatches", "Earbuds", "Wireless Chargers", "Cameras"],
  },
  {
    category: "Fashion",
    items: ["Jackets", "T-Shirts", "Shoes", "Bags"],
  },
  {
    category: "Home & Living",
    items: ["Lounge Chairs", "Lamps", "Decorations", "Kitchenware"],
  },
];

export default function MegaMenu({ onMouseEnter, onMouseLeave, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute top-full left-0 right-0 w-full pt-2 z-50 pointer-events-auto ${className}`}
    >
      <div className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-2xl shadow-2xl p-7 grid grid-cols-1 md:grid-cols-4 gap-8">
        {menuConfig.map((group, index) => (
          <div key={index} className="flex flex-col gap-3">
            <Link
              to={`/shop?category=${encodeURIComponent(group.category)}`}
              className="group flex items-center justify-between pb-2 border-b border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors"
            >
              <Typography
                variant="h4"
                as="span"
                className="font-bold text-xs uppercase tracking-wider text-[var(--color-primary)] group-hover:text-[var(--color-primary-hover)]"
              >
                {group.category}
              </Typography>
              <ChevronRight className="w-3.5 h-3.5 text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all" />
            </Link>
            <ul className="flex flex-col gap-1.5 pt-1">
              {group.items.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={`/shop?search=${encodeURIComponent(item)}`}
                    className="group flex items-center justify-between text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-all duration-200 py-1"
                  >
                    <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Promotional Card Column */}
        <div className="bg-gradient-to-br from-[var(--color-bg-secondary)] to-emerald-50/50 dark:to-emerald-950/20 border border-[var(--color-border)] rounded-xl p-6 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[var(--color-primary)] text-white rounded-full">
                <Sparkles className="w-3 h-3" /> Special Offer
              </span>
            </div>
            <Typography
              variant="h4"
              className="text-[var(--color-text-primary)] mb-1.5 font-bold text-base"
            >
              Summer Collection
            </Typography>
            <Typography
              variant="body-sm"
              className="text-[var(--color-text-secondary)] text-xs leading-relaxed"
            >
              Up to 50% Off curated seasonal picks and bestsellers.
            </Typography>
          </div>
          <Link
            to="/shop?sort=price-asc"
            className="group inline-flex items-center gap-2 text-xs font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] pt-4"
          >
            <span>Explore Deals</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
