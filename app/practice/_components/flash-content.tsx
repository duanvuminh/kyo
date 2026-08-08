import { UpdateContentLink } from "@/lib/components/update-content-link";
import { useAppDispatch } from "@/lib/stores/hook";
import { updateEditMessage } from "@/lib/stores/slice-message";
import { BaseItem } from "@/lib/types";
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
