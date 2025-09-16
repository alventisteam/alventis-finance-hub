import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe, Home } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LegalNotice = () => {
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    // Set page title and meta description
    document.title = t('legal.title');
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('legal.metaDescription'));
    }
    
    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/legal-notice');
  }, [t]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
              <Home className="h-5 w-5" />
              <span className="font-medium">{t('legal.backToHome')}</span>
            </Link>
            
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border z-50">
                <DropdownMenuItem 
                  onClick={() => setLanguage('nl')}
                  className={language === 'nl' ? 'bg-accent' : ''}
                >
                  Nederlands
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('en')}
                  className={language === 'en' ? 'bg-accent' : ''}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('es')}
                  className={language === 'es' ? 'bg-accent' : ''}
                >
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-[70ch] mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">{t('legal.title')}</h1>
            <p className="text-muted-foreground italic">{t('legal.lastUpdated')}</p>
          </header>

          <div className="space-y-8 text-foreground">
            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <div className="space-y-1">
                <p><strong>{t('legal.content.name')}</strong></p>
                <p>{t('legal.content.address')}</p>
                <p>{t('legal.content.city')}</p>
                <p>{t('legal.content.country')}</p>
                <p className="mt-4">E-mail: <a href={`mailto:${t('legal.content.email')}`} className="text-primary hover:underline">{t('legal.content.email')}</a></p>
                <p>Telefoon: <a href={`tel:${t('legal.content.phone')}`} className="text-primary hover:underline">{t('legal.content.phone')}</a></p>
                <p>BTW-nummer: <strong>{t('legal.content.vat')}</strong></p>
              </div>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <p>{t('legal.content.responsibility')}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;