import Price from "../Price";
import Rating from "../Rating";
import Badge from "../../ui/Badge";
import Typography from "../../ui/Typography";

export default function ProductInfo({ product }) {
  const {
    name = "",
    brand = "Cadence Mart",
    category = "General",
    price = 0,
    originalPrice,
    rating = 4.5,
    reviewsCount = 42,
    stock = 10,
    sku = "CAD-PROD-102",
  } = product;

  const discountPercent =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  const isOutOfStock = stock <= 0;
  const isLowStock = stock > 0 && stock <= 5;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-wider select-none">
        <span>{brand}</span>
        <span>•</span>
        <span>{category}</span>
      </div>

      <Typography
        variant="h2"
        as="h1"
        className="font-extrabold tracking-tight text-[var(--color-text-primary)]"
      >
        {name}
      </Typography>

      <div className="flex items-center gap-4 flex-wrap text-sm select-none">
        <div className="flex items-center gap-1">
          <Rating value={rating} readOnly size="sm" />
          <span className="font-bold text-[var(--color-text-primary)] ml-1">
            {rating.toFixed(1)}
          </span>
        </div>
        <span className="text-[var(--color-text-secondary)] font-medium">
          {reviewsCount} Reviews
        </span>
        <span className="text-[var(--color-text-secondary)] font-medium">•</span>
        <span className="text-[var(--color-text-secondary)] font-medium">
          SKU: <span className="font-semibold text-[var(--color-text-primary)]">{sku}</span>
        </span>
      </div>

      <div className="flex items-center gap-4 py-2 flex-wrap">
        <Price value={price} originalValue={originalPrice} size="lg" />
        {discountPercent > 0 && (
          <Badge variant="success" className="font-black text-xs uppercase px-2.5 py-1">
            Save {discountPercent}%
          </Badge>
        )}
      </div>

      <div className="flex items-center gap-2 select-none">
        {isOutOfStock ? (
          <Badge variant="danger" className="font-bold text-xs uppercase px-3 py-1">
            Out of Stock
          </Badge>
        ) : isLowStock ? (
          <Badge variant="warning" className="font-bold text-xs uppercase px-3 py-1 animate-pulse">
            Only {stock} Left in Stock
          </Badge>
        ) : (
          <Badge variant="success" className="font-bold text-xs uppercase px-3 py-1">
            In Stock
          </Badge>
        )}
      </div>
    </div>
  );
}
