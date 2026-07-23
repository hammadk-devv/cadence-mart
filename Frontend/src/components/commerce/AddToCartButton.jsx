import { ShoppingCart } from "lucide-react";
import Button from "../ui/Button";

export default function AddToCartButton({
  onClick,
  isLoading = false,
  isDisabled = false,
  className = "",
}) {
  return (
    <Button
      variant="primary"
      onClick={onClick}
      isLoading={isLoading}
      isDisabled={isDisabled}
      className={`w-full flex items-center justify-center gap-2 ${className}`}
    >
      <ShoppingCart className="w-4 h-4" />
      <span>Add to Cart</span>
    </Button>
  );
}
