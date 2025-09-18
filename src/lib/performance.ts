// Performance utilities for optimizing LCP and Core Web Vitals

/**
 * Preload critical images to improve LCP
 */
export const preloadImage = (src: string, priority: 'high' | 'low' = 'high') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  if (priority === 'high') {
    link.setAttribute('fetchpriority', 'high');
  }
  document.head.appendChild(link);
};

/**
 * Mark critical resources for faster loading
 */
export const markCriticalResource = (selector: string) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    if (element instanceof HTMLImageElement) {
      element.loading = 'eager';
      element.setAttribute('fetchpriority', 'high');
    }
  });
};