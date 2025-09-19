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

// Fetch event with comprehensive request filtering
self.addEventListener('fetch', (event) => {
  const request = event.request;
  
  // Only handle http(s) requests, ignore chrome-extension:// and other protocols
  if (!request.url.startsWith('http://') && !request.url.startsWith('https://')) {
    return;
  }
  
  // Skip preview overlay and development requests
  if (request.url.includes('cdn.gpteng.co') || 
      request.url.includes('lovableproject.com') ||
      request.url.includes('localhost:') ||
      request.url.includes('127.0.0.1:')) {
    return;
  }
  
  // Skip non-GET requests and requests with no-cache
  if (request.method !== 'GET' || request.headers.get('cache-control')?.includes('no-cache')) {
    return fetch(request);
  }
  
  event.respondWith(
    caches.match(request)
      .then((response) => {
        if (response) {
          return response;
        }
        
        // Fetch from network with error handling
        return fetch(request).catch((error) => {
          console.warn('Service Worker: Fetch failed for', request.url, error);
          // Return a basic response for critical requests that fail
          if (request.url.includes('.css') || request.url.includes('.js')) {
            return new Response('', { status: 404, statusText: 'Not Found' });
          }
          throw error;
        });
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