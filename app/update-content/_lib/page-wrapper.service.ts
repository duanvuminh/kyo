import type { ContentSection } from "@/lib/content-section";

const IMPORT_LINE = 'import FlashCardLink from "@/lib/components/flash-card-link";';

// Mọi page.mdx trong {section}/n1 đều bọc nội dung bằng cùng 1 import + 1 component
// FlashCardLink ở đầu/cuối file — phần này chỉ để wiring, không cần user chỉnh sửa.
// Ẩn nó đi khi hiển thị ở ô edit, và tự ráp lại đúng format khi submit.
export function stripPageWrapper(content: string): string {
  const tagStart = content.lastIndexOf("<FlashCardLink");
  if (!content.startsWith(IMPORT_LINE) || tagStart === -1) {
    return content;
  }
  return content.slice(IMPORT_LINE.length, tagStart).trim();
}

export function wrapPageContent(section: ContentSection, level: string, slug: string, body: string): string {
  return `${IMPORT_LINE}\n\n${body.trim()}\n\n<FlashCardLink href="/${section}/${level}/${slug}/flash-card" />\n`;
}
