import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-background-new.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional corporate building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight">
          Advies in finance optimalisatie, btw-compliance en business control voor{" "}
          <span className="text-warm">multinationals</span> in België
        </h1>
        
        <p className="text-xl sm:text-2xl font-lato font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          Als ervaren finance en business controller help ik multinationals bij correcte rapportering, efficiënte processen en digitale finance flows. Zo werk je audit-proof, gestructureerd en met grip op je cijfers.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4">
          <Button
            onClick={() => scrollToSection('contact')}
            variant="warm"
            size="lg"
            className="font-lato font-semibold text-xl px-12 py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Plan een gratis kennismaking
          </Button>
          <Button
            onClick={() => scrollToSection('services')}
            variant="outline"
            size="lg"
            className="font-lato font-semibold text-xl px-12 py-6 border-2 border-warm text-warm hover:bg-warm/10 rounded-xl transition-all duration-300"
          >
            Bekijk onze diensten
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection('services')}
          className="text-white/80 hover:text-white transition-colors p-2"
          aria-label="Scroll naar diensten"
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;