/**
 * Performance utilities for optimizing LCP and Core Web Vitals
 * Batch DOM operations to prevent forced reflows and layout thrashing
 */

// Cache DOM measurements to avoid repeated forced reflows
const domMeasurements = new Map<string, any>();

/**
 * Preload critical images to improve LCP with better error handling
 */
export const preloadImage = (src: string, priority: 'high' | 'low' = 'high') => {
  if (typeof document === 'undefined') return;
  
  try {
    // Check if image is already preloaded
    const existing = document.querySelector(`link[href="${src}"]`);
    if (existing) return;
    
    // Use requestIdleCallback if available to avoid blocking main thread
    const preloadTask = () => {
      const fragment = document.createDocumentFragment();
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      if (priority === 'high') {
        link.setAttribute('fetchPriority', 'high');
      }
      
      // Add error handling
      link.onerror = () => console.warn(`Failed to preload image: ${src}`);
      
      fragment.appendChild(link);
      document.head.appendChild(fragment);
    };
    
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadTask, { timeout: 1000 });
    } else {
      setTimeout(preloadTask, 0);
    }
  } catch (error) {
    console.warn('Error preloading image:', error);
  }
};

/**
 * Mark critical resources for faster loading with batched DOM operations
 * Prevents forced reflows by batching all DOM reads and writes
 */
export const markCriticalResource = (selector: string) => {
  if (typeof document === 'undefined') return;
  
  try {
    // Batch all DOM operations to prevent layout thrashing
    const batchedUpdate = () => {
      const elements = document.querySelectorAll(selector);
      
      // First pass: collect all DOM reads (measurements)
      const elementData = Array.from(elements).map(element => ({
        element,
        isImage: element instanceof HTMLImageElement,
        currentStyles: element instanceof HTMLElement ? getComputedStyle(element) : null
      }));
      
      // Second pass: apply all DOM writes in a single batch
      elementData.forEach(({ element, isImage }) => {
        if (isImage && element instanceof HTMLImageElement) {
          // Batch all style changes into a single cssText update
          const styleUpdates = [
            'contain: layout style paint',
            'will-change: transform', // Optimize for potential animations
          ];
          
          // Apply all changes at once to prevent multiple reflows
          element.style.cssText += styleUpdates.join('; ') + ';';
          element.loading = 'eager';
          element.setAttribute('fetchPriority', 'high');
          
          // Add error handling if not present
          if (!element.onerror) {
            element.onerror = () => console.warn(`Failed to load image: ${element.src}`);
          }
        }
      });
    };
    
    // Use requestAnimationFrame to ensure DOM updates happen at optimal time
    requestAnimationFrame(batchedUpdate);
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
          img.setAttribute('fetchPriority', 'high');
          img.style.cssText += 'contain: layout style paint;';
        });
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '50px' });
  
  observer.observe(heroImage);
};