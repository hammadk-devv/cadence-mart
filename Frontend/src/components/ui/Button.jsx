import { motion } from "framer-motion";
import { buttonPressVariants } from "../../styles/motion";
import Spinner from "./Spinner";

export default function Button({
  children,
  variant = "primary", // primary, secondary, outline, text, danger
  size = "md", // sm, md, lg
  isLoading = false,
  isDisabled = false,
  className = "",
  type = "button",
  onClick,
  ...props
}) {
  const baseStyle =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 ease-in-out focus-ring disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants = {
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] border border-transparent shadow-sm hover:shadow-md",
    secondary:
      "bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-hover)] border border-transparent shadow-sm hover:shadow-md",
    outline:
      "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] hover:border-gray-400",
    text: "bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] border border-transparent",
    danger:
      "bg-[var(--color-danger)] text-white hover:bg-red-700 border border-transparent shadow-sm",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs rounded-[var(--radius-md)] min-h-[36px]",
    md: "px-5 py-2.5 text-sm font-semibold rounded-[var(--radius-md)] min-h-[42px]",
    lg: "px-6 py-3 text-base font-semibold rounded-[var(--radius-lg)] min-h-[48px]",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      variants={buttonPressVariants}
      whileHover={isDisabled || isLoading ? undefined : "hover"}
      whileTap={isDisabled || isLoading ? undefined : "tap"}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {isLoading && <Spinner size="sm" className="mr-2" />}
      {children}
    </motion.button>
  );
}
