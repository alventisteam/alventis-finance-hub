import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import CopyButton from "@/components/CopyButton";

const Contact = () => {
  const { t } = useLanguage();
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
      } else {
        toast({
          title: t('toast.error.title'),
          description: t('toast.error.description'),
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Formspree submit failed (Contact):', error);
      toast({
        title: t('toast.error.title'),
        description: t('toast.error.description'),
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      value: "+32 478 83 43 23",
      description: t('contact.phone.description')
    },
    {
      icon: Mail,
      title: t('contact.email'),
      value: "viktoria@alventis.be",
      description: t('contact.email.description')
    },
    {
      icon: MapPin,
      title: t('contact.location'),
      value: "Kluisbergen, België",
      description: t('contact.location.description')
    },
    {
      icon: Clock,
      title: t('contact.response_time'),
      value: t('contact.response_time.description').split(' ')[0] + ' ' + t('contact.response_time.description').split(' ')[1],
      description: t('contact.response_time.description').split(' ').slice(2).join(' ')
    }
  ];

  return (
    <>
      {/* Stel je vraag section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="/assets/modern-finance-building-400w.webp 400w"
              sizes="100vw"
            />
            <source
              media="(max-width: 1024px)"
              srcSet="/assets/modern-finance-building-600w.webp 600w"
              sizes="100vw"
            />
            <img
              src="/assets/modern-finance-building-800w.webp"
              srcSet="/assets/modern-finance-building-600w.webp 600w, /assets/modern-finance-building-800w.webp 800w, /assets/modern-finance-building-1200w.webp 1200w"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
              alt="Modern glass office building in Belgium representing Alventis finance consultancy for multinationals"
              className="w-full h-full object-cover"
              fetchPriority="high"
              width="800"
              height="600"
            />
          </picture>
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-lg sm:text-xl font-lato font-light mb-6 max-w-2xl mx-auto leading-relaxed">
            Heb je nog een andere vraag? We helpen je graag verder.
          </p>
          
          <Button
            onClick={() => {
              if (typeof window !== 'undefined' && typeof document !== 'undefined') {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
            variant="warm"
            size="lg"
            className="font-lato font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Stel je vraag
          </Button>
        </div>
      </section>

      <section id="contact" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl font-lato text-muted-foreground max-w-3xl mx-auto mb-4">
              {t('contact.subtitle')}
            </p>
            <p className="text-base font-lato text-accent font-medium">
              {t('contact.response')}
            </p>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <div>
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-primary mb-6">
                  {t('contact.form.title')}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block font-lato font-medium text-foreground mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="font-lato"
                        placeholder={t('contact.form.name.placeholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-lato font-medium text-foreground mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="font-lato"
                        placeholder={t('contact.form.email.placeholder')}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block font-lato font-medium text-foreground mb-2">
                      {t('contact.form.company')}
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="font-lato"
                      placeholder={t('contact.form.company.placeholder')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-lato font-medium text-foreground mb-2">
                      {t('contact.form.message')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="font-lato"
                      placeholder={t('contact.form.message.placeholder')}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="warm"
                    className="w-full font-lato font-semibold py-3 text-lg"
                  >
                    {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-primary mb-6">
                {t('contact.info.title')}
              </h3>
              
               <div className="grid grid-cols-1 gap-6">
                 {contactInfo.map((info, index) => (
                   <div key={index} className="flex items-start space-x-4">
                     <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                       <info.icon className="h-6 w-6 text-accent" />
                     </div>
                     <div className="flex-1">
                       <h4 className="font-lato font-semibold text-foreground mb-1">
                         {info.title}
                       </h4>
                       <div className="flex items-center gap-2">
                         <p className="font-lato text-primary font-medium">
                           {info.value}
                         </p>
                         {(info.title === t('contact.phone') || info.title === t('contact.email')) && (
                           <CopyButton 
                             text={info.value} 
                             label={`Copy ${info.title.toLowerCase()}`}
                           />
                         )}
                       </div>
                       <p className="font-lato text-muted-foreground text-sm">
                         {info.description}
                       </p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="bg-sand/20 p-8 rounded-2xl">
              <h3 className="font-playfair font-semibold text-primary text-xl mb-4">
                {t('contact.benefits.title')}
              </h3>
              <ul className="space-y-3 font-lato text-foreground">
                <li className="flex items-start">
                  <span className="text-warm mr-2 font-bold">✓</span>
                  {t('contact.benefit.1')}
                </li>
                <li className="flex items-start">
                  <span className="text-warm mr-2 font-bold">✓</span>
                  {t('contact.benefit.2')}
                </li>
                <li className="flex items-start">
                  <span className="text-warm mr-2 font-bold">✓</span>
                  {t('contact.benefit.3')}
                </li>
                <li className="flex items-start">
                  <span className="text-warm mr-2 font-bold">✓</span>
                  {t('contact.benefit.4')}
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-warm/10 rounded-lg border-l-4 border-warm">
                <p className="font-lato text-warm font-medium text-sm">
                  {t('contact.testimonial')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;