import Typography from "../../ui/Typography";

export default function WishlistHeader({ itemCount = 0 }) {
  return (
    <div className="border-b border-[var(--color-border)] pb-4 mb-6 select-none">
      <Typography variant="h2" as="h1" className="font-extrabold text-[var(--color-text-primary)]">
        My Favorites List
      </Typography>
      <Typography
        variant="body-sm"
        className="text-[var(--color-text-secondary)] mt-1 font-semibold"
      >
        You have saved {itemCount} {itemCount === 1 ? "product" : "products"} in your wishlist.
      </Typography>
    </div>
  );
}
