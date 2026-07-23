import Skeleton from "../../ui/Skeleton";

export default function CampaignSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 relative h-[250px] rounded-[var(--radius-lg)] overflow-hidden">
        <Skeleton variant="rect" width="100%" height="100%" />
      </div>
      <div className="relative h-[250px] rounded-[var(--radius-lg)] overflow-hidden">
        <Skeleton variant="rect" width="100%" height="100%" />
      </div>
    </div>
  );
}
