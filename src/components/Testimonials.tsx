import { useLanguage } from "@/contexts/LanguageContext";
import TestimonialCard from "./TestimonialCard";
import buckmanLogo from "@/assets/testimonial-buckman.webp";
import laureltonLogo from "@/assets/testimonial-laurelton.webp";
import imperialLogo from "@/assets/testimonial-imperial-brands.webp";
import katoenLogo from "@/assets/testimonial-katoen-natie.webp";
import steelduxLogo from "@/assets/testimonial-steelduxx.webp";
import bestsellerLogo from "@/assets/testimonial-bestseller.webp";
import acpartnersLogo from "@/assets/testimonial-acpartners.webp";
import roberthalfLogo from "@/assets/testimonial-roberthalf.webp";

const Testimonials = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      logo: buckmanLogo,
      title: "Buckman",
      alt: "Buckman multinational chemical company logo - satisfied client of Alventis BTW compliance services",
      description: t('testimonials.buckman.description')
    },
    {
      logo: laureltonLogo,
      title: "Laurelton Diamonds",
      alt: "Laurelton Diamonds logo - client benefiting from Alventis finance process optimization services",
      description: t('testimonials.laurelton.description')
    },
    {
      logo: imperialLogo,
      title: "Imperial Brands",
      alt: "Imperial Brands tobacco company logo - international client receiving Alventis BTW advisory services",
      description: t('testimonials.imperial.description')
    },
    {
      logo: katoenLogo,
      title: "Katoen Natie",
      alt: "Katoen Natie - logistiek en fiscaliteit digitalisering finance klant",
      description: t('testimonials.katoen.description')
    },
    {
      logo: steelduxLogo,
      title: "Steelduxx",
      alt: "Steelduxx - staalhandel finance procesoptimalisatie Antwerpen klant",
      description: t('testimonials.steelduxx.description')
    },
    {
      logo: bestsellerLogo,
      title: "Bestseller",
      alt: "Bestseller modebedrijf - internationaal BTW-compliance digitalisering klant",
      description: t('testimonials.bestseller.description')
    },
    {
      logo: acpartnersLogo,
      title: "AC Partners",
      alt: "AC Partners IT-consultancy - software implementatie finance optimalisatie klant",
      description: t('testimonials.acpartners.description')
    },
    {
      logo: roberthalfLogo,
      title: "Robert Half",
      alt: "Robert Half staffing - finance consultancy procesoptimalisatie klant",
      description: t('testimonials.roberthalf.description')
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-secondary/20" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Professional Experience */}
        <div className="text-center">
          <h2 id="testimonials-heading" className="text-2xl font-playfair font-semibold text-primary mb-12 text-center">
            {t('testimonials.title')}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                logo={testimonial.logo}
                alt={testimonial.alt}
                title={testimonial.title}
                description={testimonial.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;