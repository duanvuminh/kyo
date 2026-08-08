import { checkWord } from "@/app/actions/check.actions";
import { saveWordContent } from "@/app/actions/practice.actions";
import { PracticeStorage } from "@/lib/services/storage.service";
import { useAppSelector } from "@/lib/stores/hook";
import { selectMessage } from "@/lib/stores/slice-message";
import { Source } from "@/lib/types";
import { useChat } from "@ai-sdk/react";
import { useEffect, useRef, useState } from "react";

enum AssistantMenuType {
  SEARCH = "Tra cứu",
  WRITE = "Cách viết",
  SPEECH = "Phát âm",
}

export type AppendFn = ReturnType<typeof useChat>["sendMessage"];

async function addWord(words: string, content?: string) {
  const isValid = await checkWord(words);
  if (!isValid) {
    return false;
  }
  // Ném AppError(DUPLICATE_KEYWORD) nếu từ đã có trong danh sách — để AddButton tự báo toast phù hợp
  PracticeStorage.addToPracticeList(words);
  if (content) {
    await saveWordContent({ source: Source.FIREBASE, documentId: words, words, content });
  }
  return true;
}

function useAutoSend(autoSend: boolean, command: string, append: AppendFn) {
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
  const message = useAppSelector(selectMessage);
  useAutoSend(autoSend, command, append);

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
    add: (words: string) =>
      addWord(words, message.words === words ? message.content : undefined),
  };
}
