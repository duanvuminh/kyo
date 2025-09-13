"use client";

import { cn } from "@/core/utils/utils";
import {
  AppendFn,
  useAssistantMenu,
} from "@/feature/chat/component/assistant-menu/use-assistant-menu";
import { AudioPlayer } from "@/shared/component/audio-player/audio-player";
import { Button } from "@/shared/component/ui/button";
import { Write } from "@/shared/component/write";
import { Yomi } from "@/shared/component/yomi";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export const AssistantMenu = ({
  command,
  append,
}: {
  command: string;
  append: AppendFn;
}) => {
  const { option, menuOptions, handleClick, AssistantMenuType, add } =
    useAssistantMenu({
      command,
      append,
    });

  return (
    <div className="p-2">
      <div className="flex flex-wrap justify-end mb-1">
        {menuOptions.map((label) => (
          <Button
            key={label}
            variant="ghost"
            size="sm"
            onClick={() => handleClick(label)}
            className={cn(label !== option ? "text-muted" : "")}
          >
            {label}
          </Button>
        ))}
        <AudioPlayer text={command} />
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
      </div>
      <article className="flex justify-end">
        {option === AssistantMenuType.WRITE && <Write text={command} />}
        {option === AssistantMenuType.YOMI && <Yomi text={command} />}
      </article>
    </div>
  );
};
