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

const Privacy = () => {
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    // Set page title and meta description
    document.title = t('privacy.title');
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Privacybeleid voor deze website. Informatie over gegevensverwerking, cookies, rechten en beveiliging.');
    }
    
    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://alventis.be/privacy');
  }, [t]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
              <Home className="h-5 w-5" />
              <span className="font-medium">{t('privacy.backToHome')}</span>
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
            <h1 className="text-4xl font-bold text-foreground mb-2">{t('privacy.title')}</h1>
            <p className="text-muted-foreground italic">{t('privacy.lastUpdated')}</p>
          </header>

          <div className="space-y-8 text-foreground">
            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.section1.title')}</h2>
              <div className="space-y-1">
                <p><strong>{t('privacy.section1.content.name')}</strong></p>
                <p>{t('privacy.section1.content.address')}</p>
                <p>{t('privacy.section1.content.city')}</p>
                <p>{t('privacy.section1.content.country')}</p>
                <p>E-mail: <a href={`mailto:${t('privacy.section1.content.email')}`} className="text-primary hover:underline">{t('privacy.section1.content.email')}</a></p>
                <p>Telefoon: <a href={`tel:${t('privacy.section1.content.phone')}`} className="text-primary hover:underline">{t('privacy.section1.content.phone')}</a></p>
                <p>Btw-nummer: <strong>{t('privacy.section1.content.vat')}</strong></p>
              </div>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.section2.title')}</h2>
              <ul className="space-y-2 list-disc pl-6">
                {t('privacy.section2.items').split('|').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.section3.title')}</h2>
              <p className="mb-3">{t('privacy.section3.intro')}</p>
              <ul className="space-y-2 list-disc pl-6">
                {t('privacy.section3.items').split('|').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.section4.title')}</h2>
              <p className="mb-4">{t('privacy.section4.intro')}</p>
              
              <div className="mb-6">
                <p><strong>{t('privacy.section4.netlify.name')}</strong></p>
                <p>{t('privacy.section4.netlify.address')}</p>
                <p>Privacy: <a href={t('privacy.section4.netlify.privacy')} target="_blank" rel="noopener" className="text-primary hover:underline">{t('privacy.section4.netlify.privacy')}</a></p>
              </div>

              <div className="mb-6">
                <p><strong>{t('privacy.section4.github.name')}</strong></p>
                <p>{t('privacy.section4.github.address')}</p>
                <p>Privacy: <a href={t('privacy.section4.github.privacy')} target="_blank" rel="noopener" className="text-primary hover:underline">{t('privacy.section4.github.privacy')}</a></p>
              </div>

              <p className="mb-4">{t('privacy.section4.description')}</p>
              
              <p>{t('privacy.section4.agreement')}</p>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.section5.title')}</h2>
              <p className="mb-4">{t('privacy.section5.intro')}</p>
              
              <div className="mb-6">
                <p className="font-semibold mb-2">{t('privacy.section5.usage.title')}</p>
                <ul className="space-y-2 list-disc pl-6">
                  {t('privacy.section5.usage.items').split('|').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <p className="font-semibold mb-2">{t('privacy.section5.legal.title')}</p>
                <ul className="space-y-2 list-disc pl-6">
                  {t('privacy.section5.legal.items').split('|').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <p className="font-semibold mb-2">{t('privacy.section5.consent.title')}</p>
                <p>{t('privacy.section5.consent.description')}</p>
              </div>

              <div>
                <p className="font-semibold mb-2">{t('privacy.section5.retention.title')}</p>
                <p>{t('privacy.section5.retention.description')}</p>
              </div>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.section6.title')}</h2>
              <p className="mb-3">{t('privacy.section6.intro')}</p>
              <ul className="space-y-2 list-disc pl-6">
                {t('privacy.section6.items').split('|').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">{t('privacy.section6.contact')}</p>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.section7.title')}</h2>
              <p className="mb-4">{t('privacy.section7.intro')}</p>
              <p className="mb-2">{t('privacy.section7.google')}</p>
              <p>Privacy: <a href={t('privacy.section7.privacy')} target="_blank" rel="noopener" className="text-primary hover:underline">{t('privacy.section7.privacy')}</a></p>
              <p>Gegevensverwerking: <a href={t('privacy.section7.processing')} target="_blank" rel="noopener" className="text-primary hover:underline">{t('privacy.section7.processing')}</a></p>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.section8.title')}</h2>
              <p>{t('privacy.section8.description')}</p>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.section9.title')}</h2>
              <p>{t('privacy.section9.description')}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;