import { PracticeStorage } from "@/shared/service/storage";
import { useChat } from "@ai-sdk/react";
import { useState } from "react";

enum AssistantMenuType {
  SEARCH = "Tra cứu",
  YOMI = "Phiên âm",
  WRITE = "Cách viết",
  SPEECH = "Phát âm",
}

export type AppendFn = ReturnType<typeof useChat>["sendMessage"];

export function useAssistantMenu({
  command,
  append,
}: {
  command: string;
  append: AppendFn;
}) {
  const [option, setOption] = useState<AssistantMenuType>(
    AssistantMenuType.WRITE
  );

  const handleClick = (action: AssistantMenuType) => {
    if (action === AssistantMenuType.SEARCH) {
      append({
        text: command,
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
