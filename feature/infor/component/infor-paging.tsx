import { KBasePaging } from "@/shared/component/paging";
import { usePagination } from "react-instantsearch";

export function InforPagination() {
  const { currentRefinement, refine, pages, isFirstPage, isLastPage } =
    usePagination();

  return (
    <KBasePaging
      currentRefinement={currentRefinement}
      refine={refine}
      pages={pages}
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
    />
  );
}
