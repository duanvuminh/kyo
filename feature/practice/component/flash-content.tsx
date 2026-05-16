import { UpdateContentLink } from "@/shared/component/update-content-link";
import { useAppDispatch } from "@/shared/store/hook";
import { updateEditMessage } from "@/shared/store/slice-message";
import { BaseItem } from "@/shared/type/models/word";
import { useEffect } from "react";
import Markdown from "react-markdown";

export const FlashContent = ({ item }: { item: BaseItem }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateEditMessage(item));
  }, [item, dispatch]);
  return (
    <div className="flex flex-col">
      <Markdown>{item.content}</Markdown>
      <UpdateContentLink />
    </div>
  );
};
