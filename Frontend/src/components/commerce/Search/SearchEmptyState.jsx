import { motion } from "framer-motion";
import Typography from "../../ui/Typography";
import { slideUpVariants } from "../../../styles/motion";

export default function SearchEmptyState({ query = "" }) {
  return (
    <motion.div
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center py-16 text-center bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8"
    >
      <Typography variant="h4" className="mb-2 text-[var(--color-danger)]">
        No Search Results Found
      </Typography>
      <Typography variant="body-sm">
        We couldn&apos;t find any products matching &quot;{query}&quot;. Try checking your spelling
        or adjusting your filters.
      </Typography>
    </motion.div>
  );
}
