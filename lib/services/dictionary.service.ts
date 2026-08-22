import { isDev } from "@/lib/env";
import { algoliaUpdate } from "@/lib/repositories/algolia.repository";
import { updateDiscordMessage } from "@/lib/repositories/discord.repository";
import {
  createDocument,
  getWordById,
  updateDocument,
} from "@/lib/repositories/firestore.repository";
import { fetchHuusenMnemonic } from "@/lib/repositories/huusennarare.repository";
import { freeAiService } from "@/lib/services/ai/factory";
import {
  instructionCompareContent,
  promptCompareContent,
} from "@/lib/services/ai/instructions";
import { translateHuusenMnemonic } from "@/lib/services/ai/translate-huusen";
import { BaseItem, KWord, KWordType, Source } from "@/lib/types";
import { findHuusennarareUrl } from "@/lib/utils/huusennarare";
import { z } from "zod";

const KANJI_REGEX = /^[一-龯]$/;

function isKanjiWord(word: string): boolean {
  return KANJI_REGEX.test(word);
}

function _createKanjiResult(word: string): KWord {
  return {
    words: word,
    documentId: word,
    source: Source.FIREBASE,
    type: KWordType.KANJI,
  };
}

function _createWordResult(word: string): KWord {
  return {
    words: word,
    documentId: word,
    source: Source.FIREBASE,
    type: KWordType.WORD,
  };
}

export async function searchWord(word: string): Promise<KWord> {
  const wordFromDictionary = await getWordById(word);
  if (wordFromDictionary) {
    return KWord.fromDTO(wordFromDictionary);
  }

  if (isKanjiWord(word)) {
    return _createKanjiResult(word);
  }

  return _createWordResult(word);
}

// Content kanji do AI sinh có phần "Cách nhớ" (giữa dòng "Cách nhớ" và dòng "JLPT") theo
// instructionKanji — thay nguyên đoạn này bằng bản dịch từ huusennarare + ảnh minh hoạ.
function replaceCachNhoSection(content: string, mnemonicVi: string, imageUrl?: string): string | null {
  const lines = content.split("\n");
  const startIdx = lines.findIndex((l) => l.trim() === "Cách nhớ");
  if (startIdx === -1) {
    return null;
  }
  const jlptIdx = lines.findIndex((l, i) => i > startIdx && l.trim() === "JLPT");
  const endIdx = jlptIdx === -1 ? lines.length : jlptIdx;

  const newSection = [
    "Cách nhớ",
    "",
    mnemonicVi,
    ...(imageUrl ? ["", `![Cách nhớ](${imageUrl})`] : []),
    "",
  ];

  return [...lines.slice(0, startIdx), ...newSection, ...lines.slice(endIdx)].join("\n");
}

export async function syncHuusenMnemonic(word: string): Promise<void> {
  const url = findHuusennarareUrl(word);
  if (!url) {
    return;
  }

  let extracted;
  try {
    extracted = await fetchHuusenMnemonic(url, word);
  } catch (e) {
    console.error(`[huusen sync] fetch lỗi cho ${word}`, e);
    return;
  }

  if (!extracted) {
    // Trang không có đoạn 漢字の足し算 khớp với kanji này -> không cần thử lại lần sau
    await updateDocument(word, { huusenSynced: true });
    return;
  }

  const current = await getWordById(word);
  if (!current?.content) {
    return;
  }

  let translated: string;
  try {
    translated = await translateHuusenMnemonic(extracted.text);
  } catch (e) {
    console.error(`[huusen sync] dịch lỗi cho ${word}`, e);
    return;
  }

  const newContent = replaceCachNhoSection(current.content, translated, extracted.imageUrl);
  if (!newContent) {
    // content hiện tại không đúng format có "Cách nhớ" -> không cần thử lại lần sau
    await updateDocument(word, { huusenSynced: true });
    return;
  }

  await updateDocument(word, { content: newContent, huusenSynced: true });
}

export const createWordsContent = async (item: BaseItem) => {
  if (item.source !== Source.FIREBASE) {
    return;
  }
  if (!item.words || !item.content) {
    return;
  }
  await createDocument(item.words, { content: item.content, type: item.type });
};

export const updateWordsContent = async (item: BaseItem) => {
  if (item.source === Source.FIREBASE) {
    await _handleFirebaseUpdate(item);
    return;
  }

  if (item.source === Source.DISCORD) {
    await _handleDiscordUpdate(item);
    return;
  }

  if (item.source === Source.ALGOLIA) {
    await _handleAlgoliaUpdate(item);
  }
};

const _shouldUpdateWithAi = async (
  wordKey: string,
  newContent: string,
): Promise<boolean> => {
  const existing = await getWordById(wordKey);
  const oldContent = existing?.content ?? "";

  if (!oldContent || oldContent === newContent) {
    return true;
  }

  const ai = freeAiService();
  const CompareSchema = z.object({
    is_better: z.boolean(),
    reason: z.string().optional(),
  });

  const result = await ai.generateObject({
    schema: CompareSchema,
    system: instructionCompareContent,
    prompt: promptCompareContent(oldContent, newContent),
  });

  return result.is_better;
};

const _handleFirebaseUpdate = async (item: BaseItem) => {
  if (!item.words || !item.content) {
    return;
  }

  if (isDev) {
    await updateDocument(item.words, { content: item.content });
    return;
  }

  if (await _shouldUpdateWithAi(item.words, item.content)) {
    await updateDocument(item.words, { content: item.content });
  }
};

const _handleDiscordUpdate = async (item: BaseItem) => {
  if (!item.words || !item.documentId || !item.content) {
    return;
  }

  if (isDev) {
    await updateDiscordMessage({
      channelId: "1386090536753958952",
      messageId: item.documentId,
      content: item.content,
    });
    return;
  }

  if (await _shouldUpdateWithAi(item.words, item.content)) {
    await updateDiscordMessage({
      channelId: "1386090536753958952",
      messageId: item.documentId,
      content: item.content,
    });
  }
};

const _handleAlgoliaUpdate = async (item: BaseItem) => {
  if (!item.documentId || !item.words || !item.content) {
    return;
  }

  if (isDev) {
    algoliaUpdate([item]);
    return;
  }

  if (await _shouldUpdateWithAi(item.words, item.content)) {
    algoliaUpdate([item]);
  }
};
