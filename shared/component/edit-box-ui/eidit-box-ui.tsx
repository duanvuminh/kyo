import { TAB_VALUES } from "@/feature/update-content/const";
import { EditTab } from "@/shared/component/edit-box-ui/edit-tab";
import { Empty } from "@/shared/component/edit-box-ui/empty";
import { PreviewTab } from "@/shared/component/edit-box-ui/preview_tab";
import { TabControls } from "@/shared/component/edit-box-ui/tab-controls";
import { Tabs } from "@/shared/component/ui/tabs";
import { BaseItem, Source } from "@/shared/types/models/word";
import { ChangeEvent } from "react";

interface EditBoxUIProps {
  item: BaseItem;
  value?: string;
  defaultTab?: string;
  handleChange: (v: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
}

export function EditBoxUI({
  item,
  value,
  handleChange,
  handleSubmit,
  defaultTab,
}: EditBoxUIProps) {
  if (
    !item?.words &&
    item.source !== Source.ALGOLIA &&
    item.source !== Source.STORAGE
  ) {
    return <Empty />;
  }

  return (
    <div className="px-2">
      <h1 className="text-2xl font-bold mb-4">{item.words}</h1>
      <Tabs
        defaultValue={defaultTab ?? TAB_VALUES.EDIT}
        className="prose mx-auto"
      >
        <EditTab value={value} onChange={handleChange} />
        <PreviewTab content={value} />
        <TabControls onSubmit={handleSubmit} />
      </Tabs>
    </div>
  );
}
