"use client";

import { cn } from "@/lib/utils/utils";
import { AddButton } from "@/lib/components/chat/assistant-menu/add-button";
import {
  AppendFn,
  useAssistantMenu,
} from "@/lib/components/chat/assistant-menu/use-assistant-menu";
import { AudioPlayer } from "@/lib/components/audio-player/audio-player";
import { Button } from "@/components/ui/button";
import { Write } from "@/lib/components/write";

interface AssistantMenuProps {
  command: string;
  append: AppendFn;
  autoSend?: boolean;
}

export const AssistantMenu = ({ command, append, autoSend }: AssistantMenuProps) => {
  const { option, menuOptions, handleClick, AssistantMenuType, add } = useAssistantMenu({
    command,
    append,
    autoSend,
  });

  return (
    <div className="p-2">
      <div className="flex flex-wrap items-center justify-end gap-2 mb-1">
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
        <AddButton command={command} add={add} />
      </div>
      <article className="flex justify-end">
        {option === AssistantMenuType.WRITE && <Write text={command} />}
      </article>
    </div>
  );
};
