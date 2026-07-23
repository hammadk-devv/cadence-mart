import Select from "../../ui/Select";

export default function PageSizeSelector({ value, onChange, className = "" }) {
  const options = [
    { value: "12", label: "12 per page" },
    { value: "24", label: "24 per page" },
    { value: "36", label: "36 per page" },
    { value: "48", label: "48 per page" },
  ];

  return (
    <div className={`w-32 ${className}`}>
      <Select
        id="pagination-size"
        value={String(value)}
        onChange={(e) => onChange(Number(e.target.value))}
        options={options}
        label=""
      />
    </div>
  );
}
