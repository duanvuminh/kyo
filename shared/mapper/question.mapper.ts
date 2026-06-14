import type { DiscordMessageEntity } from "@/shared/type/dto/discord-message";
import type { Question } from "@/shared/type/models/question";
import matter from "gray-matter";

export function discordMessageToQuestion(data: DiscordMessageEntity): Question {
  const parsed = matter(data.content);
  return {
    id: data.id,
    content: parsed.content,
    answers: parsed.data.answers ?? [],
    correctAnswer: parsed.data.correctAnswer ?? 0,
    attachments: data.attachments?.map((item) => item.url) ?? [],
    yomi: parsed.data.yomi,
  };
}
