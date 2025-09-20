import { useEffect, lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { LazySection } from "@/components/LazySection";
import { Skeleton } from "@/components/ui/skeleton";
import { preloadImage, markCriticalResource, optimizeLCP } from "@/lib/performance";
import { setSEOTags } from "@/lib/seo";

// Lazy load heavy components to reduce initial bundle size
const About = lazy(() => import("@/components/About"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));

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
        <LazySection fallback={<Skeleton className="h-96 w-full" />}>
          <Suspense fallback={<Skeleton className="h-96 w-full" />}>
            <About />
          </Suspense>
        </LazySection>
        <LazySection fallback={<Skeleton className="h-64 w-full" />}>
          <Suspense fallback={<Skeleton className="h-64 w-full" />}>
            <Expertise />
          </Suspense>
        </LazySection>
        <LazySection fallback={<Skeleton className="h-64 w-full" />}>
          <Suspense fallback={<Skeleton className="h-64 w-full" />}>
            <Testimonials />
          </Suspense>
        </LazySection>
        <LazySection fallback={<Skeleton className="h-80 w-full" />}>
          <Suspense fallback={<Skeleton className="h-80 w-full" />}>
            <FAQ />
          </Suspense>
        </LazySection>
        <LazySection fallback={<Skeleton className="h-96 w-full" />}>
          <Suspense fallback={<Skeleton className="h-96 w-full" />}>
            <Contact />
          </Suspense>
        </LazySection>
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster />
    </div>
  );
};

export default Index;
