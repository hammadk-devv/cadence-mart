import PaginationButton from "./PaginationButton";

export default function PaginationNumbers({ currentPage, totalPages, onPageChange }) {
  const range = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return range(1, totalPages);
    }

    const first = 1;
    const last = totalPages;
    const current = currentPage;

    if (current <= 3) {
      return [...range(1, 4), "...", last];
    }

    if (current >= last - 2) {
      return [first, "...", ...range(last - 3, last)];
    }

    return [first, "...", current - 1, current, current + 1, "...", last];
  };

  const visiblePages = getPageNumbers();

  return (
    <div className="flex items-center gap-1.5">
      {visiblePages.map((page, idx) => {
        if (page === "...") {
          return (
            <span
              key={`ellipsis-${idx}`}
              className="px-2 text-xs font-semibold text-[var(--color-text-secondary)] select-none"
            >
              ...
            </span>
          );
        }

        return (
          <PaginationButton
            key={`page-${page}`}
            isActive={page === currentPage}
            onClick={() => onPageChange(page)}
            ariaLabel={`Go to page ${page}`}
          >
            {page}
          </PaginationButton>
        );
      })}
    </div>
  );
}
