import { PageSEO } from "./seo";

export interface RouteMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  hasFAQ?: boolean;
  image?: string;
}

export const seoData: Record<string, RouteMetadata> = {
  '/': {
    title: "BTW Expert & Finance Consultant België | Viktoria Oris | Alventis",
    description: "Viktoria Oris, BTW expert en finance consultant voor multinationals in België. 10+ jaar ervaring. Digitalisering, compliance & 50% tijdsbesparing op finance processen.",
    canonicalUrl: "https://alventis.be/",
    image: "/assets/alventis-og-image.webp",
    hasFAQ: true
  },
  '/diensten': {
    title: "Finance Optimalisatie & BTW-compliance Diensten | Alventis België",
    description: "Professionele BTW-compliance en finance optimalisatie diensten voor multinationals in België. 50% tijdsbesparing, 100% compliance garantie, 3 maanden implementatie.",
    canonicalUrl: "https://alventis.be/diensten",
    image: "/assets/alventis-og-image.webp",
    hasFAQ: true,
    breadcrumbs: [
      { name: 'Home', url: 'https://alventis.be/' },
      { name: 'Diensten', url: 'https://alventis.be/diensten' }
    ]
  },
  '/privacy': {
    title: 'Privacybeleid & GDPR Compliance | Alventis Finance Consulting',
    description: 'Privacybeleid Alventis: GDPR-compliant gegevensverwerking, cookiebeleid, uw rechten als klant. Transparante privacy practices voor onze BTW & finance diensten.',
    canonicalUrl: 'https://alventis.be/privacy',
    breadcrumbs: [
      { name: 'Home', url: 'https://alventis.be/' },
      { name: 'Privacy', url: 'https://alventis.be/privacy' }
    ]
  },
  '/impressum': {
    title: 'Impressum & Bedrijfsgegevens | Alventis BTW & Finance Consulting België',
    description: 'Juridische vermelding Alventis: officiële bedrijfsgegevens, BTW-nummer BE0781.576.986, contact Viktoria Oris, aansprakelijkheid finance consultancy België.',
    canonicalUrl: 'https://alventis.be/impressum',
    breadcrumbs: [
      { name: 'Home', url: 'https://alventis.be/' },
      { name: 'Impressum', url: 'https://alventis.be/impressum' }
    ]
  }
};

export const getSEODataForRoute = (route: string): RouteMetadata | null => {
  return seoData[route] || null;
};