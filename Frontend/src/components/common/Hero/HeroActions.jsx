import { motion } from "framer-motion";
import { slideUpVariants } from "../../../styles/motion";
import Button from "../../ui/Button";

export default function HeroActions({ onPrimaryClick, onSecondaryClick, className = "" }) {
  return (
    <motion.div variants={slideUpVariants} className={`flex flex-wrap gap-4 ${className}`}>
      <Button variant="primary" size="lg" onClick={onPrimaryClick}>
        Shop Collection
      </Button>
      <Button variant="outline" size="lg" onClick={onSecondaryClick}>
        Learn More
      </Button>
    </motion.div>
  );
}
