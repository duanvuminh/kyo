import { ErrorCode } from "@/shared/types/models/error";

export interface ApiResponse<T = unknown> {
  data?: T;
  error?: ErrorCode;
}
