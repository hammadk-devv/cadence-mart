import Skeleton from "../../ui/Skeleton";

export default function PaginationSkeleton() {
  return (
    <div className="flex justify-between items-center py-6 border-t border-[var(--color-border)] mt-8">
      <Skeleton variant="text" width="25%" height="20px" />
      <div className="flex gap-2">
        <Skeleton
          variant="rect"
          width="40px"
          height="40px"
          className="rounded-[var(--radius-md)]"
        />
        <Skeleton
          variant="rect"
          width="40px"
          height="40px"
          className="rounded-[var(--radius-md)]"
        />
        <Skeleton
          variant="rect"
          width="40px"
          height="40px"
          className="rounded-[var(--radius-md)]"
        />
      </div>
    </div>
  );
}
