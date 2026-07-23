import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { slideUpVariants } from "../../../styles/motion";
import Typography from "../../ui/Typography";

export default function HeroTrustBar({ className = "" }) {
  return (
    <motion.div
      variants={slideUpVariants}
      className={`flex items-center gap-2 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-full)] px-4 py-1.5 w-fit ${className}`}
    >
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <Typography variant="body-sm" className="font-semibold text-xs leading-none">
        Trusted by 10k+ shoppers | 4.9 Rating
      </Typography>
    </motion.div>
  );
}
