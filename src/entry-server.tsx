import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export function render(url: string) {
  console.log(`[SSR] Starting render for URL: ${url}`);
  
  try {
    console.log('[SSR] Calling ReactDOMServer.renderToString...');
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    );
    
    console.log(`[SSR] Successfully rendered HTML (${html.length} characters)`);
    
    // Validate that we got meaningful content, not just empty divs
    if (html.includes('<h1') && html.includes('<h2')) {
      console.log('[SSR] ✓ HTML contains proper heading structure');
      return html;
    } else {
      console.warn('[SSR] ⚠ HTML missing proper heading structure, rendered content may be incomplete');
      console.log('[SSR] Preview of rendered HTML:', html.substring(0, 500) + '...');
      return html; // Still return it, but log the warning
    }
    
  } catch (error) {
    console.error('[SSR] Critical rendering error:', error);
    console.error('[SSR] Error stack:', error.stack);
    
    // Return basic HTML structure instead of empty string for better crawler support
    const fallbackHtml = `
      <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80">
        <div class="text-center max-w-2xl px-8 py-16">
          <h1 class="text-4xl font-playfair text-white mb-6">Alventis - BTW Expert & Finance Consultant België</h1>
          <p class="text-lg text-white/80 mb-8">Viktoria Oris - BTW-compliance en finance optimalisatie voor multinationals.</p>
          <a href="/" class="inline-block bg-white text-primary px-6 py-3 rounded-lg font-medium">Naar Startpagina</a>
        </div>
      </div>
    `;
    
    console.log('[SSR] Returning fallback HTML');
    return fallbackHtml;
  }
}