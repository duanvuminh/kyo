import { TAB_VALUES } from "@/lib/components/edit-box-ui/tab-values";
import { CopyPasteActions } from "@/lib/components/edit-box-ui/copy-paste-actions";
import { EditTab } from "@/lib/components/edit-box-ui/edit-tab";
import { Empty } from "@/lib/components/edit-box-ui/empty";
import { PreviewTab } from "@/lib/components/edit-box-ui/preview_tab";
import { TabControls } from "@/lib/components/edit-box-ui/tab-controls";
import { Tabs } from "@/components/ui/tabs";
import { BaseItem, Source } from "@/lib/types";
import { ChangeEvent } from "react";

interface EditBoxUIProps {
  item: BaseItem;
  value?: string;
  defaultTab?: string;
  handleChange: (v: ChangeEvent<HTMLTextAreaElement>) => void;
  setValue: (value: string) => void;
  handleSubmit: () => void;
  pending?: boolean;
  message?: string;
}

export function EditBoxUI({
  item,
  value,
  handleChange,
  setValue,
  handleSubmit,
  pending,
  defaultTab,
  message,
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
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-2xl font-bold flex-1">{item.words}</h1>
        <CopyPasteActions value={value} onReplace={setValue} />
      </div>
      <Tabs
        defaultValue={defaultTab ?? TAB_VALUES.EDIT}
        className="prose mx-auto"
      >
        <EditTab value={value} onChange={handleChange} />
        <PreviewTab content={value} />
        <TabControls onSubmit={handleSubmit} pending={pending} message={message} />
      </Tabs>
    </div>
  );
}
