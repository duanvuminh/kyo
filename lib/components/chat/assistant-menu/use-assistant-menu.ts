import { checkWord } from "@/app/actions/check.actions";
import { PracticeStorage } from "@/lib/services/storage";
import { useChat } from "@ai-sdk/react";
import { useEffect, useRef, useState } from "react";

enum AssistantMenuType {
  SEARCH = "Tra cứu",
  YOMI = "Phiên âm",
  WRITE = "Cách viết",
  SPEECH = "Phát âm",
}

export type AppendFn = ReturnType<typeof useChat>["sendMessage"];

async function addWord(words: string) {
  try {
    const isValid = await checkWord(words);
    if (isValid) {
      PracticeStorage.addToPracticeList(words);
    }
    return isValid;
  } catch {
    return false;
  }
}

export function useAssistantMenu({
  command,
  append,
  autoSend = true,
}: {
  command: string;
  append: AppendFn;
  autoSend?: boolean;
}) {
  const [option, setOption] = useState<AssistantMenuType>(
    AssistantMenuType.SEARCH,
  );

  const appendRef = useRef(append);
  const commandRef = useRef(command);
  const calledRef = useRef(false);
  useEffect(() => {
    if (!autoSend || calledRef.current) { return; }
    calledRef.current = true;
    setTimeout(() => {
      appendRef.current({ text: commandRef.current });
    }, 0);
  }, [autoSend]);

  const handleClick = (action: AssistantMenuType) => {
    setOption(action);
  };

  const menuOptions = Object.values(AssistantMenuType).filter(
    (label) => label !== AssistantMenuType.SPEECH && label !== AssistantMenuType.SEARCH,
  );

  return {
    option,
    menuOptions,
    handleClick,
    AssistantMenuType,
    add: addWord,
  };
}
