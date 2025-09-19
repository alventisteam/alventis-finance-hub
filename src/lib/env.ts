// Environment configuration utility
// This module safely handles environment variables for both development and production

export const ENV = {
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  gaId: import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-ZV5408R1NP',
  isPreviewMode: () => {
    if (typeof window === 'undefined') return false;
    return window.location.hostname.includes('lovableproject.com') || 
           window.location.hostname === 'localhost' ||
           window.location.hostname.includes('cdn.gpteng.co');
  }
};

// Export environment flags to window for inline scripts
if (typeof window !== 'undefined') {
  (window as any).__APP_ENV__ = {
    isDev: ENV.isDevelopment,
    isProd: ENV.isProduction,
    gaId: ENV.gaId,
    isPreview: ENV.isPreviewMode()
  };
}