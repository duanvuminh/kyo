import { PracticeAdd } from "@/component/practice-add";
import { Button } from "@/component/ui/button";
import { Textarea } from "@/component/ui/textarea";
import { UpdateContentLink } from "@/component/update-content-link";
import { useAppSelector } from "@/stores/hook";
import { selectMessage } from "@/stores/slice-message";
import { UIMessage } from "ai";
import { Send } from "lucide-react";
import React, { useState } from "react";

interface ChatInputProps {
  messages: UIMessage[];
  sendMessage: ({ text }: { text: string }) => void;
}

export function ChatInput({ sendMessage }: ChatInputProps) {
  const words = useAppSelector(selectMessage).words;
  const [input, setInput] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage({ text: input,  });
        setInput("");
      }}
      className="sticky bottom-8 w-full prose p-2 mx-auto"
    >
      <div className="relative">
        <ChatTextArea
          value={input}
          placeholder="Hỏi bất kì điều gì"
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <div>
          <Button
            variant="ghost"
            size="icon"
            type="submit"
            className="absolute flex right-1 bottom-1"
          >
            <Send />
          </Button>
        </div>
      </div>
      {words && (
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

function ChatTextArea({
  value,
  onChange,
  placeholder = "",
}: ChatTextAreaProps) {
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
