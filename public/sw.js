const CACHE_NAME = "kyo-shell-v3";
const SHELL_ASSETS = [
  "/",
  "/manifest.webmanifest",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
  );
  self.clients.claim();
});

// Asset tĩnh (icon, JS/CSS build, font, ảnh proxy) — cache theo path cụ thể.
function isCacheableAsset(url) {
  return (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname.startsWith("/splash/") ||
    url.pathname === "/api/file" ||
    /\.(png|jpg|jpeg|svg|webp|ico|woff2?)$/.test(url.pathname)
  );
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }

  // Mọi trang (navigation) đều được cache network-first — để mở lại được lúc mất mạng,
  // kể cả "/" (start_url), không riêng gì /manga. Network-first nên luôn ưu tiên dữ liệu
  // mới khi có mạng; cache chỉ là fallback khi offline.
  const isNavigation = request.mode === "navigate";
  if (!isNavigation && !isCacheableAsset(url)) {
    return;
  }

  event.respondWith(
    fetch(request)
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, resClone));
        return res;
      })
      .catch(() =>
        caches.match(request).then((cached) => cached ?? (isNavigation ? caches.match("/") : undefined))
      )
  );
});
