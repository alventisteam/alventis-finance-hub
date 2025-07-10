import { CheckCircle, Award, Target } from "lucide-react";

const About = () => {
  const expertise = [
    "15+ jaar ervaring als controller in multinationals",
    "Gecertificeerd btw-specialist voor internationale structuren",
    "Projectmanager voor finance transformaties",
    "Expert in digitalisering van finance processen"
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/08164de1-05d7-409e-8e14-ee3262c17645.png"
          alt="Professional business consultant"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/85"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
              Over Alventis
            </h2>
            
            <p className="text-lg font-lato text-foreground mb-6 leading-relaxed">
              Als voormalig controller en projectmanager bij internationale multinationals 
              ken ik jouw frustraties. Te veel tijd aan compliance, handmatige processen die fouten opleveren, 
              en het gevoel dat je team nooit toekomt aan echte strategische work. Ik help je dit definitief op te lossen.
            </p>
            
            <p className="text-lg font-lato text-muted-foreground mb-8 leading-relaxed">
              Mijn missie? Jouw finance team bevrijden van administratieve stress zodat jullie kunnen doen 
              waar jullie écht waardevol zijn: strategische business partnering en groei realiseren. 
              Met 15+ jaar ervaring maak ik dit elke dag waar.
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

          <div className="space-y-8">{/* Removed professional image - using background instead */}

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