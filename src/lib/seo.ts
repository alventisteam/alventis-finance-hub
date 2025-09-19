// SEO utilities for managing structured data and meta tags

export interface PageSEO {
  title: string;
  description: string;
  canonicalUrl: string;
  image?: string;
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  hasFAQ?: boolean;
}

// Core entities with stable @ids
const coreEntities = {
  organization: {
    "@type": "Organization",
    "@id": "https://alventis.be/#org",
    "name": "Alventis",
    "description": "BTW-compliance en finance optimalisatie voor multinationals in België. Specialist in btw-advies, digitalisering finance processen en audit-ready rapportering.",
    "url": "https://alventis.be",
    "logo": "https://alventis.be/favicon-optimized.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+32478834323",
      "contactType": "customer service",
      "email": "viktoria@alventis.be",
      "availableLanguage": ["Dutch", "English", "Spanish"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bergstraat 39",
      "addressLocality": "Kluisbergen",
      "postalCode": "9690",
      "addressCountry": "BE"
    },
    "founder": {
      "@id": "https://alventis.be/#person"
    },
    "areaServed": "Belgium",
    "inLanguage": "nl"
  },
  
  person: {
    "@type": "Person",
    "@id": "https://alventis.be/#person",
    "name": "Viktoria Oris",
    "jobTitle": "Finance & Business Controller",
    "worksFor": {
      "@id": "https://alventis.be/#org"
    },
    "email": "viktoria@alventis.be",
    "telephone": "+32478834323"
  },
  
  professionalService: {
    "@type": "ProfessionalService",
    "@id": "https://alventis.be/#business",
    "name": "Alventis Finance Consulting",
    "description": "BTW-compliance en finance optimalisatie voor multinationals in België",
    "provider": {
      "@id": "https://alventis.be/#org"
    },
    "areaServed": "Belgium",
    "inLanguage": "nl",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Finance Consulting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "BTW-compliance advies",
            "description": "Specialist advies voor internationale btw-structuren en Belgische regelgeving"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Finance procesoptimalisatie",
            "description": "Optimalisatie en digitalisering van finance processen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digitalisering finance processen",
            "description": "Transformatie van manuele processen naar geautomatiseerde oplossingen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Audit-ready rapportering",
            "description": "Implementatie van audit-ready rapportage systemen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Projectbegeleiding finance transformaties",
            "description": "Begeleiding van finance transformaties en changetrajecten"
          }
        }
      ]
    }
  }
};

export function generateJSONLD(pageData: PageSEO): string {
  const graph: any[] = [
    coreEntities.organization,
    coreEntities.person,
    coreEntities.professionalService
  ];

  // Add WebPage entity
  const webPage: any = {
    "@type": "WebPage",
    "@id": `${pageData.canonicalUrl}#webpage`,
    "url": pageData.canonicalUrl,
    "name": pageData.title,
    "description": pageData.description,
    "inLanguage": "nl",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://alventis.be/#website",
      "name": "Alventis",
      "url": "https://alventis.be"
    },
    "about": {
      "@id": "https://alventis.be/#business"
    },
    "publisher": {
      "@id": "https://alventis.be/#org"
    }
  };

  if (pageData.image) {
    webPage.primaryImageOfPage = {
      "@type": "ImageObject",
      "url": pageData.image
    };
  }

  graph.push(webPage);

  // Add BreadcrumbList if breadcrumbs exist
  if (pageData.breadcrumbs && pageData.breadcrumbs.length > 0) {
    const breadcrumbList = {
      "@type": "BreadcrumbList",
      "@id": `${pageData.canonicalUrl}#breadcrumb`,
      "itemListElement": pageData.breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
    graph.push(breadcrumbList);
  }

  // Add FAQPage if this page has FAQs
  if (pageData.hasFAQ) {
    const faqPage = {
      "@type": "FAQPage",
      "@id": `${pageData.canonicalUrl}#faqpage`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Hoe kan Alventis mijn btw-compliance verbeteren?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wij analyseren je huidige btw-processen en implementeren gestructureerde workflows die voldoen aan Belgische en Europese regelgeving. Dit betekent minder fouten, snellere aangiftes en volledige audit-ready documentatie."
          }
        },
        {
          "@type": "Question",
          "name": "Wat is het verschil tussen finance optimalisatie en gewone boekhouding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Finance optimalisatie gaat verder dan boekhouding. Wij kijken naar je complete finance processen: van data-invoer tot rapportage. We automatiseren repetitieve taken, implementeren controles en zorgen voor strategische dashboards die écht inzicht geven."
          }
        },
        {
          "@type": "Question",
          "name": "Hoe lang duurt een finance transformatie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dat hangt af van de complexiteit van je organisatie. Een standaard optimalisatie traject duurt 3-6 maanden. We beginnen altijd met een grondige analyse en bouwen gefaseerd op, zodat je bedrijfsvoering niet verstoord wordt."
          }
        },
        {
          "@type": "Question",
          "name": "Werken jullie ook met internationale multinationals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, dat is onze specialiteit. Met 10+ jaar ervaring bij internationale bedrijven zoals Buckman, Katoen Natie en Imperial Brands begrijpen we de complexiteit van multi-country finance structuren en internationale btw-verplichtingen."
          }
        }
      ]
    };
    graph.push(faqPage);
  }

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph
  });
}

export function setSEOTags(pageData: PageSEO): void {
  // Only run in browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }
  
  try {
    // Set page title
    document.title = pageData.title;
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageData.description);
    }
    
    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageData.canonicalUrl);
    
    // Resolve image URL to absolute path
    const resolvedImageUrl = pageData.image ? 
      (pageData.image.startsWith('http') ? pageData.image : `${window.location.origin}${pageData.image}`) 
      : null;
    
    // Set OG and Twitter meta tags
    const metaTags = [
      { property: 'og:title', content: pageData.title },
      { property: 'og:description', content: pageData.description },
      { property: 'og:url', content: pageData.canonicalUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'nl_BE' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageData.title },
      { name: 'twitter:description', content: pageData.description }
    ];
    
    // Add image-specific meta tags if image is provided
    if (resolvedImageUrl) {
      metaTags.push(
        { property: 'og:image', content: resolvedImageUrl },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/webp' },
        { name: 'twitter:image', content: resolvedImageUrl }
      );
    }
    
    // Create all new meta elements first
    const newMetaElements: HTMLMetaElement[] = [];
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.property) {
        meta.setAttribute('property', tag.property);
      } else if (tag.name) {
        meta.setAttribute('name', tag.name);
      }
      meta.setAttribute('content', tag.content);
      newMetaElements.push(meta);
    });
    
    // Create new JSON-LD script
    const jsonLdScript = document.createElement('script');
    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.textContent = generateJSONLD({
      ...pageData,
      image: resolvedImageUrl || pageData.image
    });
    
    // Only remove existing elements after new ones are ready
    const existingMetas = document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]');
    existingMetas.forEach(meta => meta.remove());
    
    const existingJsonLd = document.querySelectorAll('script[type="application/ld+json"]');
    existingJsonLd.forEach(script => script.remove());
    
    // Add all new elements
    newMetaElements.forEach(meta => document.head.appendChild(meta));
    document.head.appendChild(jsonLdScript);
    
  } catch (error) {
    console.error('Error setting SEO tags:', error);
    // Fallback: at least set the page title
    if (pageData.title) {
      document.title = pageData.title;
    }
  }
}