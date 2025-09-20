// Performance utilities for optimizing LCP and Core Web Vitals

/**
 * Preload critical images to improve LCP with better error handling
 */
export const preloadImage = (src: string, priority: 'high' | 'low' = 'high') => {
  if (typeof document === 'undefined') return;
  
  try {
    // Check if image is already preloaded
    const existing = document.querySelector(`link[href="${src}"]`);
    if (existing) return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    if (priority === 'high') {
      link.setAttribute('fetchpriority', 'high');
    }
    
    // Add error handling
    link.onerror = () => console.warn(`Failed to preload image: ${src}`);
    
    document.head.appendChild(link);
  } catch (error) {
    console.warn('Error preloading image:', error);
  }
};

/**
 * Mark critical resources for faster loading with better selector handling
 */
export const markCriticalResource = (selector: string) => {
  if (typeof document === 'undefined') return;
  
  try {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      if (element instanceof HTMLImageElement) {
        element.loading = 'eager';
        element.setAttribute('fetchpriority', 'high');
        
        // Ensure images have proper error handling
        if (!element.onerror) {
          element.onerror = () => console.warn(`Failed to load image: ${element.src}`);
        }
      }
    });
  } catch (error) {
    console.warn('Error marking critical resources:', error);
  }
};

/**
 * Optimize LCP by ensuring the largest contentful paint element is prioritized
 */
export const optimizeLCP = () => {
  if (typeof document === 'undefined') return;
  
  // Use intersection observer to detect when hero image enters viewport
  const heroImage = document.querySelector('[data-hero-image]') as HTMLImageElement;
  if (!heroImage) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.loading = 'eager';
        img.setAttribute('fetchpriority', 'high');
        observer.unobserve(img);
      }
    });
  });
  
  observer.observe(heroImage);
};