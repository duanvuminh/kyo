import { Practice } from "@/feature/practice/model/practice";
import { DiscordMessageDTO } from "@/shared/types/dto/discord-message";
import matter from "gray-matter";

export class Question {
  constructor(
    public id: string,
    public content: string,
    public answers: [string, string, string, string],
    public correctAnswer: 0 | 1 | 2 | 3,
    public attachments?: string[],
    public yomi?: string,
    public memo?: string[]
  ) {}

  static fromPractice(dto: Practice | undefined): Question | undefined {
    if (!dto) {
      return undefined;
    }
    const parsed = matter(dto.content);
    return new Question(
      dto.id,
      parsed.content,
      parsed.data.answers ?? [],
      parsed.data.correctAnswer ?? 0,
      dto.attachments ?? [],
      parsed.data.yomi
    );
  }
  static fromDTO(data: DiscordMessageDTO): Question {
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
}
