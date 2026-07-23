import { useState } from "react";
import { X } from "lucide-react";
import IconButton from "../ui/IconButton";

export default function AnnouncementBar({
  message = "Free shipping on all orders over $50 | 30-day easy returns",
  onDismiss,
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className={`w-full bg-[var(--color-primary)] text-white text-xs py-2 px-4 flex items-center justify-between text-center relative ${className}`}
    >
      <span className="flex-grow font-semibold text-center">{message}</span>
      <IconButton
        icon={X}
        variant="ghost"
        size="sm"
        onClick={() => {
          setIsVisible(false);
          if (onDismiss) onDismiss();
        }}
        label="Dismiss announcement"
        className="text-white hover:bg-white/10"
      />
    </div>
  );
}
