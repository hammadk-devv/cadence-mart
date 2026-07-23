import CartItemImage from "./CartItemImage";
import CartItemDetails from "./CartItemDetails";
import CartItemActions from "./CartItemActions";

export default function CartItem({ product, quantity, onIncrement, onDecrement, onRemove }) {
  return (
    <div className="flex gap-4 p-4 border border-[var(--color-border)] rounded-[var(--radius-lg)] bg-[var(--color-card-bg)] shadow-[var(--shadow-sm)]">
      <CartItemImage src={product.image[0]} alt={product.name} />

      <div className="flex flex-col justify-between flex-grow gap-4">
        <CartItemDetails product={product} />
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
