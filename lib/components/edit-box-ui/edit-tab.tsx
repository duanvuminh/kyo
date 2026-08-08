import { TAB_VALUES } from "@/lib/components/edit-box-ui/tab-values";
import { TabsContent } from "@/components/ui/tabs";
import { ChangeEvent } from "react";

interface EditTabProps {
  value?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const EditTab = ({ value, onChange }: EditTabProps) => (
  <TabsContent value={TAB_VALUES.EDIT}>
    <textarea
      className="w-full border-none focus:border-none focus:outline-none focus:ring-0 pt-2 px-1 min-h-screen resize-none"
      value={value}
      onChange={onChange}
      placeholder="Nhập nội dung..."
    />
  </TabsContent>
);
