import { motion } from "framer-motion";

export default function CategoryMedia({ src, alt, className = "" }) {
  return (
    <div className={`absolute inset-0 overflow-hidden w-full h-full ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        variants={{
          visible: { scale: 1 },
          hover: { scale: 1.05 },
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
