import Skeleton from "../../ui/Skeleton";

export default function FilterSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col gap-2">
          <Skeleton variant="text" width="40%" height="20px" />
          <div className="flex flex-col gap-1.5 ml-2">
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="50%" />
            <Skeleton variant="text" width="70%" />
          </div>
        </div>
      ))}
    </div>
  );
}
