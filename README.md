# Kyo - Japanese Learning App

Ứng dụng học tiếng Nhật với các tính năng: tra từ điển, flashcard ngữ pháp, video học tập, và AI chat.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **AI:** Vercel AI SDK
- **Database:** Firebase Firestore
- **External APIs:** Slack, Discord, ElevenLabs

## Project Structure

```text
kyo/
├── app/                    # Next.js App Router
│   ├── api/                # API Routes
│   ├── grammar/            # Grammar pages
│   └── ...
├── feature/                # Feature modules
│   ├── chat/               # Chat feature
│   │   ├── component/
│   │   └── service/
│   ├── short/              # Video shorts feature
│   │   ├── component/
│   │   ├── model/
│   │   └── service/
│   └── ...
├── shared/                 # Shared code
│   ├── api/                # Client API services
│   ├── component/          # Reusable components
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Utilities
│   ├── repository/         # Data access (server-side)
│   ├── service/            # Business logic
│   ├── stores/             # Redux stores
│   └── types/              # TypeScript types
│       ├── dto/            # Data Transfer Objects
│       └── models/         # Domain models
└── core/                   # Core utilities
```

## Architecture

### Layers

| Layer          | Location                                   | Description                                   |
| -------------- | ------------------------------------------ | --------------------------------------------- |
| **API Routes** | `app/api/`                                 | HTTP endpoints, return `ApiResponse<T>`       |
| **Client API** | `shared/api/`                              | Fetch wrapper cho client, throw `AppError`    |
| **Service**    | `shared/service/`, `feature/*/service/`    | Business logic                                |
| **Repository** | `shared/repository/`                       | External API calls (Slack, Discord, Firebase) |
| **Model**      | `shared/types/models/`, `feature/*/model/` | Domain entities                               |
| **DTO**        | `shared/types/dto/`                        | Data transfer objects                         |

### Error Handling

```typescript
// ErrorCode enum + ErrorMessage mapping
throw new AppError(ErrorCode.STORAGE, { cause: originalError });

// API response format
interface ApiResponse<T> {
  data?: T;
  error?: ErrorCode;
}
```

### Client API Pattern

```typescript
// shared/api/check.ts
export async function checkWord(words: string): Promise<boolean> {
  return fetchApi<boolean>(`/api/check?words=${words}`);
}

// Hook usage
const isValid = await checkWord(words); // throws AppError on error
```

## Code Conventions

### Naming

- **Files:** kebab-case (`use-flash-card.ts`, `short-parser.ts`)
- **Components:** PascalCase (`FlashCard`, `ChatInput`)
- **Hooks:** camelCase với prefix `use` (`useFlashCard`)
- **Types/Interfaces:** PascalCase (`ApiResponse`, `ShortPage`)
- **Enums:** PascalCase, members UPPER_CASE (`ErrorCode.UNKNOWN`)

### Best Practices

- Single responsibility - mỗi file/function làm 1 việc
- File size < 100 lines (tách nếu lớn hơn)
- Dùng `fetchApi` helper thay vì `fetch` trực tiếp ở client
- Error handling với `AppError` + `ErrorCode`
- Type-safe với strict TypeScript

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build
pnpm build

# Lint
pnpm lint
```

## Environment Variables

```env
# Firebase
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=

# External APIs
SLACK_API_KEY=
DISCORD_API_KEY=
ELEVENLABS_API_KEY=

# AI
GOOGLE_GENERATIVE_AI_API_KEY=
```
