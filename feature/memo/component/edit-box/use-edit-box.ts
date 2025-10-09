import { MemoStorageRepository } from "@/shared/repository/storage";
import { BaseItem, Source } from "@/shared/types/models/word";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function useEditBox() {
  const item: BaseItem = {
    source: Source.STORAGE,
    documentId: "",
    words: "",
  };
  const [value, setValue] = useState(item.content);
  useEffect(() => {
    const memo = MemoStorageRepository.getMemo();
    if (memo) {
      setValue(memo);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (!value) return;
    MemoStorageRepository.saveMemo(value);
    toast("Memo saved!");
  };
  return {
    item,
    value,
    handleChange,
    handleSubmit,
  };
}
