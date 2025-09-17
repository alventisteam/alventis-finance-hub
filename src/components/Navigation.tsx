import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/2389474d-0e93-43fc-9ce8-26e8816fa21e.png" 
              alt="Alventis Logo" 
              className="h-10 w-auto cursor-pointer" 
              onClick={() => scrollToSection('home')}
              width="120"
              height="40"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
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
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-lato font-medium"
            >
              {t('nav.cta')}
            </Button>
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
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-lato font-medium w-full"
                >
                  {t('nav.cta')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;