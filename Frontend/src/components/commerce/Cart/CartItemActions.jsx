import QuantitySelector from "../QuantitySelector";
import Button from "../../ui/Button";

export default function CartItemActions({
  quantity,
  stockLimit = 10,
  onIncrement,
  onDecrement,
  onRemove,
}) {
  return (
    <div className="flex items-center gap-4 justify-between select-none">
      <QuantitySelector
        value={quantity}
        min={1}
        max={stockLimit}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        className="w-32"
      />
      <Button
        variant="ghost"
        onClick={onRemove}
        className="text-xs font-bold text-[var(--color-danger)] uppercase hover:bg-red-50 px-3 py-2 rounded-[var(--radius-md)]"
      >
        Remove
      </Button>
    </div>
  );
}
