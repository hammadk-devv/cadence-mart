import Input from "../../ui/Input";

export default function NewsletterInput({
  id,
  value,
  onChange,
  placeholder,
  error,
  isDisabled,
  className = "",
}) {
  return (
    <Input
      id={id}
      type="email"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
      isDisabled={isDisabled}
      className={`w-full ${className}`}
      label=""
    />
  );
}
