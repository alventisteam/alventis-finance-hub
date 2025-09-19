import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') {
      return;
    }
    
    try {
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
      const onChange = () => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      }
      mql.addEventListener("change", onChange)
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      return () => mql.removeEventListener("change", onChange)
    } catch (error) {
      console.warn('Error in useIsMobile hook:', error);
      // Fallback to false for mobile when error occurs
      setIsMobile(false);
    }
  }, [])

  return !!isMobile
}
