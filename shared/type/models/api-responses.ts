import { ErrorCode } from "@/shared/type/models/error";

export interface ApiResponse<T = unknown> {
  data?: T;
  error?: ErrorCode;
}
