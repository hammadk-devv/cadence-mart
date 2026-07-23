import Typography from "../../ui/Typography";

export default function CartHeader({ itemCount = 0 }) {
  return (
    <div className="border-b border-[var(--color-border)] pb-4 mb-6 select-none">
      <Typography variant="h2" as="h1" className="font-extrabold text-[var(--color-text-primary)]">
        Shopping Cart
      </Typography>
      <Typography
        variant="body-sm"
        className="text-[var(--color-text-secondary)] mt-1 font-semibold"
      >
        You have {itemCount} {itemCount === 1 ? "item" : "items"} in your cart.
      </Typography>
    </div>
  );
}
