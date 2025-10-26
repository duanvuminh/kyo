"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/component/ui/pagination";
import { useState } from "react";

interface BasePagingProps {
  currentRefinement: number;
  refine: (page: number) => void;
  pages: number[];
  isFirstPage: boolean;
  isLastPage: boolean;
}

export function KBasePaging({
  currentRefinement,
  refine,
  pages,
  isFirstPage,
  isLastPage,
}: BasePagingProps) {
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

interface PagingProps {
  initPage?: number;
  totalPages: number;
  refine: (page: number) => void;
}

export function KPaging({ initPage, totalPages, refine }: PagingProps) {
  const [currentRefinement, setCurrentRefinement] = useState(initPage ?? 0);

  const getVisiblePages = () => {
    if (totalPages <= 4) return Array.from({ length: totalPages }, (_, i) => i);

    if (currentRefinement <= 2) return [0, 1, 2, 3];
    if (currentRefinement >= totalPages - 1)
      return [totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [
      currentRefinement - 1,
      currentRefinement,
      currentRefinement + 1,
      currentRefinement + 2,
    ];
  };

  const pages = getVisiblePages();

  const isFirstPage = currentRefinement === 1;
  const isLastPage = currentRefinement === totalPages;

  const goToPage = (page: number) => {
    setCurrentRefinement(page);
    refine(page);
  };

  return (
    <KBasePaging
      currentRefinement={currentRefinement}
      refine={goToPage}
      pages={pages}
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
    />
  );
}
