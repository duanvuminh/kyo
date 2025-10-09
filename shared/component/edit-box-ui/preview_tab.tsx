import { TAB_VALUES } from "@/feature/update-content/const";
import { TabsContent } from "@/shared/component/ui/tabs";
import Markdown from "react-markdown";

interface PreviewTabProps {
  content?: string;
}

export const PreviewTab = ({ content }: PreviewTabProps) => (
  <TabsContent value={TAB_VALUES.PREVIEW}>
    <div className="px-1 min-h-screen">
      <Markdown>{content}</Markdown>
    </div>
  </TabsContent>
);
