// Instalación del service worker
self.addEventListener('install', (event) => {
    console.log('Service Worker: Instalado');
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/app.js',
                '/style.css',
                '/icons/icon-192x192.png',
                '/icons/icon-512x512.png'
            ]);
        })
    );
});

// Activación del service worker
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activado');
});

// Manejo de las solicitudes de red con caché inteligente
self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Recuperando', event.request.url);
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request).then((response) => {
                return caches.open('v1').then((cache) => {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});
