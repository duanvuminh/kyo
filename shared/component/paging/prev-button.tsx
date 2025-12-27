"use client";
import { PaginationItem, PaginationPrevious } from "@/shared/component/ui/pagination";

interface PrevButtonProps {
  isFirstPage: boolean;
  onClick: () => void;
}

export function PrevButton({ isFirstPage, onClick }: PrevButtonProps) {
  return (
    <PaginationItem>
      <PaginationPrevious
        href="#"
        aria-disabled={isFirstPage}
        onClick={(e) => {
          e.preventDefault();
          if (!isFirstPage) {
            onClick();
          }
        }}
      />
    </PaginationItem>
  );
}
