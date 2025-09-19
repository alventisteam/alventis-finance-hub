// Analytics utilities with proper error handling and consent management

export const loadAnalytics = (gaId: string) => {
  if (typeof window === 'undefined') return;
  
  try {
    // Create and load gtag script
    const gtagScript = document.createElement('script');
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    gtagScript.async = true;
    gtagScript.onerror = () => console.warn('Failed to load Google Analytics');
    document.head.appendChild(gtagScript);

    // Initialize dataLayer and gtag function
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    // Configure Analytics
    gtag('js', new Date());
    gtag('config', gaId);
    
    console.log('Google Analytics loaded successfully');
  } catch (error) {
    console.warn('Error loading Google Analytics:', error);
  }
};

export const initCookieConsent = (onConsentGranted: () => void) => {
  if (typeof window === 'undefined') return;

  // Check if cookieconsent is available
  const checkConsent = () => {
    if ((window as any).cookieconsent && typeof (window as any).cookieconsent.initialise === 'function') {
      try {
        (window as any).cookieconsent.initialise({
          palette: {
            popup: { background: "transparent" },
            button: { background: "transparent" }
          },
          theme: "classic",
          position: "bottom-right",
          type: "opt-in",
          content: {
            message: "We use cookies to analyze traffic and improve your experience.",
            dismiss: "Reject",
            allow: "Accept",
            link: "Learn more",
            href: "/privacy"
          },
          onInitialise: function(status: string) {
            if (status === 'allow') onConsentGranted();
          },
          onStatusChange: function(status: string) {
            if (status === 'allow') onConsentGranted();
          }
        });
      } catch (error) {
        console.warn('Error initializing cookie consent:', error);
      }
    } else {
      // Retry after a short delay
      setTimeout(checkConsent, 100);
    }
  };

  // Start checking for consent library
  checkConsent();
};