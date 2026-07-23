import Skeleton from "../../ui/Skeleton";

export default function CartSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 animate-pulse">
      <div className="lg:col-span-8 flex flex-col gap-4">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="flex gap-4 p-4 border border-[var(--color-border)] rounded-[var(--radius-lg)]"
          >
            <Skeleton
              variant="rect"
              width="100px"
              height="100px"
              className="rounded-[var(--radius-md)]"
            />
            <div className="flex-grow flex flex-col gap-2">
              <Skeleton variant="text" width="40%" />
              <Skeleton variant="text" width="20%" />
              <div className="flex justify-between items-center mt-4">
                <Skeleton variant="rect" width="80px" height="30px" />
                <Skeleton variant="text" width="15%" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:col-span-4">
        <Skeleton
          variant="rect"
          width="100%"
          height="300px"
          className="rounded-[var(--radius-lg)]"
        />
      </div>
    </div>
  );
}
