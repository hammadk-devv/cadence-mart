import Button from "../../ui/Button";

export default function CampaignCTA({ label = "Shop Collection", onClick, className = "" }) {
  return (
    <Button
      variant="outline"
      size="md"
      onClick={onClick}
      className={`bg-white text-[var(--color-primary)] hover:bg-gray-100 border-none font-bold rounded-full w-fit shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow ${className}`}
    >
      {label}
    </Button>
  );
}
