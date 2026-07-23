import { motion } from "framer-motion";
import Container from "../../ui/Container";
import { fadeVariants } from "../../../styles/motion";

export default function DiscoveryContainer({ children, className = "" }) {
  return (
    <Container size="xl" className={`py-8 md:py-12 ${className}`}>
      <motion.div variants={fadeVariants} initial="hidden" animate="visible">
        {children}
      </motion.div>
    </Container>
  );
}
