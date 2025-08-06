import { Award, TrendingUp, Clock, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Expertise = () => {
  const results = [
    {
      icon: TrendingUp,
      title: "50% efficiëntere processen",
      description: "Multinationals die met ons werken, sluiten sneller af, maken minder fouten en winnen opnieuw tijd voor strategisch werk."
    },
    {
      icon: Clock,
      title: "Sterkere rapportering",
      description: "Van 3 weken naar 5 dagen - onze klanten ervaren dramatische verbeteringen in hun finance cyclus."
    },
    {
      icon: Target,
      title: "Meer grip op cijfers",
      description: "Real-time inzicht en geautomatiseerde processen zorgen voor volledige controle over je financiële data."
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-secondary/10 via-background to-secondary/20" role="region" aria-labelledby="expertise-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 id="expertise-heading" className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Bewezen Resultaten & Expertise BTW-compliance
          </h2>
          <p className="text-xl font-lato text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ontdek hoe Alventis finance teams helpt om hun doelen te bereiken – via gericht advies rond btw-compliance, digitalisering van finance processen en projectbegeleiding voor controllers en CFO's.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {results.map((result, index) => (
            <Card key={index} className="bg-card border border-border/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <result.icon className="h-8 w-8 text-warm" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-primary mb-4">
                  {result.title}
                </h3>
                <p className="font-lato text-muted-foreground leading-relaxed">
                  {result.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Expertise;