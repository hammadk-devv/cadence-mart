import Checkbox from "../../ui/Checkbox";

export default function FilterCheckbox({ label, id, checked, onChange, className = "" }) {
  return (
    <Checkbox
      id={id}
      label={label}
      checked={checked}
      onChange={onChange}
      className={`py-1 ${className}`}
    />
  );
}
