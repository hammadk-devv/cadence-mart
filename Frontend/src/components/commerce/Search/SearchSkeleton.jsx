import Skeleton from "../../ui/Skeleton";

export default function SearchSkeleton() {
  return (
    <div className="w-full max-w-md my-4">
      <Skeleton variant="rect" width="100%" height="40px" className="rounded-[var(--radius-md)]" />
    </div>
  );
}
