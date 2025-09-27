"use client";
import { Add } from "@/feature/infor/component/add";
import { KInfor } from "@/feature/infor/component/infor";
import { InforPagination } from "@/feature/infor/component/infor-paging";
import { InforSearch } from "@/feature/infor/component/infor-search";
import { Infor } from "@/feature/infor/model/infor";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import { Hits, InstantSearch } from "react-instantsearch";

const searchClient = algoliasearch(
  "LASDRVLH1N",
  "b2691eab1b0ba50424fe0c55b5838669"
);

function Hit({ hit }: { hit: Infor }) {
  return <KInfor infor={hit} />;
}

export const InforContainer = () => {
  return (
    <>
      <h1>Tra cứu thủ tục cần thiết ở Nhật Bản</h1>
      <InstantSearch searchClient={searchClient} indexName="japan">
        <InforSearch />
        <Add />
        <Hits hitComponent={Hit} />
        <InforPagination />
      </InstantSearch>
    </>
  );
};
