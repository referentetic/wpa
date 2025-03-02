// Instalar el service worker
self.addEventListener('install', (event) => {
    console.log('Service Worker: Instalado');
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/app.js',
                '/style.css',
                '/icons/icon-192x192.png', // Asegúrate de incluir los iconos aquí
                '/icons/icon-512x512.png'
            ]);
        })
    );
});

// Activar el service worker
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activado');
});

// Manejar las solicitudes de red
self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Recuperando', event.request.url);
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
