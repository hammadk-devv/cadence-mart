import Checkbox from "../ui/Checkbox";

export default function RememberMe({ checked, onChange }) {
  return (
    <Checkbox
      id="remember-me-check"
      label="Remember Me"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="text-xs select-none font-semibold text-[var(--color-text-secondary)]"
    />
  );
}
