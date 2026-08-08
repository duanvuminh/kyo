import { freeAiService } from "@/lib/services/ai/factory";
import { instructionNormalizeWord } from "@/lib/services/ai/instructions";
import { z } from "zod";

const normalizeSchema = z.object({
  normalized: z.string(),
  type: z.enum(["word", "grammar", "other"]),
});

export interface NormalizeResult {
  normalized: string;
  type: "word" | "grammar" | "other";
}

export async function normalizeWordViaAi(word: string): Promise<NormalizeResult> {
  const result = await freeAiService().generateObject({
    schema: normalizeSchema,
    system: instructionNormalizeWord,
    prompt: word,
  });
  return { normalized: result.normalized.trim() || word, type: result.type };
}
