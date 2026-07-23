import { motion } from "framer-motion";
import Skeleton from "../../ui/Skeleton";
import { fadeVariants } from "../../../styles/motion";

export default function ProductGridSkeleton() {
  return (
    <motion.div
      variants={fadeVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div
          key={i}
          className="flex flex-col p-4 bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-[var(--radius-lg)] gap-3"
        >
          <Skeleton variant="rect" width="100%" height="200px" />
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="rect" width="100%" height="36px" />
        </div>
      ))}
    </motion.div>
  );
}
