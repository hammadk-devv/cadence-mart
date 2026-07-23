import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import Button from "../../ui/Button";
import Typography from "../../ui/Typography";

export default function WishlistEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center select-none">
      <div className="w-20 h-20 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full flex items-center justify-center mb-6">
        <Heart className="w-10 h-10 text-[var(--color-primary)]" />
      </div>
      <Typography variant="h3" className="font-extrabold text-[var(--color-text-primary)] mb-2">
        Your Wishlist is Empty
      </Typography>
      <Typography variant="body-sm" className="text-[var(--color-text-secondary)] max-w-md mb-8">
        Tap the heart icons on products while you shop to save your favorite premium items here for
        later checkout.
      </Typography>
      <Link to="/shop">
        <Button variant="primary" className="px-8 py-3 font-bold uppercase">
          Explore Products
        </Button>
      </Link>
    </div>
  );
}
