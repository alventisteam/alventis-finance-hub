// Service Worker for caching critical resources
const CACHE_NAME = 'alventis-v3';
const CRITICAL_RESOURCES = [
  '/',
  '/assets/finance-consulting-office-belgium-2.webp',
  '/assets/hero-mobile.webp',
  '/favicon-optimized.webp'
];

const IMAGE_CACHE_NAME = 'alventis-images-v3';
const STATIC_CACHE_NAME = 'alventis-static-v3';

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then((cache) => cache.addAll(CRITICAL_RESOURCES)),
      caches.open(IMAGE_CACHE_NAME),
      caches.open(STATIC_CACHE_NAME)
    ]).then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (![CACHE_NAME, IMAGE_CACHE_NAME, STATIC_CACHE_NAME].includes(cacheName)) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - optimized caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Cache first strategy for images with aggressive caching
  if (request.destination === 'image' || url.pathname.match(/\.(webp|jpg|jpeg|png|gif|svg)$/)) {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME)
        .then((cache) => cache.match(request))
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(request)
            .then((fetchResponse) => {
              if (fetchResponse.status === 200) {
                const responseClone = fetchResponse.clone();
                caches.open(IMAGE_CACHE_NAME)
                  .then((cache) => cache.put(request, responseClone));
              }
              return fetchResponse;
            });
        })
    );
  }
  
  // Cache first for static assets (JS, CSS, fonts)
  else if (url.pathname.match(/\.(js|css|woff2|woff)$/)) {
    event.respondWith(
      caches.open(STATIC_CACHE_NAME)
        .then((cache) => cache.match(request))
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(request)
            .then((fetchResponse) => {
              if (fetchResponse.status === 200) {
                const responseClone = fetchResponse.clone();
                caches.open(STATIC_CACHE_NAME)
                  .then((cache) => cache.put(request, responseClone));
              }
              return fetchResponse;
            });
        })
    );
  }
  
  // Network first strategy for HTML/API
  else if (request.method === 'GET' && 
           (request.headers.get('accept')?.includes('text/html') || 
            request.url.includes('/api/'))) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
  }
});