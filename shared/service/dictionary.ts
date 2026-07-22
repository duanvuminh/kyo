import { isDev } from "@/shared/config/env";
import { algoliaUpdate } from "@/shared/repository/algolia";
import { updateDiscordMessage } from "@/shared/repository/discord";
import {
  createDocument,
  getWordById,
  updateDocument,
} from "@/shared/repository/firestore";
import { isKanjiWord } from "@/shared/lib/kanji";
import { freeAiService } from "@/shared/service/ai/factory";
import {
  instructionCompareContent,
  promptCompareContent,
} from "@/shared/service/ai/instructions";
import { updateHuusennarareViaGithub } from "@/shared/service/github";
import { BaseItem, KWord, Source } from "@/shared/type/models/word";
import { KWordType } from "@/shared/type/models/word-type";
import { z } from "zod";

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

export const createWordsContent = async (item: BaseItem) => {
  if (item.source !== Source.FIREBASE) {
    return;
  }
  if (!item.words || !item.content) {
    return;
  }
  createDocument(item.words, { content: item.content, type: item.type });
};

export const updateWordsContent = async (item: BaseItem) => {
  if (item.source === Source.HUUSENNARARE) {
    await updateHuusennarareViaGithub(item);
    return;
  }

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
    updateDocument(item.words, { content: item.content });
    return;
  }

  if (await _shouldUpdateWithAi(item.words, item.content)) {
    updateDocument(item.words, { content: item.content });
  }
};

const _handleDiscordUpdate = async (item: BaseItem) => {
  if (!item.words || !item.documentId || !item.content) {
    return;
  }

  if (isDev) {
    updateDiscordMessage({
      channelId: "1386090536753958952",
      messageId: item.documentId,
      content: item.content,
    });
    return;
  }

  if (await _shouldUpdateWithAi(item.words, item.content)) {
    updateDiscordMessage({
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
