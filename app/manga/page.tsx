import { ChatWidget } from "@/components/chat-widget";
import { KManga } from "@/components/manga";
import { getManga } from "@/services/manga";
import { Manga } from "@/types/models/manga";

export default async function Page() {
  const mangas: Manga[] = await getManga();
  return (
    <div className="p-2 prose mx-auto">
      {mangas.map((manga) => (
        <KManga key={manga.id} manga={manga} />
      ))}
      <ChatWidget showOnlyLastMessage></ChatWidget>
    </div>
  );
}
