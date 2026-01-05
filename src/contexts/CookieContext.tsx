'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CookieContextType {
  showBanner: () => void;
  hideBanner: () => void;
  isVisible: boolean;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export function CookieProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const showBanner = () => {
    setIsVisible(true);
  };

  const hideBanner = () => {
    setIsVisible(false);
  };

  return (
    <CookieContext.Provider value={{ showBanner, hideBanner, isVisible }}>
      {children}
    </CookieContext.Provider>
  );
}

export function useCookie() {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookie must be used within a CookieProvider');
  }
  return context;
}

