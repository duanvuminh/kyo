"use client";
import { JumpToPage } from "@/shared/component/paging/jump-to-page";
import {
  Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious,
} from "@/shared/component/ui/pagination";
import { useState } from "react";

interface BasePagingProps {
  currentRefinement: number;
  refine: (page: number) => void;
  pages: number[];
  totalPages: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  showJumpInput?: boolean;
}

export function KBasePaging({ currentRefinement, refine, pages, totalPages, isFirstPage, isLastPage, showJumpInput = true }: BasePagingProps) {
  const [inputPage, setInputPage] = useState("");
  const handleJumpToPage = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(inputPage, 10);
    if (pageNum >= 1 && pageNum <= totalPages) { refine(pageNum - 1); setInputPage(""); }
  };

  return (
    <div className="not-prose flex flex-col items-center gap-2">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" aria-disabled={isFirstPage} onClick={(e) => { e.preventDefault(); if (!isFirstPage) { refine(currentRefinement - 1); } }} />
          </PaginationItem>
          {pages.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink href="#" aria-current={currentRefinement === page ? "page" : undefined} onClick={(e) => { e.preventDefault(); refine(page); }} isActive={currentRefinement === page}>{page + 1}</PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="#" aria-disabled={isLastPage} onClick={(e) => { e.preventDefault(); if (!isLastPage) { refine(currentRefinement + 1); } }} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      {showJumpInput && <JumpToPage totalPages={totalPages} inputPage={inputPage} setInputPage={setInputPage} onSubmit={handleJumpToPage} />}
    </div>
  );
}

function getVisiblePages(currentRefinement: number, totalPages: number) {
  if (totalPages <= 4) { return Array.from({ length: totalPages }, (_, i) => i); }
  if (currentRefinement <= 2) { return [0, 1, 2, 3]; }
  if (currentRefinement >= totalPages - 2) { return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1]; }
  return [currentRefinement - 1, currentRefinement, currentRefinement + 1, currentRefinement + 2];
}

interface PagingProps {
  initPage?: number;
  totalPages: number;
  refine: (page: number) => void;
  showJumpInput?: boolean;
}

export function KPaging({ initPage, totalPages, refine, showJumpInput = true }: PagingProps) {
  const [currentRefinement, setCurrentRefinement] = useState(initPage ?? 0);
  const pages = getVisiblePages(currentRefinement, totalPages);
  const goToPage = (page: number) => { setCurrentRefinement(page); refine(page); };

  return (
    <KBasePaging
      currentRefinement={currentRefinement}
      refine={goToPage}
      pages={pages}
      totalPages={totalPages}
      isFirstPage={currentRefinement === 0}
      isLastPage={currentRefinement === totalPages - 1}
      showJumpInput={showJumpInput}
    />
  );
}
