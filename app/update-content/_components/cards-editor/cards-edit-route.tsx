import { EditBox } from "@/app/update-content/_components/edit-box/edit-box";
import { CardsEditor } from "@/app/update-content/_components/cards-editor/cards-editor";
import { parseCardsSource } from "@/app/update-content/_lib/update-content.service";
import type { EditableCard } from "@/app/update-content/_lib/update-content.types";
import { submitUpdateCards } from "@/app/actions/update-content.actions";
import { ContentSection } from "@/lib/content-section";
import type { BaseItem } from "@/lib/types";

export function CardsEditRoute({
  section,
  slug,
  item,
  focusFront,
}: {
  section: ContentSection;
  slug: string;
  item: BaseItem;
  focusFront?: string;
}) {
  let initialCards: EditableCard[] | null = null;
  try {
    initialCards = item.content ? parseCardsSource(item.content) : null;
  } catch {
    initialCards = null;
  }

  if (!initialCards) {
    return <EditBox submitAction={submitUpdateCards} initialItem={item} />;
  }

  return <CardsEditor section={section} documentId={slug} initialCards={initialCards} focusFront={focusFront} />;
}
