import { CheckCircle, Award, Target } from "lucide-react";

const About = () => {
  const expertise = [
    "15+ jaar ervaring als controller in multinationals",
    "Gecertificeerd btw-specialist voor internationale structuren",
    "Projectmanager voor finance transformaties",
    "Expert in digitalisering van finance processen"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
              Over Alventis
            </h2>
            
            <p className="text-lg font-lato text-foreground mb-6 leading-relaxed">
              Als voormalig controller en projectmanager bij internationale multinationals 
              begrijp ik de dagelijkse uitdagingen van finance teams. Van complexe btw-verplichtingen 
              tot inefficiënte processen – ik help je deze obstakels om te zetten in competitieve voordelen.
            </p>
            
            <p className="text-lg font-lato text-muted-foreground mb-8 leading-relaxed">
              Mijn missie is simpel: finance teams helpen focussen op strategie in plaats van 
              administratie. Door slimme digitalisering en betrouwbare compliance ondersteuning 
              kunnen controllers en CFO's weer doen waar ze goed in zijn.
            </p>

            <div className="space-y-3">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-lato text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Elements */}
          <div className="space-y-8">
            <div className="bg-sand/20 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-primary text-lg">
                    Bewezen expertise
                  </h3>
                  <p className="font-lato text-muted-foreground">
                    15+ jaar ervaring in finance
                  </p>
                </div>
              </div>
              <p className="font-lato text-foreground">
                Van hands-on controller tot strategisch adviseur – 
                ik ken beide kanten van de finance wereld.
              </p>
            </div>

            <div className="bg-primary/5 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-primary text-lg">
                    Resultaatgericht
                  </h3>
                  <p className="font-lato text-muted-foreground">
                    Focus op meetbare verbeteringen
                  </p>
                </div>
              </div>
              <p className="font-lato text-foreground">
                Elke samenwerking resulteert in concrete tijdsbesparing, 
                minder risico's en meer focus op strategie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;