import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function NotificationBadge({
  count = 0,
  variant = "danger", // danger, primary
  className = "",
}) {
  const controls = useAnimation();

  useEffect(() => {
    if (count > 0) {
      controls.start({
        scale: [0.85, 1.05, 1],
        transition: { duration: 0.2, ease: "easeOut" },
      });
    }
  }, [count, controls]);

  if (count <= 0) return null;

  const displayCount = count > 99 ? "99+" : String(count);
  const isSingleDigit = displayCount.length === 1;

  // Single digits are a perfect 20px circle (w-5 h-5).
  // Double/triple digits scale horizontally as a pill with horizontal padding.
  const sizeClasses = isSingleDigit ? "w-5 h-5" : "h-5 px-1.5 min-w-5";

  const variantClasses =
    variant === "danger" ? "bg-red-600 text-white" : "bg-[var(--color-primary)] text-white";

  return (
    <motion.span
      animate={controls}
      className={`absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 flex items-center justify-center rounded-full text-[10px] font-semibold leading-none shadow-[0_2px_4px_rgba(0,0,0,0.15)] pointer-events-none select-none ${sizeClasses} ${variantClasses} ${className}`}
    >
      {displayCount}
    </motion.span>
  );
}
