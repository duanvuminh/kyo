import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Text } from "lucide-react";

export function KSheet({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="fixed bottom-2 right-2">
          <Text />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[80vh] overflow-auto">
        <SheetHeader>
          <SheetTitle>Hỏi nhanh</SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}
