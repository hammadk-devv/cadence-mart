import { motion } from "framer-motion";
import { slideUpVariants } from "../../../styles/motion";
import Typography from "../../ui/Typography";

const stats = [
  { value: "Free", label: "Delivery" },
  { value: "24/7", label: "Support" },
  { value: "30-Day", label: "Guarantee" },
];

export default function HeroStats({ className = "" }) {
  return (
    <motion.div variants={slideUpVariants} className={`grid grid-cols-3 gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col">
          <Typography variant="h3" className="font-extrabold text-[var(--color-primary)]">
            {stat.value}
          </Typography>
          <Typography variant="body-sm" className="text-xs">
            {stat.label}
          </Typography>
        </div>
      ))}
    </motion.div>
  );
}
