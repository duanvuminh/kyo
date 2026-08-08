import { TAB_VALUES } from "@/lib/components/edit-box-ui/tab-values";
import { Button } from "@/components/ui/button";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabControlsProps {
  onSubmit?: () => void;
  pending?: boolean;
  message?: string;
}

export const TabControls = ({ onSubmit, pending, message }: TabControlsProps) => (
  <TabsList className="sticky bottom-8 flex flex-col gap-1 w-90 mx-auto h-auto">
    <div className="flex gap-2 w-full">
      <TabsTrigger value={TAB_VALUES.EDIT}>Viết</TabsTrigger>
      <TabsTrigger value={TAB_VALUES.PREVIEW}>Xem trước</TabsTrigger>
      <div className="grow" />
      <Button type="submit" variant="ghost" onClick={onSubmit} disabled={pending}>
        {pending ? "Đang gửi..." : "Gửi"}
      </Button>
    </div>
    {message && <p className="text-xs text-destructive w-full text-right">{message}</p>}
  </TabsList>
);
