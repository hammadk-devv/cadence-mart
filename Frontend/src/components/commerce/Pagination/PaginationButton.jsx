import { motion } from "framer-motion";
import { buttonPressVariants } from "../../../styles/motion";

export default function PaginationButton({
  children,
  onClick,
  isActive = false,
  isDisabled = false,
  ariaLabel,
  className = "",
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      aria-current={isActive ? "page" : undefined}
      variants={buttonPressVariants}
      whileHover={isDisabled ? undefined : "hover"}
      whileTap={isDisabled ? undefined : "tap"}
      className={`min-w-[44px] min-h-[44px] flex items-center justify-center border rounded-[var(--radius-md)] text-xs font-bold transition-all focus-ring ${
        isActive
          ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white"
          : "bg-[var(--color-bg-primary)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[var(--color-bg-primary)] disabled:hover:text-[var(--color-text-secondary)]"
      } ${className}`}
    >
      {children}
    </motion.button>
  );
}
