import { useAppSelector } from "@/stores/hook";
import { selectContent, selectWord } from "@/stores/slice-message";
import { useState } from "react";
import { toast } from "sonner";

export function useEditBox() {
  const words = useAppSelector(selectWord);
  const content = useAppSelector(selectContent);
  const [value, setValue] = useState(content);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = async () => {
    await fetch("/api/update-content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ words, content: value }),
    });

    toast("Cảm ơn bạn đã chỉnh sửa góp ý đã được xử lý.");
  };

  return {
    words,
    content,
    value,
    handleChange,
    handleSubmit,
  };
}
