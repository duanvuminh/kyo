"use client";
import { NextButton } from "@/lib/components/paging/next-button";
import { PrevButton } from "@/lib/components/paging/prev-button";
import { PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

interface PaginationNavProps {
  currentRefinement: number;
  refine: (page: number) => void;
  pages: number[];
  isFirstPage: boolean;
  isLastPage: boolean;
}

export function PaginationNav({ currentRefinement, refine, pages, isFirstPage, isLastPage }: PaginationNavProps) {
  return (
    <PaginationContent>
      <PrevButton isFirstPage={isFirstPage} onClick={() => refine(currentRefinement - 1)} />
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
      <NextButton isLastPage={isLastPage} onClick={() => refine(currentRefinement + 1)} />
    </PaginationContent>
  );
}
