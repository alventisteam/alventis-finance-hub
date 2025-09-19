import { useEffect, useLayoutEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { preloadImage, markCriticalResource } from "@/lib/performance";
import { setSEOTags } from "@/lib/seo";

const Index = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  // Handle hydration safely
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    // Only run after hydration is complete and in browser environment
    if (!isHydrated || typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }
    
    // Set additional meta tags not handled by centralized SEO utility
    const additionalMetaTags = [
      { name: 'keywords', content: 'btw-compliance, finance optimalisatie, multinationals België, btw-advies, digitalisering finance processen, audit-ready rapportering, finance controller, business controller' },
      { name: 'author', content: 'Viktoria Oris - Alventis' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ];
    
    try {
      additionalMetaTags.forEach(tag => {
        const existingTag = document.querySelector(`meta[name="${tag.name}"]`);
        if (existingTag) {
          existingTag.setAttribute('content', tag.content);
        } else {
          const newTag = document.createElement('meta');
          newTag.setAttribute('name', tag.name);
          newTag.setAttribute('content', tag.content);
          document.head.appendChild(newTag);
        }
      });
      
      // Use centralized SEO utility
      setSEOTags({
        title: "BTW-compliance & Finance Optimalisatie | Alventis België",
        description: "Specialist BTW-compliance en finance optimalisatie voor multinationals in België. 10 jaar ervaring, digitalisering processen, audit-ready rapportering.",
        canonicalUrl: "https://alventis.be/",
        image: "/assets/alventis-og-image.webp",
        hasFAQ: true
      });
      
      // Delay performance optimizations until after hydration
      setTimeout(() => {
        try {
          // Preload critical images for LCP optimization
          preloadImage('/assets/finance-consulting-office-belgium-2.webp', 'high');
          preloadImage('/lovable-uploads/2389474d-0e93-43fc-9ce8-26e8816fa21e.png', 'high');
          
          // Mark critical images using proper selector
          markCriticalResource('img[loading="eager"]');
        } catch (perfError) {
          console.warn('Performance optimization error:', perfError);
        }
      }, 200);
    } catch (error) {
      console.warn('Error during Index page initialization:', error);
    }
  }, [isHydrated]);
  return (
    <div className="min-h-screen">
      <Navigation />
      <main role="main">
        <Hero />
        <Services />
        <About />
        <Expertise />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
