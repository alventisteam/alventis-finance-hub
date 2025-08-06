import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const clientLogos = [
    "TechCorp International",
    "European Manufacturing",
    "Global Services BV",
    "Finance Solutions Ltd",
    "International Holdings"
  ];

  return (
    <section id="testimonials" className="py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Professional Experience */}
        <div className="text-center">
          <h3 className="text-2xl font-playfair font-semibold text-primary mb-12 text-center">
            Professionele Ervaring bij:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <img 
                    src="/lovable-uploads/098cdc8d-f6c6-45ef-bc12-aaa87fc4bd16.png" 
                    alt="Buckman logo" 
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
                <h4 className="font-playfair font-bold text-primary mb-2">Buckman</h4>
                <p className="font-lato text-muted-foreground text-sm">
                  Internationale chemie- en technologiepartner
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <img 
                    src="/lovable-uploads/4852a606-69ea-448a-a552-755511e08e27.png" 
                    alt="Laurelton Diamonds logo" 
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
                <h4 className="font-playfair font-bold text-primary mb-2">Laurelton Diamonds</h4>
                <p className="font-lato text-muted-foreground text-sm">
                  High-end diamantverwerking, dochter van Tiffany & Co.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <img 
                    src="/lovable-uploads/5c81a807-f80e-43dc-a419-49faf43cfb4a.png" 
                    alt="Imperial Brands logo" 
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
                <h4 className="font-playfair font-bold text-primary mb-2">Imperial Brands</h4>
                <p className="font-lato text-muted-foreground text-sm">
                  Internationaal tabak- en consumentengoederenbedrijf
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <img 
                    src="/lovable-uploads/bed311b4-e389-45f5-97cb-dbf86bb9a6a2.png" 
                    alt="Katoen Natie logo" 
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
                <h4 className="font-playfair font-bold text-primary mb-2">Katoen Natie</h4>
                <p className="font-lato text-muted-foreground text-sm">
                  Belgisch wereldspeler in logistiek en fiscaliteit
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <img 
                    src="/lovable-uploads/7f7f314b-0db8-4714-a3e4-9bc2ed4f72bd.png" 
                    alt="Steelduxx logo" 
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
                <h4 className="font-playfair font-bold text-primary mb-2">Steelduxx</h4>
                <p className="font-lato text-muted-foreground text-sm">
                  Antwerps bedrijf gespecialiseerd in staalhandel
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <img 
                    src="/lovable-uploads/764b7f97-8101-4216-af83-4fae4747c165.png" 
                    alt="Bestseller logo" 
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
                <h4 className="font-playfair font-bold text-primary mb-2">Bestseller</h4>
                <p className="font-lato text-muted-foreground text-sm">
                  Internationaal modebedrijf (o.a. Vero Moda, Jack & Jones)
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <img 
                    src="/lovable-uploads/8f4192f6-a279-421a-9749-a1985b7e3b12.png" 
                    alt="AC Partners logo" 
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
                <h4 className="font-playfair font-bold text-primary mb-2">AC Partners</h4>
                <p className="font-lato text-muted-foreground text-sm">
                  IT-consultancybedrijf gespecialiseerd in softwareontwikkeling, implementatie en integratie van IT-systemen
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <svg width="60" height="30" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="30" y="20" textAnchor="middle" fill="#0066cc" fontSize="14" fontWeight="bold">Robert</text>
                    <text x="70" y="20" textAnchor="middle" fill="#333" fontSize="14" fontWeight="normal">Half</text>
                    <rect x="10" y="25" width="80" height="2" fill="#0066cc"/>
                  </svg>
                </div>
                <h4 className="font-playfair font-bold text-primary mb-2">Robert Half</h4>
                <p className="font-lato text-muted-foreground text-sm">
                  Internationaal staffing & finance consultancybedrijf
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;