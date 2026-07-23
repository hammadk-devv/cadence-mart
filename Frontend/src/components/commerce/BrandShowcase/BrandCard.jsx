import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import BrandContent from "./BrandContent";
import BrandCTA from "./BrandCTA";
import Badge from "../../ui/Badge";

export default function BrandCard({ item, variant = "logo-only", className = "" }) {
  if (!item) return null;
  const isLogoOnly = variant === "logo-only";
  const isFeatured = variant === "featured";

  const baseStyles =
    "group flex flex-col items-center justify-center bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-[16px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:border-gray-400 dark:hover:border-zinc-700 focus-ring relative text-center";

  const layoutStyles = isLogoOnly ? "h-[80px]" : "h-auto gap-4";

  return (
    <Link
      to={`/shop?brand=${item.slug}`}
      className={`${baseStyles} ${layoutStyles} ${className}`}
      aria-label={`View products from brand: ${item.name}`}
    >
      {/* Verified badge in top-right for featured/description cards */}
      {!isLogoOnly && item.verified && (
        <Badge variant="info" className="absolute top-3 right-3 text-[8px] px-1.5 py-0">
          Verified
        </Badge>
      )}

      {/* Brand logo SVG */}
      <BrandLogo name={item.name} />

      {/* Description / Content layout slots */}
      {!isLogoOnly && (
        <BrandContent name={item.name} description={item.description} className="mt-1" />
      )}

      {/* CTA triggers */}
      {isFeatured && (
        <BrandCTA
          label="Shop Brand ➔"
          className="mt-2 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors"
        />
      )}
    </Link>
  );
}
