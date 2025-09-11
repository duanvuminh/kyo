import { UpdateContentLink } from "@/shared/component/update-content-link";
import { useAppDispatch } from "@/shared/stores/hook";
import { updateEditMessage } from "@/shared/stores/slice-message";
import { BaseItem, Source } from "@/shared/types/models/word";

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
