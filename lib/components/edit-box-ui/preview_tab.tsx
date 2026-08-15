import { TAB_VALUES } from "@/lib/components/edit-box-ui/tab-values";
import { TabsContent } from "@/components/ui/tabs";
import { LazyMarkdown } from "@/lib/components/lazy-markdown";

interface PreviewTabProps {
  content?: string;
}

export const PreviewTab = ({ content }: PreviewTabProps) => (
  <TabsContent value={TAB_VALUES.PREVIEW}>
    <div className="px-1 min-h-screen">
      <LazyMarkdown>{content}</LazyMarkdown>
    </div>
  </TabsContent>
);
