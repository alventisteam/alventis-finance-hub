import { useEffect, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { setSEOTags } from "@/lib/seo";
import { preloadImage, markCriticalResource } from "@/lib/performance";
import { trackPerformanceMetrics, registerServiceWorker } from "@/lib/mobile-performance";
import { 
  LazyServices, 
  LazyAbout, 
  LazyTestimonials, 
  LazyFAQ, 
  LazyContact,
  ServicesLoading,
  AboutLoading,
  TestimonialsLoading,
  FAQLoading,
  ContactLoading
} from "@/components/LazyComponents";

const Index = () => {
  useEffect(() => {
    // Only run browser-specific code on the client side
    if (typeof window === 'undefined') return;
    
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
      title: "BTW-compliance & Finance Optimalisatie | Alventis België",
      description: "Specialist BTW-compliance en finance optimalisatie voor multinationals in België. 10 jaar ervaring, digitalisering processen, audit-ready rapportering.",
      canonicalUrl: "https://alventis.be/",
      image: "/assets/alventis-og-image.webp",
      hasFAQ: true
    });
    
    // Preload critical images for LCP optimization
    preloadImage('/assets/finance-consulting-office-belgium-2.webp', 'high');
    preloadImage('/assets/hero-mobile.webp', 'high');
    
    // Register service worker for caching
    registerServiceWorker();
    
    // Track performance metrics
    trackPerformanceMetrics();
    
    // Mark critical images after component mount
    setTimeout(() => {
      markCriticalResource('img[fetchpriority="high"]');
    }, 100);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={<ServicesLoading />}>
          <LazyServices />
        </Suspense>
        <Suspense fallback={<AboutLoading />}>
          <LazyAbout />
        </Suspense>
        <Expertise />
        <Suspense fallback={<TestimonialsLoading />}>
          <LazyTestimonials />
        </Suspense>
        <Suspense fallback={<FAQLoading />}>
          <LazyFAQ />
        </Suspense>
        <Suspense fallback={<ContactLoading />}>
          <LazyContact />
        </Suspense>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
