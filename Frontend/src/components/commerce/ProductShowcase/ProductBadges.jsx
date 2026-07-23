import DiscountBadge from "../DiscountBadge";
import Badge from "../../ui/Badge";

export default function ProductBadges({ price, originalPrice, stock = 10, className = "" }) {
  const isOutOfStock = stock <= 0;
  const isLowStock = stock > 0 && stock <= 3;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {originalPrice && originalPrice > price && (
        <DiscountBadge value={price} originalValue={originalPrice} />
      )}
      {isOutOfStock ? (
        <Badge variant="danger">Out of Stock</Badge>
      ) : isLowStock ? (
        <Badge variant="warning">Low Stock</Badge>
      ) : null}
    </div>
  );
}
