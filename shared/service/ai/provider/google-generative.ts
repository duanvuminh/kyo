import { AiBase } from "@/shared/service/ai/ai";
import { updateWordsContent } from "@/shared/service/dictionary";
import { BaseItem } from "@/shared/types/models/word";
import { google } from "@ai-sdk/google";

export class AiGoogleGenerative extends AiBase {
  maxOutputTokens = undefined;
  saveAiReply = (item: BaseItem) => {
    return updateWordsContent(item);
  };

  model = google("gemini-2.0-flash-lite-001");
}
