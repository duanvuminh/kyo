import type { ContentSection } from "@/lib/content-section";
import { db, storage } from "@/lib/db";
import { Anime, AnimeImage } from "@/lib/types";

function collectionFor(section: ContentSection): string {
  return `${section}Anime`;
}

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

async function deleteAnimeImage(url: string): Promise<void> {
  const path = storagePathFromUrl(url);
  if (!path) {
    return;
  }
  await storage.file(path).delete({ ignoreNotFound: true });
}

async function deleteRemovedImages(previousImages: AnimeImage[], nextImages: AnimeImage[]): Promise<void> {
  const nextUrls = new Set(nextImages.map((image) => image.url));
  const removedImages = previousImages.filter((image) => !nextUrls.has(image.url));
  await Promise.all(removedImages.map((image) => deleteAnimeImage(image.url)));
}

export async function getAnime(section: ContentSection, level: string, page: string): Promise<Anime | null> {
  const snapshot = await db.collection(collectionFor(section)).doc(toDocId(level, page)).get();
  if (!snapshot.exists) {
    return null;
  }
  return snapshot.data() as Anime;
}

export async function saveAnime(
  section: ContentSection,
  input: { level: string; page: string; title: string; images: AnimeImage[] }
): Promise<Anime> {
  const id = toDocId(input.level, input.page);
  const docRef = db.collection(collectionFor(section)).doc(id);

  const previousSnapshot = await docRef.get();
  const previousImages = previousSnapshot.exists ? ((previousSnapshot.data() as Anime).images ?? []) : [];

  const data: Anime = { id, section, ...input, updatedAt: Date.now() };
  await docRef.set(data);

  await deleteRemovedImages(previousImages, input.images);

  return data;
}

export async function uploadAnimeImage(section: ContentSection, imageBase64: string): Promise<string> {
  const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
  const buffer = Buffer.from(base64Data, "base64");
  const filename = `${section}-anime/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.jpg`;

  const file = storage.file(filename);
  await file.save(buffer, { contentType: "image/jpeg" });
  await file.makePublic();

  return `https://storage.googleapis.com/${storage.name}/${filename}`;
}
