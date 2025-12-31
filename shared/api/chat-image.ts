import { fetchApi } from "@/shared/api/client";
import { ChatImageUploadResponse } from "@/app/api/chat-image/route";

export async function uploadChatImageToStorage(imageBase64: string): Promise<string> {
  const result = await fetchApi<ChatImageUploadResponse>("/api/chat-image", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image: imageBase64 }),
  });

  return result.url;
}
