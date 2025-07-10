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
    <section id="services" className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Onze diensten voor finance teams
          </h2>
          <p className="text-xl font-lato text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Van compliance stress naar strategische focus. Ontdek hoe jouw finance team 50% sneller kan werken, 
            100% compliant blijft en eindelijk tijd krijgt voor digitalisering van finance processen en strategische business partnering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border border-border/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
              <CardContent className="p-8 h-full">
                <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8 mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-8 text-center leading-tight">
                  {service.title}
                </h3>
                
                <div className="space-y-8">
                  <div className="border-l-4 border-slate-400 pl-6 py-2">
                    <h4 className="font-lato font-bold text-slate-600 mb-3 text-sm uppercase tracking-wide">Probleem</h4>
                    <p className="font-lato text-muted-foreground leading-relaxed">{service.problem}</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h4 className="font-lato font-bold text-primary mb-3 text-sm uppercase tracking-wide">Onze oplossing</h4>
                    <p className="font-lato text-foreground leading-relaxed">{service.solution}</p>
                  </div>
                  
                  <div className="border-l-4 border-emerald-500 pl-6 py-2">
                    <h4 className="font-lato font-bold text-emerald-600 mb-3 text-sm uppercase tracking-wide">Jouw voordeel</h4>
                    <p className="font-lato text-foreground font-semibold leading-relaxed">{service.result}</p>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <p className="font-lato text-slate-600 dark:text-slate-400 font-medium text-sm">
                      <span className="font-bold text-primary">Resultaat:</span> {service.example}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA na diensten */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20 p-12 rounded-3xl max-w-4xl mx-auto shadow-lg">
            <h3 className="text-3xl font-playfair font-bold text-foreground mb-6">
              Klaar om jouw finance team te transformeren?
            </h3>
            <p className="text-xl font-lato text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Plan een gratis kennismaking en ontdek hoe jouw team 50% sneller kan werken en 100% compliant blijft.
            </p>
            <Button 
              variant="default" 
              size="lg" 
              className="font-lato font-semibold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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