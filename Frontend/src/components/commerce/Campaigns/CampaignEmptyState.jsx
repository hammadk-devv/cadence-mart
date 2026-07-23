import Typography from "../../ui/Typography";

export default function CampaignEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-lg)]">
      <Typography variant="h4" className="mb-2">
        No Active Campaigns
      </Typography>
      <Typography variant="body-sm">Check back soon for seasonal promotions and events.</Typography>
    </div>
  );
}
