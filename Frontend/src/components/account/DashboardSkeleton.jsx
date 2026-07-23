import Skeleton from "../ui/Skeleton";

export default function DashboardSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 animate-pulse">
      <div className="lg:col-span-3">
        <Skeleton
          variant="rect"
          width="100%"
          height="240px"
          className="rounded-[var(--radius-lg)]"
        />
      </div>
      <div className="lg:col-span-9 flex flex-col gap-6">
        <Skeleton variant="text" width="40%" height="32px" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Skeleton variant="rect" width="100%" height="80px" />
          <Skeleton variant="rect" width="100%" height="80px" />
          <Skeleton variant="rect" width="100%" height="80px" />
        </div>
      </div>
    </div>
  );
}
