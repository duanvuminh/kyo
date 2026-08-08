# Kiến trúc mẫu — Luồng dữ liệu chức năng A

Tài liệu này minh hoạ cách tổ chức một chức năng theo layer, áp dụng cho Next.js App Router (bản trong `node_modules/next` của repo này — xem `AGENTS.md` trước khi code, API có thể khác với những gì bạn quen).

Nguyên tắc layer:

```text
app/pageA (Server Component)   → route/entry, không chứa business logic
  └─ service/                  → business logic, orchestration, validate nghiệp vụ
       └─ repository/          → truy vấn dữ liệu thuần (không biết gì về HTTP/UI)
            └─ data source     → DB, ORM, external API
```

- **Page**: chỉ gọi service, không tự query DB hay chứa rule nghiệp vụ.
- **Service**: nơi đặt logic nghiệp vụ (validate, tính toán, phối hợp nhiều repository). Không biết `FormData`, không biết HTTP.
- **Repository**: chỉ biết cách đọc/ghi 1 nguồn dữ liệu (bảng/API), trả về model thuần, không chứa rule nghiệp vụ.

Next.js App Router có **hai luồng riêng biệt** cho đọc và ghi dữ liệu — khác với REST API truyền thống chỉ có 1 loại endpoint.

## Luồng đọc dữ liệu (GET / render trang)

```text
  request                await getA()            await findA()           query
Browser ───────────► app/pageA ───────────► Service ───────────► Repository ───────────► DB/API
(GET /pageA)      (Server Component)        getA()               findA()              nguồn dữ liệu
Browser ◄─────────────────────────────────────────────────────────────────────────────
   HTML (RSC payload)    view model          domain model              rows

           └── loading.js / <Suspense> bọc quanh app/pageA để stream UI
               trong lúc Service đang chạy, thay vì chặn cả trang ──┘
```

## Luồng ghi dữ liệu (mutation qua Server Action)

```text
   submit(FormData)      validate+call         persist              INSERT
<form> ───────────► Server Action ───────────► Service ───────────► Repository ───────────► DB
                    'use server'               createA()            insertA()
                    auth() check
                        │
                        │ revalidatePath('/pageA')
                        ▼
                 UI mới trả về <form>, cùng 1 network roundtrip

  ⚠ Server Action luôn chạy qua POST — không tin nó chỉ được gọi từ UI,
    phải auth/authorize lại BÊN TRONG chính function, không dựa vào middleware.
```

## Xử lý lỗi

Lỗi "mong đợi" (validation, not-found) và lỗi "bất ngờ" (DB down, bug) đi theo 2 đường khác nhau — không dùng chung 1 kiểu try/catch cho cả luồng đọc lẫn ghi.

Luồng đọc — lỗi bất ngờ bubble lên `error.tsx` tự động bọc quanh page; lỗi "không tìm thấy" gọi `notFound()` để render `not-found.tsx`:

```text
Repository ──throw──► Service ──throw──► app/pageA ──throw──► error.tsx
 (query fail)      (không catch,      (không catch,        (Client Component,
                    để lỗi bubble)     trừ khi gọi           tự động bọc page,
                                       notFound())           hiển thị fallback + nút Thử lại)
```

Luồng ghi — lỗi nghiệp vụ trả về qua `return`, đọc bằng `useActionState`; lỗi hạ tầng vẫn throw và bubble lên `error.tsx`:

```text
<form> ──submit──► Server Action ──validate──► Service ──persist──► Repository ──► DB
                        │
                        ├─ lỗi nghiệp vụ (vd "Title required")
                        │  → return { message }  (KHÔNG throw)
                        │  → useActionState trả state mới, form hiển thị lỗi tại chỗ
                        │
                        └─ lỗi hạ tầng/bug bất ngờ
                           → throw như bình thường → bubble lên error.tsx
```

Tóm tắt theo layer:

| Layer | Lỗi mong đợi | Lỗi bất ngờ |
|---|---|---|
| Repository | không xử lý, ném lên trên | không xử lý, ném lên trên |
| Service | map thành lỗi domain nếu cần, ném lên trên | không catch |
| Page (đọc) | `notFound()` | không catch → `error.tsx` |
| Server Action (ghi) | `return { message }` → `useActionState` | throw → `error.tsx` |

## Folder structure

Next.js không ép cấu trúc thư mục ngoài các file quy ước (`page`, `layout`, `error`...). Bên dưới là cách colocate cho model 3 layer ở trên — dùng private folder `_lib` (prefix `_`) để Next.js **không hiểu nhầm thành route**, và tách `app/actions` (Server Actions) khỏi UI vì Actions được import từ cả Client lẫn Server Component.

```text
app/
├─ pageA/
│  ├─ page.tsx              → Server Component, chỉ gọi service, KHÔNG chứa logic
│  ├─ loading.tsx           → skeleton, tự động bọc page.tsx trong <Suspense>
│  ├─ error.tsx             → error boundary, bắt lỗi bất ngờ từ page/service/repo
│  ├─ not-found.tsx         → UI khi service báo "không tìm thấy" (notFound())
│  ├─ _components/          → UI con chỉ dùng trong route này (không phải route)
│  │   ├─ ListA.tsx         → Server Component (mặc định) — chỉ hiển thị data từ page
│  │   └─ FormA/             → folder-per-component vì có state + hook riêng
│  │       ├─ index.tsx     → 'use client', chỉ JSX — gọi useFormA(), render UI
│  │       └─ useFormA.ts   → hook: useActionState, validate phía client, local state
│  └─ _lib/
│     ├─ a.service.ts             → getA() gọi 3 repo dưới; chứa luôn fromSlack(), fromDiscord()
│     │                              (raw → DomainModelA) và toViewModelA() (domain → view) —
│     │                              KHÔNG tách file mappers/ riêng, đây là chi tiết của service
│     ├─ a.service.test.ts        → test colocate NGAY CẠNH file được test, không tách cây __tests__/
│     ├─ slack.repository.ts      → chỉ gọi Slack; chứa type raw SlackMessage (hoặc import từ SDK)
│     ├─ firebase.repository.ts   → chỉ gọi Firebase; chứa type raw FirebaseDoc
│     ├─ discord.repository.ts    → chỉ gọi Discord; chứa type raw DiscordMessage
│     ├─ a-store.ts               → state cục bộ CHỈ dùng trong pageA; dùng persist middleware
│     │                              nếu cần lưu qua localStorage (KHÔNG tự gọi window.localStorage)
│     ├─ a.types.ts               → ViewModelA, DomainModelA — type NỘI BỘ, page + _components dùng
│     └─ a.constants.ts           → hằng số CHỈ dùng trong pageA (vd. STATUS enum) — không phải
│                                    process.env.*, biến môi trường luôn qua lib/env.ts (xem dưới)
│
├─ actions/
│  └─ a.actions.ts          → 'use server', import service, KHÔNG chứa logic nghiệp vụ
│
├─ api/                      → Route Handler — CHỈ tạo khi Server Action không đáp ứng được
│  └─ webhooks/
│     └─ slack/
│        └─ route.ts        → POST nhận webhook TỪ Slack gọi vào (không phải app gọi Slack)
│                              import service, KHÔNG chứa logic nghiệp vụ — như actions/
│
└─ layout.tsx                → root layout, khởi tạo <Provider> cho global state (xem mục dưới)

proxy.ts                      → ở ROOT, ngang cấp app/ — KHÔNG đặt trong app/ (bản Next.js 16
                                 này gọi "Middleware" là "Proxy", file/hành vi vẫn tương tự)

components/ui/                → shadcn/ui, generate qua CLI — không sửa tay (xem mục dưới)

lib/                         → hạ tầng + state + logic dùng chung toàn app (không riêng chức năng A)
├─ db.ts                    → khởi tạo DB client/ORM
├─ auth.ts                  → auth() dùng lại trong mọi Server Action
├─ env.ts                   → validate process.env.* tập trung (vd. bằng zod) — không đọc
│                              process.env.X rải rác ở nơi khác, kể cả trong lib/ hay _lib/
├─ constants.ts             → hằng số dùng chung ≥ 2 chức năng (vd. ITEMS_PER_PAGE, tên cookie)
├─ stores/
│  ├─ user-store.ts         → vd. current user, dùng ở nhiều route
│  └─ cart-store.ts         → vd. giỏ hàng, dùng ở nhiều route
├─ services/
│  └─ user.service.ts       → vd. getCurrentUser() — 2+ route cùng cần
├─ repositories/
│  └─ user.repository.ts    → vd. query user — 2+ service cùng cần
├─ components/               → component TỰ VIẾT, dùng chung (khác mục đích với components/ui/)
│  ├─ Avatar.tsx             → có thể render bên trong dùng components/ui/ làm building block
│  └─ Avatar.types.ts        → AvatarViewModel — đi CÙNG component, không có lib/types/ riêng
└─ utils/                    → hàm thuần — kể cả cn() của shadcn (xem mục dưới)
   ├─ cn.ts                 → merge className, shadcn tạo ra nhưng đi đúng chỗ của 1 util
   ├─ format-date.ts        → hàm thuần: input → output, KHÔNG gọi DB/API/service
   └─ slugify.ts            → cùng dạng — không phụ thuộc gì ngoài tham số truyền vào
```

- **`_components/`, `_lib/`**: private folder (`_` prefix) — Next.js loại khỏi routing, an toàn để đặt cạnh `page.tsx` mà không tạo route lạ.
- **`*.test.ts` colocate cạnh file được test** (`a.service.test.ts` cạnh `a.service.ts`), không tách cây `__tests__/` song song — sửa code và sửa test luôn nằm cùng 1 chỗ trong file explorer, không phải đồng bộ tay 2 cấu trúc thư mục giống hệt nhau.
- **`app/layout.tsx`**: nơi khởi tạo `<Provider>` cho global state toàn app (xem mục Global state) — nếu chức năng A có state cục bộ riêng (`a-store.ts`), Provider của nó nằm ở 1 `layout.tsx` lồng trong `app/pageA/`, không phải root layout.
- **`proxy.ts`** (ở root, ngang cấp `app/`) — bản Next.js 16 này đổi tên "Middleware" thành "Proxy", hành vi không đổi. Đây là lý do dòng lưu ý ở luồng ghi phía trên ghi "không dựa vào middleware": theo chính docs, Proxy "should not be used as a full session management or authorization solution" — chỉ hợp cho optimistic check (redirect nhanh khi rõ ràng chưa đăng nhập), auth thật vẫn phải làm trong Server Action/Service như đã thiết kế.
- **`app/actions/`** tách khỏi `pageA/_lib/` vì Server Action là entrypoint có thể gọi từ nhiều route hoặc Client Component — coi nó ngang hàng với `page.tsx`, không phải chi tiết nội bộ của 1 route.
- **`app/api/` (Route Handler)**: hạn chế dùng nhất có thể — mặc định luôn ưu tiên Server Component (đọc) và Server Action (ghi) như 2 luồng đã vẽ ở trên, vì chúng đơn giản hơn (gọi thẳng function, không cần tự quản `Request`/`Response`, tự động có CSRF protection). Chỉ tạo `route.ts` khi rơi vào 1 trong 3 trường hợp Server Action/Server Component không làm được:
  1. **Nhận request từ bên ngoài gọi vào** — webhook (Slack/Discord/Stripe gọi lại app), không phải app gọi ra ngoài (đó vẫn là việc của repository).
  2. **Phải trả response không phải HTML/RSC payload** — JSON cho mobile app hoặc bên thứ 3 fetch trực tiếp, file download, RSS/XML.
  3. **Cần kiểm soát thô `Request`/`Response`** — đọc header tùy biến, streaming response, method ngoài GET/POST mà form không hỗ trợ.
  - Khi đã tạo, `route.ts` vẫn tuân model layer cũ: chỉ parse request rồi gọi `service`, không tự viết business logic hay query DB ngay trong route handler.
- **`lib/utils/`**: có, nhưng ranh giới chặt hơn `services`/`repositories` — chỉ chứa **hàm thuần** (pure function: cùng input luôn ra cùng output, không gọi DB/API/service, không đọc cookie/session). Ví dụ: `formatDate()`, `slugify()`, `capitalize()`. Nếu hàm cần gọi repository hay biết đến business rule (vd. "user free tier chỉ xem 5 item") — đó là service, không phải util, dù bạn có thể bị cám dỗ nhét vào `utils/` cho tiện. Cùng nguyên tắc dùng-chung-mới-tách: 1 hàm helper chỉ 1 route dùng thì để trong `_lib/` của route đó, chỉ chuyển ra `lib/utils/` khi ≥ 2 nơi cần.
- **`components/ui/` (shadcn/ui)**: giữ nguyên vị trí mặc định do CLI tạo (`npx shadcn add ...`), **không sửa tay** field nghiệp vụ vào trong đó — mất khả năng chạy lại CLI để update version sau này (shadcn không phải package cài qua npm, mà là code copy thẳng vào repo, nên đây là code bạn sở hữu và phải tự bảo trì). Cần biến thể riêng cho 1 chức năng (vd. `SlackMessageCard` dùng `Card` của shadcn làm nền) → viết component mới trong `lib/components/` (dùng chung) hoặc `_components/` (riêng 1 route), **bọc quanh** component gốc trong `ui/` thay vì sửa trực tiếp nó.
- **`cn()` không đặc cách nằm ở `lib/utils.ts` riêng** như CLI mặc định generate — nó vẫn chỉ là 1 hàm thuần (merge className, cùng input ra cùng output), nên đi đúng vào `lib/utils/cn.ts` như mọi util khác, không phá quy tắc "dùng chung mới ở `lib/`, và util thì gom vào `utils/`" đã áp dụng nhất quán cho `format-date.ts`/`slugify.ts`. Sau khi generate component từ CLI, chỉ cần sửa lại đường import `cn` trong các file `components/ui/*.tsx` cho khớp — việc này làm 1 lần, không lặp lại mỗi lần `npx shadcn add`.
- Repo hiện tại (`app/`) mới có boilerplate mặc định từ `create-next-app`; cấu trúc trên là đề xuất, cần tạo khi bắt đầu implement chức năng A thật.

### Component/Service/Repository dùng chung nhiều chức năng thì để đâu?

Cùng 1 nguyên tắc lặp lại xuyên suốt tài liệu này (đã áp dụng cho state, ViewModel): **mặc định sống trong route đang dùng nó** (`app/pageA/_lib/`, `app/pageA/_components/`); chỉ chuyển ra ngoài khi có **≥ 2 route/chức năng thực sự cùng cần**.

```text
Trước (chỉ pageA dùng):              Sau (pageB cũng cần user.service):
app/pageA/_lib/                      lib/services/
  └─ user.service.ts                   └─ user.service.ts   ← dọn ra khi có route thứ 2
                                      app/pageA/_lib/  (không còn user.service.ts)
                                      app/pageB/_lib/  (không còn user.service.ts)
```

- **Component dùng chung** → `lib/components/` (hoặc `components/` ở root nếu không muốn lồng trong `lib/`).
- **Service dùng chung** → `lib/services/`.
- **Repository dùng chung** → `lib/repositories/`.
- Vẫn giữ đúng thứ tự phụ thuộc như model layer ban đầu: component chỉ nhận prop/gọi service, service chỉ gọi repository, repository chỉ biết 1 nguồn dữ liệu — dùng chung không có nghĩa được phép đảo ngược thứ tự này.
- Đừng tạo `lib/services/user.service.ts` từ đầu "phòng khi sau này dùng chung" — việc đó là đoán trước nhu cầu chưa xảy ra. Viết trong route trước, khi route thứ 2 thật sự cần thì mới `git mv` ra `lib/` và sửa import — dễ hơn nhiều so với việc đoán sai phạm vi dùng chung ngay từ đầu.

### Component con lấy data qua đâu: gọi service hay nhận prop?

Mặc định: **`_components/` nhận data qua prop từ `page.tsx`, không tự gọi service.**

```text
page.tsx ──await getA()──► data ──prop──► ListA.tsx (chỉ render, không gọi service)
```

- Chỉ `page.tsx` là nơi duy nhất gọi service — 1 điểm vào cho data-fetching của route, tránh 2 nơi cùng gọi `getA()` rồi lệch logic.
- Gọi 1 lần ở page, truyền xuống nhiều component con → tự nhiên tránh duplicate fetch, không cần nhớ wrap `React.cache()` ở từng nơi.
- Component chỉ nhận prop cũng dễ test hơn: truyền data giả vào, không cần mock DB/service.

**Ngoại lệ**: khi 1 component con cố tình tách ra để *stream độc lập* (dùng `<Suspense>` riêng, xem [Streaming](#luồng-đọc-dữ-liệu-get--render-trang) ở trên) — lúc đó nó đóng vai trò như 1 "page con" (async Server Component riêng), nên được phép tự gọi service. Đây là quyết định kiến trúc có chủ đích, không phải tiện tay gọi cho nhanh.

### Global state đặt ở đâu?

Global state ở đây là state phía **client** (Context, Zustand, Redux...) tồn tại xuyên suốt nhiều lần render/tương tác — khác với data từ Service/Repository vốn chỉ là kết quả 1 lần fetch trên server. Vị trí đặt phụ thuộc phạm vi dùng, không phải loại state:

| Phạm vi dùng | Đặt ở đâu | Ví dụ |
|---|---|---|
| Chỉ trong chức năng A (route này + `_components/` của nó) | `app/pageA/_lib/a-store.ts` | filter đang chọn, tab, bước hiện tại của wizard form |
| Dùng chung nhiều route/chức năng | `lib/stores/` ở root | current user, giỏ hàng, theme |

Quy tắc quyết định: **state chỉ sinh ra và chỉ có ý nghĩa trong phạm vi 1 route thì ở lại trong route đó** (`_lib/`) — không đẩy lên `lib/` "cho chắc". Chỉ chuyển lên `lib/` khi có ≥ 2 route thực sự cần đọc/ghi cùng 1 state đó. Đẩy state lên global quá sớm làm khó truy vết state đó bị đổi từ đâu, và kéo theo re-render ngoài ý muốn ở những route không liên quan.

Lưu ý: global state (Context/Zustand) chỉ tồn tại ở Client Component — không nhầm với data server trả về qua prop ở mục trên. Store thường được khởi tạo trong 1 Client Component wrapper (`Provider`) đặt trong `layout.tsx` liên quan (route layout cho state cục bộ, root `layout.tsx` cho state toàn app).

### ViewModel đặt ở đâu?

ViewModel là type/interface, không phải logic hay state — nhưng vẫn nên đặt cạnh **nơi nó được tạo ra**, không cạnh nơi nó được dùng.

```text
a.repository.ts ──rows──► a.service.ts ──map──► ViewModelA ──prop──► page.tsx + _components/
   (DB row shape)         (transform ở đây,
                            import type từ a.types.ts)
```

- **`a.types.ts` trong `_lib/`** (cùng cấp `a.service.ts`) — vì Service là nơi transform `domain model → view model`, type nên khai báo cạnh chỗ nó sinh ra.
- `page.tsx` và mọi file trong `_components/` chỉ **import type** từ đó, không định nghĩa lại.
- Nếu có cả domain model (shape từ Repository) lẫn view model (shape để render UI) — tách 2 type khác nhau trong cùng `a.types.ts`, đừng dùng chung 1 type cho cả 2 tầng: domain model đổi theo DB, view model đổi theo UI, ghép chung sẽ vỡ khi 1 trong 2 phía đổi.
- Chỉ chuyển `a.types.ts` ra `lib/` (cạnh service/component dùng chung — xem 2 mục dưới) khi ≥ 2 route thực sự dùng chung 1 ViewModel đó — cùng nguyên tắc với service/repository và global state ở trên, không tách sớm khi chỉ 1 route dùng.

### "Row" từ external API (Slack, Firebase, Discord...) để đâu?

Khi data không đến từ DB mà từ API bên thứ 3, "row" ở đây là **response shape do chính bên đó định nghĩa** (vd. Slack trả `SlackMessage`, Discord trả `DiscordMessage`) — bạn không tự thiết kế được, chỉ có thể mô tả lại nó.

```text
Slack API ──raw response──► a.repository.ts ──raw type──► a.service.ts ──normalize──► DomainModelA ──map──► ViewModelA
Firebase  ──raw response──►  (mỗi source              (gộp nhiều nguồn thành
Discord   ──raw response──►   1 repo riêng)             1 shape thống nhất ở đây)
```

- **Mỗi external source có 1 repository riêng**: `slack.repository.ts`, `firebase.repository.ts`, `discord.repository.ts` trong `_lib/` — vì mỗi nguồn có cách gọi, auth, rate-limit, error shape khác nhau; gộp chung 1 file dễ rối khi 1 API đổi mà ảnh hưởng nhầm sang API khác.
- Type cho raw response (`SlackMessage`, `DiscordMessage`...) khai báo **ngay trong file repository tương ứng** (hoặc import từ SDK chính chủ nếu có, vd. `@slack/web-api` đã có sẵn type) — không gộp vào `a.types.ts` chung, vì đó là chi tiết riêng của từng nguồn, không phải domain model của chức năng A.
- **Service là nơi duy nhất "biết" cả 3 nguồn tồn tại** — gọi cả 3 repository, normalize mỗi raw shape khác nhau thành 1 `DomainModelA` thống nhất (vd. cùng quy về `{ id, author, content, postedAt, source }`), rồi mới map tiếp thành ViewModel. `page.tsx` và `_components/` không bao giờ thấy `SlackMessage`/`DiscordMessage` — chỉ thấy `ViewModelA`.
- Lợi ích: nếu sau này bớt/thêm 1 nguồn (vd. bỏ Discord), chỉ sửa Service + xoá 1 repository — `page.tsx`, `_components/`, và `ViewModelA` không đổi.

### ViewModel/DomainModel/Raw type dùng chung nhiều chức năng thì sao?

3 loại type này "dùng chung" theo 2 lý do khác nhau — không áp cùng 1 quy tắc cho cả 3.

```text
lib/repositories/slack.repository.ts   → Raw type (SlackMessage) đi CHUNG với repository
   ▲ chuyển ra đây khi ≥ 2 chức năng cùng gọi Slack — không phải vì type "quan trọng"

lib/services/*.service.ts              → DomainModelA chuyển ra đây khi ≥ 2 chức năng
   ▲ cùng cần cùng 1 domain model đó (hiếm hơn — domain model thường đặc thù 1 chức năng)

lib/components/Avatar.types.ts        → ViewModel chuyển ra CÙNG LÚC với component
   ▲ dùng nó (không có lib/types/ riêng — xem lý do bên dưới)
```

- **Raw type (`SlackMessage`, `DiscordMessage`...)**: đi theo repository, không tách riêng. Khi `slack.repository.ts` được dọn ra `lib/repositories/` (vì ≥ 2 chức năng cùng gọi Slack — xem mục trên), type raw đi theo trong cùng file, không phải quyết định độc lập.
- **DomainModelA**: chuyển ra `lib/services/` (cạnh service tạo ra nó) chỉ khi ≥ 2 chức năng thực sự cần cùng 1 domain model — hiếm xảy ra hơn, vì domain model thường được normalize riêng cho từng chức năng (chức năng A gộp Slack+Discord thành 1 shape, chức năng B có thể chỉ cần Slack, shape khác).
- **ViewModel**: gắn chặt với 1 component cụ thể (nó mô tả component đó cần render gì), nên **không tách ViewModel riêng lẻ ra dùng chung** — nếu 1 component thật sự dùng chung nhiều route (xem mục trên), ViewModel của nó đi theo cùng lúc, đặt cạnh component trong `lib/components/` (vd. `Avatar.types.ts` cạnh `Avatar.tsx`), không tách thành 1 kho type riêng.
- Bẫy cần tránh: đừng gộp 3 loại type dùng chung vào 1 file `lib/types/shared.ts` — sẽ mất luôn ranh giới layer mà toàn bộ tài liệu này cố giữ (raw ≠ domain ≠ view). Mỗi type dùng chung nằm cạnh code tạo ra nó (repository/service/component tương ứng), không có 1 "kho type chung" duy nhất.

### Hàm mapping (raw → domain → view) đặt ở đâu?

Đây là 2 hàm khác nhau, thuộc 2 layer khác nhau — không gộp thành 1 hàm map thẳng raw → view.

```text
SlackMessage ──toDomainMessage()──► DomainModelA ──toViewModelA()──► ViewModelA
DiscordMsg   ──toDomainMessage()──►      │
                                          │
             raw → domain: SỐNG TRONG   domain → view: SỐNG TRONG
             a.service.ts (hoặc         a.service.ts, cạnh chỗ
             cùng file với normalize)   ViewModelA được dùng
```

- **`raw → domain`** (`toDomainMessage(msg: SlackMessage): DomainModelA`): đặt trong `a.service.ts`, ngay tại chỗ Service gọi repository và normalize — đây chính là phần "gộp nhiều nguồn thành 1 shape thống nhất" đã nói ở mục Row từ external API. Không đặt trong repository, vì repository không được biết đến `DomainModelA` (nó chỉ biết 1 nguồn, domain model là khái niệm của Service, nơi gộp nhiều nguồn).
- **`domain → view`** (`toViewModelA(m: DomainModelA): ViewModelA`): cũng đặt trong `a.service.ts`, là bước cuối trước khi return cho `page.tsx`. Nếu hàm này chỉ đổi tên field/format ngày tháng đơn giản — giữ luôn trong `getA()`, không tách hàm riêng. Chỉ tách thành hàm `toViewModelA` riêng khi logic đủ dài (nhiều field, nhiều nhánh if) để đặt tên cho dễ đọc/test riêng.
- Nếu có nhiều nguồn raw khác nhau map vào cùng 1 domain model (Slack + Discord đều thành `DomainModelA`), viết **1 hàm map riêng cho mỗi nguồn** (`fromSlack()`, `fromDiscord()`) thay vì 1 hàm `toDomainMessage(raw: SlackMessage | DiscordMessage)` rẽ nhánh bên trong — tách theo nguồn dễ sửa hơn khi 1 API đổi field, không đụng đến nhánh map của nguồn kia.
- Khi service/domain model được dọn ra `lib/services/` (dùng chung ≥ 2 chức năng), hàm mapping đi theo cùng file — không tách "hàm mapping" thành 1 module `mappers/` riêng; nó là chi tiết triển khai của service, không phải 1 layer độc lập trong mô hình 3 layer ban đầu.

### Hằng số (const) đặt ở đâu?

Cùng nguyên tắc dùng-chung-mới-tách đã áp dụng cho state/type/service — chỉ khác ở chỗ hằng số có 2 loại phạm vi rất khác nhau, dễ nhầm:

| Loại | Ví dụ | Đặt ở đâu |
|---|---|---|
| Riêng 1 chức năng | `STATUS = { DRAFT: 'draft', ... }`, giới hạn ký tự của form A | `app/pageA/_lib/a.constants.ts` |
| Config toàn app | `ITEMS_PER_PAGE`, base URL, tên cookie session | `lib/constants.ts` |

- Hằng số riêng 1 chức năng đi theo `_lib/`, cùng cấp `a.service.ts`/`a.types.ts` — không tạo `constants.ts` ở `lib/` "cho chắc" nếu chỉ pageA dùng.
- Chỉ chuyển ra `lib/constants.ts` khi ≥ 2 chức năng thực sự cần cùng 1 giá trị đó — ví dụ `ITEMS_PER_PAGE` dùng để phân trang ở nhiều route khác nhau.
- Enum/const dùng để validate ở Service (vd. `STATUS.DRAFT`) nên khai báo cạnh `a.types.ts` hoặc trong chính nó — chúng thường đi cùng với type liên quan (`type Status = typeof STATUS[keyof typeof STATUS]`), tách xa nhau dễ quên đồng bộ khi thêm giá trị mới.
- Biến môi trường (`process.env.*`) không tính là "const" theo nghĩa này — luôn đọc qua 1 lớp validate tập trung (vd. `lib/env.ts` dùng zod) thay vì gọi `process.env.X` rải rác khắp nơi, để lỗi thiếu biến môi trường lộ ra ngay lúc build/khởi động thay vì lúc chạy đến đúng dòng code đó.

### localStorage dùng để lưu UI state thì sao?

Đây là state phía Client Component, nhưng khác `a-store.ts` (Zustand/Context, chỉ tồn tại trong bộ nhớ, mất khi reload) — localStorage cần thêm 1 lớp đọc/ghi an toàn vì `window` không tồn tại lúc Server render.

```text
a-store.ts (Zustand)  ──persist middleware──►  localStorage
     ▲                                              │
     │  đọc lúc khởi tạo store (client-only,        │
     └────────────── tránh hydration mismatch) ◄────┘
```

- Không gọi `localStorage.getItem()` trực tiếp trong component hay trong `a.service.ts` — `a.service.ts` chạy trên server (không có `localStorage`), và gọi trực tiếp trong component dễ gây **hydration mismatch** (HTML server render ra khác với giá trị đọc từ localStorage lúc client mount).
- Đặt logic đọc/ghi localStorage cạnh chính store dùng nó (`a-store.ts` nếu riêng pageA, `lib/stores/user-store.ts` nếu dùng chung) — dùng middleware `persist` của Zustand (hoặc tương đương) thay vì tự viết `useEffect` đồng bộ tay, tránh trường hợp quên sync 2 chiều.
- Không đặt business data (kết quả từ Service/Repository) vào localStorage — localStorage chỉ hợp cho UI preference (theme, sidebar collapsed, tab đang chọn), không phải chỗ cache data thật.
