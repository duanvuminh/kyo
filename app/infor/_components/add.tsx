import { UpdateContentLink } from "@/lib/components/update-content-link";
import { useAppDispatch } from "@/lib/stores/hook";
import { updateEditMessage } from "@/lib/stores/slice-message";
import { BaseItem, Source } from "@/lib/types";

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
