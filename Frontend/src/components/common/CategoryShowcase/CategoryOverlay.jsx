import { motion } from "framer-motion";

export default function CategoryOverlay({ className = "" }) {
  return (
    <motion.div
      variants={{
        visible: { opacity: 1 },
        hover: { opacity: 0.75 },
      }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10 ${className}`}
    />
  );
}
