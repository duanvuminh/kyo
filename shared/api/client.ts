import { ApiResponse } from "@/shared/types/dto/api-responses";
import { AppError, ErrorCode } from "@/shared/types/models/error";

/**
 * Helper để gọi internal API và handle error
 * Response phải theo format ApiResponse<T>
 * Throw AppError nếu có lỗi
 */
export async function fetchApi<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, options);
  const result: ApiResponse<T> = await res.json().catch(() => ({}));

  if (!res.ok || result.error) {
    throw new AppError(result.error ?? ErrorCode.UNKNOWN);
  }

  return result.data as T;
}
