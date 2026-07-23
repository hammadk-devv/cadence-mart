import { Link } from "react-router-dom";
import CampaignMedia from "./CampaignMedia";
import CampaignContent from "./CampaignContent";
import CampaignCTA from "./CampaignCTA";
import CampaignBadge from "./CampaignBadge";
import CampaignCountdown from "./CampaignCountdown";

export default function CampaignBanner({ item, className = "" }) {
  const layoutStyles =
    item.priority === "high"
      ? "md:col-span-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] min-h-[280px]"
      : "bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-[280px]";

  return (
    <Link
      to={item.link || "#"}
      className={`relative group rounded-[16px] overflow-hidden p-8 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] focus-ring no-underline hover:no-underline ${layoutStyles} ${className}`}
      style={{ textDecoration: "none" }}
      aria-label={`Campaign promotion: ${item.title}`}
    >
      {/* Media background image if provided */}
      <CampaignMedia src={item.image} alt={item.title} />

      {/* Top Banner Row */}
      <div className="flex justify-between items-start z-10 w-full gap-4">
        {item.badge && (
          <CampaignBadge variant={item.priority === "high" ? "secondary" : "primary"}>
            {item.badge}
          </CampaignBadge>
        )}
        {item.countdown && <CampaignCountdown />}
      </div>

      {/* Middle Banner Row */}
      <CampaignContent title={item.title} subtitle={item.subtitle} description={item.description} />

      {/* Bottom Banner Row */}
      {item.cta && (
        <div className="z-10 mt-6">
          <CampaignCTA
            label={item.cta}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          />
        </div>
      )}
    </Link>
  );
}
