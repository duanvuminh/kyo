import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/component/ui/pagination";
import { usePagination } from "react-instantsearch";

export function InforPagination() {
  const { currentRefinement, refine, pages, isFirstPage, isLastPage } =
    usePagination();

  return (
    <Pagination className="not-prose">
      <PaginationContent>
        {/* Previous button */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            aria-disabled={isFirstPage}
            onClick={(e) => {
              e.preventDefault();
              if (!isFirstPage) refine(currentRefinement - 1);
            }}
          />
        </PaginationItem>

        {/* Page numbers */}
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              aria-current={currentRefinement === page ? "page" : undefined}
              onClick={(e) => {
                e.preventDefault();
                refine(page);
              }}
              isActive={currentRefinement === page}
            >
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Next button */}
        <PaginationItem>
          <PaginationNext
            href="#"
            aria-disabled={isLastPage}
            onClick={(e) => {
              e.preventDefault();
              if (!isLastPage) refine(currentRefinement + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
