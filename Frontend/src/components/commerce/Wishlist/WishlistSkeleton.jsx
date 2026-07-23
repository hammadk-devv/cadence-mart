import Skeleton from "../../ui/Skeleton";

export default function WishlistSkeleton() {
  return (
    <div className="flex flex-col gap-6 py-8">
      <Skeleton variant="text" width="20%" height="28px" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex flex-col gap-3 p-4 border border-[var(--color-border)] rounded-[var(--radius-lg)]"
          >
            <Skeleton
              variant="rect"
              width="100%"
              height="200px"
              className="rounded-[var(--radius-md)]"
            />
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="30%" />
            <Skeleton
              variant="rect"
              width="100%"
              height="36px"
              className="rounded-[var(--radius-md)]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
