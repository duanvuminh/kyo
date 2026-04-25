import { checkWord } from "@/shared/actions/check";
import { PracticeStorage } from "@/shared/service/storage";
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
}: {
  command: string;
  append: AppendFn;
}) {
  const [option, setOption] = useState<AssistantMenuType>(
    AssistantMenuType.SEARCH,
  );

  const appendRef = useRef(append);
  const commandRef = useRef(command);
  const calledRef = useRef(false);
  useEffect(() => {
    if (calledRef.current) { return; }
    calledRef.current = true;
    setTimeout(() => {
      appendRef.current({ text: commandRef.current });
    }, 0);
  }, []);

  const handleClick = (action: AssistantMenuType) => {
    if (action === AssistantMenuType.SEARCH) {
      append({
        text: command,
      });
    }
    setOption(action);
  };

  const menuOptions = Object.values(AssistantMenuType).filter(
    (label) => label !== AssistantMenuType.SPEECH,
  );

  return {
    option,
    menuOptions,
    handleClick,
    AssistantMenuType,
    add: addWord,
  };
}
