import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { preloadImage, markCriticalResource, optimizeLCP } from "@/lib/performance";
import { setSEOTags } from "@/lib/seo";

const Index = () => {
  useEffect(() => {
    // Set additional meta tags not handled by centralized SEO utility
    const additionalMetaTags = [
      { name: 'keywords', content: 'btw-compliance, finance optimalisatie, multinationals België, btw-advies, digitalisering finance processen, audit-ready rapportering, finance controller, business controller' },
      { name: 'author', content: 'Viktoria Oris - Alventis' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ];
    
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
      title: "BTW Expert & Finance Consultant België | Viktoria Oris | Alventis",
      description: "Viktoria Oris, BTW expert en finance consultant voor multinationals in België. 10+ jaar ervaring. Digitalisering, compliance & 50% tijdsbesparing op finance processen.",
      canonicalUrl: "https://alventis.be/",
      image: "/assets/alventis-og-image.webp",
      hasFAQ: true
    });
    
    // Preload critical images for LCP optimization
    preloadImage('/assets/finance-consulting-office-belgium-2.webp', 'high');
    preloadImage('/assets/alventis-logo-160x40-2.webp', 'high');
    
    // Optimize LCP detection
    setTimeout(() => {
      optimizeLCP();
      markCriticalResource('img[fetchpriority="high"]');
    }, 100);
  }, []);
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
      <ScrollToTop />
      <Toaster />
    </div>
  );
};

export default Index;
