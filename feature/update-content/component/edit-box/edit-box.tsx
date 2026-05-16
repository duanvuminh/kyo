"use client";
import { useEditBox } from "@/feature/update-content/component/edit-box/use-edit-box";
import { EditBoxUI } from "@/shared/component/edit-box-ui/eidit-box-ui";
import { BaseItem } from "@/shared/type/models/word";
import { useFormStatus } from "react-dom";

interface EditBoxProps {
  submitAction: (formData: FormData) => void | Promise<void>;
  initialItem?: BaseItem;
}

interface EditBoxContentProps {
  item: BaseItem;
  value?: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
}

function EditBoxContent({
  item,
  value,
  handleChange,
  handleSubmit,
}: EditBoxContentProps) {
  const { pending } = useFormStatus();

  return (
    <EditBoxUI
      item={item}
      value={value}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      pending={pending}
    />
  );
}

export function EditBox({ submitAction, initialItem }: EditBoxProps) {
  const { item, value, handleChange, handleSubmit } = useEditBox(initialItem);

  return (
    <form action={submitAction}>
      <input
        type="hidden"
        name="item"
        value={JSON.stringify({ ...item, content: value })}
      />
      <EditBoxContent
        item={item}
        value={value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </form>
  );
}
