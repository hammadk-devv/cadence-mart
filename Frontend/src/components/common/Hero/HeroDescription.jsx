import { motion } from "framer-motion";
import { slideUpVariants } from "../../../styles/motion";
import Typography from "../../ui/Typography";

export default function HeroDescription({ children, className = "" }) {
  return (
    <motion.div variants={slideUpVariants}>
      <Typography
        variant="body"
        className={`text-base sm:text-lg text-[var(--color-text-secondary)] max-w-lg leading-relaxed ${className}`}
      >
        {children}
      </Typography>
    </motion.div>
  );
}
