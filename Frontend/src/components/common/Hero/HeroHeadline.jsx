import { motion } from "framer-motion";
import { slideUpVariants } from "../../../styles/motion";
import Typography from "../../ui/Typography";

export default function HeroHeadline({ children, className = "" }) {
  return (
    <motion.div variants={slideUpVariants}>
      <Typography
        variant="h1"
        className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[var(--color-text-primary)] leading-tight ${className}`}
      >
        {children}
      </Typography>
    </motion.div>
  );
}
