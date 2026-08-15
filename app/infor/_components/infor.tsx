import { Infor } from "@/app/infor/_lib/infor.types";
import { LazyMarkdown } from "@/lib/components/lazy-markdown";
import { UpdateContentLink } from "@/lib/components/update-content-link";
import { useAppDispatch } from "@/lib/stores/hook";
import { updateEditMessage } from "@/lib/stores/slice-message";
import { BaseItem, Source } from "@/lib/types";

export const KInfor = ({ infor }: { infor: Infor }) => {
  const dispatch = useAppDispatch();
  const item: BaseItem = {
    source: Source.ALGOLIA,
    documentId: infor.objectID,
    words: "",
    content: infor.content,
  };
  return (
    <>
      <LazyMarkdown>{infor.content}</LazyMarkdown>
      <UpdateContentLink onClick={() => dispatch(updateEditMessage(item))} />
    </>
  );
};
