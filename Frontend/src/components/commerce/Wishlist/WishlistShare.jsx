import { Share2 } from "lucide-react";
import Button from "../../ui/Button";
import { toast } from "react-toastify";

export default function WishlistShare() {
  const handleShareClick = () => {
    try {
      const shareUrl = window.location.href;
      navigator.clipboard.writeText(shareUrl);
      toast.success("Wishlist link copied to clipboard!");
    } catch (e) {
      console.error(e);
      toast.error("Failed to copy link.");
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleShareClick}
      size="sm"
      className="font-bold uppercase text-xs px-5 py-2.5 flex items-center gap-2 border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] animate-none"
    >
      <Share2 className="w-3.5 h-3.5" />
      <span>Share List</span>
    </Button>
  );
}
