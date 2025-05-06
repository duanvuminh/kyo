import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChatRequestOptions, UIMessage } from "ai";
import { Send } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ChatInputProps {
  input: string;
  messages: UIMessage[];
  handleSubmit: (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export function ChatInput({
  input,
  handleInputChange,
  handleSubmit,
}: ChatInputProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="sticky bottom-8 w-full prose p-2 mx-auto"
    >
      <div className="relative">
        <ChatTextArea
          value={input}
          placeholder="Hỏi bất kì điều gì"
          onChange={handleInputChange}
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
      <Link
        href="/update-content"
        className="text-xs mx-auto text-muted-foreground"
      >
        Đóng góp
      </Link>
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
      className="border p-2 w-full bg-input"
    />
  );
}
