import Card from "../ui/Card";
import Typography from "../ui/Typography";
import Price from "./Price";
import Rating from "./Rating";
import DiscountBadge from "./DiscountBadge";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({
  id,
  name,
  image,
  price,
  originalPrice,
  rating = 4.5,
  reviewCount = 120,
  onAddToCart,
  onCardClick,
  className = "",
}) {
  return (
    <Card
      isHoverable
      onClick={onCardClick}
      className={`group flex flex-col relative bg-[var(--color-card-bg)] hover:shadow-[var(--shadow-md)] overflow-hidden p-4 ${className}`}
    >
      {/* Save indicator badge */}
      {originalPrice && originalPrice > price && (
        <DiscountBadge
          value={price}
          originalValue={originalPrice}
          className="absolute top-2 left-2 z-10"
        />
      )}

      {/* Image container */}
      <div className="aspect-square w-full rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] flex items-center justify-center overflow-hidden mb-3 border border-[var(--color-card-border)] relative">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-[var(--color-bg-secondary)]" />
        )}
      </div>

      {/* Title */}
      <Typography variant="body" className="font-semibold line-clamp-1 mb-1">
        {name}
      </Typography>

      {/* Rating stars */}
      <Rating value={rating} reviewCount={reviewCount} size="sm" className="mb-2" />

      {/* Pricing block */}
      <Price value={price} originalValue={originalPrice} size="sm" className="mb-4" />

      {/* Actions */}
      {onAddToCart && (
        <div className="mt-auto">
          <AddToCartButton
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(id);
            }}
          />
        </div>
      )}
    </Card>
  );
}
