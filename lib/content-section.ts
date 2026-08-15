import { Source } from "@/lib/types";

export const CONTENT_SECTIONS = ["grammar", "words", "kanji"] as const;

export type ContentSection = (typeof CONTENT_SECTIONS)[number];

export function isContentSection(value: string | undefined): value is ContentSection {
  return (CONTENT_SECTIONS as readonly string[]).includes(value ?? "");
}

const SECTION_TO_SOURCE: Record<ContentSection, Source> = {
  grammar: Source.GRAMMAR,
  words: Source.WORDS,
  kanji: Source.KANJI,
};

const SOURCE_TO_SECTION: Partial<Record<Source, ContentSection>> = {
  [Source.GRAMMAR]: "grammar",
  [Source.WORDS]: "words",
  [Source.KANJI]: "kanji",
};

export function sectionToSource(section: ContentSection): Source {
  return SECTION_TO_SOURCE[section];
}

export function sourceToSection(source: Source): ContentSection | null {
  return SOURCE_TO_SECTION[source] ?? null;
}
