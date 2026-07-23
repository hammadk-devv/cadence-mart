import Price from "../Price";
import Typography from "../../ui/Typography";

export default function CartItemDetails({ product }) {
  const {
    name = "",
    brand = "Cadence Mart",
    price = 0,
    originalPrice,
  } = product;

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex flex-col">
        <Typography
          variant="body-xs"
          className="text-[var(--color-text-secondary)] font-bold uppercase tracking-wider select-none"
        >
          {brand}
        </Typography>
        <Typography
          variant="body"
          className="font-extrabold text-[var(--color-text-primary)] line-clamp-2"
        >
          {name}
        </Typography>
      </div>

      <div className="mt-1">
        <Price value={price} originalValue={originalPrice} size="md" />
      </div>
    </div>
  );
}
