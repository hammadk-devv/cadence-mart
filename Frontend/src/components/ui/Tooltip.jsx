import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { fadeVariants } from "../../styles/motion";

export default function Tooltip({
  children,
  content,
  position = "top", // top, bottom, left, right
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(false);

  const positionStyles = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="tooltip"
            className={`absolute z-50 px-2 py-1 text-xs text-white bg-gray-900 rounded-[var(--radius-sm)] shadow-[var(--shadow-sm)] whitespace-nowrap pointer-events-none ${positionStyles[position]} ${className}`}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
