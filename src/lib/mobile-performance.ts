// Mobile performance monitoring utility
export const trackPerformanceMetrics = () => {
  if (typeof window === 'undefined') return;

  try {
    // Track LCP (Largest Contentful Paint)
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log(`LCP: ${entry.startTime}ms`);
          }
          if (entry.entryType === 'first-contentful-paint') {
            console.log(`FCP: ${entry.startTime}ms`);
          }
        });
      });
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-contentful-paint'] });
      } catch (e) {
        console.warn('Performance observer not supported');
      }
    }

    // Track mobile-specific metrics
    if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) {
      console.log('Mobile device detected - tracking mobile performance');
      
      // Track when hero image loads
      const heroImage = document.querySelector('img[fetchpriority="high"]') as HTMLImageElement;
      if (heroImage) {
        heroImage.onload = () => {
          console.log('Hero image loaded:', performance.now() + 'ms');
        };
      }
    }
  } catch (error) {
    console.warn('Performance tracking failed:', error);
  }
};

// Register service worker for caching
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('SW registered: ', registration);
    } catch (error) {
      console.log('SW registration failed: ', error);
    }
  }
};