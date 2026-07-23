import Typography from "../../ui/Typography";

export default function SearchResultsInfo({ query = "", onClear, className = "" }) {
  if (!query) return null;

  return (
    <div className={`flex items-center gap-2 mb-4 text-xs ${className}`}>
      <Typography variant="body-sm" className="font-semibold">
        Search results for:{" "}
        <span className="text-[var(--color-primary)] font-black">&quot;{query}&quot;</span>
      </Typography>
      <button
        onClick={onClear}
        className="text-[var(--color-primary)] hover:underline font-bold focus-ring rounded px-1"
        aria-label="Clear search query"
      >
        (Clear Search)
      </button>
    </div>
  );
}
