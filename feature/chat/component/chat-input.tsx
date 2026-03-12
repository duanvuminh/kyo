import { PracticeAdd } from "@/shared/component/practice-add";
import { Button } from "@/shared/component/ui/button";
import { Textarea } from "@/shared/component/ui/textarea";
import { UpdateContentLink } from "@/shared/component/update-content-link";
import { useAppSelector } from "@/shared/stores/hook";
import { selectMessage } from "@/shared/stores/slice-message";
import { UIMessage } from "ai";
import { Send } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { WordHistory, WordHistoryItem, useWordHistory } from "./word-history";

interface ChatInputProps {
  messages: UIMessage[];
  sendMessage: ({ text }: { text: string }) => void;
  onSelectHistory: (item: WordHistoryItem) => void;
}

export function ChatInput({ sendMessage, onSelectHistory }: ChatInputProps) {
  const message = useAppSelector(selectMessage);
  const [input, setInput] = useState("");
  const { history, addWord } = useWordHistory();
  const savedRef = useRef("");

  useEffect(() => {
    if (message.words && message.content && message.words !== savedRef.current) {
      savedRef.current = `${message.words}::${message.content}`;
      addWord({ words: message.words, content: message.content });
    }
  }, [message.words, message.content, addWord]);

  return (
    <ChatForm
      input={input}
      words={message.words}
      history={history}
      onInput={setInput}
      onSelectHistory={onSelectHistory}
      onSubmit={() => {
        sendMessage({ text: input });
        setInput("");
      }}
    />
  );
}

interface ChatFormProps {
  input: string;
  words: string;
  history: WordHistoryItem[];
  onInput: (v: string) => void;
  onSelectHistory: (item: WordHistoryItem) => void;
  onSubmit: () => void;
}

function ChatForm({ input, words, history, onInput, onSelectHistory, onSubmit }: ChatFormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="sticky bottom-8 w-full prose p-2 mx-auto pt-20"
    >
      <WordHistory history={history} onSelect={onSelectHistory} />
      <div className="relative">
        <ChatTextArea
          value={input}
          placeholder="Hỏi bất kì điều gì"
          onChange={(e) => onInput(e.currentTarget.value)}
        />
        <Button
          variant="ghost"
          size="icon"
          type="submit"
          className="absolute flex right-1 bottom-1"
        >
          <Send />
        </Button>
      </div>
      {words != "" && (
        <div className="flex p-2 items-center gap-2">
          <PracticeAdd />
          <UpdateContentLink />
        </div>
      )}
    </form>
  );
}

interface ChatTextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

function ChatTextArea({ value, onChange, placeholder = "" }: ChatTextAreaProps) {
  return (
    <Textarea
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      rows={0}
      className="border p-2 w-full bg-primary-foreground"
    />
  );
}
