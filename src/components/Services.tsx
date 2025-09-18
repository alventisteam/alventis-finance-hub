import { Shield, Cog, Users, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('company', formData.company);
      data.append('message', formData.message);

      const response = await fetch('https://formspree.io/f/mqabrqyj', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data,
        mode: 'cors'
      });

      if (response.ok) {
        toast({
          title: t('toast.success.title'),
          description: t('toast.success.description'),
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          message: ""
        });
        setIsModalOpen(false);
      } else {
        toast({
          title: t('toast.error.title'),
          description: t('toast.error.description'),
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Formspree submit failed (Services):', error);
      toast({
        title: t('toast.error.title'),
        description: t('toast.error.description'),
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  const services = [
    {
      icon: Shield,
      title: t('services.service1.title'),
      problem: t('services.service1.problem'),
      solution: t('services.service1.solution'),
      result: t('services.service1.result'),
      example: t('services.service1.example')
    },
    {
      icon: Cog,
      title: t('services.service2.title'),
      problem: t('services.service2.problem'),
      solution: t('services.service2.solution'),
      result: t('services.service2.result'),
      example: t('services.service2.example')
    },
    {
      icon: Users,
      title: t('services.service3.title'),
      problem: t('services.service3.problem'),
      solution: t('services.service3.solution'),
      result: t('services.service3.result'),
      example: t('services.service3.example')
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background" role="region" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 id="services-heading" className="text-5xl md:text-7xl font-playfair font-bold text-foreground mb-8">
            {t('services.title')}
          </h2>
          <p className="text-2xl font-lato text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Card key={index} className="relative bg-gradient-to-br from-card via-card to-card/80 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group overflow-hidden">
              {/* Gradient overlay for modern finance look */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-warm/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardContent className="relative p-12 h-full text-center">
                <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="h-12 w-12 text-white" />
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-6 leading-tight">
                  {service.title}
                </h3>
                
                {/* Single powerful value proposition */}
                <div className="space-y-6">
                  {index === 0 && (
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-xl border border-primary/20">
                      <div className="text-6xl font-bold text-primary mb-4">100%</div>
                      <p className="text-xl font-lato text-foreground font-semibold mb-4">BTW Compliance</p>
                      <p className="text-lg font-lato text-muted-foreground leading-relaxed">
                        Volledige rust en zekerheid. Audit-ready processen en proactieve monitoring voor multinationals in België.
                      </p>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="bg-gradient-to-r from-warm/10 to-warm/5 p-8 rounded-xl border border-warm/20">
                      <div className="text-6xl font-bold text-warm mb-4">50%</div>
                      <p className="text-xl font-lato text-foreground font-semibold mb-4">Snellere Processen</p>
                      <p className="text-lg font-lato text-muted-foreground leading-relaxed">
                        Van 10 naar 5 dagen maandafsluiting. Automatisering en digitalisering van je gehele finance operatie.
                      </p>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-8 rounded-xl border border-accent/20">
                      <div className="text-6xl font-bold text-accent mb-4">∞</div>
                      <p className="text-xl font-lato text-foreground font-semibold mb-4">Strategisch Partnership</p>
                      <p className="text-lg font-lato text-muted-foreground leading-relaxed">
                        Persoonlijke begeleiding van controllers en CFO's. Duurzame transformatie met volledige team buy-in.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA na diensten */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20 p-12 rounded-3xl max-w-4xl mx-auto shadow-lg">
            <h3 className="text-3xl font-playfair font-bold text-foreground mb-6">
              {t('services.cta.title')}
            </h3>
            <p className="text-xl font-lato text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('services.cta.subtitle')}
            </p>
            <Button 
              variant="default" 
              size="lg" 
              className="font-lato font-semibold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => setIsModalOpen(true)}
            >
              {t('services.cta.button')}
            </Button>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="bg-card rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto mx-4">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-playfair font-bold text-foreground">
                  {t('services.modal.title')}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsModalOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-lato font-semibold text-foreground">
                      {t('services.form.name')} *
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder={t('services.form.name.placeholder')}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-lato font-semibold text-foreground">
                      {t('services.form.email')} *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder={t('services.form.email.placeholder')}
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-sm font-lato font-semibold text-foreground">
                      {t('services.form.company')}
                    </Label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder={t('services.form.company.placeholder')}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-lato font-semibold text-foreground">
                      {t('services.form.message')}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder={t('services.form.message.placeholder')}
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1"
                  >
                    {t('services.form.cancel')}
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    {isSubmitting ? t('services.form.submitting') : t('services.form.submit')}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;