// Service Worker for caching with non-http(s) request filtering
const CACHE_NAME = 'alventis-v1';
const urlsToCache = [
  '/',
  '/assets/hero-optimized.webp',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;500;600&display=swap'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch event with non-http(s) request filtering
self.addEventListener('fetch', (event) => {
  const request = event.request;
  
  // Only handle http(s) requests, ignore chrome-extension:// and other protocols
  if (!request.url.startsWith('http://') && !request.url.startsWith('https://')) {
    return;
  }
  
  // Skip preview overlay requests
  if (request.url.includes('cdn.gpteng.co') || request.url.includes('lovableproject.com')) {
    return fetch(request);
  }
  
  event.respondWith(
    caches.match(request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(request);
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});