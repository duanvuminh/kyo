import { freeAiService } from "@/shared/service/ai/factory";
import { instructionClassifyWord } from "@/shared/service/ai/instructions";
import { KWordType } from "@/shared/type/models/word-type";
import { z } from "zod";

const classifySchema = z.object({
  type: z.enum(["word", "grammar", "other"]),
  content: z.string(),
});

export type ClassifiedWord =
  | { type: KWordType.WORD | KWordType.GRAMMAR; content: string }
  | { type: KWordType.OTHER; content: string };

export async function classifyWord(message: string): Promise<ClassifiedWord> {
  const result = await freeAiService().generateObject({
    schema: classifySchema,
    system: instructionClassifyWord,
    prompt: message,
  });

  if (result.type === "other") {
    return { type: KWordType.OTHER, content: result.content };
  }

  return {
    type: result.type === "grammar" ? KWordType.GRAMMAR : KWordType.WORD,
    content: result.content,
  };
}
