import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Wat is fiscale vertegenwoordiging en waarom heb ik dit nodig in België?",
      answer: "Fiscale vertegenwoordiging betekent dat wij als lokale partner volledig verantwoordelijk zijn voor jouw btw-verplichtingen in België. Dit is verplicht voor buitenlandse bedrijven en zorgt ervoor dat je 100% compliant bent zonder dat jouw finance team zich zorgen hoeft te maken over Belgische btw-regelgeving."
    },
    {
      question: "Hoeveel tijd kan digitalisering van finance processen mij besparen?",
      answer: "Onze klanten besparen gemiddeld 50% tijd op maandafsluitingen en rapportage. Dat betekent dat waar je finance team voorheen 10 dagen nodig had, dit nu binnen 5 dagen klaar is. Deze tijdsbesparing komt door slimme automatisering van handmatige processen en betere workflows."
    },
    {
      question: "Wat houdt projectbegeleiding voor controllers en CFO's precies in?",
      answer: "Wij begeleiden je finance team persoonlijk door elke stap van de transformatie. Van change management tot training van je medewerkers. Ons doel is 100% acceptatie van nieuwe processen binnen 3 maanden, zodat implementaties écht succesvol zijn."
    },
    {
      question: "Voor welke multinationals is Alventis geschikt?",
      answer: "Wij werken met finance teams van internationale bedrijven die actief zijn in België. Of je nu 50 of 5000 medewerkers hebt, als je team worstelt met compliance, handmatige processen of inefficiëntie, dan kunnen wij helpen. Onze expertise ligt vooral bij complexe btw-structuren en finance optimalisatie."
    },
    {
      question: "Hoe snel zie ik resultaten van finance optimalisatie?",
      answer: "Binnen de eerste maand zie je al verbeteringen in efficiency. Na 3 maanden zijn de nieuwe processen volledig geïmplementeerd en ervaar je de volledige tijdsbesparing van 50%. Voor fiscale vertegenwoordiging ben je direct compliant vanaf dag 1."
    },
    {
      question: "Wat kost fiscale vertegenwoordiging en finance optimalisatie?",
      answer: "De investering hangt af van de complexiteit van jouw situatie en het aantal processen dat we optimaliseren. Tijdens de gratis kennismaking bespreken we jouw specifieke behoeften en maken we een transparant voorstel. De ROI is altijd positief door de tijdsbesparing die je realiseert."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Veelgestelde vragen
          </h2>
          <p className="text-xl font-lato text-muted-foreground leading-relaxed">
            Alles wat je wilt weten over <strong>fiscale vertegenwoordiging België</strong>, 
            <strong>digitalisering van finance processen</strong> en <strong>projectbegeleiding voor controllers en CFO's</strong>
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-xl shadow-soft overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-secondary/20 transition-colors"
              >
                <h3 className="text-lg font-playfair font-semibold text-primary pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`h-5 w-5 text-warm transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="font-lato text-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-lato text-muted-foreground mb-6">
            Heb je nog een andere vraag? We helpen je graag verder.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-warm text-warm-foreground hover:bg-warm/90 font-lato font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
          >
            Stel je vraag
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;