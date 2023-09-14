const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  a + "/_app/immutable/entry/app.75764775.js",
  a + "/_app/immutable/assets/0.1f2e836a.css",
  a + "/_app/immutable/nodes/0.afc42b66.js",
  a + "/_app/immutable/assets/svelte-logo.87df40b8.svg",
  a + "/_app/immutable/assets/github.1ea8d62e.svg",
  a + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  a + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  a + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  a + "/_app/immutable/nodes/1.c112a611.js",
  a + "/_app/immutable/assets/2.e814e030.css",
  a + "/_app/immutable/nodes/2.9e6add7e.js",
  a + "/_app/immutable/assets/svelte-welcome.c18bcf5a.webp",
  a + "/_app/immutable/assets/svelte-welcome.6c300099.png",
  a + "/_app/immutable/nodes/3.2a04a8e9.js",
  a + "/_app/immutable/chunks/index.208b6455.js",
  a + "/_app/immutable/chunks/index.537ef107.js",
  a + "/_app/immutable/chunks/paths.5012678a.js",
  a + "/_app/immutable/chunks/singletons.0d5df511.js",
  a + "/_app/immutable/chunks/stores.aafbafc0.js",
  a + "/_app/immutable/entry/start.3eaafb3f.js"
], f = [
  a + "/.nojekyll",
  a + "/favicon.png",
  a + "/icons/android-chrome-192x192.png",
  a + "/icons/android-chrome-512x512.png",
  a + "/icons/apple-touch-icon.png",
  a + "/icons/favicon-16x16.png",
  a + "/icons/favicon-32x32.png",
  a + "/icons/favicon.ico",
  a + "/manifest.json",
  a + "/robots.txt"
], i = "1694698197260", n = self, p = `cache${i}`, l = r.concat(f), h = new Set(l);
n.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((s) => s.addAll(l)).then(() => {
      n.skipWaiting();
    })
  );
});
n.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (s) => {
      for (const t of s)
        t !== p && await caches.delete(t);
      n.clients.claim();
    })
  );
});
async function u(e) {
  const s = await caches.open(`offline${i}`);
  try {
    const t = await fetch(e);
    return s.put(e, t.clone()), t;
  } catch (t) {
    const o = await s.match(e);
    if (o)
      return o;
    throw t;
  }
}
n.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url), t = s.protocol.startsWith("http"), o = s.hostname === self.location.hostname && s.port !== self.location.port, c = s.host === self.location.host && h.has(s.pathname), m = e.request.cache === "only-if-cached" && !c;
  t && !o && !m && e.respondWith(
    (async () => c && await caches.match(e.request) || u(e.request))()
  );
});
