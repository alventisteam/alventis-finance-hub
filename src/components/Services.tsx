import { Shield, Cog, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Fiscale vertegenwoordiging & compliance",
      problem: "Complexe btw-verplichtingen en risico's bij non-compliance",
      solution: "Volledige fiscale vertegenwoordiging en compliance monitoring",
      result: "100% compliant en audit-ready zonder zorgen"
    },
    {
      icon: Cog,
      title: "Digitalisering en optimalisatie van finance processen",
      problem: "Handmatige processen, fouten en inefficiëntie",
      solution: "Geautomatiseerde workflows en digitale optimalisatie",
      result: "50% tijdsbesparing en foutloos proces management"
    },
    {
      icon: Users,
      title: "Projectbegeleiding en changemanagement",
      problem: "Weerstand tegen verandering en mislukte implementaties",
      solution: "Persoonlijke begeleiding van controllers & CFO's",
      result: "Soepele implementatie met team buy-in en succes"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
            Onze diensten
          </h2>
          <p className="text-xl font-lato text-muted-foreground max-w-3xl mx-auto">
            Wij begeleiden finance teams in multinationals bij fiscale vertegenwoordiging, 
            optimalisatie en digitalisering. Zo blijf jij compliant, efficiënt en klaar voor audit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-6 mx-auto">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                
                <h3 className="text-xl font-playfair font-semibold text-primary mb-4 text-center">
                  {service.title}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-lato font-semibold text-foreground mb-2">Probleem:</h4>
                    <p className="font-lato text-muted-foreground text-sm">{service.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-lato font-semibold text-foreground mb-2">Onze oplossing:</h4>
                    <p className="font-lato text-muted-foreground text-sm">{service.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-lato font-semibold text-accent mb-2">Resultaat:</h4>
                    <p className="font-lato text-accent font-medium text-sm">{service.result}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;