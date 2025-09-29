import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getSEODataForRoute } from "@/lib/seo-data";
import { generateJSONLD } from "@/lib/seo";
import { 
  TrendingUp, 
  Shield, 
  Clock, 
  Target,
  CheckCircle, 
  Users, 
  FileCheck, 
  Calculator,
  BarChart3,
  Lightbulb,
  ArrowRight,
  Phone,
  Calendar
} from "lucide-react";

const Services = () => {
  const { t } = useLanguage();
  const seoData = getSEODataForRoute('/diensten');
  const structuredData = generateJSONLD(seoData || {
    title: "Finance Optimalisatie & BTW-compliance Diensten | Alventis",
    description: "Professionele BTW-compliance en finance optimalisatie diensten voor multinationals in België. 50% tijdsbesparing, 100% compliance garantie.",
    canonicalUrl: "https://alventis.be/diensten",
    hasFAQ: true
  });

  const benefits = [
    {
      icon: TrendingUp,
      title: t('services.benefits.efficiency.title'),
      description: t('services.benefits.efficiency.description')
    },
    {
      icon: Shield,
      title: t('services.benefits.compliance.title'),
      description: t('services.benefits.compliance.description')
    },
    {
      icon: Clock,
      title: t('services.benefits.time.title'),
      description: t('services.benefits.time.description')
    },
    {
      icon: Target,
      title: t('services.benefits.accuracy.title'),
      description: t('services.benefits.accuracy.description')
    }
  ];

  const services = [
    {
      title: t('services.packages.basic.title'),
      description: t('services.packages.basic.description'),
      features: [
        t('services.packages.basic.features.0'),
        t('services.packages.basic.features.1'),
        t('services.packages.basic.features.2'),
        t('services.packages.basic.features.3'),
        t('services.packages.basic.features.4')
      ],
      cta: t('services.packages.basic.cta')
    },
    {
      title: t('services.packages.premium.title'),
      description: t('services.packages.premium.description'),
      features: [
        t('services.packages.premium.features.0'),
        t('services.packages.premium.features.1'),
        t('services.packages.premium.features.2'),
        t('services.packages.premium.features.3'),
        t('services.packages.premium.features.4'),
        t('services.packages.premium.features.5')
      ],
      cta: t('services.packages.premium.cta'),
      highlighted: true
    },
    {
      title: t('services.packages.enterprise.title'),
      description: t('services.packages.enterprise.description'),
      features: [
        t('services.packages.enterprise.features.0'),
        t('services.packages.enterprise.features.1'),
        t('services.packages.enterprise.features.2'),
        t('services.packages.enterprise.features.3'),
        t('services.packages.enterprise.features.4'),
        t('services.packages.enterprise.features.5')
      ],
      cta: t('services.packages.enterprise.cta')
    }
  ];

  const processSteps = [
    {
      icon: Users,
      title: t('services.process.step1.title'),
      description: t('services.process.step1.description')
    },
    {
      icon: FileCheck,
      title: t('services.process.step2.title'),
      description: t('services.process.step2.description')
    },
    {
      icon: Calculator,
      title: t('services.process.step3.title'),
      description: t('services.process.step3.description')
    },
    {
      icon: BarChart3,
      title: t('services.process.step4.title'),
      description: t('services.process.step4.description')
    },
    {
      icon: Lightbulb,
      title: t('services.process.step5.title'),
      description: t('services.process.step5.description')
    }
  ];

  const kpis = [
    { label: t('services.kpis.time'), value: "50%" },
    { label: t('services.kpis.compliance'), value: "100%" },
    { label: t('services.kpis.implementation'), value: "3 " + t('services.kpis.months') },
    { label: t('services.kpis.satisfaction'), value: "98%" },
    { label: t('services.kpis.reduction'), value: "40%" }
  ];

  const faqs = Array.from({ length: 7 }, (_, i) => ({
    question: t(`services.faq.q${i + 1}.question`),
    answer: t(`services.faq.q${i + 1}.answer`)
  }));

  return (
    <>
      <Helmet>
        <title>{seoData?.title}</title>
        <meta name="description" content={seoData?.description} />
        <link rel="canonical" href={seoData?.canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              {t('services.hero.title')}
            </h1>
            <p className="font-lato text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              {t('services.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-lato font-semibold">
                <Calendar className="mr-2 h-5 w-5" />
                {t('services.hero.cta1')}
              </Button>
              <Button size="lg" variant="outline" className="font-lato font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="mr-2 h-5 w-5" />
                {t('services.hero.cta2')}
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
                {t('services.benefits.title')}
              </h2>
              <p className="font-lato text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('services.benefits.subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center border-border hover:shadow-soft transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <benefit.icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="font-playfair text-xl text-primary">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-lato text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services/Packages Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
                {t('services.packages.title')}
              </h2>
              <p className="font-lato text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('services.packages.subtitle')}
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className={`relative ${service.highlighted ? 'border-accent shadow-medium' : 'border-border'}`}>
                  {service.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold font-lato">
                        {t('services.packages.popular')}
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-playfair text-2xl text-primary">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="font-lato text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="font-lato text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full font-lato font-semibold" 
                      variant={service.highlighted ? "default" : "outline"}
                    >
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
                {t('services.process.title')}
              </h2>
              <p className="font-lato text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('services.process.subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-border transform translate-x-1/2 z-0" />
                  )}
                  <div className="relative z-10 mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="font-lato text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KPIs Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
                {t('services.kpis.title')}
              </h2>
              <p className="font-lato text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('services.kpis.subtitle')}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {kpis.map((kpi, index) => (
                <div key={index} className="bg-card border border-border rounded-lg px-6 py-4 text-center shadow-soft">
                  <div className="font-playfair text-2xl font-bold text-accent mb-1">
                    {kpi.value}
                  </div>
                  <div className="font-lato text-sm text-muted-foreground">
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
                {t('services.faq.title')}
              </h2>
              <p className="font-lato text-lg text-muted-foreground">
                {t('services.faq.subtitle')}
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="font-playfair text-left text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-lato text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-accent">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
              {t('services.finalCta.title')}
            </h2>
            <p className="font-lato text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
              {t('services.finalCta.subtitle')}
            </p>
            <Button size="lg" variant="secondary" className="font-lato font-semibold">
              <Calendar className="mr-2 h-5 w-5" />
              {t('services.finalCta.button')}
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;