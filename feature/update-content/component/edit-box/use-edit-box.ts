import { useAppSelector } from "@/shared/stores/hook";
import { selectMessage } from "@/shared/stores/slice-message";
import { Source } from "@/shared/types/models/word";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function useEditBox() {
  const item = useAppSelector(selectMessage);
  const [value, setValue] = useState(item.content);
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (item.source === Source.ALGOLIA && !item.documentId) {
      router.back();
    }
    toast("Cảm ơn bạn đã chỉnh sửa góp ý đã được xử lý.");
  };
  return {
    item,
    value,
    handleChange,
    handleSubmit,
  };
}
