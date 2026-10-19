/* Guarda la app en el dispositivo para que abra sin internet. Cambia VERSION cuando actualices archivos. */
const VERSION = 'loame-sellos-v1';
const ARCHIVOS = ['./', 'index.html', 'tarjeta.html', 'config.js', 'manifest.webmanifest', 'manifest-tarjeta.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-512-maskable.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const local = new URL(req.url).origin === location.origin;
  if (local) {
    // Primero la red (para recibir cambios), si no hay internet usa la copia guardada.
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(VERSION).then(x => x.put(req, c)); return r; })
      .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html'))));
  } else {
    // Fuentes y librería de QR: copia guardada si existe.
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => { const c = res.clone(); caches.open(VERSION).then(x => x.put(req, c)); return res; })));
  }
});
