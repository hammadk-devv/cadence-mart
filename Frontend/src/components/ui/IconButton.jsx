import { motion } from "framer-motion";
import { buttonPressVariants } from "../../styles/motion";
import Spinner from "./Spinner";

export default function IconButton({
  icon: Icon,
  variant = "outline",
  size = "md",
  isLoading = false,
  isDisabled = false,
  label, // essential for screen readers
  className = "",
  onClick,
  ...props
}) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-full transition-colors focus-ring disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] border border-transparent",
    outline:
      "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)]",
    ghost:
      "bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] border border-transparent",
  };

  const sizes = {
    sm: "p-1.5 text-xs",
    md: "p-2.5 text-sm",
    lg: "p-3 text-base",
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={isDisabled || isLoading}
      aria-label={label}
      variants={buttonPressVariants}
      whileHover={isDisabled || isLoading ? undefined : "hover"}
      whileTap={isDisabled || isLoading ? undefined : "tap"}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {isLoading ? <Spinner size="sm" /> : <Icon className="w-4 h-4" />}
    </motion.button>
  );
}
