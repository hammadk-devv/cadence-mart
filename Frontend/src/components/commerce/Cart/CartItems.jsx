import CartItem from "./CartItem";

export default function CartItems({ items = [], products = [], onUpdateQuantity, onRemoveItem }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => {
        const productData = products.find((p) => p._id === item._id);
        if (!productData) return null;

        return (
          <CartItem
            key={item._id}
            product={productData}
            quantity={item.quantity}
            onIncrement={() => onUpdateQuantity("increase", item._id)}
            onDecrement={() => onUpdateQuantity("decrease", item._id)}
            onRemove={() => onRemoveItem(item._id)}
          />
        );
      })}
    </div>
  );
}
