"use client";

import { ChatInput } from "@/feature/manga/component/manga-chat/chat-input";
import { ChatMessages } from "@/feature/manga/component/manga-chat/chat-messages";
import { useAblyChat } from "@/feature/manga/component/manga-chat/use-ably-chat";
import { CenterMessage } from "@/shared/component/center-message";
import { useSession } from "next-auth/react";

function QnaChat({ email }: { email: string }) {
  const { messages, sendMessage, isConnected, isLoadingHistory } =
    useAblyChat();

  const handleSend = (text: string, image?: string) => {
    sendMessage(text, email, image);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex items-center gap-2 p-4 border-b">
        <h1 className="font-semibold">Hỏi đáp</h1>
        <span
          className={`w-2 h-2 rounded-full ${
            isConnected ? "bg-green-500" : "bg-red-500"
          }`}
        />
      </div>
      <ChatMessages messages={messages} isLoading={isLoadingHistory} />
      <ChatInput onSend={handleSend} disabled={!isConnected} />
    </div>
  );
}

export default function HoiDapPage() {
  const { data: session } = useSession();
  const email = session?.user?.email;

  if (!email) {
    return (
      <CenterMessage>
        <div className="flex flex-col items-center gap-4">
          <p className="text-muted-foreground">
            Vui lòng đăng nhập để sử dụng hỏi đáp
          </p>
        </div>
      </CenterMessage>
    );
  }

  return <QnaChat email={email} />;
}
