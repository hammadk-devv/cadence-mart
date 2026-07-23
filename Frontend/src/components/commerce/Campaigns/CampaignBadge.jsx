import Badge from "../../ui/Badge";

export default function CampaignBadge({ children, variant = "primary", className = "" }) {
  return (
    <Badge
      variant={variant}
      size="sm"
      className={`w-fit uppercase text-[10px] tracking-wider ${className}`}
    >
      {children}
    </Badge>
  );
}
