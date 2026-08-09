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
import { questionSchema } from "@/lib/services/question.service";
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

function discordMessageToPractice(data: DiscordMessageEntity): Practice {
  return {
    id: data.id,
    content: data.content,
    attachments: data.attachments?.map((a) => a.url) ?? [],
  };
}

export const getFlashCard = async (word: string): Promise<Practice | null> => {
  const wordFromDictionary = await getWordById(word);
  if (wordFromDictionary?.practiceId) {
    try {
      const existing = await _getExistingFlashCard(wordFromDictionary.practiceId);
      if (existing?.content) {
        return existing;
      }
      // existing is null → message bị xóa (404) → fall through để regenerate
    } catch {
      // Discord lỗi tạm thời (429, 5xx) → không regenerate, tránh drain AI quota
      return null;
    }
  }

  const wordData = wordFromDictionary
    ? KWord.fromDTO(wordFromDictionary)
    : new KWord(word, word, Source.FIREBASE, KWordType.WORD);

  return _createNewFlashCard(word, wordData);
};

export const getPractice = async (practice: Practice): Promise<Practice[]> => {
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
  } catch {
    return null;
  }
  if (!summary) {
    return null;
  }

  let discordMessage: DiscordMessageEntity;
  try {
    discordMessage = await postFlashCard(summary);
  } catch {
    // Discord lỗi tạm thời (429, 5xx) → không crash trang, tránh drain AI quota
    return null;
  }

  await upsertDocument(word, { practiceId: discordMessage.id });

  // Tạo practice questions trong background
  _createPracticeQuestions(
    discordMessage.id,
    wordData.words,
    summary,
    wordData.type
  );

  return discordMessageToPractice(discordMessage);
};

const _createPracticeQuestions = async (
  messageId: string,
  word: string,
  flashCardContent: string,
  wordType?: KWordType
): Promise<void> => {
  // Chạy nền, không ai await lời gọi hàm này → tự catch để tránh unhandled rejection,
  // lỗi Discord/AI ở đây không nên crash flow chính (đã trả flashcard cho user rồi)
  try {
    const thread = await createQuestionThread(messageId, `Practice: ${word}`);

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

    for (const q of result.questions) {
      const content = _formatQuestionToMarkdown(q);
      await postQuestionMessage(thread.id, content);
    }

    // getQuestionMessages đã cache rỗng lúc trang load lần đầu (câu hỏi chưa kịp tạo) — phải
    // tự xoá cache đó sau khi tạo xong, không thì user không bao giờ thấy câu hỏi mới
    revalidateTag(discordThreadTag(messageId), "max");
  } catch {
    return;
  }
};

const _formatQuestionToMarkdown = (q: {
  content: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  correctAnswer: number;
}): string => {
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
