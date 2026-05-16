import { Infor } from "@/feature/infor/model/infor";
import { UpdateContentLink } from "@/shared/component/update-content-link";
import { useAppDispatch } from "@/shared/store/hook";
import { updateEditMessage } from "@/shared/store/slice-message";
import { BaseItem, Source } from "@/shared/type/models/word";
import Markdown from "react-markdown";

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
      <Markdown>{infor.content}</Markdown>
      <UpdateContentLink onClick={() => dispatch(updateEditMessage(item))} />
    </>
  );
};
