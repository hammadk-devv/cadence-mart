import { motion } from "framer-motion";
import { slideUpVariants } from "../../../styles/motion";
import Button from "../../ui/Button";

export default function HeroActions({ onPrimaryClick, onSecondaryClick, className = "" }) {
  return (
    <motion.div
      variants={slideUpVariants}
      className={`flex flex-col sm:flex-row gap-4 ${className}`}
    >
      <Button variant="primary" size="lg" onClick={onPrimaryClick} className="w-full sm:w-auto">
        Shop Collection
      </Button>
      <Button variant="outline" size="lg" onClick={onSecondaryClick} className="w-full sm:w-auto">
        Learn More
      </Button>
    </motion.div>
  );
}
