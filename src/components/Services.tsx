import { Shield, Cog, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
            Onze diensten
          </h2>
          <p className="text-xl font-lato text-muted-foreground max-w-3xl mx-auto">
            Van compliance stress naar strategische focus. Ontdek hoe jouw finance team 50% sneller kan werken, 
            100% compliant blijft en eindelijk tijd krijgt voor wat echt belangrijk is.
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
      </div>
    </section>
  );
};

export default Services;