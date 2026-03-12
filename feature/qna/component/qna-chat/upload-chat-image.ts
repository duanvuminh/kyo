import { uploadChatImageToStorage } from "@/shared/api/chat-image";
import { AppError, ErrorCode, ErrorMessage } from "@/shared/types/models/error";

export interface UploadResult {
  success: boolean;
  url?: string;
  error?: string;
}

export async function uploadChatImage(imagePreview: string): Promise<UploadResult> {
  try {
    const url = await uploadChatImageToStorage(imagePreview);
    return { success: true, url };
  } catch (error) {
    if (error instanceof AppError) {
      return { success: false, error: error.customMessage };
    }
    return { success: false, error: ErrorMessage[ErrorCode.UNKNOWN] };
  }
}
