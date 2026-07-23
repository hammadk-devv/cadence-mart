import { motion } from "framer-motion";
import { staggerContainerVariants } from "../../../styles/motion";
import HeroContent from "./HeroContent";
import HeroMedia from "./HeroMedia";
import Container from "../../ui/Container";

export default function Hero({ onShopClick, onLearnClick, className = "" }) {
  return (
    <section
      className={`w-full overflow-hidden bg-gradient-to-b from-white to-[var(--color-bg-secondary)] border-b border-gray-200 dark:border-zinc-800 pt-4 md:pt-6 pb-8 lg:pb-10 ${className}`}
    >
      <Container size="xl">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Text grid space */}
          <HeroContent
            onShopClick={onShopClick}
            onLearnClick={onLearnClick}
            className="lg:col-span-7"
          />

          {/* Media grid space */}
          <HeroMedia className="lg:col-span-5" />
        </motion.div>
      </Container>
    </section>
  );
}
