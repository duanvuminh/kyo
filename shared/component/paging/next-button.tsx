"use client";
import { PaginationItem, PaginationNext } from "@/shared/component/ui/pagination";

interface NextButtonProps {
  isLastPage: boolean;
  onClick: () => void;
}

export function NextButton({ isLastPage, onClick }: NextButtonProps) {
  return (
    <PaginationItem>
      <PaginationNext
        href="#"
        aria-disabled={isLastPage}
        onClick={(e) => {
          e.preventDefault();
          if (!isLastPage) {
            onClick();
          }
        }}
      />
    </PaginationItem>
  );
}
