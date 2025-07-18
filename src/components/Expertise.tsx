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
    <section className="py-32 bg-gradient-to-br from-secondary/10 via-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Expertise & Resultaten
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

        <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20 p-12 rounded-3xl">
          <div className="text-center">
            <div className="w-20 h-20 bg-warm/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Award className="h-10 w-10 text-warm" />
            </div>
            <h3 className="text-3xl font-playfair font-bold text-primary mb-6">
              Resultaat: tot 50% efficiëntere processen
            </h3>
            <p className="text-xl font-lato text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Multinationals die met ons werken, sluiten sneller af, maken minder fouten en winnen opnieuw tijd voor strategisch werk. Sterkere rapportering en meer grip op cijfers – dat is wat je krijgt.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="bg-warm/10 p-6 rounded-xl border border-warm/20">
                <div className="text-3xl font-playfair font-bold text-warm mb-2">3-5</div>
                <div className="font-lato text-foreground font-medium">dagen</div>
                <div className="font-lato text-muted-foreground text-sm">in plaats van 3 weken</div>
              </div>
              <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">100%</div>
                <div className="font-lato text-foreground font-medium">compliant</div>
                <div className="font-lato text-muted-foreground text-sm">audit-ready</div>
              </div>
              <div className="bg-accent/10 p-6 rounded-xl border border-accent/20">
                <div className="text-3xl font-playfair font-bold text-accent mb-2">50%</div>
                <div className="font-lato text-foreground font-medium">tijdsbesparing</div>
                <div className="font-lato text-muted-foreground text-sm">op maandafsluitingen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;