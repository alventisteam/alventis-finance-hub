import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // Ensure we're on the client side and DOM is ready
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    const scrollToElement = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
        return true;
      }
      return false;
    };

    // Try immediately first
    if (scrollToElement()) return;

    // If element not found, retry after a short delay (for hydration)
    setTimeout(() => {
      if (!scrollToElement()) {
        console.warn(`Element with id "${sectionId}" not found for scrolling`);
      }
    }, 100);
    
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      scrollToSection('home');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {location.pathname === '/' ? (
              <img 
                src="/assets/alventis-logo-160x40-2.webp" 
                alt="Alventis finance consultancy logo - BTW compliance and process optimization specialists" 
                className="h-10 w-auto cursor-pointer" 
                onClick={handleLogoClick}
                width="160"
                height="40"
                loading="eager"
                fetchPriority="high"
              />
            ) : (
              <Link to="/">
                <img 
                  src="/assets/alventis-logo-160x40-2.webp" 
                  alt="Alventis finance consultancy logo - BTW compliance and process optimization specialists" 
                  className="h-10 w-auto cursor-pointer" 
                  width="160"
                  height="40"
                  loading="eager"
                  fetchPriority="high"
                />
              </Link>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {location.pathname === '/' ? (
                <>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-foreground hover:text-accent transition-colors font-lato font-medium"
                  >
                    {t('nav.home')}
                  </button>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-foreground hover:text-accent transition-colors font-lato font-medium"
                  >
                    {t('nav.services')}
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-foreground hover:text-accent transition-colors font-lato font-medium"
                  >
                    {t('nav.about')}
                  </button>
                  <button
                    onClick={() => scrollToSection('testimonials')}
                    className="text-foreground hover:text-accent transition-colors font-lato font-medium"
                  >
                    {t('nav.testimonials')}
                  </button>
                  <button
                    onClick={() => scrollToSection('faq')}
                    className="text-foreground hover:text-accent transition-colors font-lato font-medium"
                  >
                    {t('nav.faq')}
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-foreground hover:text-accent transition-colors font-lato font-medium"
                  >
                    {t('nav.contact')}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    className="text-foreground hover:text-accent transition-colors font-lato font-medium"
                  >
                    {t('nav.home')}
                  </Link>
                  <Link
                    to="/#services"
                    className="text-foreground hover:text-accent transition-colors font-lato font-medium"
                  >
                    {t('nav.services')}
                  </Link>
                  <Link
                    to="/#about"
                    className="text-foreground hover:text-accent transition-colors font-lato font-medium"
                  >
                    {t('nav.about')}
                  </Link>
                  <Link
                    to="/#contact"
                    className="text-foreground hover:text-accent transition-colors font-lato font-medium"
                  >
                    {t('nav.contact')}
                  </Link>
                </>
              )}
              
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

          {/* CTA Button */}
          <div className="hidden md:block">
            {location.pathname === '/' ? (
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-lato font-medium"
              >
                {t('nav.cta')}
              </Button>
            ) : (
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-lato font-medium">
                <Link to="/#contact">{t('nav.cta')}</Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden navigation-mobile">
            <div className="px-4 pt-2 pb-3 space-y-1 bg-background border-t shadow-lg max-w-full">
              {location.pathname === '/' ? (
                <>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="block px-3 py-2 text-foreground hover:text-accent font-lato font-medium w-full text-left"
                  >
                    {t('nav.home')}
                  </button>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="block px-3 py-2 text-foreground hover:text-accent font-lato font-medium w-full text-left"
                  >
                    {t('nav.services')}
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="block px-3 py-2 text-foreground hover:text-accent font-lato font-medium w-full text-left"
                  >
                    {t('nav.about')}
                  </button>
                  <button
                    onClick={() => scrollToSection('testimonials')}
                    className="block px-3 py-2 text-foreground hover:text-accent font-lato font-medium w-full text-left"
                  >
                    {t('nav.testimonials')}
                  </button>
                  <button
                    onClick={() => scrollToSection('faq')}
                    className="block px-3 py-2 text-foreground hover:text-accent font-lato font-medium w-full text-left"
                  >
                    {t('nav.faq')}
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="block px-3 py-2 text-foreground hover:text-accent font-lato font-medium w-full text-left"
                  >
                    {t('nav.contact')}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    className="block px-3 py-2 text-foreground hover:text-accent font-lato font-medium w-full text-left"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.home')}
                  </Link>
                  <Link
                    to="/#services"
                    className="block px-3 py-2 text-foreground hover:text-accent font-lato font-medium w-full text-left"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.services')}
                  </Link>
                  <Link
                    to="/#contact"
                    className="block px-3 py-2 text-foreground hover:text-accent font-lato font-medium w-full text-left"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.contact')}
                  </Link>
                </>
              )}
              
              {/* Mobile Language Switcher */}
              <div className="px-3 py-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage('nl')}
                    className={`px-2 py-1 text-sm rounded ${language === 'nl' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
                  >
                    NL
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-1 text-sm rounded ${language === 'en' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('es')}
                    className={`px-2 py-1 text-sm rounded ${language === 'es' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
                  >
                    ES
                  </button>
                </div>
              </div>
              <div className="px-3 py-2">
                {location.pathname === '/' ? (
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-lato font-medium w-full"
                  >
                    {t('nav.cta')}
                  </Button>
                ) : (
                  <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-lato font-medium w-full">
                    <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>{t('nav.cta')}</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;