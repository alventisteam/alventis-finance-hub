import { ReactNode, useState, useEffect } from 'react';

interface SSRSafeComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
}

// HOC for making components SSR-safe
export const SSRSafeComponent = ({ children, fallback, className }: SSRSafeComponentProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // During SSR or before hydration, show fallback or children
  if (!isHydrated) {
    return (
      <div className={className}>
        {fallback || children}
      </div>
    );
  }

  // After hydration, show children normally
  return <>{children}</>;
};

// Hook to safely detect if we're on the client side
export const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

// Hook to safely use router hooks only on client side
export const useSafeLocation = () => {
  const [location, setLocation] = useState({ pathname: '/' });
  const isClient = useIsClient();

  useEffect(() => {
    if (isClient && typeof window !== 'undefined') {
      // Only import and use router hooks on client side
      import('react-router-dom').then(({ useLocation }) => {
        // This is a bit hacky but ensures SSR safety
        setLocation({ pathname: window.location.pathname });
      });
    }
  }, [isClient]);

  return location;
};

export default SSRSafeComponent;