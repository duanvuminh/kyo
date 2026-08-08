"use client";
import { useEditBox } from "@/app/memo/_components/edit-box/use-edit-box";
import { TAB_VALUES } from "@/lib/constants";
import { EditBoxUI } from "@/lib/components/edit-box-ui/eidit-box-ui";

export function EditBox() {
  const { item, value, handleChange, handleSubmit } = useEditBox();
  return (
    <EditBoxUI
      item={item}
      value={value}
      defaultTab={TAB_VALUES.PREVIEW}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
