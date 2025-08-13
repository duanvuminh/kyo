This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

/my-next-app
├── app/                  # App Router (page.tsx, layout.tsx, routes)
│   ├── (routes)/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   └── api/              # API Routes
├── components/           # Các component tái sử dụng (Button, Modal, Header, Footer...)
│   ├── ui/               # Components nhỏ theo atomic design
│   └── layout/           # Components lớn (Navbar, Sidebar, MainLayout...)
├── features/             # Chia theo tính năng/domain (Auth, Blog, User, Admin...)
│   ├── auth/
│   │   ├── components/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── types.ts
│   ├── blog/
│   │   ├── components/
│   │   └── services/
├── hooks/                # Các custom hooks dùng toàn dự án
├── lib/                  # Hàm helper (formatDate, classNames, fetcher, validators...)
├── providers/            # Các Context Provider (ThemeProvider, AuthProvider, ToastProvider...)
├── services/             # Các service chung (axios instance, fetch client)
├── stores/               # State management (zustand, redux, jotai...)
├── styles/               # Các file CSS, SCSS hoặc Tailwind base
├── constants/            # Các biến hằng số (routes, api endpoints, default values...)
├── types/                # Global TypeScript types
├── utils/                # Các utility functions khác
├── public/               # Static assets (images, fonts...)
├── .env.local            # Environment Variables
├── next.config.js        # Next.js config
├── tailwind.config.ts    # Tailwind config (nếu có)
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies

Positioning – static, relative, absolute, sticky, top-0, left-0, z-10,...
Display – flex, grid, block, hidden,...
Flex/Grid modifiers – items-center, justify-between, gap-4,...
Sizing – w-64, h-screen, max-w-lg,...
Spacing – p-4, m-2, mt-1, px-6,...
Typography – text-sm, font-bold, leading-tight,...
Colors – text-gray-700, bg-white, border-red-500,...
Effects / Others – shadow, rounded, transition, hover:bg-gray-100,...

✅ Chia nhỏ component (< 50 lines)
✅ Extract constants và functions
✅ Tách logic ra hooks
✅ Giảm props drilling
✅ Meaningful names
✅ Single responsibility
