import { BaseItem } from "@/shared/types/models/word";
import { algoliasearch } from "algoliasearch";

const searchClient = algoliasearch(
  "LASDRVLH1N",
  process.env.ALGOLIA_ADMIN_KEY || ""
);

export const algoliaUpdate = (items: BaseItem[]) => {
  return searchClient.saveObjects({
    indexName: "japan",
    objects: items.map((item) => ({
      objectID: item.documentId,
      content: item.content,
    })),
  });
};

export const algoliaAdd = (items: BaseItem[]) => {
  return searchClient.saveObjects({
    indexName: "japan",
    objects: items.map((item) => ({
      content: item.content,
    })),
  });
};
