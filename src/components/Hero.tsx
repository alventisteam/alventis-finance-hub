import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center" role="banner">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/finance-consulting-office-belgium-2-optimized.webp"
          srcSet="/assets/finance-consulting-office-belgium-2-800w.webp 800w, /assets/finance-consulting-office-belgium-2-1200w.webp 1200w, /assets/finance-consulting-office-belgium-2-optimized.webp 1920w"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          alt="BTW-compliance kantoor België - finance procesoptimalisatie en digitalisering voor multinationals"
          className="w-full h-full object-cover"
          width="1920"
          height="1080"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          data-hero-image="true"
          style={{ contain: 'layout style paint', willChange: 'transform' }}
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-6 leading-tight">
          <span dangerouslySetInnerHTML={{ 
            __html: t('hero.title').replace(/(Multinationals?|Multinationales)/g, '<span class="text-warm">$1</span>')
          }} />
        </h1>
        
        <div className="hero-subtitle-critical text-xl sm:text-2xl font-lato font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          <p className="hidden-until-hydrated">
            {t('hero.subtitle')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4">
          <Button
            onClick={() => scrollToSection('contact')}
            variant="warm"
            size="lg"
            className="font-lato font-semibold text-xl px-12 py-6 rounded-xl"
          >
            {t('hero.cta1')}
          </Button>
          <Button
            onClick={() => scrollToSection('services')}
            variant="outline"
            size="lg"
            className="font-lato font-semibold text-xl px-12 py-6 border-2 border-warm text-warm hover:bg-warm/10 rounded-xl"
          >
            {t('hero.cta2')}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection('services')}
          className="text-white/80 hover:text-white transition-colors p-2"
          aria-label={t('hero.scroll')}
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;