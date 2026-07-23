import { Link } from "react-router-dom";
import TrustIcon from "./TrustIcon";
import TrustContent from "./TrustContent";
import TrustBadge from "./TrustBadge";

export default function TrustCard({ item, variant = "standard", className = "" }) {
  const isHorizontal = variant === "horizontal";

  const baseStyles =
    "bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-[16px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:border-gray-400 dark:hover:border-zinc-700 focus-ring block text-left";

  const variantStyles = {
    standard: "flex flex-col gap-3",
    compact: "flex flex-col gap-2 p-4",
    highlighted:
      "flex flex-col gap-3 border-l-4 border-l-[var(--color-primary)] border-[var(--color-border)]",
    horizontal: "flex gap-4 items-center",
  };

  const CardWrapper = item.link ? Link : "article";
  const wrapperProps = item.link ? { to: item.link } : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      aria-label={`Benefit: ${item.title}`}
    >
      <div className={`flex ${isHorizontal ? "flex-col" : "justify-between"} items-start gap-2`}>
        <div
          className={`p-2.5 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] flex items-center justify-center w-fit`}
        >
          <TrustIcon name={item.icon} />
        </div>
        {item.highlight && <TrustBadge variant="success">Assured</TrustBadge>}
      </div>

      <TrustContent title={item.title} description={item.description} />
    </CardWrapper>
  );
}
