"use client";

import { Button } from "@/shared/component/ui/button";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export const AddButton = ({
  command,
  add,
}: {
  command: string;
  add: (text: string) => Promise<boolean>;
}) => (
  <Button
    variant="ghost"
    size="sm"
    onClick={() => {
      add(command).then((value) => {
        if (value) {
          toast("Menu > practice để luyện tập");
        }
      });
    }}
    className="text-muted"
  >
    <Plus />
  </Button>
);
