import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const Breadcrumbs = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const path = location.pathname;
    
    switch (path) {
      case '/privacy':
        return [
          { label: t('nav.home'), href: '/' },
          { label: 'Privacy' }
        ];
      case '/impressum':
        return [
          { label: t('nav.home'), href: '/' },
          { label: 'Impressum' }
        ];
      default:
        return [{ label: t('nav.home') }];
    }
  };

  const breadcrumbs = getBreadcrumbs();

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        {breadcrumbs.map((item, index) => (
          <li key={index} className="flex items-center">
            {index === 0 && <Home className="h-4 w-4 mr-2" />}
            {item.href ? (
              <Link 
                to={item.href} 
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
            {index < breadcrumbs.length - 1 && (
              <ChevronRight className="h-4 w-4 mx-2" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;