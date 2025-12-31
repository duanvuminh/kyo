"use client";
import Ably from "ably";
import { useCallback, useEffect, useRef, useState } from "react";

export interface ChatMessage {
  id: string;
  text: string;
  image?: string;
  sender: string;
  timestamp: number;
}

const CHANNEL_NAME = "manga-chat";
const HISTORY_LIMIT = 50;

function createMessageHandler(setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>) {
  return (message: Ably.Message) => {
    const data = message.data as ChatMessage;
    setMessages((prev) => {
      if (prev.some((m) => m.id === data.id)) {
        return prev;
      }
      return [...prev, data];
    });
  };
}

async function loadChatHistory(
  channel: Ably.RealtimeChannel,
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    const history = await channel.history({ limit: HISTORY_LIMIT });
    const historyMessages = history.items.map((item) => item.data as ChatMessage).reverse();
    setMessages(historyMessages);
  } catch (error) {
    console.error("Failed to load chat history:", error);
  } finally {
    setIsLoading(false);
  }
}

export function useAblyChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const channelRef = useRef<Ably.RealtimeChannel | null>(null);

  useEffect(() => {
    const ably = new Ably.Realtime({ authUrl: "/api/ably" });

    ably.connection.on("connected", () => setIsConnected(true));
    ably.connection.on("disconnected", () => setIsConnected(false));

    const channel = ably.channels.get(CHANNEL_NAME, { params: { rewind: "1" } });
    channelRef.current = channel;

    loadChatHistory(channel, setMessages, setIsLoadingHistory);
    channel.subscribe("message", createMessageHandler(setMessages));

    return () => {
      channel.unsubscribe();
      ably.close();
    };
  }, []);

  const sendMessage = useCallback((text: string, sender: string, image?: string) => {
    if (!channelRef.current || (!text.trim() && !image)) {
      return;
    }
    const message: ChatMessage = {
      id: crypto.randomUUID(),
      text: text.trim(),
      image,
      sender,
      timestamp: Date.now(),
    };
    channelRef.current.publish("message", message);
  }, []);

  return { messages, sendMessage, isConnected, isLoadingHistory };
}
