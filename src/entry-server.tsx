import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export function render(url: string) {
  try {
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    );
    
    return html;
  } catch (error) {
    console.error('SSR rendering error:', error);
    // Return basic HTML structure instead of empty string for better crawler support
    return `
      <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80">
        <div class="text-center max-w-2xl px-8 py-16">
          <h1 class="text-4xl font-playfair text-white mb-6">Alventis - BTW Expert & Finance Consultant België</h1>
          <p class="text-lg text-white/80 mb-8">Viktoria Oris - BTW-compliance en finance optimalisatie voor multinationals.</p>
          <a href="/" class="inline-block bg-white text-primary px-6 py-3 rounded-lg font-medium">Naar Startpagina</a>
        </div>
      </div>
    `;
  }
}