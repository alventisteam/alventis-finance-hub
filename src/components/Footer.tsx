import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">
              {t('footer.company')}
            </h3>
            <p className="font-lato text-primary-foreground/80 mb-4 leading-relaxed">
              {t('footer.description')}
            </p>
            <p className="font-lato text-primary-foreground/80 text-sm mb-6">
              {t('footer.trust')}
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-warm text-warm-foreground hover:bg-warm/90 font-lato font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              {t('footer.cta')}
            </button>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">
              {t('footer.services.title')}
            </h3>
            <ul className="space-y-2 font-lato text-primary-foreground/80">
              <li>{t('footer.service1')}</li>
              <li>{t('footer.service2')}</li>
              <li>{t('footer.service3')}</li>
              <li>{t('footer.service4')}</li>
              <li>{t('footer.service5')}</li>
            </ul>
          </div>

          {/* Contact & Social Proof */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">
              {t('footer.contact.title')}
            </h3>
            <div className="space-y-2 font-lato text-primary-foreground/80 mb-6">
              <p>{t('footer.location')}</p>
              <p>+32 478 83 43 23</p>
              <p>viktoria@alventis.be</p>
            </div>
            
            <div className="space-y-3">
              <span className="font-lato font-semibold text-primary-foreground text-sm block">
                {t('footer.trusted.title')}
              </span>
              <div className="space-y-1 font-lato text-primary-foreground/60 text-sm">
                <p>{t('footer.trusted1')}</p>
                <p>{t('footer.trusted2')}</p>
                <p>{t('footer.trusted3')}</p>
              </div>
              
              <div className="pt-4">
                <a 
                  href="https://www.linkedin.com/in/viktoria-oris-578106306/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-foreground/80 hover:text-warm transition-colors text-sm"
                >
                  {t('footer.linkedin')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="text-center mb-6">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-warm text-warm-foreground hover:bg-warm/90 font-lato font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 text-lg"
            >
              {t('footer.cta')}
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-lato text-primary-foreground/60 text-sm">
              © {currentYear} {t('footer.company')}. {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="font-lato text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/impressum"
                className="font-lato text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                Juridische Vermelding
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;