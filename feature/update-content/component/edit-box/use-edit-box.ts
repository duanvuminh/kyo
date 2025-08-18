import { useAppSelector } from "@/shared/stores/hook";
import { selectMessage } from "@/shared/stores/slice-message";
import { useState } from "react";
import { toast } from "sonner";

export function useEditBox() {
  const item = useAppSelector(selectMessage);
  const [value, setValue] = useState(item.content);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = async () => {
    await fetch("/api/update-content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...item, content: value }),
    });

    toast("Cảm ơn bạn đã chỉnh sửa góp ý đã được xử lý.");
  };

  return {
    item,
    value,
    handleChange,
    handleSubmit,
  };
}
