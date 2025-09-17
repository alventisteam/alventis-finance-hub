import { CheckCircle, Award, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const expertise = [
    t('about.expertise.1'),
    t('about.expertise.2'),
    t('about.expertise.3'),
    t('about.expertise.4'),
    t('about.expertise.5')
  ];

  return (
    <section id="about" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-8">
              {t('about.title')}
            </h2>
            
            <p className="text-lg font-lato text-foreground mb-6 leading-relaxed">
              {t('about.intro1')}
            </p>
            
            <div className="bg-warm/10 p-6 rounded-xl border-l-4 border-warm mb-8">
              <p className="text-lg font-lato text-foreground font-medium italic leading-relaxed">
                {t('about.quote')}
              </p>
            </div>
            
            <p className="text-lg font-lato text-muted-foreground mb-8 leading-relaxed">
              {t('about.subtitle')}
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-playfair font-semibold text-primary mb-4">{t('about.expertise.title')}</h3>
              {expertise.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-warm flex-shrink-0" />
                  <span className="font-lato text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Elements & Photo */}
          <div className="space-y-8">
            {/* Professional Photo */}
            <div className="bg-card p-6 rounded-2xl shadow-soft">
              <img
                src="/lovable-uploads/d88621f2-ecdc-492b-b0be-04d9dbedadd0.png"
                alt="Finance optimalisatie consultant België - digitalisering finance processen multinationals"
                className="w-full h-64 object-cover rounded-xl mb-4"
                width="400"
                height="256"
              />
              <p className="font-lato text-sm text-muted-foreground text-center">
                {t('about.subtitle')}
              </p>
            </div>
            <div className="bg-sand/20 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-primary text-lg">
                    {t('about.proven.title')}
                  </h3>
                  <p className="font-lato text-muted-foreground">
                    {t('about.proven.subtitle')}
                  </p>
                </div>
              </div>
              <p className="font-lato text-foreground">
                {t('about.proven.text')}
              </p>
            </div>

            <div className="bg-warm/10 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-warm rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-warm-foreground" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-primary text-lg">
                    {t('about.results.title')}
                  </h3>
                  <p className="font-lato text-muted-foreground">
                    {t('about.results.subtitle')}
                  </p>
                </div>
              </div>
              <p className="font-lato text-foreground">
                {t('about.results.text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;