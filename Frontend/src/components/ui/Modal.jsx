import { useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { fadeVariants, scaleVariants } from "../../styles/motion";
import IconButton from "./IconButton";
import Typography from "./Typography";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md", // sm, md, lg
  className = "",
}) {
  // Lock scroll on open
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

  const sizes = {
    sm: "max-w-md",
    md: "max-w-xl",
    lg: "max-w-4xl",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            variants={scaleVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "modal-title" : undefined}
            className={`relative w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)] overflow-hidden z-10 ${sizes[size]} ${className}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)]">
              {title ? (
                <Typography id="modal-title" variant="h3" as="h2">
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
                label="Close modal"
              />
            </div>

            {/* Content */}
            <div className="px-6 py-6 overflow-y-auto max-h-[70vh] text-[var(--color-text-primary)]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
