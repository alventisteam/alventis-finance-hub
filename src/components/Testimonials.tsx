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
    <section id="testimonials" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
            Resultaten die spreken
          </h2>
          <p className="text-xl font-lato text-muted-foreground max-w-3xl mx-auto">
            Ontdek hoe Alventis finance teams heeft geholpen hun doelen te bereiken 
            en hun processen te optimaliseren.
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
      </div>
    </section>
  );
};

export default Testimonials;