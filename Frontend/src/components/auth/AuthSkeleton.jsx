import Skeleton from "../ui/Skeleton";

export default function AuthSkeleton() {
  return (
    <div className="flex flex-col gap-5 p-6 animate-pulse">
      <Skeleton variant="text" width="60%" height="24px" className="mx-auto" />
      <Skeleton variant="text" width="40%" height="16px" className="mx-auto" />
      <div className="flex flex-col gap-4 mt-4">
        <div>
          <Skeleton variant="text" width="20%" className="mb-2" />
          <Skeleton
            variant="rect"
            width="100%"
            height="40px"
            className="rounded-[var(--radius-md)]"
          />
        </div>
        <div>
          <Skeleton variant="text" width="20%" className="mb-2" />
          <Skeleton
            variant="rect"
            width="100%"
            height="40px"
            className="rounded-[var(--radius-md)]"
          />
        </div>
        <Skeleton
          variant="rect"
          width="100%"
          height="44px"
          className="rounded-[var(--radius-md)] mt-2"
        />
      </div>
    </div>
  );
}
