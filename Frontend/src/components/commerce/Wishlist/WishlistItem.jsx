import Price from "../Price";
import Button from "../../ui/Button";
import Typography from "../../ui/Typography";
import Badge from "../../ui/Badge";
import Rating from "../Rating";
import WishlistButton from "../WishlistButton";
import { Link } from "react-router-dom";

export default function WishlistItem({ product, onMoveToCart, onRemove, onCardClick }) {
  const {
    name = "",
    price = 0,
    originalPrice,
    rating = 4.5,
    image = ["/placeholder.png"],
    stock = 10,
  } = product;
  const isOutOfStock = stock <= 0;

  return (
    <div className="group flex flex-col relative bg-[var(--color-card-bg)] border border-[var(--color-border)] hover:border-[var(--color-primary)] rounded-[var(--radius-lg)] p-4 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all">
      <WishlistButton
        isFavorited={true}
        onClick={onRemove}
        className="absolute top-6 right-6 z-10"
      />

      <Link to="/product" onClick={onCardClick} className="flex flex-col flex-grow">
        <div className="aspect-square w-full rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-bg-secondary)] mb-4 select-none relative">
          <img
            src={image[0]}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isOutOfStock && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Badge variant="danger" className="font-bold text-xs uppercase px-3 py-1">
                Out of Stock
              </Badge>
            </div>
          )}
        </div>

        <div className="flex flex-col flex-grow gap-1">
          <Typography
            variant="body"
            className="font-extrabold text-[var(--color-text-primary)] line-clamp-1"
          >
            {name}
          </Typography>
          <div className="flex items-center gap-1 select-none">
            <Rating value={rating} readOnly size="sm" />
            <span className="text-xs font-bold text-[var(--color-text-primary)] ml-1">
              {rating.toFixed(1)}
            </span>
          </div>
          <div className="mt-1">
            <Price value={price} originalValue={originalPrice} size="md" />
          </div>
        </div>
      </Link>

      <div className="mt-4 flex gap-2">
        <Button
          variant="primary"
          onClick={onMoveToCart}
          isDisabled={isOutOfStock}
          size="sm"
          className="w-full font-bold uppercase text-xs py-2.5"
        >
          Move to Cart
        </Button>
      </div>
    </div>
  );
}
