import { motion } from "framer-motion";
import { slideUpVariants } from "../../styles/motion";

export default function Card({
  children,
  className = "",
  isHoverable = false,
  isAnimated = false,
  onClick,
  ...props
}) {
  const baseStyle =
    "bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-sm)] transition-shadow";
  const hoverStyle = isHoverable ? "hover:shadow-[var(--shadow-md)] cursor-pointer" : "";

  if (isAnimated) {
    return (
      <motion.div
        variants={slideUpVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClick}
        className={`${baseStyle} ${hoverStyle} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div onClick={onClick} className={`${baseStyle} ${hoverStyle} ${className}`} {...props}>
      {children}
    </div>
  );
}
