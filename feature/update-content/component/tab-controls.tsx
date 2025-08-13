import { Button } from "@/component/ui/button";
import { TabsList, TabsTrigger } from "@/component/ui/tabs";
import { TAB_VALUES } from "@/feature/update-content/const";

export const TabControls = ({ onSubmit }: { onSubmit: () => void }) => (
  <TabsList className="sticky bottom-8 flex gap-2 w-90 mx-auto">
    <TabsTrigger value={TAB_VALUES.EDIT}>Viết</TabsTrigger>
    <TabsTrigger value={TAB_VALUES.PREVIEW}>Xem trước</TabsTrigger>
    <div className="flex-grow" />
    <Button variant="ghost" onClick={onSubmit}>
      Gửi
    </Button>
  </TabsList>
);
