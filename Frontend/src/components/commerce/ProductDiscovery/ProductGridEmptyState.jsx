import { motion } from "framer-motion";
import Typography from "../../ui/Typography";
import { slideUpVariants } from "../../../styles/motion";

export default function ProductGridEmptyState() {
  return (
    <motion.div
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center py-16 text-center bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8"
    >
      <Typography variant="h4" className="mb-2">
        No Products Found
      </Typography>
      <Typography variant="body-sm">
        We couldn&apos;t find any products matching your catalog selection. Try removing active
        filters or browsing another category.
      </Typography>
    </motion.div>
  );
}
