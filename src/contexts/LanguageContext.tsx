import { createContext, useContext, useState, useEffect, ReactNode, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export type Language = 'nl' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Lazy load translations to reduce initial bundle size
const loadTranslations = async (language: Language) => {
  switch (language) {
    case 'nl':
      const { nlTranslations } = await import('./translations/nl');
      return nlTranslations;
    case 'en':
      const { enTranslations } = await import('./translations/en');
      return enTranslations;
    case 'es':
      const { esTranslations } = await import('./translations/es');
      return esTranslations;
    default:
      const { nlTranslations: defaultTranslations } = await import('./translations/nl');
      return defaultTranslations;
  }
};

interface TranslationProviderProps {
  children: ReactNode;
  language: Language;
  translations: Record<string, string>;
}

const TranslationProvider = ({ children, language, translations }: TranslationProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(language);
  const [currentTranslations, setCurrentTranslations] = useState(translations);

  const setLanguage = async (newLanguage: Language) => {
    if (newLanguage !== currentLanguage) {
      const newTranslations = await loadTranslations(newLanguage);
      setCurrentTranslations(newTranslations);
      setCurrentLanguage(newLanguage);
    }
  };

  const t = (key: string): string => {
    return currentTranslations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language: currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [initialTranslations, setInitialTranslations] = useState<Record<string, string>>({});

  // Load default translations on mount
  useEffect(() => {
    loadTranslations('nl').then((translations) => {
      setInitialTranslations(translations);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col space-y-4 p-4">
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-64 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col space-y-4 p-4">
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    }>
      <TranslationProvider language="nl" translations={initialTranslations}>
        {children}
      </TranslationProvider>
    </Suspense>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};