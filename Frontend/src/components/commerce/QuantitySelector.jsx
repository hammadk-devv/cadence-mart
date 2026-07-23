import { Plus, Minus } from "lucide-react";
import IconButton from "../ui/IconButton";

export default function QuantitySelector({
  value = 1,
  min = 1,
  max = 99,
  onIncrement,
  onDecrement,
  className = "",
}) {
  return (
    <div
      className={`flex items-center gap-2 border border-[var(--color-border)] rounded-[var(--radius-md)] p-1 ${className}`}
    >
      <IconButton
        icon={Minus}
        variant="ghost"
        size="sm"
        onClick={onDecrement}
        isDisabled={value <= min}
        label="Decrease quantity"
      />
      <span
        className="text-sm font-semibold w-8 text-center text-[var(--color-text-primary)]"
        aria-live="polite"
      >
        {value}
      </span>
      <IconButton
        icon={Plus}
        variant="ghost"
        size="sm"
        onClick={onIncrement}
        isDisabled={value >= max}
        label="Increase quantity"
      />
    </div>
  );
}
