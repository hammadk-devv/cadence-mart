import Badge from "../../ui/Badge";

export default function TrustBadge({ children, variant = "primary", className = "" }) {
  return (
    <Badge
      variant={variant}
      size="sm"
      className={`text-[9px] px-1.5 py-0 leading-none ${className}`}
    >
      {children}
    </Badge>
  );
}
