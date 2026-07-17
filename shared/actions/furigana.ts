"use server";
import { freeAiService } from "@/shared/service/ai/factory";
import { z } from "zod";

const furiganaSchema = z.object({
  reading: z.string(),
});

export async function getFurigana(text: string): Promise<string | undefined> {
  const result = await freeAiService().generateObject({
    schema: furiganaSchema,
    system:
      "Cho biết cách đọc (hiragana) của từ/cụm từ tiếng Nhật sau. Chỉ trả về phần đọc vào field reading, không giải thích thêm.",
    prompt: text,
  });

  return result.reading || undefined;
}
