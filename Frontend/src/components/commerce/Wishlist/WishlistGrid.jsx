import WishlistItem from "./WishlistItem";

export default function WishlistGrid({ items = [], onMoveToCart, onRemoveItem, onCardClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {items.map((item) => (
        <WishlistItem
          key={item._id}
          product={item}
          onMoveToCart={() => onMoveToCart(item._id)}
          onRemove={() => onRemoveItem(item._id)}
          onCardClick={() => onCardClick(item._id)}
        />
      ))}
    </div>
  );
}
