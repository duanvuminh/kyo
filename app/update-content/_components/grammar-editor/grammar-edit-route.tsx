import { EditBox } from "@/app/update-content/_components/edit-box/edit-box";
import { GrammarCardsEditor } from "@/app/update-content/_components/grammar-editor/grammar-cards-editor";
import { parseCardsSource } from "@/app/update-content/_lib/update-content.service";
import type { EditableCard } from "@/app/update-content/_lib/update-content.types";
import { submitUpdateGrammar } from "@/app/actions/update-content.actions";
import type { BaseItem } from "@/lib/types";

export function GrammarEditRoute({ slug, item, focusFront }: { slug: string; item: BaseItem; focusFront?: string }) {
  let initialCards: EditableCard[] | null = null;
  try {
    initialCards = item.content ? parseCardsSource(item.content) : null;
  } catch {
    initialCards = null;
  }

  if (!initialCards) {
    return <EditBox submitAction={submitUpdateGrammar} initialItem={item} />;
  }

  return <GrammarCardsEditor documentId={slug} initialCards={initialCards} focusFront={focusFront} />;
}
