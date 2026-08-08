import { WordHistory, WordHistoryItem, useWordHistory } from "@/lib/components/chat/word-history";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAppSelector } from "@/lib/stores/hook";
import { selectMessage } from "@/lib/stores/slice-message";
import { Send } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface ChatInputProps {
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
  history: WordHistoryItem[];
  onInput: (v: string) => void;
  onSelectHistory: (item: WordHistoryItem) => void;
  onSubmit: () => void;
}

function ChatForm({ input, history, onInput, onSelectHistory, onSubmit }: ChatFormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="sticky bottom-8 w-full prose p-2 mx-auto pt-20"
    >
      <div className="relative">
        <div className="absolute bottom-full left-0 right-0 pb-1">
          <WordHistory history={history} onSelect={onSelectHistory} />
        </div>
        <ChatTextArea
          value={input}
          placeholder="Hỏi bất kì điều gì"
          onChange={(e) => onInput(e.currentTarget.value)}
          onSubmit={onSubmit}
        />
        <Button
          variant="ghost"
          size="icon"
          type="submit"
          aria-label="Gửi"
          className="absolute flex right-1 bottom-1"
        >
          <Send />
        </Button>
      </div>
    </form>
  );
}

interface ChatTextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  placeholder?: string;
}

function ChatTextArea({ value, onChange, onSubmit, placeholder = "" }: ChatTextAreaProps) {
  return (
    <Textarea
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={(e) => {
        // isComposing: đang gõ qua IME (vd. tiếng Nhật) → Enter dùng để chọn chữ, không submit
        if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
          e.preventDefault();
          onSubmit();
        }
      }}
      rows={0}
      className="border p-2 w-full bg-primary-foreground"
    />
  );
}
