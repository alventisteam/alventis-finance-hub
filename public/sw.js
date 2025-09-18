// Service Worker for caching critical resources
const CACHE_NAME = 'alventis-v1';
const CRITICAL_RESOURCES = [
  '/',
  '/assets/finance-consulting-office-belgium-2.webp',
  '/assets/hero-mobile.webp',
  '/assets/hero-tablet.webp',
  '/assets/logo-optimized.webp'
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CRITICAL_RESOURCES))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache first for images, network first for HTML
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Cache first strategy for images
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request)
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(request)
            .then((response) => {
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => cache.put(request, responseClone));
              }
              return response;
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