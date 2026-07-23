import Skeleton from "../../ui/Skeleton";

export default function NewsletterSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-[var(--color-card-bg)] border border-[var(--color-border)] rounded-[var(--radius-xl)] flex flex-col gap-6">
      <Skeleton variant="text" width="40%" height="28px" />
      <Skeleton variant="text" width="70%" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="flex flex-col gap-3">
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="75%" />
        </div>
        <div className="flex gap-3 items-end">
          <Skeleton variant="rect" width="70%" height="40px" />
          <Skeleton variant="rect" width="30%" height="40px" />
        </div>
      </div>
    </div>
  );
}
