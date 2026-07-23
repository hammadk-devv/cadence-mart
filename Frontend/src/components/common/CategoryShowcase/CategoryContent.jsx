import { motion } from "framer-motion";
import Typography from "../../ui/Typography";

export default function CategoryContent({ title, description, className = "" }) {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 p-6 z-20 text-white flex flex-col gap-1 ${className}`}
    >
      <motion.div
        variants={{
          visible: { y: 0 },
          hover: { y: -6 },
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Typography variant="h3" as="h3" className="font-bold text-lg text-white">
          {title}
        </Typography>
      </motion.div>

      {description && (
        <motion.div
          variants={{
            visible: { opacity: 0.8, y: 0 },
            hover: { opacity: 1, y: -4 },
          }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Typography variant="body-sm" className="text-white/80 line-clamp-1 text-xs">
            {description}
          </Typography>
        </motion.div>
      )}

      <motion.div
        variants={{
          visible: { opacity: 0, y: 12 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-1 text-xs font-bold text-green-400 flex items-center gap-1"
      >
        Explore →
      </motion.div>
    </div>
  );
}
