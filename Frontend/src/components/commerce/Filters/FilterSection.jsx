import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Typography from "../../ui/Typography";

export default function FilterSection({ title, children, defaultOpen = true, className = "" }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <fieldset
      className={`border-b border-[var(--color-border)] py-4 flex flex-col gap-3 ${className}`}
    >
      <legend
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center cursor-pointer select-none"
      >
        <Typography
          variant="body"
          className="font-bold text-xs uppercase tracking-wider text-[var(--color-text-primary)]"
        >
          {title}
        </Typography>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-[var(--color-text-secondary)]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[var(--color-text-secondary)]" />
        )}
      </legend>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden flex flex-col gap-2 mt-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </fieldset>
  );
}
