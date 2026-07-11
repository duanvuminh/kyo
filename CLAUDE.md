# Code Rules

## Stack
- Next.js 16 (App Router) — read node_modules/next/dist/docs/ before using any API
- React 19
- TypeScript 5 (strict)
- Tailwind CSS v4

---

## Imports

- Always use `@/` absolute imports — never use relative imports (`../`, `./`)
- Use `import type` for type-only imports

## TypeScript

- Always use interface for object shapes, type for unions/aliases
- No any — use unknown and narrow explicitly
- Mark all props Readonly<> or use readonly fields where the value must not be mutated
- Export types from the same file they are defined in; do not create barrel types/index.ts files
- Prefer satisfies over casting (as) when asserting object shapes

## React / Next.js

- All components in app/ are Server Components by default — add "use client" only when the component uses browser APIs, event handlers, or state/effects
- Do not use useEffect to derive state — compute it during render or use server-side logic
- Name every component with a capitalized PascalCase function (no arrow-function default exports)
- File name must match the default export name, in kebab-case: user-card.tsx → export default function UserCard
- Co-locate a component's sub-components in the same file unless they are reused elsewhere
- Use Next.js <Image> for all <img> tags; always set width, height, and alt
- Use Next.js <Link> for internal navigation; never use <a> for internal routes
- Metadata must be declared with the metadata export or generateMetadata — never set <title> in JSX

## Next.js 16 Breaking Changes (MUST KNOW)

### Async Request APIs — synchronous access is REMOVED
cookies(), headers(), draftMode(), params, and searchParams are now *always async*. Always await them:

tsx
// WRONG
export default function Page({ params }) {
  const { slug } = params
}

// CORRECT
export default async function Page({ params }: PageProps<'/blog/[slug]'>) {
  const { slug } = await params
}

Use npx next typegen to generate PageProps, LayoutProps, RouteContext type helpers.

### middleware.ts → proxy.ts
- Rename file: middleware.ts → proxy.ts
- Rename export: export function middleware → export function proxy
- proxy runtime is nodejs only — no edge runtime support
- Config flag skipMiddlewareUrlNormalize → skipProxyUrlNormalize

### Caching APIs
- revalidateTag('tag') now requires a second cacheLife profile argument: revalidateTag('tag', 'max')
- unstable_cacheLife and unstable_cacheTag are now stable: import as cacheLife, cacheTag from 'next/cache'
- New updateTag API for read-your-writes semantics (Server Actions only)
- New refresh API to refresh the client router from a Server Action

### Removed APIs — do NOT use
- serverRuntimeConfig / publicRuntimeConfig in next.config — use process.env or NEXT_PUBLIC_ instead
- next/config and getConfig() — removed
- next/legacy/image — use next/image
- images.domains — use images.remotePatterns
- experimental.ppr — replaced by cacheComponents: true
- experimental.dynamicIO — replaced by cacheComponents: true
- experimental.turbopack — moved to top-level turbopack option
- devIndicators.appIsrStatus, buildActivity, buildActivityPosition — removed
- AMP support (next/amp, useAmp) — fully removed
- next lint CLI command — use eslint directly

### Turbopack is default
next dev and next build use Turbopack by default. Custom webpack config will *break the build*. To keep Webpack: use next build --webpack. Dev output goes to .next/dev/.

### Parallel Routes
All @slot parallel route directories now require an explicit default.js file. Build fails without it.

## Styling (Tailwind v4)

- Tailwind v4 uses CSS-first configuration — do not create tailwind.config.ts/js; configure in globals.css via @theme
- Use Tailwind utility classes; avoid inline style={{}} unless a value cannot be expressed as a utility
- Responsive prefix order: base → sm: → md: → lg: → xl:
- Dark mode via dark: variant — never use a custom [data-theme] selector unless explicitly required
- No @apply in component files — only allowed in globals.css for base layer resets

## File & Folder Structure

app/                        — Routing only (Page, Layout, error, loading)
core/                       — System config & initialization
feature/
  feat-user/
    components/             — UI components + co-located hooks
    actions/                — Next.js Server Actions: validate schema → gọi services/
    schema/                 — Zod schema validate input của actions/
    services/               — Business logic: gọi repositories/ → mapper/ → trả DTO
    repositories/           — Gọi db/API, trả về entity (raw shape)
    types/                  — Entity shape (raw từ API/db) + DTO shape (sau mapper)
    mapper/                 — entity → DTO  |  DTO → ViewModel (pure functions)
    view-models/            — Aggregate DTO → shape cho UI (pure functions)
    utils/                  — Helper thuần túy của feature
shared/
  components/               — Atomic UI (Button, Input, Card, Modal…)
  hooks/                    — Hook tiện ích dùng chung (useDebounce, useLocalStorage)
  actions/                  — Server Actions dùng chung
  services/                 — Dịch vụ dùng chung (AI, Storage, Auth service)
  repositories/             — Repository dùng chung (Firestore, Algolia, Storage)
  schemas/                  — Zod schema dùng chung (PaginationSchema)
  types/                    — Global DTOs, Common Interfaces (ApiResponse)
  mapper/                   — Mapper dùng chung
  utils/                    — Helper thuần túy dùng chung (cn, formatDate)
  actions/                  — Server Actions dùng chung
  view-models/              — Aggregate dùng chung
  stores/                   — Global state slices (Redux/Zustand)
  data/                     — Static data files (JSON, constants)

### Data flow

Page (Server Component)
  1. services.getData()          → trả DTO[]
  2. mapper.toViewModel(dto)     → trả ViewModel  (hoặc dùng view-models/)
  3. <Component vm={vm} />

Service
  1. repositories.fetch()        → trả Entity (raw)
  2. mapper.toDTO(entity)        → trả DTO
  3. return DTO

### Quy tắc import giữa các tầng

- app/ chỉ import từ feature/ và shared/ — không import trực tiếp từ repositories/
- actions/ chỉ gọi services/, không gọi thẳng repositories/
- services/ không import bất kỳ thứ gì từ app/ hoặc actions/
- repositories/ không biết đến services/, actions/, hoặc components/
- view-models/ là pure functions: nhận DTO, trả về ViewModel — không có side effects
- shared/ không được import từ feature/

## Data Fetching

- Fetch data in Server Components; pass results as props to Client Components
- Use fetch with Next.js caching options ({ cache: "force-cache" | "no-store" } or { next: { revalidate: N } })
- Do not use getServerSideProps or getStaticProps — they do not exist in App Router
- Wrap independent parallel fetches in Promise.all

## Error Handling

- Every route segment should have an error.tsx for recoverable errors
- Use notFound() from next/navigation for 404s — do not manually return a 404 response
- Do not swallow errors silently; always log or rethrow

## Comments

- Write no comments by default
- Add a comment only when the WHY is non-obvious: a hidden constraint, a workaround, or surprising behavior
- No JSDoc on React components or simple utility functions