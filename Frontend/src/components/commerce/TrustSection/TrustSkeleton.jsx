import Skeleton from "../../ui/Skeleton";

export default function TrustSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="flex items-center gap-4 p-5 bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-[var(--radius-lg)]"
        >
          <Skeleton variant="circle" width="40px" height="40px" />
          <div className="flex-grow flex flex-col gap-1.5">
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="90%" />
          </div>
        </div>
      ))}
    </div>
  );
}
