// Critical path optimizations for LCP performance

/**
 * Loads non-critical CSS asynchronously to avoid render blocking
 */
export const loadCSSAsync = (href: string, id?: string) => {
  if (typeof document === 'undefined') return;
  
  // Check if CSS is already loaded
  const existing = document.querySelector(`link[href="${href}"]`);
  if (existing) return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = href;
  if (id) link.id = id;
  
  link.onload = () => {
    link.rel = 'stylesheet';
    link.onload = null;
  };
  
  // Fallback for browsers that don't support preload
  link.onerror = () => {
    const fallbackLink = document.createElement('link');
    fallbackLink.rel = 'stylesheet';
    fallbackLink.href = href;
    if (id) fallbackLink.id = id;
    document.head.appendChild(fallbackLink);
  };
  
  document.head.appendChild(link);
};

/**
 * Optimizes LCP element rendering by ensuring immediate resource loading
 */
export const optimizeLCPElement = () => {
  if (typeof document === 'undefined') return;
  
  // Find and optimize the LCP hero image
  const heroImage = document.querySelector('[data-hero-image]') as HTMLImageElement;
  if (heroImage) {
    heroImage.loading = 'eager';
    heroImage.setAttribute('fetchpriority', 'high');
    heroImage.setAttribute('decoding', 'sync');
    
    // Ensure image is visible immediately
    heroImage.style.opacity = '1';
    heroImage.style.visibility = 'visible';
  }
  
  // Optimize hero text rendering
  const heroText = document.querySelector('h1');
  if (heroText) {
    heroText.style.textRendering = 'optimizeSpeed';
  }
};

/**
 * Reduces element render delay by optimizing font loading
 */
export const optimizeFontLoading = () => {
  if (typeof document === 'undefined') return;
  
  // Preload critical font variants
  const criticalFonts = [
    'https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjx4wXg.woff2', // Lato Regular
    'https://fonts.gstatic.com/s/playfairdisplay/v36/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtXK-F2qO0isEw.woff2' // Playfair Display Bold
  ];
  
  criticalFonts.forEach(fontUrl => {
    const existing = document.querySelector(`link[href="${fontUrl}"]`);
    if (!existing) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      link.href = fontUrl;
      document.head.appendChild(link);
    }
  });
};

/**
 * Apply all critical path optimizations
 */
export const initCriticalPathOptimizations = () => {
  // Ensure we're in a browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  
  // Run optimizations as soon as possible
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      optimizeLCPElement();
      optimizeFontLoading();
    });
  } else {
    optimizeLCPElement();
    optimizeFontLoading();
  }
};