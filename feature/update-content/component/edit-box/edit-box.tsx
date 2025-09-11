"use client";
import { useEditBox } from "@/feature/update-content/component/edit-box/use-edit-box";
import { EditTab } from "@/feature/update-content/component/edit-tab";
import { Empty } from "@/feature/update-content/component/empty";
import { PreviewTab } from "@/feature/update-content/component/preview_tab";
import { TabControls } from "@/feature/update-content/component/tab-controls";
import { TAB_VALUES } from "@/feature/update-content/const";
import { Tabs } from "@/shared/component/ui/tabs";
import { Source } from "@/shared/types/models/word";

export function EditBox() {
  const { item, value, handleChange, handleSubmit } = useEditBox();

  if (!item?.words && item.source !== Source.ALGOLIA) {
    return <Empty />;
  }

  return (
    <div className="px-2">
      <h1 className="text-2xl font-bold mb-4">{item.words}</h1>
      <Tabs defaultValue={TAB_VALUES.EDIT} className="prose mx-auto">
        <EditTab value={value} onChange={handleChange} />
        <PreviewTab content={value} />
        <TabControls onSubmit={handleSubmit} />
      </Tabs>
    </div>
  );
}
