import Price from "../Price";
import Button from "../../ui/Button";
import Typography from "../../ui/Typography";

export default function StickyPurchasePanel({
  product,
  onAddToCart,
  onBuyNow,
  isAdding = false,
}) {
  const { name = "", price = 0, originalPrice, stock = 10 } = product;
  const isOutOfStock = stock <= 0;

  return (
    <>
      <div className="hidden lg:block sticky top-24 border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 bg-[var(--color-card-bg)] shadow-[var(--shadow-md)]">
        <Typography
          variant="body-xs"
          className="font-bold text-[var(--color-text-secondary)] uppercase tracking-wider mb-1"
        >
          Purchase Summary
        </Typography>
        <Typography
          variant="h4"
          as="h3"
          className="font-extrabold text-[var(--color-text-primary)] line-clamp-2 mb-2"
        >
          {name}
        </Typography>

        <div className="my-4">
          <Price value={price} originalValue={originalPrice} size="lg" />
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <Button
            variant="primary"
            onClick={onAddToCart}
            isLoading={isAdding}
            isDisabled={isOutOfStock}
            className="w-full font-bold uppercase py-3"
          >
            Add to Cart
          </Button>
          <Button
            variant="outline"
            onClick={onBuyNow}
            isDisabled={isOutOfStock}
            className="w-full font-bold uppercase py-3 border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)]"
          >
            Buy Now
          </Button>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-card-bg)] border-t border-[var(--color-border)] p-4 shadow-[var(--shadow-lg)] flex items-center justify-between pb-safe">
        <div className="flex flex-col gap-0.5 max-w-[50%]">
          <Typography
            variant="body-xs"
            className="font-bold text-[var(--color-text-secondary)] line-clamp-1"
          >
            {name}
          </Typography>
          <Price value={price} size="md" />
        </div>
        <div className="flex gap-2">
          <Button
            variant="primary"
            onClick={onAddToCart}
            isLoading={isAdding}
            isDisabled={isOutOfStock}
            size="sm"
            className="font-bold px-4 py-2"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
}
