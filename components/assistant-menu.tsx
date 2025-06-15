"use client";

import { AudioPlayer } from "@/components/audio-player";
import { SvgFromUrl } from "@/components/svg-from-url";
import { Button } from "@/components/ui/button";
import { Yomi } from "@/components/yomi";
import { svgFromWord } from "@/lib/dictionary";
import { cn } from "@/utils/utils";
import { ChatRequestOptions, CreateMessage, Message } from "ai";
import { Fragment, useState } from "react";

enum AssistantMenuType {
  SEARCH = "Tra cứu",
  YOMI = "Phiên âm",
  WRITE = "Cách viết",
  SPEECH = "Phát âm",
}

export const AssistantMenu = ({
  command,
  append,
}: {
  command: string;
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions
  ) => Promise<string | null | undefined>;
}) => {
  const [option, setOption] = useState<AssistantMenuType>(
    AssistantMenuType.WRITE
  );
  const handleClick = (action: AssistantMenuType) => {
    if (action == AssistantMenuType.SEARCH) {
      append({
        role: "user",
        content: command,
      });
    }
    setOption(action);
  };
  return (
    <div className="p-2">
      <div className="flex flex-wrap justify-end mb-1">
        {Object.values(AssistantMenuType)
          .filter((label) => label !== AssistantMenuType.SPEECH)
          .map((label) => (
            <Button
              key={label}
              variant="ghost"
              size="sm"
              onClick={() => handleClick(label)}
              className={cn(label != option ? "text-muted" : "")}
            >
              {label}
            </Button>
          ))}
        <AudioPlayer text={command} />
      </div>
      <article className="flex justify-end">
        {option == AssistantMenuType.WRITE && <Write text={command} />}
        {option == AssistantMenuType.YOMI && <Yomi text={command} />}
      </article>
    </div>
  );
};

const Write = ({ text }: { text: string }) => {
  return (
    <Fragment>
      <div className="flex flex-wrap justify-items-center">
        {text.split("").map((item, index) => (
          <SvgFromUrl key={index} url={svgFromWord(item)} />
        ))}
      </div>
    </Fragment>
  );
};
