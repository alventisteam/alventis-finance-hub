/**
 * Performance utilities for optimizing LCP and Core Web Vitals
 * Batch DOM operations to prevent forced reflows
 */

/**
 * Preload critical images to improve LCP with better error handling
 */
export const preloadImage = (src: string, priority: 'high' | 'low' = 'high') => {
  if (typeof document === 'undefined') return;
  
  try {
    // Check if image is already preloaded
    const existing = document.querySelector(`link[href="${src}"]`);
    if (existing) return;
    
    // Batch DOM operations to prevent reflows
    const fragment = document.createDocumentFragment();
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    if (priority === 'high') {
      link.setAttribute('fetchpriority', 'high');
    }
    
    // Add error handling
    link.onerror = () => console.warn(`Failed to preload image: ${src}`);
    
    fragment.appendChild(link);
    document.head.appendChild(fragment);
  } catch (error) {
    console.warn('Error preloading image:', error);
  }
};

/**
 * Mark critical resources for faster loading with batched DOM operations
 */
export const markCriticalResource = (selector: string) => {
  if (typeof document === 'undefined') return;
  
  try {
    // Use requestAnimationFrame to batch DOM updates
    requestAnimationFrame(() => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        if (element instanceof HTMLImageElement) {
          // Batch property changes to avoid reflows
          element.style.cssText += 'contain: layout style paint;';
          element.loading = 'eager';
          element.setAttribute('fetchpriority', 'high');
          
          // Ensure images have proper error handling
          if (!element.onerror) {
            element.onerror = () => console.warn(`Failed to load image: ${element.src}`);
          }
        }
      });
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
        // Batch DOM changes
        requestAnimationFrame(() => {
          img.loading = 'eager';
          img.setAttribute('fetchpriority', 'high');
          img.style.cssText += 'contain: layout style paint;';
        });
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '50px' });
  
  observer.observe(heroImage);
};