import {
  createQuestionThread,
  getFlashCardMessage,
  getQuestionMessages,
  postFlashCard,
  postQuestionMessage,
  updateQuestionMessage,
} from "@/app/practice/_lib/discord.repository";
import { mapDatas } from "@/lib/utils/data-convert";
import { questionSchema } from "@/lib/services/question";
import { getWordById, upsertDocument } from "@/lib/repositories/firestore";
import { freeAiService } from "@/lib/services/ai/factory";
import {
  instructionGenerateGrammarQuestions,
  instructionGenerateVocabQuestions,
  promptGenerateGrammarQuestions,
  promptGenerateVocabQuestions,
} from "@/lib/services/ai/instructions";
import type { DiscordMessageEntity } from "@/lib/repositories/discord";
import { KWord, KWordType, Practice, Source } from "@/lib/types";
import matter from "gray-matter";

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
}): Promise<boolean> => {
  const body = matter.stringify(content, {
    answers,
    correctAnswer,
    ...(yomi ? { yomi } : {}),
  });

  return updateQuestionMessage(threadId, messageId, body);
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

  const discordMessage = await postFlashCard(summary);
  if (!discordMessage?.id) {
    return null;
  }

  upsertDocument(word, { practiceId: discordMessage.id });

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
  // Tạo thread từ flashcard message
  const thread = await createQuestionThread(messageId, `Practice: ${word}`);
  if (!thread) {
    return;
  }

  // Chọn instruction và prompt phù hợp với loại từ
  const isGrammar = wordType === KWordType.GRAMMAR;
  const instruction = isGrammar
    ? instructionGenerateGrammarQuestions
    : instructionGenerateVocabQuestions;
  const prompt = isGrammar
    ? promptGenerateGrammarQuestions(flashCardContent, word)
    : promptGenerateVocabQuestions(word, flashCardContent);

  // Generate questions bằng AI
  const result = await freeAiService().generateObject({
    schema: questionSchema,
    prompt,
    system: instruction,
  });

  // Gửi từng question vào thread
  for (const q of result.questions) {
    const content = _formatQuestionToMarkdown(q);
    await postQuestionMessage(thread.id, content);
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
