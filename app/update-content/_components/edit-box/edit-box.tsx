"use client";
import { useEditBox } from "@/app/update-content/_components/edit-box/use-edit-box";
import { EditBoxUI } from "@/lib/components/edit-box-ui/eidit-box-ui";
import { ActionState, BaseItem } from "@/lib/types";
import { useActionState } from "react";

interface EditBoxProps {
  submitAction: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
  initialItem?: BaseItem;
}

export function EditBox({ submitAction, initialItem }: EditBoxProps) {
  const { item, value, setValue, handleChange, handleSubmit } = useEditBox(initialItem);
  const [state, formAction, pending] = useActionState(submitAction, {});

  return (
    <form action={formAction}>
      <input
        type="hidden"
        name="item"
        value={JSON.stringify({ ...item, content: value })}
      />
      <EditBoxUI
        item={item}
        value={value}
        handleChange={handleChange}
        setValue={setValue}
        handleSubmit={handleSubmit}
        pending={pending}
        message={state.message}
      />
    </form>
  );
}
