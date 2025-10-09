"use client";
import { useEditBox } from "@/feature/memo/component/edit-box/use-edit-box";
import { TAB_VALUES } from "@/feature/update-content/const";
import { EditBoxUI } from "@/shared/component/edit-box-ui/eidit-box-ui";

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
