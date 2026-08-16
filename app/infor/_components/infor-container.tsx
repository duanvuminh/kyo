"use client";
import { KInfor } from "@/app/infor/_components/infor";
import { InforPagination } from "@/app/infor/_components/infor-paging";
import { InforSearch } from "@/app/infor/_components/infor-search";
import { Infor } from "@/app/infor/_lib/infor.types";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import { Hits, InstantSearch } from "react-instantsearch";

const searchClient = algoliasearch(
  "VEIBP8X14V",
  "a518226ca660ae8a0f9d4ac094965932"
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
        <Hits hitComponent={Hit} />
        <InforPagination />
      </InstantSearch>
    </>
  );
};
