import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = "Privacy";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Privacybeleid voor deze website. Informatie over gegevensverwerking, cookies, rechten en beveiliging.');
    }
    
    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/privacy');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-[70ch] mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Privacy</h1>
            <p className="text-muted-foreground italic">Laatst bijgewerkt: 16/09/2025</p>
          </header>

          <div className="space-y-8 text-foreground">
            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Verwerkingsverantwoordelijke</h2>
              <div className="space-y-1">
                <p><strong>Viktoria Ovis</strong></p>
                <p>Bergstraat 39</p>
                <p>9690 Kluisbergen</p>
                <p>België</p>
                <p>E-mail: <a href="mailto:viktoria@alventis.be" className="text-primary hover:underline">viktoria@alventis.be</a></p>
                <p>Telefoon: <a href="tel:+32478834323" className="text-primary hover:underline">+32 478 83 43 23</a></p>
                <p>Btw-nummer: <strong>BE1019135844</strong></p>
              </div>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Welke gegevens wij verwerken</h2>
              <ul className="space-y-2 list-disc pl-6">
                <li>Gegevens die je vrijwillig verstrekt, zoals naam, e-mailadres en berichtinhoud wanneer je contact met ons opneemt.</li>
                <li>Technische informatie zoals IP-adres, browsertype, apparaattype, besturingssysteem en tijdstip van toegang (automatisch verzameld door onze hostingprovider).</li>
                <li>Gebruiksgegevens via analysetools (zoals paginaweergaven, klikgedrag, sessieduur en verwijzende bronnen).</li>
                <li>Cookies en vergelijkbare technologieën (zie sectie 5).</li>
              </ul>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Doeleinden en rechtsgrond</h2>
              <p className="mb-3">Wij verwerken persoonsgegevens voor de volgende doeleinden:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Beantwoorden van contactaanvragen (<strong>artikel 6, lid 1, onder b, AVG</strong>).</li>
                <li>Zorgen voor een veilige en stabiele werking van de website (<strong>artikel 6, lid 1, onder f, AVG</strong>).</li>
                <li>Analyseren van websitegebruik en verbeteren van onze diensten (<strong>artikel 6, lid 1, onder a, AVG</strong> — toestemming).</li>
                <li>Voldoen aan wettelijke verplichtingen (<strong>artikel 6, lid 1, onder c, AVG</strong>).</li>
              </ul>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Hostingprovider</h2>
              <p className="mb-4">Onze website wordt gehost door:</p>
              
              <div className="mb-6">
                <p><strong>Netlify, Inc.</strong></p>
                <p>2325 3rd Street, Suite 296, San Francisco, CA 94107, Verenigde Staten</p>
                <p>Privacy: <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener" className="text-primary hover:underline">https://www.netlify.com/privacy/</a></p>
              </div>

              <div className="mb-6">
                <p><strong>GitHub, Inc.</strong></p>
                <p>88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, Verenigde Staten</p>
                <p>Privacy: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener" className="text-primary hover:underline">https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement</a></p>
              </div>

              <p className="mb-4">Wanneer je onze website bezoekt, verzendt je browser automatisch gegevens zoals je IP-adres, de opgevraagde pagina en het tijdstip van toegang. Deze logbestanden worden door onze hostingproviders verwerkt om de website te leveren en te beveiligen.</p>
              
              <p>Wij hebben verwerkersovereenkomsten gesloten met onze hostingproviders overeenkomstig <strong>artikel 28 AVG</strong> om je persoonsgegevens te beschermen.</p>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Cookies en tracking</h2>
              <p className="mb-4">Wij gebruiken cookies en vergelijkbare technologieën op onze website.</p>
              
              <div className="mb-6">
                <p className="font-semibold mb-2">Waarvoor cookies worden gebruikt:</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Essentiële cookies om basisfunctionaliteit mogelijk te maken (hiervoor is geen toestemming vereist).</li>
                  <li>Analytische cookies om informatie te verzamelen over het gebruik van onze website.</li>
                  <li>Marketingcookies (indien in de toekomst gebruikt) om bezoekers over websites heen te volgen en relevante advertenties te tonen.</li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="font-semibold mb-2">Rechtsgrond:</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Essentiële cookies: <strong>artikel 6, lid 1, onder f, AVG</strong> (gerechtvaardigd belang).</li>
                  <li>Analytische en marketingcookies: <strong>artikel 6, lid 1, onder a, AVG</strong> (toestemming).</li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="font-semibold mb-2">Toestemming:</p>
                <p>Je kunt toestemming voor niet-essentiële cookies geven of intrekken via de cookiebanner die verschijnt bij je eerste bezoek. Je kunt cookies ook op elk moment uitschakelen via de instellingen van je browser.</p>
              </div>

              <div>
                <p className="font-semibold mb-2">Bewaartermijnen:</p>
                <p>Cookies worden bewaard gedurende verschillende termijnen afhankelijk van het doel. Analytische cookies verlopen doorgaans na <strong>2 jaar</strong>, tenzij je ze eerder verwijdert.</p>
              </div>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Jouw rechten</h2>
              <p className="mb-3">Op grond van de AVG heb je het recht om:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Inzage te vragen in je persoonsgegevens.</li>
                <li>Correctie of verwijdering te verzoeken.</li>
                <li>Verwerking te beperken of daartegen bezwaar te maken.</li>
                <li>Gegevensoverdraagbaarheid te verzoeken.</li>
                <li>Je toestemming op elk moment in te trekken.</li>
                <li>Een klacht in te dienen bij de <strong>Gegevensbeschermingsautoriteit (GBA)</strong> in België.</li>
              </ul>
              <p className="mt-4">Om je rechten uit te oefenen, kun je contact opnemen via <a href="mailto:viktoria@alventis.be" className="text-primary hover:underline">viktoria@alventis.be</a>.</p>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Diensten van derden</h2>
              <p className="mb-4">Wij kunnen diensten van derden gebruiken, zoals <strong>Google Analytics</strong>. Deze diensten verwerken gegevens namens ons op basis van strikte gegevensbeschermingsovereenkomsten.</p>
              <p className="mb-2">Google Analytics wordt aangeboden door <strong>Google Ireland Limited</strong>.</p>
              <p>Privacy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="text-primary hover:underline">https://policies.google.com/privacy</a></p>
              <p>Gegevensverwerking: <a href="https://privacy.google.com/businesses/processorterms/" target="_blank" rel="noopener" className="text-primary hover:underline">https://privacy.google.com/businesses/processorterms/</a></p>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Gegevensbeveiliging</h2>
              <p>Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, misbruik en onbevoegde toegang.</p>
            </section>

            <div className="w-full h-px bg-border my-8"></div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Wijzigingen</h2>
              <p>Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. De meest recente versie is altijd beschikbaar op deze pagina.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;