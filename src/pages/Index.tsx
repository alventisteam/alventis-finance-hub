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

const Index = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = "BTW-compliance & Finance Optimalisatie voor Multinationals | Alventis";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '10+ jaar ervaring in btw-advies, finance procesoptimalisatie en audit-ready rapportering. Bespaar 50% tijd en blijf 100% compliant. Plan een gratis kennismaking.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.setAttribute('name', 'description');
      newMetaDescription.setAttribute('content', '10+ jaar ervaring in btw-advies, finance procesoptimalisatie en audit-ready rapportering. Bespaar 50% tijd en blijf 100% compliant. Plan een gratis kennismaking.');
      document.head.appendChild(newMetaDescription);
    }

    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: 'BTW-compliance & Finance Optimalisatie voor Multinationals | Alventis' },
      { property: 'og:description', content: '10+ jaar ervaring in btw-advies, finance procesoptimalisatie en audit-ready rapportering. Bespaar 50% tijd en blijf 100% compliant. Plan een gratis kennismaking.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://alventis.be/' },
      { property: 'og:site_name', content: 'Alventis' },
      { property: 'og:image', content: 'https://alventis.be/assets/finance-consulting-office-belgium-2.webp' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:locale', content: 'nl_BE' }
    ];

    ogTags.forEach(tag => {
      let existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('property', tag.property);
        newTag.setAttribute('content', tag.content);
        document.head.appendChild(newTag);
      }
    });

    // Add Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'BTW-compliance & Finance Optimalisatie voor Multinationals | Alventis' },
      { name: 'twitter:description', content: '10+ jaar ervaring in btw-advies, finance procesoptimalisatie en audit-ready rapportering. Bespaar 50% tijd en blijf 100% compliant. Plan een gratis kennismaking.' },
      { name: 'twitter:image', content: 'https://alventis.be/assets/finance-consulting-office-belgium-2.webp' },
      { name: 'twitter:site', content: '@alventis' },
      { name: 'twitter:creator', content: '@viktoria_oris' }
    ];

    twitterTags.forEach(tag => {
      let existingTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('name', tag.name);
        newTag.setAttribute('content', tag.content);
        document.head.appendChild(newTag);
      }
    });
    
    // Add canonical URL for homepage
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://alventis.be/');
    
    // Add JSON-LD Organization schema
    const existingJsonLd = document.querySelector('script[type="application/ld+json"]');
    if (!existingJsonLd) {
      const jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Alventis",
        "description": "BTW-compliance en finance optimalisatie voor multinationals in België. Specialist in btw-advies, digitalisering finance processen en audit-ready rapportering.",
        "url": "https://alventis.be",
        "logo": "https://alventis.be/favicon-optimized.webp",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+32478834323",
          "contactType": "customer service",
          "email": "viktoria@alventis.be",
          "availableLanguage": ["Dutch", "English", "Spanish"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bergstraat 39",
          "addressLocality": "Kluisbergen",
          "postalCode": "9690",
          "addressCountry": "BE"
        },
        "founder": {
          "@type": "Person",
          "name": "Viktoria Oris"
        },
        "areaServed": "Belgium",
        "serviceType": [
          "BTW-compliance advies",
          "Finance procesoptimalisatie", 
          "Digitalisering finance processen",
          "Audit-ready rapportering",
          "Projectbegeleiding finance transformaties"
        ]
      });
      document.head.appendChild(jsonLdScript);
    }
    
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
