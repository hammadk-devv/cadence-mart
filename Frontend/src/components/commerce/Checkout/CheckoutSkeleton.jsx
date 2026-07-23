import Skeleton from "../../ui/Skeleton";

export default function CheckoutSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 animate-pulse">
      <div className="lg:col-span-8 flex flex-col gap-6">
        <Skeleton
          variant="rect"
          width="100%"
          height="40px"
          className="rounded-[var(--radius-md)]"
        />
        <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 flex flex-col gap-4">
          <Skeleton variant="text" width="30%" />
          <Skeleton variant="rect" width="100%" height="150px" />
        </div>
      </div>
      <div className="lg:col-span-4">
        <Skeleton
          variant="rect"
          width="100%"
          height="320px"
          className="rounded-[var(--radius-lg)]"
        />
      </div>
    </div>
  );
}
