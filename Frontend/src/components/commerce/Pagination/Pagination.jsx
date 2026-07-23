import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import PaginationButton from "./PaginationButton";
import PaginationNumbers from "./PaginationNumbers";
import PaginationInfo from "./PaginationInfo";
import PageSizeSelector from "./PageSizeSelector";

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  pageSize = 12,
  totalItems = 0,
  onPageChange,
  onPageSizeChange,
  className = "",
}) {
  if (totalPages <= 1 && totalItems <= pageSize) {
    return (
      <div
        className={`flex flex-col sm:flex-row justify-between items-center py-6 border-t border-[var(--color-border)] mt-8 gap-4 ${className}`}
      >
        <PaginationInfo page={currentPage} pageSize={pageSize} total={totalItems} />
        <PageSizeSelector value={pageSize} onChange={onPageSizeChange} />
      </div>
    );
  }

  return (
    <nav
      aria-label="Pagination"
      className={`flex flex-col md:flex-row justify-between items-center py-6 border-t border-[var(--color-border)] mt-8 gap-4 ${className}`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center w-full md:w-auto gap-4">
        <PaginationInfo page={currentPage} pageSize={pageSize} total={totalItems} />
        <PageSizeSelector value={pageSize} onChange={onPageSizeChange} />
      </div>

      <div className="flex items-center gap-2">
        <PaginationButton
          onClick={() => onPageChange(1)}
          isDisabled={currentPage === 1}
          ariaLabel="Go to first page"
          className="hidden sm:flex"
        >
          <ChevronsLeft className="w-4 h-4" />
        </PaginationButton>

        <PaginationButton
          onClick={() => onPageChange(currentPage - 1)}
          isDisabled={currentPage === 1}
          ariaLabel="Go to previous page"
        >
          <ChevronLeft className="w-4 h-4" />
        </PaginationButton>

        <div className="hidden sm:block">
          <PaginationNumbers
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>

        <div className="sm:hidden text-xs font-bold text-[var(--color-text-primary)] px-3 select-none">
          Page {currentPage} of {totalPages}
        </div>

        <PaginationButton
          onClick={() => onPageChange(currentPage + 1)}
          isDisabled={currentPage === totalPages}
          ariaLabel="Go to next page"
        >
          <ChevronRight className="w-4 h-4" />
        </PaginationButton>

        <PaginationButton
          onClick={() => onPageChange(totalPages)}
          isDisabled={currentPage === totalPages}
          ariaLabel="Go to last page"
          className="hidden sm:flex"
        >
          <ChevronsRight className="w-4 h-4" />
        </PaginationButton>
      </div>
    </nav>
  );
}
