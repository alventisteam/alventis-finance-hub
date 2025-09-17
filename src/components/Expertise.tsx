import { Award, TrendingUp, Clock, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Expertise = () => {
  const { t } = useLanguage();
  
  const results = [
    {
      icon: TrendingUp,
      title: t('expertise.result1.title'),
      description: t('expertise.result1.description')
    },
    {
      icon: Clock,
      title: t('expertise.result2.title'),
      description: t('expertise.result2.description')
    },
    {
      icon: Target,
      title: t('expertise.result3.title'),
      description: t('expertise.result3.description')
    }
  ];

  return (
    <section id="expertise" className="py-32 bg-gradient-to-br from-secondary/10 via-background to-secondary/20" role="region" aria-labelledby="expertise-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 id="procesoptimalisatie" className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            {t('expertise.title')}
          </h2>
          <p className="text-xl font-lato text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('expertise.subtitle')}
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