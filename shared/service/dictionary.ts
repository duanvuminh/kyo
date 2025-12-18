import { algoliaAdd, algoliaUpdate } from "@/shared/repository/algolia";
import { updateDiscordMessage } from "@/shared/repository/discord";
import {
  addWords,
  getAllGrammar,
  getWordById,
  updateDocument,
} from "@/shared/repository/firestore";
import { getWordFromExternalService } from "@/shared/repository/mazzi";
import { WordDTO } from "@/shared/types/dto/word";
import { BaseItem, KWord, Source } from "@/shared/types/models/word";
import { KWordType } from "@/shared/types/models/word-type";
import Fuse from "fuse.js";

function createWordResult(word: string, searchWord: string): KWord {
  const isExactMatch = word === searchWord;
  if (isExactMatch) {
    addWords({ words: searchWord, type: "word", hantu: null, content: null, practiceId: null });
  }
  return {
    words: isExactMatch ? word : searchWord,
    documentId: isExactMatch ? word : searchWord,
    source: Source.FIREBASE,
    type: KWordType.WORD,
  };
}

function createDefaultResult(word: string): KWord {
  return { words: word, source: Source.FIREBASE, documentId: word, type: KWordType.OTHER };
}

export async function searchWord(word: string): Promise<KWord> {
  const wordFromDictionary = await getWordById(word);
  if (wordFromDictionary) {
    return KWord.fromDTO(wordFromDictionary);
  }

  const grammars = await searchGrammar(word);
  if (grammars.length > 0) {
    return KWord.fromDTO(grammars[0]);
  }

  const wordFromInternet = await getWordFromExternalService(word);
  const externalWord = wordFromInternet?.data?.[0]?.word;
  if (externalWord) {
    return createWordResult(word, externalWord);
  }

  return createDefaultResult(word);
}

export async function searchGrammar(value: string): Promise<WordDTO[]> {
  const allGrammar: WordDTO[] = await getAllGrammar();
  const fuse = new Fuse<WordDTO>(allGrammar, {
    keys: ["words"],
    threshold: 0.6,
  });

  return fuse.search(value).map((result) => result.item);
}

export const updateWordsContent = (item: BaseItem) => {
  switch (item.source) {
    case Source.FIREBASE:
      if (!item.words) {
        return;
      }
      updateDocument(item.words, { content: item.content });
      break;
    case Source.DISCORD:
      if (!item.words) {
        return;
      }
      if (!item.documentId) {
        return;
      }
      updateDiscordMessage({
        channelId: "1386090536753958952",
        messageId: item.documentId,
        content: item.content,
      });
      break;
    case Source.ALGOLIA:
      if (!item.documentId) {
        algoliaAdd([item]);
      } else {
        algoliaUpdate([item]);
      }
      break;
    default:
      break;
  }
};
