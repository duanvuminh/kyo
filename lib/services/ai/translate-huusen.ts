import { freeAiService } from "@/lib/services/ai/factory";
import { instructionTranslateHuusenMnemonic } from "@/lib/services/ai/instructions";
import { z } from "zod";

const translateSchema = z.object({ translated: z.string() });

export async function translateHuusenMnemonic(text: string): Promise<string> {
  const result = await freeAiService().generateObject({
    schema: translateSchema,
    system: instructionTranslateHuusenMnemonic,
    prompt: text,
  });
  return result.translated;
}
