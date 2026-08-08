import "@/app/globals.css";
import { AppSidebar } from "@/lib/components/app-sidebar/app-sidebar";
import { KBreadCrumb } from "@/lib/components/bread-crumb/bread-crumb";
import { RegisterServiceWorker } from "@/lib/components/register-service-worker";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { StoreProvider } from "@/lib/store-provider";
import type { Metadata, Viewport } from "next";
import { SessionProvider } from "next-auth/react";

// iOS không tự tạo splash screen từ manifest như Android — phải khai báo riêng từng
// độ phân giải thiết bị qua appleWebApp.startupImage (ảnh tạo sẵn trong public/splash).
const APPLE_SPLASH_SCREENS = [
  { url: "/splash/iphone-se-1st-gen.png", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
  { url: "/splash/iphone-se-6-7-8.png", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
  { url: "/splash/iphone-6-7-8-plus.png", media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
  { url: "/splash/iphone-x-xs-11pro-12mini-13mini.png", media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
  { url: "/splash/iphone-xr-11.png", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
  { url: "/splash/iphone-xsmax-11promax.png", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
  { url: "/splash/iphone-12-13-14.png", media: "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
  { url: "/splash/iphone-12-13-promax-14plus.png", media: "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
  { url: "/splash/iphone-14-15-15pro.png", media: "(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
  { url: "/splash/iphone-14-15promax-15plus.png", media: "(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
  { url: "/splash/ipad-9.7-mini.png", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
  { url: "/splash/ipad-10.2.png", media: "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
  { url: "/splash/ipad-air-10.5.png", media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
  { url: "/splash/ipad-pro-11.png", media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
  { url: "/splash/ipad-mini-6.png", media: "(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
  { url: "/splash/ipad-pro-12.9.png", media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
];

export const metadata: Metadata = {
  title: "Kyo",
  description: "Học tiếng Nhật cùng Kyo",
  // path tĩnh, không qua file-convention hashing (?hash) — iOS hay fail fetch apple-touch-icon
  // có query string lúc "Thêm vào MH chính" rồi fallback về icon chữ cái đầu tên app.
  icons: {
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Kyo",
    startupImage: APPLE_SPLASH_SCREENS,
  },
  other: {
    // Next.js's appleWebApp.capable chỉ sinh "mobile-web-app-capable" (không tiền tố "apple-"),
    // nhưng iOS Safari bắt buộc đúng tên "apple-mobile-web-app-capable" mới chạy standalone mode.
    "apple-mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  themeColor: "#b91c1c",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <SessionProvider>
            <SidebarProvider defaultOpen={false}>
              <AppSidebar />
              <SidebarInset>
                <div className="sticky top-0 flex items-center z-1 m-1 gap-2">
                  <SidebarTrigger />
                  <KBreadCrumb />
                </div>
                {children}
              </SidebarInset>
            </SidebarProvider>
            <Toaster />
            <RegisterServiceWorker />
          </SessionProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
