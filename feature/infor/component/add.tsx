import { UpdateContentLink } from "@/shared/component/update-content-link";
import { useAppDispatch } from "@/shared/store/hook";
import { updateEditMessage } from "@/shared/store/slice-message";
import { BaseItem, Source } from "@/shared/type/models/word";

export const Add = () => {
  const dispatch = useAppDispatch();
  const item: BaseItem = {
    source: Source.ALGOLIA,
    documentId: "",
    words: "",
    content: "",
  };
  return (
    <>
      <UpdateContentLink onClick={() => dispatch(updateEditMessage(item))}>
        Thêm
      </UpdateContentLink>
    </>
  );
};
