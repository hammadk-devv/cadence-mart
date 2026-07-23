import Button from "../../ui/Button";

export default function WishlistActions({ onMoveAll, onClearAll, className = "" }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 py-4 border-b border-[var(--color-border)] mb-6 select-none ${className}`}
    >
      <Button
        variant="primary"
        onClick={onMoveAll}
        size="sm"
        className="font-bold uppercase text-xs px-5 py-2.5"
      >
        Move All to Cart
      </Button>
      <Button
        variant="outline"
        onClick={onClearAll}
        size="sm"
        className="font-bold uppercase text-xs px-5 py-2.5 border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)]"
      >
        Clear Wishlist
      </Button>
    </div>
  );
}
