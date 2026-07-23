import Skeleton from "../../ui/Skeleton";

export default function BrandSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="flex items-center justify-center p-6 bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-[var(--radius-lg)] h-[80px]"
        >
          <Skeleton variant="text" width="60%" height="24px" />
        </div>
      ))}
    </div>
  );
}
