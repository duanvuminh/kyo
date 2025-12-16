export enum ErrorCode {
  DUPLICATE_KEYWORD,
  DISCORD,
  VIDEOS_MARKET,
  STORAGE,
  AI_MODEL_ERROR,
  AI_MODEL_ERROR_MAX_RETRIES_EXCEEDED,
  UNKNOWN,
}

/** Message hiển thị cho user theo ErrorCode */
export const ErrorMessage: Record<ErrorCode, string> = {
  [ErrorCode.DUPLICATE_KEYWORD]: "Từ khóa đã tồn tại",
  [ErrorCode.DISCORD]: "Lỗi kết nối Discord",
  [ErrorCode.VIDEOS_MARKET]: "Không thể lấy dữ liệu video",
  [ErrorCode.STORAGE]: "Lỗi lưu trữ dữ liệu",
  [ErrorCode.AI_MODEL_ERROR]: "Vui lòng thử lại sau vài phút",
  [ErrorCode.AI_MODEL_ERROR_MAX_RETRIES_EXCEEDED]:
    "Vui lòng thử lại sau vài phút",
  [ErrorCode.UNKNOWN]: "Lỗi hệ thống xảy ra, vui lòng thử lại sau",
};

export class AppError extends Error {
  constructor(
    /** Error code để phân loại lỗi */
    public code: ErrorCode,
    /** Error gốc - CHỈ dùng để debug ở server, KHÔNG gửi về client */
    options?: { cause?: Error }
  ) {
    super(options?.cause?.message, options);
  }

  /** Lấy message an toàn để hiển thị cho user */
  get customMessage(): string {
    return ErrorMessage[this.code];
  }
}
