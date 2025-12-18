import { KBasePaging } from "@/shared/component/paging/paging";
import { usePagination } from "react-instantsearch";

export function InforPagination() {
  const { currentRefinement, refine, pages, isFirstPage, isLastPage, nbPages } =
    usePagination();

  return (
    <KBasePaging
      currentRefinement={currentRefinement}
      refine={refine}
      pages={pages}
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
      totalPages={nbPages}
      showJumpInput={false}
    />
  );
}
