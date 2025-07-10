import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";

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
          Fiscale vertegenwoordiging & finance optimalisatie voor{" "}
          <span className="text-accent">multinationals</span> in België
        </h1>
        
        <p className="text-xl sm:text-2xl font-lato font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          Alventis helpt finance teams sneller, correct en digitaal compliant werken.
        </p>

        <Button
          onClick={() => scrollToSection('contact')}
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-lato font-semibold text-lg px-8 py-6 rounded-xl shadow-medium transition-all duration-300 hover:scale-105"
        >
          Plan een gratis kennismaking
        </Button>
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