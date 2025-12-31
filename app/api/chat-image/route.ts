import { db, storage } from "@/shared/lib/firebase-admin";
import { getUserMail } from "@/shared/service/auth";
import { ApiResponse } from "@/shared/types/dto/api-responses";
import { ErrorCode } from "@/shared/types/models/error";
import { NextRequest, NextResponse } from "next/server";

const MAX_IMAGES = 20;
const COUNTER_DOC = "chat-image-counter";

async function getNextImageIndex(): Promise<number> {
  const counterRef = db.collection("counters").doc(COUNTER_DOC);
  const doc = await counterRef.get();

  const currentIndex = doc.exists ? doc.data()?.index ?? 0 : 0;
  const nextIndex = (currentIndex % MAX_IMAGES) + 1;

  await counterRef.set({ index: nextIndex });
  return nextIndex;
}

export interface ChatImageUploadResponse {
  url: string;
}

export async function POST(request: NextRequest) {
  const email = await getUserMail();
  if (!email) {
    return NextResponse.json(
      { error: ErrorCode.UNAUTHENTICATED } satisfies ApiResponse,
      { status: 401 }
    );
  }

  try {
    const { image } = await request.json();
    if (!image) {
      return NextResponse.json(
        { error: ErrorCode.VALIDATION } satisfies ApiResponse,
        { status: 400 }
      );
    }

    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");

    const imageIndex = await getNextImageIndex();
    const fileName = `chat-images/${imageIndex}.jpg`;

    const file = storage.file(fileName);
    await file.save(buffer, {
      metadata: { contentType: "image/jpeg" },
      public: true,
    });

    const publicUrl = `https://storage.googleapis.com/${storage.name}/${fileName}`;

    return NextResponse.json({
      data: { url: publicUrl },
    } satisfies ApiResponse<ChatImageUploadResponse>);
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: ErrorCode.CHAT_IMAGE_UPLOAD } satisfies ApiResponse,
      { status: 500 }
    );
  }
}
