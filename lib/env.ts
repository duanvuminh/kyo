import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),

  // Firebase — toàn app phụ thuộc Firestore, thiếu là không chạy được
  FIREBASE_ADMIN_PRIVATE_KEY: z.string().min(1),
  FIREBASE_STORAGE_BUCKET: z.string().optional(),

  // Auth — không đăng nhập được nếu thiếu
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CLIENT_SECRET: z.string().min(1),

  // External API dùng chung nhiều feature, không có guard riêng ở nơi gọi
  SLACK_API_KEY: z.string().min(1),
  DISCORD_API_KEY: z.string().min(1),
  VIDEO_MARKET: z.string().min(1),
  GOOGLE_GENERATIVE_AI_API_KEY_FREE: z.string().min(1),

  // Optional — feature tương ứng đã tự guard + báo lỗi riêng khi thiếu, không chặn cả app
  GITHUB_TOKEN: z.string().optional(),
  GITHUB_OWNER: z.string().optional(),
  GITHUB_REPO: z.string().optional(),
  GITHUB_BASE_BRANCH: z.string().default("main"),
  ALGOLIA_ADMIN_KEY: z.string().optional(),

  // Vercel platform tự inject lúc deploy — không có ở local dev
  VERCEL_URL: z.string().optional(),
  VERCEL_PROJECT_PRODUCTION_URL: z.string().optional(),
});

export const env = envSchema.parse(process.env);

export const isDev = env.NODE_ENV === "development";
