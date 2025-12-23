import { TAB_VALUES } from "@/feature/update-content/const";
import { Button } from "@/shared/component/ui/button";
import { TabsList, TabsTrigger } from "@/shared/component/ui/tabs";

interface TabControlsProps {
  onSubmit?: () => void;
  pending?: boolean;
}

export const TabControls = ({ onSubmit, pending }: TabControlsProps) => (
  <TabsList className="sticky bottom-8 flex gap-2 w-90 mx-auto">
    <TabsTrigger value={TAB_VALUES.EDIT}>Viết</TabsTrigger>
    <TabsTrigger value={TAB_VALUES.PREVIEW}>Xem trước</TabsTrigger>
    <div className="grow" />
    <Button type="submit" variant="ghost" onClick={onSubmit} disabled={pending}>
      {pending ? "Đang gửi..." : "Gửi"}
    </Button>
  </TabsList>
);
