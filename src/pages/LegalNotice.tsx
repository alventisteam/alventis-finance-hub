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
    document.title = t('legalNotice.title');
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('legalNotice.metaDescription'));
    }
    
    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://alventis.be/impressum');
  }, [t]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
              <Home className="h-5 w-5" />
              <span className="font-medium">{t('legalNotice.backToHome')}</span>
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
            <h1 className="text-4xl font-bold text-foreground mb-2">{t('legalNotice.title')}</h1>
          </header>

          <div className="space-y-12 text-foreground">
            {/* Company Information Section */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">{t('legalNotice.companyInfo.title')}</h2>
              
              <h3 className="text-lg font-medium text-foreground mb-4">{t('legalNotice.companyInfo.subtitle')}</h3>
              <div className="space-y-1 mb-8">
                <p><strong>{t('legalNotice.content.name')}</strong></p>
                <p>{t('legalNotice.content.address')}</p>
                <p>{t('legalNotice.content.city')}</p>
                <p>{t('legalNotice.content.country')}</p>
              </div>
            </section>
            
            {/* Contact Information Section */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">{t('legalNotice.contactInfo.title')}</h2>
              <div className="space-y-2">
                <p>E-mail: <a href={`mailto:${t('legalNotice.content.email')}`} className="text-primary hover:underline">{t('legalNotice.content.email')}</a></p>
                <p>Telefoon: <a href={`tel:${t('legalNotice.content.phone')}`} className="text-primary hover:underline">{t('legalNotice.content.phone')}</a></p>
                <p>BTW-nummer: <strong>{t('legalNotice.content.vat')}</strong></p>
              </div>
            </section>
            
            {/* Legal Information Section */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">{t('legalNotice.legal.title')}</h2>
              <h3 className="text-lg font-medium text-foreground mb-4">{t('legalNotice.legal.subtitle')}</h3>
              <p className="mb-6">{t('legalNotice.content.responsibility')}</p>
            </section>
            
            {/* Liability Section */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">{t('legalNotice.liability.title')}</h2>
              <p>{t('legalNotice.liability.content')}</p>
            </section>
            
            {/* Copyright Section */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">{t('legalNotice.copyright.title')}</h2>
              <p>{t('legalNotice.copyright.content')}</p>
            </section>
            
            {/* Privacy Section */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">{t('legalNotice.privacy.title')}</h2>
              <p>{t('legalNotice.privacy.content')}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;