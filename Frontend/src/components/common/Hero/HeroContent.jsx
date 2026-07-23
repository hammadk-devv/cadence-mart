import HeroTrustBar from "./HeroTrustBar";
import HeroHeadline from "./HeroHeadline";
import HeroDescription from "./HeroDescription";
import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";

export default function HeroContent({ onShopClick, onLearnClick, className = "" }) {
  return (
    <div className={`flex flex-col gap-3 md:gap-4 justify-center py-1 ${className}`}>
      <HeroTrustBar />
      <HeroHeadline>Elevate Your Lifestyle. Curated Premium Essentials.</HeroHeadline>
      <HeroDescription>
        Experience premium craftsmanship and modern styling with our curated selection of
        headphones, clothing, and home accessories. Engineered to fit your daily routine.
      </HeroDescription>
      <HeroActions onPrimaryClick={onShopClick} onSecondaryClick={onLearnClick} />
      <HeroStats className="border-t border-[var(--color-border)] pt-4 mt-1" />
    </div>
  );
}
