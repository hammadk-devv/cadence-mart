import Skeleton from "../../ui/Skeleton";

export default function ToolbarSkeleton() {
  return (
    <div className="flex justify-between items-center py-4 border-b border-[var(--color-border)] mb-6">
      <Skeleton variant="text" width="20%" height="20px" />
      <div className="flex gap-3">
        <Skeleton variant="rect" width="100px" height="36px" />
        <Skeleton variant="rect" width="100px" height="36px" />
      </div>
    </div>
  );
}
