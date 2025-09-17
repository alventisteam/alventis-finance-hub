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
import heroImage from "@/assets/hero-background-new.jpg";

const Index = () => {
  useEffect(() => {
    // Add canonical URL for homepage
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://alventis.be/');
    
    // Preload critical images for LCP optimization
    preloadImage(heroImage, 'high');
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
