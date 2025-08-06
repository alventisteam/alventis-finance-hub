import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <h1 className="text-2xl font-playfair font-bold text-primary">
              Alventis
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-accent transition-colors font-lato font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-accent transition-colors font-lato font-medium"
              >
                Diensten
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-accent transition-colors font-lato font-medium"
              >
                Over ons
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-foreground hover:text-accent transition-colors font-lato font-medium"
              >
                Referenties
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-foreground hover:text-accent transition-colors font-lato font-medium"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-accent transition-colors font-lato font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-lato font-medium"
            >
              Plan een gratis kennismaking
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-foreground hover:text-accent font-lato font-medium w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-foreground hover:text-accent font-lato font-medium w-full text-left"
              >
                Diensten
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-foreground hover:text-accent font-lato font-medium w-full text-left"
              >
                Over ons
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block px-3 py-2 text-foreground hover:text-accent font-lato font-medium w-full text-left"
              >
                Referenties
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block px-3 py-2 text-foreground hover:text-accent font-lato font-medium w-full text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-foreground hover:text-accent font-lato font-medium w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-lato font-medium w-full"
                >
                  Plan een gratis kennismaking
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