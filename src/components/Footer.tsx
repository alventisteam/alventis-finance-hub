const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Alventis
            </h3>
            <p className="font-lato text-primary-foreground/80 mb-4 leading-relaxed">
              Finance optimalisatie multinationals en btw-compliance België. 
              Digitalisering finance processen en business control consultant.
            </p>
            <p className="font-lato text-primary-foreground/80 text-sm mb-6">
              Vertrouwd door finance teams wereldwijd
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-warm text-warm-foreground hover:bg-warm/90 font-lato font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Plan een gratis kennismaking
            </button>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">
              Onze diensten
            </h4>
            <ul className="space-y-2 font-lato text-primary-foreground/80">
              <li>Advies in fiscale vertegenwoordiging</li>
              <li>Finance proces optimalisatie</li>
              <li>Digitalisering & automatisering</li>
              <li>Compliance monitoring</li>
              <li>Projectbegeleiding</li>
            </ul>
          </div>

          {/* Contact & Social Proof */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">
              Contact
            </h4>
            <div className="space-y-2 font-lato text-primary-foreground/80 mb-6">
              <p>Kluisbergen, België</p>
              <p>+32 478 83 43 23</p>
              <p>viktoria@alventis.be</p>
            </div>
            
            <div className="space-y-3">
              <h5 className="font-lato font-semibold text-primary-foreground text-sm">
                Vertrouwd door:
              </h5>
              <div className="space-y-1 font-lato text-primary-foreground/60 text-sm">
                <p>• Internationale multinationals</p>
                <p>• Finance teams in heel Europa</p>
                <p>• Controllers & CFO's sinds 2008</p>
              </div>
              
              <div className="pt-4">
                <a 
                  href="https://www.linkedin.com/in/viktoria-oris-578106306/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-foreground/80 hover:text-warm transition-colors text-sm"
                >
                  LinkedIn →
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
              Plan een gratis kennismaking
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-lato text-primary-foreground/60 text-sm">
              © {currentYear} Alventis. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#privacy"
                className="font-lato text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="font-lato text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                Algemene Voorwaarden
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;