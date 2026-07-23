import Skeleton from "../../ui/Skeleton";

export default function CategorySkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="relative aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden">
          <Skeleton variant="rect" width="100%" height="100%" />
        </div>
      ))}
    </div>
  );
}
