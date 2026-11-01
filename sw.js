/* Casian Fitness Log service worker: keeps the app working offline.
   Bump CACHE when releasing a new version so phones pick it up. */
var CACHE = 'cfl-app-v1.2.1';
var FONT_CACHE = 'cfl-fonts';
var OCR_CACHE = 'cfl-ocr';
var ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
var FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];
/* The label reader (tesseract.js, its core and the Romanian language file) is fetched on the first scan and kept for offline use. */
var OCR_HOSTS = ['cdn.jsdelivr.net', 'unpkg.com', 'tessdata.projectnaptha.com'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (k) { return k !== CACHE && k !== FONT_CACHE && k !== OCR_CACHE; })
          .map(function (k) { return caches.delete(k); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

function cacheFirst(cacheName, req) {
  return caches.open(cacheName).then(function (c) {
    return c.match(req).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (res) {
        if (res && (res.ok || res.type === 'opaque')) c.put(req, res.clone());
        return res;
      });
    });
  });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);

  if (FONT_HOSTS.indexOf(url.hostname) > -1) { e.respondWith(cacheFirst(FONT_CACHE, req)); return; }
  if (OCR_HOSTS.indexOf(url.hostname) > -1) { e.respondWith(cacheFirst(OCR_CACHE, req)); return; }

  if (url.origin !== self.location.origin) return;

  // App files: serve from cache straight away, refresh the cache in the background.
  e.respondWith(caches.open(CACHE).then(function (c) {
    return c.match(req, { ignoreSearch: true }).then(function (hit) {
      var net = fetch(req).then(function (res) {
        if (res && res.ok) c.put(req, res.clone());
        return res;
      }).catch(function () {
        if (hit) return hit;
        if (req.mode === 'navigate') return c.match('./index.html');
        return Response.error();
      });
      if (hit) { e.waitUntil(net.catch(function () {})); return hit; }
      return net;
    });
  }));
});
