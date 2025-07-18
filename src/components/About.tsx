import { CheckCircle, Award, Target } from "lucide-react";

const About = () => {
  const expertise = [
    "10+ jaar ervaring als finance & business controller in multinationals",
    "Btw-advies voor internationale structuren – specialist in Belgische regelgeving",
    "Begeleiding van finance transformaties & changetrajecten",
    "Procesoptimalisatie & digitalisering van finance-afdelingen",
    "Ervaren sparringpartner voor CFO's, controllers en tax leads"
  ];

  return (
    <section id="about" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-8">
              Over Alventis
            </h2>
            
            <p className="text-lg font-lato text-foreground mb-6 leading-relaxed">
              Als finance & business controller en projectmanager in internationale multinationals begrijp ik exact waar finance teams mee worstelen. Van eindeloze btw-verplichtingen tot manuele processen die vertragen en fouten veroorzaken.
            </p>
            
            <div className="bg-warm/10 p-6 rounded-xl border-l-4 border-warm mb-8">
              <p className="text-lg font-lato text-foreground font-medium italic leading-relaxed">
                "Na meer dan 10 jaar in de frontlinie van finance binnen multinationals, weet ik exact waar het spaak loopt. Mijn aanpak? Chaos eruit. Structuur erin. Je team werkt sneller, juister en met focus op waar het écht om draait: strategische impact."
              </p>
            </div>
            
            <p className="text-lg font-lato text-muted-foreground mb-8 leading-relaxed">
              Strategisch adviseur in finance optimalisatie en internationale btw-structuren
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-playfair font-semibold text-primary mb-4">Mijn expertise:</h3>
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
                alt="Professionele finance consultant - expert in fiscale vertegenwoordiging België"
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <p className="font-lato text-sm text-muted-foreground text-center">
                Strategisch adviseur in finance optimalisatie en internationale btw-structuren
              </p>
            </div>
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
                ik ken beide kanten van de finance wereld en weet exact wat werkt.
              </p>
            </div>

            <div className="bg-warm/10 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-warm rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-warm-foreground" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-primary text-lg">
                    Resultaatgericht
                  </h3>
                  <p className="font-lato text-muted-foreground">
                    Meetbare verbeteringen binnen 3 maanden
                  </p>
                </div>
              </div>
              <p className="font-lato text-foreground">
                Jij ziet direct resultaat: minder stress, snellere processen, 
                en eindelijk tijd voor strategisch werk dat écht impact heeft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;