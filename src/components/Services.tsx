import { Shield, Cog, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Fiscale vertegenwoordiging & compliance",
      problem: "Jouw team verliest tijd aan complexe btw-verplichtingen en leeft in constante angst voor compliance risico's en boetes.",
      solution: "Wij nemen de volledige fiscale vertegenwoordiging over en monitoren alle compliance aspecten proactief.",
      result: "Jij bent 100% compliant, audit-ready en kunt je volledig focussen op strategie in plaats van administratie.",
      example: "Multinational bespaart 20 uur per maand en slaagt voor elke audit."
    },
    {
      icon: Cog,
      title: "Digitalisering en optimalisatie van finance processen",
      problem: "Handmatige processen kosten teveel tijd, leiden tot fouten en maken jouw team ongelukkig en inefficiënt.",
      solution: "Wij automatiseren workflows, digitaliseren processen en optimaliseren jouw gehele finance operatie.",
      result: "Jij bespaart 50% tijd, elimineert fouten en krijgt real-time inzicht in je financiële prestaties.",
      example: "Finance team sluit nu binnen 3 dagen af in plaats van 10."
    },
    {
      icon: Users,
      title: "Projectbegeleiding en changemanagement",
      problem: "Veranderingen mislukken door weerstand van jouw team en gebrek aan ervaring met finance transformaties.",
      solution: "Wij begeleiden persoonlijk controllers en CFO's door elke stap van de transformatie.",
      result: "Jij krijgt volledige team buy-in, soepele implementatie en duurzame verandering.",
      example: "100% acceptatie bij finance team binnen 3 maanden."
    }
  ];

  return (
    <section id="services" className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Onze diensten voor finance teams
          </h2>
          <p className="text-xl font-lato text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Van compliance stress naar strategische focus. Ontdek hoe jouw finance team 50% sneller kan werken, 
            100% compliant blijft en eindelijk tijd krijgt voor digitalisering van finance processen en strategische business partnering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-6 mx-auto">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                
                <h3 className="text-xl font-playfair font-semibold text-primary mb-4 text-center">
                  {service.title}
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-destructive/10 p-4 rounded-lg border-l-4 border-destructive">
                    <h4 className="font-lato font-semibold text-destructive mb-2">Probleem:</h4>
                    <p className="font-lato text-foreground text-sm leading-relaxed">{service.problem}</p>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                    <h4 className="font-lato font-semibold text-primary mb-2">Onze oplossing:</h4>
                    <p className="font-lato text-foreground text-sm leading-relaxed">{service.solution}</p>
                  </div>
                  
                  <div className="bg-warm/10 p-4 rounded-lg border-l-4 border-warm">
                    <h4 className="font-lato font-semibold text-warm mb-2">Jouw voordeel:</h4>
                    <p className="font-lato text-foreground font-medium text-sm leading-relaxed">{service.result}</p>
                  </div>
                  
                  <div className="bg-accent/5 p-3 rounded-lg">
                    <p className="font-lato text-accent font-medium text-xs italic">
                      Praktijkvoorbeeld: {service.example}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA na diensten */}
        <div className="mt-20 text-center">
          <div className="bg-warm/10 p-12 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-playfair font-bold text-primary mb-6">
              Klaar om jouw finance team te transformeren?
            </h3>
            <p className="text-xl font-lato text-muted-foreground mb-8 max-w-2xl mx-auto">
              Plan een gratis kennismaking en ontdek hoe jouw team 50% sneller kan werken en 100% compliant blijft.
            </p>
            <Button 
              variant="warm" 
              size="lg" 
              className="font-lato font-semibold text-xl px-12 py-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Plan gratis kennismaking
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;