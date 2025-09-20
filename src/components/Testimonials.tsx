import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { memo } from "react";

const Testimonials = () => {
  const { t } = useLanguage();
  
  const clientLogos = [
    "TechCorp International",
    "European Manufacturing",
    "Global Services BV",
    "Finance Solutions Ltd",
    "International Holdings"
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
            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <img 
                    src="/lovable-uploads/098cdc8d-f6c6-45ef-bc12-aaa87fc4bd16.png" 
                    alt="Buckman multinational chemical company logo - satisfied client of Alventis BTW compliance services" 
                    className="max-w-full max-h-full object-contain p-2"
                    width="80"
                    height="80"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-playfair font-bold text-primary mb-2">Buckman</h3>
                <p className="font-lato text-muted-foreground text-sm">
                  {t('testimonials.buckman.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <img 
                    src="/lovable-uploads/4852a606-69ea-448a-a552-755511e08e27.png" 
                    alt="Laurelton Diamonds logo - client benefiting from Alventis finance process optimization services" 
                    className="max-w-full max-h-full object-contain p-2"
                    width="80"
                    height="80"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-playfair font-bold text-primary mb-2">Laurelton Diamonds</h3>
                <p className="font-lato text-muted-foreground text-sm">
                  {t('testimonials.laurelton.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <img 
                    src="/lovable-uploads/5c81a807-f80e-43dc-a419-49faf43cfb4a.png" 
                    alt="Imperial Brands tobacco company logo - international client receiving Alventis BTW advisory services" 
                    className="max-w-full max-h-full object-contain p-2"
                    width="80"
                    height="80"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-playfair font-bold text-primary mb-2">Imperial Brands</h3>
                <p className="font-lato text-muted-foreground text-sm">
                  {t('testimonials.imperial.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <img 
                    src="/lovable-uploads/bed311b4-e389-45f5-97cb-dbf86bb9a6a2.png" 
                    alt="Katoen Natie - logistiek en fiscaliteit digitalisering finance klant" 
                    className="max-w-full max-h-full object-contain p-2"
                    width="80"
                    height="80"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-playfair font-bold text-primary mb-2">Katoen Natie</h3>
                <p className="font-lato text-muted-foreground text-sm">
                  {t('testimonials.katoen.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                   <img 
                     src="/lovable-uploads/7f7f314b-0db8-4714-a3e4-9bc2ed4f72bd.png" 
                     alt="Steelduxx - staalhandel finance procesoptimalisatie Antwerpen klant" 
                     className="max-w-full max-h-full object-contain p-2"
                     width="80"
                     height="80"
                     loading="lazy"
                   />
                </div>
                <h3 className="font-playfair font-bold text-primary mb-2">Steelduxx</h3>
                <p className="font-lato text-muted-foreground text-sm">
                  {t('testimonials.steelduxx.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                   <img 
                     src="/lovable-uploads/764b7f97-8101-4216-af83-4fae4747c165.png" 
                     alt="Bestseller modebedrijf - internationaal BTW-compliance digitalisering klant" 
                     className="max-w-full max-h-full object-contain p-2"
                     width="80"
                     height="80"
                     loading="lazy"
                   />
                </div>
                <h3 className="font-playfair font-bold text-primary mb-2">Bestseller</h3>
                <p className="font-lato text-muted-foreground text-sm">
                  {t('testimonials.bestseller.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                   <img 
                     src="/lovable-uploads/8f4192f6-a279-421a-9749-a1985b7e3b12.png" 
                     alt="AC Partners IT-consultancy - software implementatie finance optimalisatie klant" 
                     className="max-w-full max-h-full object-contain p-2"
                     width="80"
                     height="80"
                     loading="lazy"
                   />
                </div>
                <h3 className="font-playfair font-bold text-primary mb-2">AC Partners</h3>
                <p className="font-lato text-muted-foreground text-sm">
                  {t('testimonials.acpartners.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                   <img 
                     src="/lovable-uploads/3d1a9afd-cc96-492b-be8b-73835e5c3a31.png" 
                     alt="Robert Half staffing - finance consultancy procesoptimalisatie klant" 
                     className="max-w-full max-h-full object-contain p-2"
                     width="80"
                     height="80"
                     loading="lazy"
                   />
                </div>
                <h3 className="font-playfair font-bold text-primary mb-2">Robert Half</h3>
                <p className="font-lato text-muted-foreground text-sm">
                  {t('testimonials.roberthalf.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);