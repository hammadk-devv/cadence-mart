import { motion } from "framer-motion";
import headphonesImg from "../../../assets/hero_banner_headphones.png";

export default function HeroMedia({ className = "" }) {
  const floatTransition = {
    y: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  return (
    <div className={`flex items-center justify-center relative ${className}`}>
      {/* Decorative colored glow backdrop */}
      <div className="absolute w-72 h-72 bg-[var(--color-ring)] rounded-full blur-3xl opacity-40 z-0" />

      {/* Animated Floating product wrapper */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={floatTransition}
        className="relative z-10 max-w-sm sm:max-w-md"
      >
        <img
          src={headphonesImg}
          alt="Premium headphones design mockup banner"
          className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(15,81,50,0.15)]"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>
    </div>
  );
}
