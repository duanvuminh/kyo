import type { EditableCard, EditableQuestion } from "@/app/update-content/_lib/update-content.types";

const INDENT = "  ";

export function serializeCardsToSource(cards: EditableCard[]): string {
  const body = cards.map((card) => serializeCard(card)).join(",\n");
  return `import { FlashCardItem } from "@/lib/components/flash-card/flash-card";\n\nexport const cards: FlashCardItem[] = [\n${body}\n];\n`;
}

export function serializeCard(card: EditableCard): string {
  const lines: string[] = [`${INDENT}{`];
  lines.push(`${INDENT.repeat(2)}front: ${quote(card.front)},`);
  lines.push(`${INDENT.repeat(2)}back: ${serializeStringArray(card.back, 2)},`);
  if (card.more.length > 0) {
    lines.push(`${INDENT.repeat(2)}more: ${serializeStringArray(card.more, 2)},`);
  }
  if (card.questions.length > 0) {
    lines.push(`${INDENT.repeat(2)}questions: ${serializeQuestions(card.questions)},`);
  }
  lines.push(`${INDENT}}`);
  return lines.join("\n");
}

function serializeQuestions(questions: EditableQuestion[]): string {
  const body = questions.map((q) => serializeQuestion(q)).join(",\n");
  return `[\n${body}\n${INDENT.repeat(2)}]`;
}

function serializeQuestion(q: EditableQuestion): string {
  const indent = INDENT.repeat(3);
  const lines: string[] = [`${indent}{`];
  lines.push(`${indent}${INDENT}id: ${quote(q.id)},`);
  lines.push(`${indent}${INDENT}content: ${quote(q.content)},`);
  lines.push(`${indent}${INDENT}answers: ${serializeStringArray(q.answers, 4)},`);
  lines.push(`${indent}${INDENT}correctAnswer: ${q.correctAnswer},`);
  if (q.memo.length > 0) {
    lines.push(`${indent}${INDENT}memo: ${serializeStringArray(q.memo, 4)},`);
  }
  lines.push(`${indent}}`);
  return lines.join("\n");
}

function serializeStringArray(items: string[], level: number): string {
  if (items.length === 0) {
    return "[]";
  }
  const itemIndent = INDENT.repeat(level + 1);
  const body = items.map((item) => `${itemIndent}${quote(item)},`).join("\n");
  return `[\n${body}\n${INDENT.repeat(level)}]`;
}

function quote(value: string): string {
  return JSON.stringify(value);
}
