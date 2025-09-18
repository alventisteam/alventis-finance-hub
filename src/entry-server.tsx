import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export function render(url: string) {
  console.log(`[SSR] Starting render for URL: ${url}`);
  
  try {
    console.log('[SSR] Calling ReactDOMServer.renderToString...');
    
    // Enhanced error boundary for individual components
    const AppWithErrorBoundary = () => {
      try {
        return <App />;
      } catch (componentError) {
        console.error('[SSR] Component-level error caught:', componentError);
        console.error('[SSR] Component error stack:', componentError.stack);
        return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80">
            <div className="text-center max-w-2xl px-8 py-16">
              <h1 className="text-4xl font-playfair text-white mb-6">Alventis - BTW Expert & Finance Consultant België</h1>
              <h2 className="text-2xl text-white/90 mb-4">Professionele BTW-compliance en Finance Optimalisatie</h2>
              <p className="text-lg text-white/80 mb-8">Viktoria Oris - BTW expert en finance consultant België. Specialist in btw-compliance en finance optimalisatie voor multinationals.</p>
              <div className="space-y-4">
                <h3 className="text-xl text-white font-semibold">Onze Diensten:</h3>
                <ul className="text-white/80 space-y-2">
                  <li>• BTW-compliance & rapportering</li>
                  <li>• Finance procesoptimalisatie</li>
                  <li>• Projectbegeleiding & changemanagement</li>
                </ul>
              </div>
              <a href="/" className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-medium mt-6">Naar Startpagina</a>
            </div>
          </div>
        );
      }
    };
    
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={url}>
        <AppWithErrorBoundary />
      </StaticRouter>
    );
    
    console.log(`[SSR] Successfully rendered HTML (${html.length} characters)`);
    
    // Enhanced validation for complete content structure
    const hasH1 = html.includes('<h1');
    const hasH2 = html.includes('<h2');
    const hasContent = html.length > 1000; // Minimum expected content size
    const hasNavigation = html.includes('nav') || html.includes('Navigation');
    const hasServices = html.includes('Diensten') || html.includes('Services');
    const hasContact = html.includes('Contact');
    
    console.log('[SSR] Content validation:');
    console.log(`[SSR] - Has H1: ${hasH1}`);
    console.log(`[SSR] - Has H2: ${hasH2}`);
    console.log(`[SSR] - Has sufficient content: ${hasContent}`);
    console.log(`[SSR] - Has navigation: ${hasNavigation}`);
    console.log(`[SSR] - Has services: ${hasServices}`);
    console.log(`[SSR] - Has contact: ${hasContact}`);
    
    if (hasH1 && hasH2 && hasContent && hasNavigation) {
      console.log('[SSR] ✓ HTML contains complete page structure - ready for crawlers');
      return html;
    } else {
      console.warn('[SSR] ⚠ HTML structure incomplete, but returning anyway');
      console.log('[SSR] Preview of rendered HTML (first 800 chars):', html.substring(0, 800) + '...');
      console.log('[SSR] Preview of rendered HTML (last 200 chars):', '...' + html.substring(html.length - 200));
      return html;
    }
    
  } catch (error) {
    console.error('[SSR] Critical rendering error:', error);
    console.error('[SSR] Error type:', error.constructor.name);
    console.error('[SSR] Error message:', error.message);
    console.error('[SSR] Error stack:', error.stack);
    
    // Enhanced fallback with complete SEO structure
    const fallbackHtml = `
      <div class="min-h-screen bg-gradient-to-br from-primary to-primary/80">
        <nav class="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
          <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
              <h1 class="text-2xl font-bold text-white">Alventis</h1>
              <a href="#contact" class="bg-white text-primary px-4 py-2 rounded-lg font-medium">Contact</a>
            </div>
          </div>
        </nav>
        
        <main class="pt-20">
          <section id="home" class="min-h-screen flex items-center justify-center px-6">
            <div class="text-center max-w-4xl">
              <h1 class="text-5xl font-playfair text-white mb-6">BTW-compliance & Finance Optimalisatie voor Multinationals in België</h1>
              <p class="text-xl text-white/90 mb-8">Viktoria Oris - 10+ jaar ervaring als finance en business controller. Expertise in btw-advies, digitalisering finance processen en audit-ready rapportering voor internationale bedrijven.</p>
              <div class="space-y-4 mb-12">
                <a href="#contact" class="inline-block bg-white text-primary px-8 py-4 rounded-lg font-medium text-lg">Plan een gratis kennismaking</a>
              </div>
            </div>
          </section>
          
          <section id="services" class="py-20 px-6 bg-white/5">
            <div class="max-w-6xl mx-auto">
              <h2 class="text-4xl font-playfair text-white text-center mb-16">BTW-compliance & Finance Optimalisatie Diensten</h2>
              <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white/10 p-8 rounded-xl">
                  <h3 class="text-2xl font-semibold text-white mb-4">BTW-compliance & rapportering</h3>
                  <p class="text-white/80">100% compliant, audit-ready processen en complete digitalisering voor finance teams.</p>
                </div>
                <div class="bg-white/10 p-8 rounded-xl">
                  <h3 class="text-2xl font-semibold text-white mb-4">Finance procesoptimalisatie</h3>
                  <p class="text-white/80">50% tijdsbesparing door automatisering en digitalisering van handmatige processen.</p>
                </div>
                <div class="bg-white/10 p-8 rounded-xl">
                  <h3 class="text-2xl font-semibold text-white mb-4">Projectbegeleiding & changemanagement</h3>
                  <p class="text-white/80">Persoonlijke begeleiding van controllers en CFO's door elke stap van de transformatie.</p>
                </div>
              </div>
            </div>
          </section>
          
          <section id="contact" class="py-20 px-6">
            <div class="max-w-4xl mx-auto text-center">
              <h2 class="text-4xl font-playfair text-white mb-8">Contact</h2>
              <p class="text-xl text-white/90 mb-8">Plan een gratis kennismaking en ontdek hoe jouw finance team 50% sneller kan werken.</p>
              <div class="bg-white/10 p-8 rounded-xl">
                <h3 class="text-2xl text-white mb-4">Viktoria Oris</h3>
                <p class="text-white/80 mb-4">BTW Expert & Finance Consultant</p>
                <p class="text-white/80">viktoria@alventis.be</p>
                <p class="text-white/80">+32 478 83 43 23</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    `;
    
    console.log('[SSR] Returning enhanced fallback HTML with complete structure');
    return fallbackHtml;
  }
}