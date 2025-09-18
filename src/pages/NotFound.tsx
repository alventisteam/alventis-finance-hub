import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  // SSR safety check - only use useLocation on client side
  const location = typeof window !== 'undefined' ? useLocation() : { pathname: '/' };

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    // Set page title and meta tags
    document.title = "404 - Pagina niet gevonden | Alventis";
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.setAttribute('content', 'De gevraagde pagina werd niet gevonden. Terug naar de Alventis homepage voor BTW-compliance en finance optimalisatie diensten.');
    } else {
      metaDescription = document.createElement('meta') as HTMLMetaElement;
      metaDescription.name = 'description';
      metaDescription.content = 'De gevraagde pagina werd niet gevonden. Terug naar de Alventis homepage voor BTW-compliance en finance optimalisatie diensten.';
      document.head.appendChild(metaDescription);
    }
    
    // Set robots meta tag
    let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (metaRobots) {
      metaRobots.setAttribute('content', 'noindex, nofollow');
    } else {
      metaRobots = document.createElement('meta') as HTMLMetaElement;
      metaRobots.name = 'robots';
      metaRobots.content = 'noindex, nofollow';
      document.head.appendChild(metaRobots);
    }
    
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80">
      <div className="text-center max-w-2xl px-8 py-16">
        <h1 className="text-8xl md:text-9xl font-light text-white opacity-90 mb-8">
          404
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-playfair text-white mb-6">
          Pagina niet gevonden
        </h2>
        
        <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-md mx-auto">
          De gevraagde pagina bestaat niet of werd verplaatst.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a 
            href="/" 
            className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-medium hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            Naar Startpagina
          </a>
          <a 
            href="/#services" 
            className="inline-block bg-white/10 text-white border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all duration-300"
          >
            Onze Diensten
          </a>
          <a 
            href="/#contact" 
            className="inline-block bg-white/10 text-white border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all duration-300"
          >
            Contact
          </a>
        </div>
        
        <p className="text-sm text-white/60">
          Alventis - BTW-compliance & Finance Optimalisatie voor Multinationals
        </p>
      </div>
    </div>
  );
};

export default NotFound;
