import { Practice } from "@/feature/practice/model/practice";
import { mapDatas } from "@/shared/lib/data-convert";
import { questionSchema } from "@/shared/lib/question-mapper";
import {
  createThreadFromMessage,
  getMessageFromDisCord,
  getThreadMessages,
  sendDiscordMessage,
  sendMessageToThread,
} from "@/shared/repository/discord";
import { getWordById, updateDocument } from "@/shared/repository/firestore";
import { freeAiService } from "@/shared/service/ai/factory";
import {
  instructionGenerateGrammarQuestions,
  instructionGenerateVocabQuestions,
  promptGenerateGrammarQuestions,
  promptGenerateVocabQuestions,
} from "@/shared/service/ai/instructions";
import { KWordType } from "@/shared/types/models/word-type";
import { DiscordMessageDTO } from "@/shared/types/dto/discord-message";
import { KWord } from "@/shared/types/models/word";

const _channelId = "1386090536753958952";

export const getFlashCard = async (word: string): Promise<Practice | null> => {
  const wordFromDictionary = await getWordById(word);
  if (!wordFromDictionary) {
    return null;
  }

  if (wordFromDictionary.practiceId) {
    return _getExistingFlashCard(wordFromDictionary.practiceId);
  }

  return _createNewFlashCard(word, KWord.fromDTO(wordFromDictionary));
};

export const getPractice = async (practice: Practice): Promise<Practice[]> => {
  const discordMessage = await getThreadMessages({
    threadId: practice.id,
  });
  return mapDatas<DiscordMessageDTO, Practice>(
    discordMessage.filter((msg) => msg.type === 0),
    Practice.fromDTO
  );
};

const _getExistingFlashCard = async (
  practiceId: string
): Promise<Practice | null> => {
  const discordMessage = await getMessageFromDisCord({
    channelId: _channelId,
    messageId: practiceId,
  });
  return discordMessage ? Practice.fromDTO(discordMessage) : null;
};

const _createNewFlashCard = async (
  word: string,
  wordData: KWord
): Promise<Practice | null> => {
  const summary = await freeAiService().summaryWord(wordData);
  if (!summary) {
    return null;
  }

  const discordMessage = await sendDiscordMessage({
    channelId: _channelId,
    message: summary,
  });
  if (!discordMessage) {
    return null;
  }

  updateDocument(word, { practiceId: discordMessage.id });

  // Tạo practice questions trong background
  _createPracticeQuestions(
    discordMessage.id,
    wordData.words,
    summary,
    wordData.type
  );

  return Practice.fromDTO(discordMessage);
};

const _createPracticeQuestions = async (
  messageId: string,
  word: string,
  flashCardContent: string,
  wordType?: KWordType
): Promise<void> => {
  // Tạo thread từ flashcard message
  const thread = await createThreadFromMessage({
    channelId: _channelId,
    messageId,
    name: `Practice: ${word}`,
  });
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
    await sendMessageToThread({ threadId: thread.id, message: content });
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
