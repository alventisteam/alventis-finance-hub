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
    // Return empty string on error so the app can hydrate normally
    return '';
  }
}