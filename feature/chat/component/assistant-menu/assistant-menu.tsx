"use client";

import { AudioPlayer } from "@/component/audio-player/audio-player";
import { SvgFromUrl } from "@/component/svg-from-url";
import { Button } from "@/component/ui/button";
import { Yomi } from "@/component/yomi";
import {
  AppendFn,
  useAssistantMenu,
} from "@/feature/chat/component/assistant-menu/use-assistant-menu";
import { svgURLFromWord } from "@/lib/dictionary";
import { cn } from "@/utils/utils";
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
            toast("Menu > practice để luyện tập");
            add(command);
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

const Write = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-wrap justify-items-center">
      {text.split("").map((item, index) => (
        <SvgFromUrl key={index} url={svgURLFromWord(item)} />
      ))}
    </div>
  );
};
