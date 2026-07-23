import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { fadeVariants } from "../../styles/motion";
import IconButton from "./IconButton";
import Typography from "./Typography";

export default function Drawer({
  isOpen,
  onClose,
  title,
  children,
  position = "right", // left, right
  className = "",
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const slideVariants = {
    hidden: { x: position === "right" ? "100%" : "-100%" },
    visible: {
      x: 0,
      transition: { type: "tween", duration: 0.3, ease: "easeOut" },
    },
    exit: {
      x: position === "right" ? "100%" : "-100%",
      transition: { type: "tween", duration: 0.25, ease: "easeIn" },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex overflow-hidden">
          {/* Backdrop */}
          <motion.div
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer Body */}
          <motion.div
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed top-0 bottom-0 ${
              position === "right" ? "right-0" : "left-0"
            } w-full max-w-sm bg-[var(--color-bg-primary)] border-${
              position === "right" ? "l" : "r"
            } border-[var(--color-border)] shadow-[var(--shadow-lg)] flex flex-col z-10 ${className}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)]">
              {title ? (
                <Typography variant="h4" as="h2">
                  {title}
                </Typography>
              ) : (
                <div />
              )}
              <IconButton
                icon={X}
                variant="ghost"
                size="sm"
                onClick={onClose}
                label="Close drawer"
              />
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto px-6 py-4 text-[var(--color-text-primary)]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
