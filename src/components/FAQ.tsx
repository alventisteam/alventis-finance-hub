import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1')
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2')
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3')
    },
    {
      question: t('faq.question4'),
      answer: t('faq.answer4')
    }
  ];

  return (
    <section id="faq" className="py-32 bg-secondary/30" role="region" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            {t('faq.title')}
          </h2>
          <p className="text-xl font-lato text-muted-foreground leading-relaxed">
            {t('faq.subtitle.part1')} <strong>{t('faq.subtitle.part2')}</strong>, {' '}
            <strong>{t('faq.subtitle.part3')}</strong> en <strong>{t('faq.subtitle.part4')}</strong>
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

      </div>
    </section>
  );
};

export default FAQ;