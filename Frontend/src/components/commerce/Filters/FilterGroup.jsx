import FilterCheckbox from "./FilterCheckbox";

export default function FilterGroup({ options = [], selected = [], onChange, className = "" }) {
  const handleToggle = (optValue) => {
    const isSelected = selected.includes(optValue);
    const newSelected = isSelected
      ? selected.filter((val) => val !== optValue)
      : [...selected, optValue];
    onChange(newSelected);
  };

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {options.map((opt) => (
        <FilterCheckbox
          key={opt.value}
          id={`filter-${opt.value}`}
          label={opt.label}
          checked={selected.includes(opt.value)}
          onChange={() => handleToggle(opt.value)}
        />
      ))}
    </div>
  );
}
