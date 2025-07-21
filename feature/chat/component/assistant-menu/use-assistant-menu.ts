import { PracticeStorage } from "@/service/storage";
import { ChatRequestOptions, CreateMessage, Message } from "ai";
import { useState } from "react";

enum AssistantMenuType {
  SEARCH = "Tra cứu",
  YOMI = "Phiên âm",
  WRITE = "Cách viết",
  SPEECH = "Phát âm",
}

export function useAssistantMenu({
  command,
  append,
}: {
  command: string;
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions
  ) => Promise<string | null | undefined>;
}) {
  const [option, setOption] = useState<AssistantMenuType>(
    AssistantMenuType.WRITE
  );

  const handleClick = (action: AssistantMenuType) => {
    if (action === AssistantMenuType.SEARCH) {
      append({
        role: "user",
        content: command,
      });
    }
    setOption(action);
  };

  const menuOptions = Object.values(AssistantMenuType).filter(
    (label) => label !== AssistantMenuType.SPEECH
  );

  const add = (word: string) => {
    PracticeStorage.addToPracticeList(word);
  };

  return {
    option,
    menuOptions,
    handleClick,
    AssistantMenuType,
    add,
  };
}
