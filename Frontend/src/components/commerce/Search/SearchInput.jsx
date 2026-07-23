import Input from "../../ui/Input";

export default function SearchInput({
  id,
  value,
  onChange,
  placeholder,
  onKeyDown,
  className = "",
}) {
  return (
    <Input
      id={id}
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={`w-full ${className}`}
      label=""
    />
  );
}
