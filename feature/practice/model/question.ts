import matter from "gray-matter";
import { Practice } from "./practice";

export class Question {
  constructor(
    public content: string,
    public answers: [string, string, string, string],
    public correctAnswer: 0 | 1 | 2 | 3,
    public imageUrl?: string[],
    public yomi?: string
  ) {}

  static fromDTO(dto: Practice | undefined): Question | undefined {
    if (!dto) {
      return undefined;
    }
    const parsed = matter(dto.content);
    return new Question(
      parsed.content,
      parsed.data.answers ?? [],
      parsed.data.correctAnswer ?? 0,
      dto.attachments ?? [],
      parsed.data.yomi
    );
  }
}
