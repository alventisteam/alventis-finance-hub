import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'nl' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  nl: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Diensten',
    'nav.about': 'Over ons',
    'nav.testimonials': 'Referenties',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cta': 'Plan een gratis kennismaking',
    
    // Hero Section
    'hero.title': 'BTW-compliance & Finance Optimalisatie voor Multinationals in België',
    'hero.subtitle': '10+ jaar ervaring als finance en business controller. Expertise in btw-advies, digitalisering finance processen en audit-ready rapportering voor internationale bedrijven zoals Buckman, Katoen Natie en Imperial Brands.',
    'hero.cta1': 'Plan een gratis kennismaking',
    'hero.cta2': 'Bekijk onze diensten',
    'hero.scroll': 'Scroll naar diensten',
    
    // About Section
    'about.title': 'Over Alventis',
    'about.intro1': 'Als finance & business controller en projectmanager in internationale multinationals begrijp ik exact waar finance teams mee worstelen. Van eindeloze btw-verplichtingen tot manuele processen die vertragen en fouten veroorzaken.',
    'about.quote': '"Na meer dan 10 jaar in de frontlinie van finance binnen multinationals, weet ik exact waar het spaak loopt. Mijn aanpak? Chaos eruit. Structuur erin. Je team werkt sneller, juister en met focus op waar het écht om draait: strategische impact."',
    'about.subtitle': 'Strategisch adviseur in finance optimalisatie en internationale btw-structuren',
    'about.expertise.title': 'Mijn expertise:',
    'about.expertise.1': '10+ jaar ervaring als finance & business controller in multinationals',
    'about.expertise.2': 'Btw-advies voor internationale structuren – specialist in Belgische regelgeving',
    'about.expertise.3': 'Begeleiding van finance transformaties & changetrajecten',
    'about.expertise.4': 'Procesoptimalisatie & digitalisering van finance-afdelingen',
    'about.expertise.5': 'Ervaren sparringpartner voor CFO\'s, controllers en tax leads',
    'about.proven.title': 'Bewezen expertise',
    'about.proven.subtitle': '10+ jaar ervaring in finance',
    'about.proven.text': 'Van hands-on controller tot strategisch adviseur – ik ken beide kanten van de finance wereld en weet exact wat werkt.',
    'about.results.title': 'Resultaatgericht',
    'about.results.subtitle': 'Meetbare verbeteringen binnen 3 maanden',
    'about.results.text': 'Jij ziet direct resultaat: minder stress, snellere processen, en eindelijk tijd voor strategisch werk dat écht impact heeft.',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Stop met stressen over compliance en inefficiëntie. Plan een gratis kennismaking en ontdek hoe jouw finance team 50% sneller kan werken.',
    'contact.response': 'We reageren binnen 24 uur – vertrouwelijk en zonder verplichtingen',
    'contact.form.title': 'Plan een gratis kennismaking',
    'contact.form.name': 'Naam',
    'contact.form.email': 'Email',
    'contact.form.company': 'Bedrijf',
    'contact.form.message': 'Bericht',
    'contact.form.name.placeholder': 'Jouw naam',
    'contact.form.email.placeholder': 'jouw@bedrijf.com',
    'contact.form.company.placeholder': 'Jouw bedrijf',
    'contact.form.message.placeholder': 'Vertel ons over jouw uitdagingen of vragen...',
    'contact.form.submit': 'Plan gratis kennismaking',
    'contact.form.submitting': 'Verzenden...',
    'contact.info.title': 'Contact informatie',
    'contact.phone': 'Telefoon',
    'contact.email': 'Email',
    'contact.location': 'Locatie',
    'contact.response_time': 'Responstijd',
    'contact.phone.description': 'Ma-vr 9:00-18:00',
    'contact.email.description': 'We reageren binnen 4 uur',
    'contact.location.description': 'Ook voor videocalls',
    'contact.response_time.description': 'Voor alle vragen',
    'contact.benefits.title': 'Wat levert dit jou op?',
    'contact.benefit.1': '50% tijdsbesparing in maandafsluiting en rapportage',
    'contact.benefit.2': '100% compliance zonder stress of audit-zorgen',
    'contact.benefit.3': 'Meer tijd voor strategische business partnering',
    'contact.benefit.4': 'Gelukkiger finance team dat zich kan focussen',
    'contact.testimonial': '"Binnen 3 maanden zul je merken dat jouw finance team eindelijk kan doen waar ze goed in zijn: strategische ondersteuning in plaats van administratief geregel."',
    
    // Toast messages
    'toast.success.title': 'Bericht verzonden!',
    'toast.success.description': 'We nemen binnen 24 uur contact met je op voor een gratis kennismaking.',
    'toast.error.title': 'Er is iets misgegaan!',
    'toast.error.description': 'Probeer het later opnieuw of stuur een mail naar viktoria@alventis.be.',
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.testimonials': 'References',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cta': 'Schedule a free consultation',
    
    // Hero Section
    'hero.title': 'VAT Compliance & Finance Optimization for Multinationals in Belgium',
    'hero.subtitle': '10+ years of experience as finance and business controller. Expertise in VAT advice, finance process digitalization and audit-ready reporting for international companies like Buckman, Katoen Natie and Imperial Brands.',
    'hero.cta1': 'Schedule a free consultation',
    'hero.cta2': 'View our services',
    'hero.scroll': 'Scroll to services',
    
    // About Section
    'about.title': 'About Alventis',
    'about.intro1': 'As a finance & business controller and project manager in international multinationals, I understand exactly what finance teams struggle with. From endless VAT obligations to manual processes that slow down and cause errors.',
    'about.quote': '"After more than 10 years on the front lines of finance in multinationals, I know exactly where things go wrong. My approach? Chaos out. Structure in. Your team works faster, more accurately and focuses on what really matters: strategic impact."',
    'about.subtitle': 'Strategic advisor in finance optimization and international VAT structures',
    'about.expertise.title': 'My expertise:',
    'about.expertise.1': '10+ years of experience as finance & business controller in multinationals',
    'about.expertise.2': 'VAT advice for international structures – specialist in Belgian regulations',
    'about.expertise.3': 'Guidance of finance transformations & change processes',
    'about.expertise.4': 'Process optimization & digitalization of finance departments',
    'about.expertise.5': 'Experienced sparring partner for CFOs, controllers and tax leads',
    'about.proven.title': 'Proven expertise',
    'about.proven.subtitle': '10+ years of experience in finance',
    'about.proven.text': 'From hands-on controller to strategic advisor – I know both sides of the finance world and know exactly what works.',
    'about.results.title': 'Results-oriented',
    'about.results.subtitle': 'Measurable improvements within 3 months',
    'about.results.text': 'You see immediate results: less stress, faster processes, and finally time for strategic work that truly makes an impact.',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Stop stressing about compliance and inefficiency. Schedule a free consultation and discover how your finance team can work 50% faster.',
    'contact.response': 'We respond within 24 hours – confidential and without obligations',
    'contact.form.title': 'Schedule a free consultation',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.message': 'Message',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email.placeholder': 'your@company.com',
    'contact.form.company.placeholder': 'Your company',
    'contact.form.message.placeholder': 'Tell us about your challenges or questions...',
    'contact.form.submit': 'Schedule free consultation',
    'contact.form.submitting': 'Sending...',
    'contact.info.title': 'Contact information',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.response_time': 'Response time',
    'contact.phone.description': 'Mon-Fri 9:00-18:00',
    'contact.email.description': 'We respond within 4 hours',
    'contact.location.description': 'Also for video calls',
    'contact.response_time.description': 'For all questions',
    'contact.benefits.title': 'What does this deliver for you?',
    'contact.benefit.1': '50% time savings in month-end closing and reporting',
    'contact.benefit.2': '100% compliance without stress or audit concerns',
    'contact.benefit.3': 'More time for strategic business partnering',
    'contact.benefit.4': 'Happier finance team that can focus',
    'contact.testimonial': '"Within 3 months you will notice that your finance team can finally do what they are good at: strategic support instead of administrative hassle."',
    
    // Toast messages
    'toast.success.title': 'Message sent!',
    'toast.success.description': 'We will contact you within 24 hours for a free consultation.',
    'toast.error.title': 'Something went wrong!',
    'toast.error.description': 'Please try again later or send an email to viktoria@alventis.be.',
  },
  
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Acerca de',
    'nav.testimonials': 'Referencias',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contacto',
    'nav.cta': 'Programar consulta gratuita',
    
    // Hero Section
    'hero.title': 'Cumplimiento de IVA y Optimización Financiera para Multinacionales en Bélgica',
    'hero.subtitle': 'Más de 10 años de experiencia como controlador financiero y de negocios. Experiencia en asesoramiento de IVA, digitalización de procesos financieros e informes listos para auditoría para empresas internacionales como Buckman, Katoen Natie e Imperial Brands.',
    'hero.cta1': 'Programar consulta gratuita',
    'hero.cta2': 'Ver nuestros servicios',
    'hero.scroll': 'Desplazarse a servicios',
    
    // About Section
    'about.title': 'Acerca de Alventis',
    'about.intro1': 'Como controlador financiero y de negocios y gerente de proyectos en multinacionales internacionales, entiendo exactamente con qué luchan los equipos financieros. Desde obligaciones interminables de IVA hasta procesos manuales que ralentizan y causan errores.',
    'about.quote': '"Después de más de 10 años en primera línea de las finanzas en multinacionales, sé exactamente dónde van mal las cosas. ¿Mi enfoque? Fuera el caos. Adentro la estructura. Tu equipo trabaja más rápido, con mayor precisión y se enfoca en lo que realmente importa: el impacto estratégico."',
    'about.subtitle': 'Asesor estratégico en optimización financiera y estructuras internacionales de IVA',
    'about.expertise.title': 'Mi experiencia:',
    'about.expertise.1': 'Más de 10 años de experiencia como controlador financiero y de negocios en multinacionales',
    'about.expertise.2': 'Asesoramiento de IVA para estructuras internacionales – especialista en regulaciones belgas',
    'about.expertise.3': 'Orientación de transformaciones financieras y procesos de cambio',
    'about.expertise.4': 'Optimización de procesos y digitalización de departamentos financieros',
    'about.expertise.5': 'Socio experimentado para CFOs, controladores y líderes fiscales',
    'about.proven.title': 'Experiencia comprobada',
    'about.proven.subtitle': 'Más de 10 años de experiencia en finanzas',
    'about.proven.text': 'De controlador práctico a asesor estratégico: conozco ambos lados del mundo financiero y sé exactamente qué funciona.',
    'about.results.title': 'Orientado a resultados',
    'about.results.subtitle': 'Mejoras medibles en 3 meses',
    'about.results.text': 'Ves resultados inmediatos: menos estrés, procesos más rápidos y finalmente tiempo para trabajo estratégico que realmente genera impacto.',
    
    // Contact Section
    'contact.title': 'Contacto',
    'contact.subtitle': 'Deja de estresarte por el cumplimiento y la ineficiencia. Programa una consulta gratuita y descubre cómo tu equipo financiero puede trabajar 50% más rápido.',
    'contact.response': 'Respondemos dentro de 24 horas – confidencial y sin obligaciones',
    'contact.form.title': 'Programar una consulta gratuita',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.company': 'Empresa',
    'contact.form.message': 'Mensaje',
    'contact.form.name.placeholder': 'Tu nombre',
    'contact.form.email.placeholder': 'tu@empresa.com',
    'contact.form.company.placeholder': 'Tu empresa',
    'contact.form.message.placeholder': 'Cuéntanos sobre tus desafíos o preguntas...',
    'contact.form.submit': 'Programar consulta gratuita',
    'contact.form.submitting': 'Enviando...',
    'contact.info.title': 'Información de contacto',
    'contact.phone': 'Teléfono',
    'contact.email': 'Correo electrónico',
    'contact.location': 'Ubicación',
    'contact.response_time': 'Tiempo de respuesta',
    'contact.phone.description': 'Lun-Vie 9:00-18:00',
    'contact.email.description': 'Respondemos dentro de 4 horas',
    'contact.location.description': 'También para videollamadas',
    'contact.response_time.description': 'Para todas las preguntas',
    'contact.benefits.title': '¿Qué te aporta esto?',
    'contact.benefit.1': '50% de ahorro de tiempo en cierre mensual e informes',
    'contact.benefit.2': '100% cumplimiento sin estrés o preocupaciones de auditoría',
    'contact.benefit.3': 'Más tiempo para asociación estratégica de negocios',
    'contact.benefit.4': 'Equipo financiero más feliz que puede enfocarse',
    'contact.testimonial': '"En 3 meses notarás que tu equipo financiero finalmente puede hacer lo que sabe hacer: apoyo estratégico en lugar de trámites administrativos."',
    
    // Toast messages
    'toast.success.title': '¡Mensaje enviado!',
    'toast.success.description': 'Te contactaremos dentro de 24 horas para una consulta gratuita.',
    'toast.error.title': '¡Algo salió mal!',
    'toast.error.description': 'Por favor inténtalo más tarde o envía un correo a viktoria@alventis.be.',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('nl');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};