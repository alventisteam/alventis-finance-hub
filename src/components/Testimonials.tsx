import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Alventis heeft ons finance team getransformeerd van reactief naar proactief. Hun expertise in digitalisering heeft ons 40% tijd bespaard.",
      author: "Sarah Mitchell",
      position: "CFO",
      company: "TechCorp International",
      result: "40% tijdsbesparing in maandafsluiting"
    },
    {
      quote: "De fiscale vertegenwoordiging service is onmisbaar. Eindelijk kunnen we ons focussen op strategie zonder zorgen over compliance.",
      author: "Mark van Bergen",
      position: "Finance Director",
      company: "European Manufacturing",
      result: "100% compliance zonder stress"
    },
    {
      quote: "Professioneel, betrouwbaar en resultaatgericht. Alventis denkt mee en levert écht waarde voor finance teams.",
      author: "Lisa Janssen",
      position: "Controller",
      company: "Global Services BV",
      result: "Soepele audit zonder bevindingen"
    }
  ];

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
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Resultaten die spreken
          </h2>
          <p className="text-xl font-lato text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ontdek hoe Alventis finance teams heeft geholpen hun doelen te bereiken door <strong>fiscale vertegenwoordiging België</strong>, 
            <strong>digitalisering van finance processen</strong> en <strong>projectbegeleiding voor controllers en CFO's</strong>. 
            Echte resultaten van multinationals die nu 50% sneller werken.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-accent mb-4" />
                
                <blockquote className="font-lato text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="mb-3">
                    <div className="font-lato font-semibold text-primary">
                      {testimonial.author}
                    </div>
                    <div className="font-lato text-muted-foreground text-sm">
                      {testimonial.position}
                    </div>
                    <div className="font-lato text-muted-foreground text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                  
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <div className="font-lato font-semibold text-accent text-sm">
                      Resultaat:
                    </div>
                    <div className="font-lato text-foreground text-sm">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-playfair font-semibold text-primary mb-8">
            Vertrouwd door finance teams bij
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((logo, index) => (
              <div 
                key={index}
                className="bg-card px-6 py-4 rounded-lg shadow-soft min-w-[200px]"
              >
                <div className="font-lato font-semibold text-foreground text-center">
                  {logo}
                </div>
              </div>
            ))}
          </div>
          
          <p className="font-lato text-muted-foreground mt-8 text-sm">
            * Echte klanten, namen aangepast voor privacy
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mt-20">
          <h3 className="text-2xl font-playfair font-semibold text-primary mb-12 text-center">
            Professionele Ervaring bij:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <div className="text-primary font-bold text-lg">B</div>
                </div>
                <h4 className="font-playfair font-bold text-primary mb-2">Buckman</h4>
                <p className="font-lato text-muted-foreground text-sm">
                  Internationale chemie- en technologiepartner
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <div className="text-primary font-bold text-lg">LD</div>
                </div>
                <h4 className="font-playfair font-bold text-primary mb-2">Laurelton Diamonds</h4>
                <p className="font-lato text-muted-foreground text-sm">
                  High-end diamantverwerking, dochter van Tiffany & Co.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <div className="text-primary font-bold text-lg">R+</div>
                </div>
                <h4 className="font-playfair font-bold text-primary mb-2">Rizla+</h4>
                <p className="font-lato text-muted-foreground text-sm">
                  Internationaal bekend merk binnen FMCG
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <div className="text-primary font-bold text-lg">KN</div>
                </div>
                <h4 className="font-playfair font-bold text-primary mb-2">Katoen Natie</h4>
                <p className="font-lato text-muted-foreground text-sm">
                  Belgisch wereldspeler in logistiek en fiscaliteit
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <div className="text-primary font-bold text-lg">SD</div>
                </div>
                <h4 className="font-playfair font-bold text-primary mb-2">Steelduxx</h4>
                <p className="font-lato text-muted-foreground text-sm">
                  Antwerps bedrijf gespecialiseerd in staalhandel
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <div className="text-primary font-bold text-lg">BS</div>
                </div>
                <h4 className="font-playfair font-bold text-primary mb-2">Bestseller</h4>
                <p className="font-lato text-muted-foreground text-sm">
                  Internationaal modebedrijf (o.a. Vero Moda, Jack & Jones)
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <div className="text-accent font-bold text-lg">AC</div>
                </div>
                <h4 className="font-playfair font-bold text-primary mb-2">AC Partners</h4>
                <p className="font-lato text-muted-foreground text-sm">
                  IT-consultancybedrijf gespecialiseerd in softwareontwikkeling, implementatie en integratie van IT-systemen
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <div className="text-primary font-bold text-lg">RH</div>
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