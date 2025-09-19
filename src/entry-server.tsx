import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { getSEODataForRoute } from './lib/seo-data';
import { generateJSONLD } from './lib/seo';

export interface SSRResult {
  html: string;
  seoData: {
    title: string;
    description: string;
    canonicalUrl: string;
    jsonLD: string;
  } | null;
}

export function render(url: string): SSRResult {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  
  const seoMetadata = getSEODataForRoute(url);
  
  let seoData = null;
  if (seoMetadata) {
    seoData = {
      title: seoMetadata.title,
      description: seoMetadata.description,
      canonicalUrl: seoMetadata.canonicalUrl,
      jsonLD: generateJSONLD(seoMetadata)
    };
  }
  
  return { html, seoData };
}