'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Preloader from '@/components/ui/preloader';

interface PreloaderContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(
  undefined
);

export const usePreloader = () => {
  const context = useContext(PreloaderContext);
  if (!context) {
    throw new Error('usePreloader must be used within PreloaderProvider');
  }
  return context;
};

interface PreloaderProviderProps {
  children: React.ReactNode;
}

export const PreloaderProvider: React.FC<PreloaderProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const pathname = usePathname();

  // Handle initial page load
  useEffect(() => {
    if (isInitialLoad) {
      // Simulate initial loading time
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsInitialLoad(false);
      }, 2000); // Adjust timing as needed

      return () => clearTimeout(timer);
    }
  }, [isInitialLoad]);

  // Handle route changes
  useEffect(() => {
    if (!isInitialLoad) {
      setIsLoading(true);

      // Simulate page transition loading
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Shorter for page transitions

      return () => clearTimeout(timer);
    }
  }, [pathname, isInitialLoad]);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <PreloaderContext.Provider value={{ isLoading, setLoading }}>
      <Preloader isLoading={isLoading} onComplete={handlePreloaderComplete} />
      {children}
    </PreloaderContext.Provider>
  );
};
