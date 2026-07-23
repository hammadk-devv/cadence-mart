import Checkbox from "../../ui/Checkbox";
import Rating from "../Rating";

export default function FilterRating({ value, onChange, className = "" }) {
  const ratings = [5, 4, 3];

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {ratings.map((rate) => (
        <div key={rate} className="flex items-center gap-2">
          <Checkbox
            id={`filter-rating-${rate}`}
            checked={value === rate}
            onChange={() => onChange(value === rate ? null : rate)}
            label=""
          />
          <div className="flex items-center -ml-4 select-none">
            <Rating value={rate} readOnly size="sm" />
            <span className="text-xs text-[var(--color-text-secondary)] font-semibold ml-1.5">
              & Up
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
