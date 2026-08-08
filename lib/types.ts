import matter from "gray-matter";

export enum ErrorCode {
  DUPLICATE_KEYWORD,
  DISCORD,
  SLACK,
  VIDEOS_MARKET,
  STORAGE,
  AI_MODEL_ERROR,
  AI_MODEL_ERROR_MAX_RETRIES_EXCEEDED,
  UNAUTHENTICATED,
  VALIDATION,
  CHAT_IMAGE_UPLOAD,
  ABLY_TOKEN_ERROR,
  ABLY_KEY_INVALID,
  GITHUB,
  UNKNOWN,
}

/** Message hiển thị cho user theo ErrorCode */
export const ErrorMessage: Record<ErrorCode, string> = {
  [ErrorCode.DUPLICATE_KEYWORD]: "Từ khóa đã tồn tại",
  [ErrorCode.DISCORD]: "Lỗi hệ thống xảy ra, vui lòng thử lại sau",
  [ErrorCode.SLACK]: "Lỗi hệ thống xảy ra, vui lòng thử lại sau",
  [ErrorCode.VIDEOS_MARKET]: "Không thể lấy dữ liệu video",
  [ErrorCode.STORAGE]: "Lỗi hệ thống xảy ra, vui lòng thử lại sau",
  [ErrorCode.AI_MODEL_ERROR]: "Vui lòng thử lại sau vài phút",
  [ErrorCode.AI_MODEL_ERROR_MAX_RETRIES_EXCEEDED]:
    "Vui lòng thử lại sau vài phút",
  [ErrorCode.UNAUTHENTICATED]: "Vui lòng đăng nhập để thực hiện hành động này",
  [ErrorCode.VALIDATION]: "Dữ liệu không hợp lệ, vui lòng kiểm tra lại",
  [ErrorCode.CHAT_IMAGE_UPLOAD]: "Không thể tải ảnh lên, vui lòng thử lại",
  [ErrorCode.ABLY_TOKEN_ERROR]: "Lỗi hệ thống xảy ra, vui lòng thử lại sau",
  [ErrorCode.ABLY_KEY_INVALID]: "Lỗi hệ thống xảy ra, vui lòng thử lại sau",
  [ErrorCode.GITHUB]: "Lỗi hệ thống xảy ra, vui lòng thử lại sau",
  [ErrorCode.UNKNOWN]: "Lỗi hệ thống xảy ra, vui lòng thử lại sau",
};

export class AppError extends Error {
  constructor(
    /** Error code để phân loại lỗi */
    public code: ErrorCode,
    /** Error gốc - CHỈ dùng để debug ở server, KHÔNG gửi về client */
    options?: { cause?: Error }
  ) {
    super(ErrorMessage[code], options);
  }
}

/** State trả về từ Server Action dùng với useActionState — lỗi nghiệp vụ đi qua `message`,
 * KHÔNG throw (xem README mục "Xử lý lỗi"); lỗi hạ tầng vẫn throw như bình thường. */
export interface ActionState<T = undefined> {
  message?: string;
  data?: T;
}

/** Kết quả fetch phân trang từ repository — KHÔNG kèm `limit` vì đó là hằng số phía caller tự
 * biết (đưa vào request), không phải data lấy được từ nguồn, không cần echo qua return value. */
export interface PaginatedFetch<T> {
  entities: T[];
  nextPage?: string;
}

export enum KWordType {
  KANJI = "kanji",
  GRAMMAR = "grammar",
  WORD = "word",
  OTHER = "other",
}

export enum Source {
  FIREBASE = "firebase",
  DISCORD = "discord",
  SLACK = "slack",
  ALGOLIA = "algolia",
  STORAGE = "storage",
  GRAMMAR = "grammar",
}

export interface BaseItem {
  source: Source;
  collection?: string;
  documentId: string;
  words: string;
  content?: string;
  type?: KWordType;
}

const stringToKWordType: Record<string, KWordType> = {
  kanji: KWordType.KANJI,
  grammar: KWordType.GRAMMAR,
  word: KWordType.WORD,
  other: KWordType.OTHER,
};

function mapStringToKWordType(str: string): KWordType {
  return stringToKWordType[str] ?? KWordType.OTHER;
}

export interface WordDTO {
  words: string;
  type: string;
  content: string | null;
  practiceId: string | null;
}

export class KWord implements BaseItem {
  words: string;
  documentId: string;
  type: KWordType;
  content?: string;
  practiceId?: string;

  constructor(
    words: string,
    documentId: string,
    source: Source,
    type: KWordType,
    content?: string,
    practiceId?: string
  ) {
    this.source = source;
    this.words = words;
    this.documentId = documentId;
    this.type = type;
    this.content = content;
    this.practiceId = practiceId;
  }
  source: Source;
  collection?: string | undefined;

  static fromDTO(data: WordDTO): KWord {
    const type = mapStringToKWordType(data.type);
    return {
      ...data,
      source: Source.FIREBASE,
      documentId: data.words,
      content: data.content ?? undefined,
      type,
      practiceId: data.practiceId ?? undefined,
    };
  }
}

export interface Sub {
  content: string;
  start: number;
  end: number;
}

export interface PracticeStorageItemDto {
  id: string;
  keyword: string;
  timestamp: number;
  metadata?: Record<string, string>;
}

export class PracticeStorageItem {
  constructor(
    public id: string,
    public keyword: string,
    public timestamp: number,
    public metadata?: Record<string, string>
  ) { }

  static fromDTO(dto: PracticeStorageItemDto): PracticeStorageItem {
    return new PracticeStorageItem(
      dto.id,
      dto.keyword,
      dto.timestamp,
      dto.metadata
    );
  }

  static fromDTOs(dtos: PracticeStorageItemDto[]): PracticeStorageItem[] {
    return dtos.map((dto) => PracticeStorageItem.fromDTO(dto));
  }
}

/** Domain model của app/practice — sống ở đây (không phải app/practice/_lib) vì Question.fromPractice
 * bên dưới cần dùng chung, tức ≥ 2 nơi không liên quan cùng cần type này. */
export interface Practice {
  id: string;
  content: string;
  attachments: string[];
}

export class Question {
  constructor(
    public id: string,
    public content: string,
    public answers: [string, string, string, string],
    public correctAnswer: 0 | 1 | 2 | 3,
    public attachments?: string[],
    public yomi?: string,
    public memo?: string[]
  ) { }

  static fromPractice(dto: Practice | undefined): Question | undefined {
    if (!dto) {
      return undefined;
    }
    const parsed = matter(dto.content);
    return new Question(
      dto.id,
      parsed.content,
      parsed.data.answers ?? [],
      parsed.data.correctAnswer ?? 0,
      dto.attachments ?? [],
      parsed.data.yomi
    );
  }
}
