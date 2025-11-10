export enum ErrorCode {
  DUPLICATE_KEYWORD,
  DISCORD,
  VIDEOS_MARKET,
  STORAGE,
  AI_MODEL_ERROR,
  AI_MODEL_ERROR_MAX_RETRIES_EXCEEDED,
}

export class AppError extends Error {
  constructor(public code?: ErrorCode, message?: string) {
    super(message);
    this.name = "AppError";
  }
}
