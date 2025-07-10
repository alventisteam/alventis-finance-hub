import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
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

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Bericht verzonden!",
        description: "We nemen binnen 24 uur contact met je op voor een gratis kennismaking.",
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefoon",
      value: "+32 (0)2 123 45 67",
      description: "Ma-vr 9:00-18:00"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@alventis.be",
      description: "We reageren binnen 4 uur"
    },
    {
      icon: MapPin,
      title: "Locatie",
      value: "Brussel, België",
      description: "Ook voor video calls"
    },
    {
      icon: Clock,
      title: "Responstijd",
      value: "Binnen 24 uur",
      description: "Voor alle vragen"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Plan een gratis kennismaking
          </h2>
          <p className="text-xl font-lato text-muted-foreground max-w-3xl mx-auto mb-4">
            Stop met stressen over compliance en inefficiëntie. Plan een gratis kennismaking 
            en ontdek hoe jouw finance team 50% sneller kan werken.
          </p>
          <p className="text-base font-lato text-accent font-medium">
            We reageren binnen 24 uur – vertrouwelijk en zonder verplichtingen
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-primary mb-6">
                  Plan een gratis kennismaking
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block font-lato font-medium text-foreground mb-2">
                        Naam *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="font-lato"
                        placeholder="Jouw naam"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block font-lato font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="font-lato"
                        placeholder="jouw@bedrijf.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block font-lato font-medium text-foreground mb-2">
                      Bedrijf
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="font-lato"
                      placeholder="Jouw bedrijf"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-lato font-medium text-foreground mb-2">
                      Bericht
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="font-lato"
                      placeholder="Vertel ons over jouw uitdagingen of vragen..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="warm"
                    className="w-full font-lato font-semibold py-3 text-lg"
                  >
                    {isSubmitting ? "Verzenden..." : "Plan gratis kennismaking"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-primary mb-6">
                Contact informatie
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-lato font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="font-lato text-primary font-medium">
                        {info.value}
                      </p>
                      <p className="font-lato text-muted-foreground text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sand/20 p-8 rounded-2xl">
              <h4 className="font-playfair font-semibold text-primary text-xl mb-4">
                Wat levert dit jou op?
              </h4>
              <ul className="space-y-3 font-lato text-foreground">
                <li className="flex items-start">
                  <span className="text-warm mr-2 font-bold">✓</span>
                  50% tijdsbesparing in maandafsluiting en rapportage
                </li>
                <li className="flex items-start">
                  <span className="text-warm mr-2 font-bold">✓</span>
                  100% compliance zonder stress of audit-zorgen
                </li>
                <li className="flex items-start">
                  <span className="text-warm mr-2 font-bold">✓</span>
                  Meer tijd voor strategische business partnering
                </li>
                <li className="flex items-start">
                  <span className="text-warm mr-2 font-bold">✓</span>
                  Gelukkiger finance team dat zich kan focussen
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-warm/10 rounded-lg border-l-4 border-warm">
                <p className="font-lato text-warm font-medium text-sm">
                  "Binnen 3 maanden zul je merken dat jouw finance team eindelijk kan doen waar ze goed in zijn: 
                  strategische ondersteuning in plaats van administratief geregel."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;