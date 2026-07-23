import CampaignBanner from "./CampaignBanner";
import CampaignEmptyState from "./CampaignEmptyState";

export default function CampaignGrid({ items = [] }) {
  if (items.length === 0) {
    return <CampaignEmptyState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <CampaignBanner key={item.id} item={item} />
      ))}
    </div>
  );
}
