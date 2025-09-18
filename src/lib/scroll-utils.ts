/**
 * SSR-safe scroll utility with hydration awareness
 */

let isHydrated = false;

// Detect when hydration is complete
if (typeof window !== 'undefined') {
  // Check if we're in production (SSR) or development
  if (import.meta.env.PROD) {
    // In production, wait for hydration
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        isHydrated = true;
      }, 100);
    });
  } else {
    // In development, assume we're always hydrated
    isHydrated = true;
  }
}

export const scrollToSection = (sectionId: string): Promise<boolean> => {
  return new Promise((resolve) => {
    // Ensure we're on the client side and DOM is ready
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      resolve(false);
      return;
    }

    const attemptScroll = (retryCount = 0): boolean => {
      const element = document.getElementById(sectionId);
      if (element) {
        try {
          element.scrollIntoView({ behavior: 'smooth' });
          console.debug(`Successfully scrolled to ${sectionId}`);
          return true;
        } catch (error) {
          console.warn(`Scroll error for ${sectionId}:`, error);
          // Fallback to hash navigation
          try {
            window.location.hash = `#${sectionId}`;
            return true;
          } catch (hashError) {
            console.warn(`Hash fallback failed for ${sectionId}:`, hashError);
          }
        }
      }
      return false;
    };

    // Try immediate scroll first
    if (attemptScroll()) {
      resolve(true);
      return;
    }

    // If not hydrated yet or element not found, use progressive retry
    const maxRetries = isHydrated ? 3 : 10;
    let retryCount = 0;
    
    const retryScroll = () => {
      retryCount++;
      
      if (attemptScroll()) {
        resolve(true);
        return;
      }
      
      if (retryCount < maxRetries) {
        // Increase delay for each retry, but cap at 500ms
        const delay = Math.min(100 * retryCount, 500);
        setTimeout(retryScroll, delay);
      } else {
        console.warn(`Failed to scroll to element with id "${sectionId}" after ${maxRetries} attempts`);
        resolve(false);
      }
    };

    // Start retry cycle
    setTimeout(retryScroll, isHydrated ? 50 : 200);
  });
};

/**
 * Creates a hydration-aware click handler for scroll actions
 */
export const createScrollHandler = (sectionId: string, onComplete?: () => void) => {
  return async (event: React.MouseEvent) => {
    // Prevent any default behavior
    event.preventDefault();
    event.stopPropagation();

    // Add visual feedback
    const button = event.currentTarget as HTMLElement;
    button.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
      button.style.transform = '';
    }, 150);

    // Attempt scroll
    const success = await scrollToSection(sectionId);
    
    if (!success) {
      // Final fallback - try direct navigation
      console.warn(`Scroll failed, attempting navigation fallback to #${sectionId}`);
      window.location.hash = `#${sectionId}`;
    }
    
    // Call completion callback
    onComplete?.();
  };
};

/**
 * Hook to ensure scroll handlers are only active after hydration
 */
export const useScrollReady = () => {
  if (typeof window === 'undefined') return false;
  return isHydrated || !import.meta.env.PROD;
};