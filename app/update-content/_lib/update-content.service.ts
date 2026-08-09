import type { EditableCard, EditableQuestion } from "@/app/update-content/_lib/update-content.types";
import ts from "typescript";

type JSONValue =
  | string
  | number
  | boolean
  | JSONValue[]
  | { [key: string]: JSONValue };

export function parseCardsSource(source: string): EditableCard[] {
  const sourceFile = ts.createSourceFile(
    "cards.ts",
    source,
    ts.ScriptTarget.Latest,
    true
  );
  const arrayLiteral = findCardsArrayLiteral(sourceFile);
  if (!arrayLiteral) {
    throw new Error("cards array literal not found");
  }

  const raw = evaluateExpression(arrayLiteral) as JSONValue[];
  return raw.map(toEditableCard);
}

export function parseCardText(text: string): EditableCard {
  const wrapped = `(${text.trim().replace(/,\s*$/, "")})`;
  const sourceFile = ts.createSourceFile("card.ts", wrapped, ts.ScriptTarget.Latest, true);
  const node = singleObjectLiteral(sourceFile);
  if (!node) {
    throw new Error("pasted content is not a single card object literal");
  }
  return toEditableCard(evaluateExpression(node));
}

function singleObjectLiteral(sourceFile: ts.SourceFile): ts.ObjectLiteralExpression | undefined {
  const statement = sourceFile.statements[0];
  if (!statement || !ts.isExpressionStatement(statement)) {
    return undefined;
  }
  const expr = statement.expression;
  const inner = ts.isParenthesizedExpression(expr) ? expr.expression : expr;
  return ts.isObjectLiteralExpression(inner) ? inner : undefined;
}

function findCardsArrayLiteral(
  sourceFile: ts.SourceFile
): ts.ArrayLiteralExpression | undefined {
  let result: ts.ArrayLiteralExpression | undefined;

  sourceFile.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) {
      return;
    }
    for (const decl of node.declarationList.declarations) {
      if (
        ts.isIdentifier(decl.name) &&
        decl.name.text === "cards" &&
        decl.initializer &&
        ts.isArrayLiteralExpression(decl.initializer)
      ) {
        result = decl.initializer;
      }
    }
  });

  return result;
}

function evaluatePrimitive(node: ts.Expression): JSONValue | undefined {
  if (ts.isStringLiteralLike(node)) {
    return node.text;
  }
  if (ts.isNumericLiteral(node)) {
    return Number(node.text);
  }
  if (node.kind === ts.SyntaxKind.TrueKeyword) {
    return true;
  }
  if (node.kind === ts.SyntaxKind.FalseKeyword) {
    return false;
  }
  if (
    ts.isPrefixUnaryExpression(node) &&
    node.operator === ts.SyntaxKind.MinusToken &&
    ts.isNumericLiteral(node.operand)
  ) {
    return -Number(node.operand.text);
  }
  return undefined;
}

function evaluateExpression(node: ts.Expression): JSONValue {
  const primitive = evaluatePrimitive(node);
  if (primitive !== undefined) {
    return primitive;
  }
  if (ts.isParenthesizedExpression(node)) {
    return evaluateExpression(node.expression);
  }
  if (ts.isArrayLiteralExpression(node)) {
    return node.elements.map(evaluateExpression);
  }
  if (ts.isObjectLiteralExpression(node)) {
    return evaluateObjectLiteral(node);
  }

  throw new Error(`unsupported syntax kind: ${ts.SyntaxKind[node.kind]}`);
}

function evaluateObjectLiteral(
  node: ts.ObjectLiteralExpression
): Record<string, JSONValue> {
  const result: Record<string, JSONValue> = {};
  for (const prop of node.properties) {
    if (!ts.isPropertyAssignment(prop)) {
      continue;
    }
    const key = propertyName(prop.name);
    if (key === undefined) {
      continue;
    }
    result[key] = evaluateExpression(prop.initializer);
  }
  return result;
}

function propertyName(name: ts.PropertyName): string | undefined {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) {
    return name.text;
  }
  return undefined;
}

function toStringArray(value: JSONValue | undefined): string[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.map((v) => String(v));
}

function toEditableCard(raw: JSONValue): EditableCard {
  const obj = raw as Record<string, JSONValue>;
  return {
    front: String(obj.front ?? ""),
    back: toStringArray(obj.back),
    more: toStringArray(obj.more),
    questions: toEditableQuestions(obj.questions),
  };
}

function toEditableQuestions(value: JSONValue | undefined): EditableQuestion[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.map(toEditableQuestion);
}

function toEditableQuestion(raw: JSONValue): EditableQuestion {
  const obj = raw as Record<string, JSONValue>;
  const answers = toStringArray(obj.answers);
  const correctAnswer = Number(obj.correctAnswer ?? 0);

  return {
    id: String(obj.id ?? ""),
    content: String(obj.content ?? ""),
    answers: [answers[0] ?? "", answers[1] ?? "", answers[2] ?? "", answers[3] ?? ""],
    correctAnswer: (correctAnswer >= 0 && correctAnswer <= 3 ? correctAnswer : 0) as 0 | 1 | 2 | 3,
    memo: toStringArray(obj.memo),
  };
}
