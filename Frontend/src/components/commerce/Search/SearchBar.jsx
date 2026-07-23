import { Search } from "lucide-react";
import SearchInput from "./SearchInput";
import SearchActions from "./SearchActions";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search products...",
  className = "",
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onChange("");
    }
  };

  return (
    <div role="search" className={`relative flex items-center w-full max-w-md ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />

      <SearchInput
        id="discovery-search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        className="pl-9 pr-10"
      />

      {value && (
        <SearchActions
          onClick={() => onChange("")}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--color-primary)]"
        />
      )}
    </div>
  );
}
