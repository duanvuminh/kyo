import {
  createQuestionThread,
  getFlashCardMessage,
  getQuestionMessages,
  postFlashCard,
  postQuestionMessage,
  updateQuestionMessage,
} from "@/app/practice/_lib/practice.repository";
import { discordThreadTag } from "@/lib/constants";
import { mapDatas } from "@/lib/utils/data-convert";
import { questionSchema, type GeneratedQuestion } from "@/lib/services/question.service";
import { getWordById, upsertDocument } from "@/lib/repositories/firestore.repository";
import { freeAiService } from "@/lib/services/ai/factory";
import {
  instructionGenerateGrammarQuestions,
  instructionGenerateVocabQuestions,
  promptGenerateGrammarQuestions,
  promptGenerateVocabQuestions,
} from "@/lib/services/ai/instructions";
import type { DiscordMessageEntity } from "@/lib/repositories/discord.repository";
import { KWord, KWordType, Practice, Source } from "@/lib/types";
import matter from "gray-matter";
import { revalidateTag } from "next/cache";
import { after } from "next/server";

function discordMessageToPractice(data: DiscordMessageEntity): Practice {
  return {
    id: data.id,
    content: data.content,
    attachments: data.attachments?.map((a) => a.url) ?? [],
  };
}

export interface FlashCardWithPractice {
  flashCard: Practice | null;
  practice: Practice[];
}

export const getFlashCardWithPractice = async (word: string): Promise<FlashCardWithPractice> => {
  const wordFromDictionary = await getWordById(word);
  let flashCard: Practice | null = null;

  if (wordFromDictionary?.practiceId) {
    try {
      const existing = await _getExistingFlashCard(wordFromDictionary.practiceId);
      if (existing?.content) {
        flashCard = existing;
      }
      // existing is null → message bị xóa (404) → fall through để regenerate
    } catch (error) {
      // Discord lỗi tạm thời (429, 5xx) → không regenerate, tránh drain AI quota
      console.error("[getFlashCardWithPractice] failed to fetch existing flashcard:", error);
      return { flashCard: null, practice: [] };
    }
  }

  const wordData = wordFromDictionary
    ? KWord.fromDTO(wordFromDictionary)
    : new KWord(word, word, Source.FIREBASE, KWordType.WORD);

  if (!flashCard) {
    flashCard = await _createNewFlashCard(word, wordData);
  }
  if (!flashCard) {
    return { flashCard: null, practice: [] };
  }

  const practice = await _getPractice(flashCard);
  if (practice.length > 0) {
    return { flashCard, practice };
  }

  // Chưa có câu hỏi — mới tạo flashcard, hoặc lần trước tạo câu hỏi bị lỗi (vd. hết quota AI).
  // Generate ngay (đồng bộ) để user thấy được luôn ở lần load này, thay vì phải F5 lại sau;
  // ghi lên Discord (để lần sau đọc lại không tốn AI quota) thì mới đẩy qua after().
  return { flashCard, practice: await _generateAndSchedulePersist(flashCard, wordData) };
};

async function _generateAndSchedulePersist(
  flashCard: Practice,
  wordData: KWord
): Promise<Practice[]> {
  try {
    const questions = await _generatePracticeQuestions(wordData.words, flashCard.content, wordData.type);
    // Format markdown 1 lần duy nhất (xáo đáp án bằng Math.random) — dùng chung cho cả bản
    // hiển thị ngay lẫn bản ghi lên Discord, tránh 2 lần gọi random ra 2 thứ tự khác nhau.
    const formatted = questions.map((q) => _formatQuestionToMarkdown(q));
    after(() => _persistPracticeQuestions(flashCard.id, wordData.words, formatted));
    return formatted.map((content, index) => ({
      id: `pending-${flashCard.id}-${index}`,
      content,
      attachments: [],
    }));
  } catch (error) {
    console.error("[getFlashCardWithPractice] failed to generate practice questions:", error);
    return [];
  }
}

const _getPractice = async (practice: Practice): Promise<Practice[]> => {
  const discordMessage = await getQuestionMessages(practice.id);
  return mapDatas<DiscordMessageEntity, Practice>(
    discordMessage.filter((msg) => msg.type === 0),
    discordMessageToPractice
  );
};

export const updateQuestion = async ({
  threadId,
  messageId,
  content,
  answers,
  correctAnswer,
  yomi,
}: {
  threadId: string;
  messageId: string;
  content: string;
  answers: [string, string, string, string];
  correctAnswer: number;
  yomi?: string;
}): Promise<void> => {
  const body = matter.stringify(content, {
    answers,
    correctAnswer,
    ...(yomi ? { yomi } : {}),
  });

  await updateQuestionMessage(threadId, messageId, body);
};

const _getExistingFlashCard = async (
  practiceId: string
): Promise<Practice | null> => {
  const discordMessage = await getFlashCardMessage(practiceId);
  return discordMessage ? discordMessageToPractice(discordMessage) : null;
};

const _createNewFlashCard = async (
  word: string,
  wordData: KWord
): Promise<Practice | null> => {
  let summary: string | undefined;
  try {
    summary = await freeAiService().summaryWord(wordData);
  } catch (error) {
    console.error("[_createNewFlashCard] summaryWord failed:", error);
    return null;
  }
  if (!summary) {
    return null;
  }

  let discordMessage: DiscordMessageEntity;
  try {
    discordMessage = await postFlashCard(summary);
  } catch (error) {
    // Discord lỗi tạm thời (429, 5xx) → không crash trang, tránh drain AI quota
    console.error("[_createNewFlashCard] postFlashCard failed:", error);
    return null;
  }

  await upsertDocument(word, { practiceId: discordMessage.id });

  return discordMessageToPractice(discordMessage);
};

async function _generatePracticeQuestions(
  word: string,
  flashCardContent: string,
  wordType?: KWordType
): Promise<GeneratedQuestion[]> {
  const isGrammar = wordType === KWordType.GRAMMAR;
  const instruction = isGrammar
    ? instructionGenerateGrammarQuestions
    : instructionGenerateVocabQuestions;
  const prompt = isGrammar
    ? promptGenerateGrammarQuestions(flashCardContent, word)
    : promptGenerateVocabQuestions(word, flashCardContent);

  const result = await freeAiService().generateObject({
    schema: questionSchema,
    prompt,
    system: instruction,
  });

  return result.questions;
}

async function _persistPracticeQuestions(
  messageId: string,
  word: string,
  formattedQuestions: string[]
): Promise<void> {
  // Chạy nền qua after() (sau khi response đã trả) — chỉ để lần sau đọc lại từ Discord không
  // cần tốn AI quota generate lại; user đã thấy câu hỏi ngay từ lần generate đồng bộ rồi, nên
  // lỗi ở đây không cần crash/chặn gì cả, chỉ log để biết.
  try {
    const thread = await createQuestionThread(messageId, `Practice: ${word}`);
    for (const content of formattedQuestions) {
      await postQuestionMessage(thread.id, content);
    }

    // getQuestionMessages đã cache rỗng lúc trang load lần đầu (câu hỏi chưa kịp tạo) — phải
    // tự xoá cache đó sau khi tạo xong, không thì user không bao giờ thấy câu hỏi mới
    revalidateTag(discordThreadTag(messageId), "max");
  } catch (error) {
    console.error("[_persistPracticeQuestions] failed:", error);
  }
}

const _formatQuestionToMarkdown = (q: GeneratedQuestion): string => {
  const answers = _shuffleAnswers(
    [q.answer1, q.answer2, q.answer3, q.answer4],
    q.correctAnswer
  );

  return `---
answers: ["${answers.list[0]}", "${answers.list[1]}", "${answers.list[2]}", "${answers.list[3]}"]
correctAnswer: ${answers.correctIndex}
---
${q.content}`;
};

const _shuffleAnswers = (
  answers: string[],
  correctAnswerIndex: number
): { list: string[]; correctIndex: number } => {
  const correctAnswer = answers[correctAnswerIndex];
  const shuffled = [...answers].sort(() => Math.random() - 0.5);
  const correctIndex = shuffled.findIndex((a) => a === correctAnswer);
  return { list: shuffled, correctIndex: correctIndex >= 0 ? correctIndex : 0 };
};
