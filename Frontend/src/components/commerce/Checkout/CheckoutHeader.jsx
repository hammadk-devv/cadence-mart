import Typography from "../../ui/Typography";

export default function CheckoutHeader() {
  return (
    <div className="border-b border-[var(--color-border)] pb-4 mb-6 select-none">
      <Typography variant="h2" as="h1" className="font-extrabold text-[var(--color-text-primary)]">
        Secure Checkout
      </Typography>
      <Typography
        variant="body-xs"
        className="text-[var(--color-text-secondary)] mt-1 font-semibold uppercase tracking-wider"
      >
        Complete your order details safely
      </Typography>
    </div>
  );
}
