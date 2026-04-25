"use server";
import { db, storage } from "@/shared/lib/firebase-admin";
import { getUserMail } from "@/shared/service/auth";
import { AppError, ErrorCode } from "@/shared/types/models/error";

const MAX_IMAGES = 20;
const COUNTER_DOC = "chat-image-counter";

async function getNextImageIndex(): Promise<number> {
  const counterRef = db.collection("counters").doc(COUNTER_DOC);
  const doc = await counterRef.get();
  const currentIndex = doc.exists ? (doc.data()?.index ?? 0) : 0;
  const nextIndex = (currentIndex % MAX_IMAGES) + 1;
  await counterRef.set({ index: nextIndex });
  return nextIndex;
}

export async function uploadChatImageToStorage(imageBase64: string): Promise<string> {
  const email = await getUserMail();
  if (!email) { throw new AppError(ErrorCode.UNAUTHENTICATED); }

  const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
  const buffer = Buffer.from(base64Data, "base64");

  const imageIndex = await getNextImageIndex();
  const fileName = `chat-images/${imageIndex}.jpg`;

  const file = storage.file(fileName);
  await file.save(buffer, {
    metadata: { contentType: "image/jpeg" },
    public: true,
  });

  return `https://storage.googleapis.com/${storage.name}/${fileName}`;
}
