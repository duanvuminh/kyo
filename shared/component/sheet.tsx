"use client";

import { Button } from "@/shared/component/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/component/ui/sheet";
import { Text } from "lucide-react";

export function KSheet({
  open,
  onOpenChange,
  title,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="fixed bottom-2 right-2">
          <Text />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[100dvh] overflow-auto">
        <SheetDescription />
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}
