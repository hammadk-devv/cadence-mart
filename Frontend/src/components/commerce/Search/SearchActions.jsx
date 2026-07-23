import { X } from "lucide-react";
import IconButton from "../../ui/IconButton";

export default function SearchActions({ onClick, className = "" }) {
  return (
    <IconButton
      icon={X}
      variant="ghost"
      size="sm"
      onClick={onClick}
      label="Clear search input"
      className={className}
    />
  );
}
