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
import { Toaster } from "@/components/ui/toaster";
import { preloadImage, markCriticalResource } from "@/lib/performance";
import { setSEOTags } from "@/lib/seo";

const Index = () => {
  useEffect(() => {
    // Set meta description and other meta tags
    const metaTags = [
      { name: 'description', content: 'BTW-compliance en finance optimalisatie voor multinationals in België. 10+ jaar ervaring als finance controller. Specialist in btw-advies, digitalisering processen en audit-ready rapportering.' },
      { name: 'keywords', content: 'btw-compliance, finance optimalisatie, multinationals België, btw-advies, digitalisering finance processen, audit-ready rapportering, finance controller, business controller' },
      { name: 'author', content: 'Viktoria Oris - Alventis' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      
      // Open Graph tags
      { property: 'og:title', content: 'BTW-compliance & Finance Optimalisatie | Alventis - Specialist voor Multinationals in België' },
      { property: 'og:description', content: 'BTW-compliance en finance optimalisatie voor multinationals in België. 10+ jaar ervaring als finance controller. Specialist in btw-advies, digitalisering processen en audit-ready rapportering.' },
      { property: 'og:image', content: '/assets/alventis-og-image.webp' },
      { property: 'og:url', content: 'https://alventis.be/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'nl_BE' },
      
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'BTW-compliance & Finance Optimalisatie | Alventis - Specialist voor Multinationals in België' },
      { name: 'twitter:description', content: 'BTW-compliance en finance optimalisatie voor multinationals in België. 10+ jaar ervaring als finance controller. Specialist in btw-advies, digitalisering processen en audit-ready rapportering.' },
      { name: 'twitter:image', content: '/assets/alventis-og-image.webp' }
    ];
    
    metaTags.forEach(tag => {
      const attribute = tag.property ? 'property' : 'name';
      const existingTag = document.querySelector(`meta[${attribute}="${tag.property || tag.name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute(attribute, tag.property || tag.name);
        newTag.setAttribute('content', tag.content);
        document.head.appendChild(newTag);
      }
    });
    
    // Use centralized SEO utility
    setSEOTags({
      title: "BTW-compliance & Finance Optimalisatie | Alventis - Specialist voor Multinationals in België",
      description: "BTW-compliance en finance optimalisatie voor multinationals in België. 10+ jaar ervaring als finance controller. Specialist in btw-advies, digitalisering processen en audit-ready rapportering.",
      canonicalUrl: "https://alventis.be/",
      image: "/assets/alventis-og-image.webp",
      hasFAQ: true
    });
    
    // Preload critical images for LCP optimization
    preloadImage('/assets/finance-consulting-office-belgium-2.webp', 'high');
    preloadImage('/lovable-uploads/2389474d-0e93-43fc-9ce8-26e8816fa21e.png', 'high');
    
    // Mark critical images after component mount
    setTimeout(() => {
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
      <Toaster />
    </div>
  );
};

export default Index;
