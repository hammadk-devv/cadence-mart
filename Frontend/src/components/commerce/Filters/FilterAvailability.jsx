import Checkbox from "../../ui/Checkbox";

export default function FilterAvailability({ value, onChange, className = "" }) {
  return (
    <div className={className}>
      <Checkbox
        id="filter-in-stock"
        label="In Stock Only"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
    </div>
  );
}
