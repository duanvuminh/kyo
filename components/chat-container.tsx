import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface ChatContainerProps {
  isUser: boolean;
  children: ReactNode;
}

export function ChatContainer({ isUser, children }: ChatContainerProps) {
  return isUser ? (
    <Card className="ml-10 mr-1 px-5 py-1">{children}</Card>
  ) : (
    children
  );
}
