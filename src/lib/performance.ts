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
 * Preload critical CSS files
 */
export const preloadCSS = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = href;
  link.onload = () => {
    link.rel = 'stylesheet';
  };
  document.head.appendChild(link);
};

/**
 * Defer non-critical JavaScript execution
 */
export const deferExecution = (callback: () => void, delay = 0) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      setTimeout(callback, delay);
    });
  } else {
    setTimeout(callback, delay);
  }
};

/**
 * Optimize font loading to prevent FOUT (Flash of Unstyled Text)
 */
export const preloadFonts = () => {
  const fonts = [
    'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600&display=swap'
  ];
  
  fonts.forEach(fontUrl => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = fontUrl;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
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

/**
 * Measure and report Core Web Vitals
 */
export const measureCoreWebVitals = () => {
  if ('web-vitals' in window) return; // Avoid duplicate measurements
  
  // This would typically use the web-vitals library
  // For now, we'll just provide the infrastructure
  console.log('Core Web Vitals measurement ready');
};