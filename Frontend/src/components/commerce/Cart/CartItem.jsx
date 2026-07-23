import CartItemImage from "./CartItemImage";
import CartItemDetails from "./CartItemDetails";
import CartItemActions from "./CartItemActions";

export default function CartItem({ product, quantity, onIncrement, onDecrement, onRemove }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 border border-[var(--color-border)] rounded-[var(--radius-lg)] bg-[var(--color-card-bg)] shadow-[var(--shadow-sm)]">
      <div className="flex gap-4 w-full sm:w-auto">
        <CartItemImage src={product.image[0]} alt={product.name} />
        <div className="sm:hidden flex-grow min-w-0">
          <CartItemDetails product={product} />
        </div>
      </div>

      <div className="flex flex-col justify-between flex-grow gap-4 min-w-0">
        <div className="hidden sm:block">
          <CartItemDetails product={product} />
        </div>
        <CartItemActions
          quantity={quantity}
          stockLimit={product.stock || 10}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onRemove={onRemove}
        />
      </div>
    </div>
  );
}
