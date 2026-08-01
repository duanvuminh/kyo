import { freeAiService } from "@/shared/service/ai/factory";
import { instructionNormalizeWord } from "@/shared/service/ai/instructions";
import { z } from "zod";

const normalizeSchema = z.object({ normalized: z.string() });

export async function normalizeWordViaAi(word: string): Promise<string> {
  const result = await freeAiService().generateObject({
    schema: normalizeSchema,
    system: instructionNormalizeWord,
    prompt: word,
  });
  return result.normalized.trim() || word;
}
