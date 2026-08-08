import { useAppSelector } from "@/lib/stores/hook";
import { selectMessage } from "@/lib/stores/slice-message";
import { BaseItem, Source } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useEditBox(initialItem?: BaseItem) {
  const storeItem = useAppSelector(selectMessage);
  const item = initialItem ?? storeItem;
  const [value, setValue] = useState(item.content);
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (item.source === Source.ALGOLIA && !item.documentId) {
      router.back();
    }
  };
  return {
    item,
    value,
    handleChange,
    handleSubmit,
  };
}
