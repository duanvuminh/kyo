import type { SaveGrammarAnimeInput } from "@/app/grammar/anime/_lib/grammar-anime.schema";
import type { GrammarAnime, GrammarAnimeImage } from "@/app/grammar/anime/_lib/grammar-anime.types";
import { db, storage } from "@/lib/db";

const COLLECTION = "grammarAnime";

function toDocId(level: string, page: string): string {
  return `${level}-${page}`;
}

function storagePathFromUrl(url: string): string | null {
  const prefix = `https://storage.googleapis.com/${storage.name}/`;
  if (!url.startsWith(prefix)) {
    return null;
  }
  return url.slice(prefix.length);
}

async function deleteGrammarAnimeImage(url: string): Promise<void> {
  const path = storagePathFromUrl(url);
  if (!path) {
    return;
  }
  await storage.file(path).delete({ ignoreNotFound: true });
}

async function deleteRemovedImages(
  previousImages: GrammarAnimeImage[],
  nextImages: GrammarAnimeImage[]
): Promise<void> {
  const nextUrls = new Set(nextImages.map((image) => image.url));
  const removedImages = previousImages.filter((image) => !nextUrls.has(image.url));
  await Promise.all(removedImages.map((image) => deleteGrammarAnimeImage(image.url)));
}

export async function getGrammarAnime(level: string, page: string): Promise<GrammarAnime | null> {
  const snapshot = await db.collection(COLLECTION).doc(toDocId(level, page)).get();
  if (!snapshot.exists) {
    return null;
  }
  return snapshot.data() as GrammarAnime;
}

export async function saveGrammarAnime(input: SaveGrammarAnimeInput): Promise<GrammarAnime> {
  const id = toDocId(input.level, input.page);
  const docRef = db.collection(COLLECTION).doc(id);

  const previousSnapshot = await docRef.get();
  const previousImages = previousSnapshot.exists
    ? ((previousSnapshot.data() as GrammarAnime).images ?? [])
    : [];

  const data: GrammarAnime = { id, ...input, updatedAt: Date.now() };
  await docRef.set(data);

  await deleteRemovedImages(previousImages, input.images);

  return data;
}

export async function uploadGrammarAnimeImage(imageBase64: string): Promise<string> {
  const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
  const buffer = Buffer.from(base64Data, "base64");
  const filename = `grammar-anime/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.jpg`;

  const file = storage.file(filename);
  await file.save(buffer, { contentType: "image/jpeg" });
  await file.makePublic();

  return `https://storage.googleapis.com/${storage.name}/${filename}`;
}
