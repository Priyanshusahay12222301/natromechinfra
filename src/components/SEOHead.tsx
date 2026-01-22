import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialSEOSettings } from '../data/initialData';
import { SEOSettings } from '../types';

// SEO: Enhanced SEO Head component with comprehensive meta tags and Schema.org markup
export function SEOHead() {
  const location = useLocation();
  const [seoSettings] = useLocalStorage<SEOSettings>('seoSettings', initialSEOSettings);

  useEffect(() => {
    const updateMetaTags = () => {
      let pageSEO = seoSettings.homePage;
      
      // Determine which page SEO to use
      if (location.pathname === '/services') {
        pageSEO = seoSettings.servicesPage;
      } else if (location.pathname === '/projects') {
        pageSEO = seoSettings.projectsPage;
      } else if (location.pathname === '/about') {
        pageSEO = seoSettings.aboutPage;
      } else if (location.pathname === '/contact') {
        pageSEO = seoSettings.contactPage;
      }

      // SEO: Update title and basic meta tags
      document.title = pageSEO.title;

      // SEO: Update meta description and keywords
      updateMetaTag('name', 'description', pageSEO.description);
      updateMetaTag('name', 'keywords', pageSEO.keywords);
      
      // SEO: Add robots meta tag
      updateMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
      
      // SEO: Add canonical URL
      updateLinkTag('canonical', window.location.href);

      // SEO: Update Open Graph tags for social sharing
      updateMetaTag('property', 'og:title', pageSEO.title);
      updateMetaTag('property', 'og:description', pageSEO.description);
      updateMetaTag('property', 'og:type', 'website');
      updateMetaTag('property', 'og:url', window.location.href);
      updateMetaTag('property', 'og:site_name', seoSettings.globalSettings.siteName);
      updateMetaTag('property', 'og:locale', 'en_IN');
      if (pageSEO.ogImage) {
        updateMetaTag('property', 'og:image', pageSEO.ogImage);
        updateMetaTag('property', 'og:image:width', '1200');
        updateMetaTag('property', 'og:image:height', '630');
        updateMetaTag('property', 'og:image:alt', pageSEO.title);
      }

      // SEO: Update Twitter Card tags for social sharing
      updateMetaTag('name', 'twitter:card', 'summary_large_image');
      updateMetaTag('name', 'twitter:title', pageSEO.title);
      updateMetaTag('name', 'twitter:description', pageSEO.description);
      if (pageSEO.ogImage) {
        updateMetaTag('name', 'twitter:image', pageSEO.ogImage);
        updateMetaTag('name', 'twitter:image:alt', pageSEO.title);
      }

      // SEO: Add structured data for ConstructionCompany (Schema.org)
      updateStructuredData();
    };

    const updateMetaTag = (attribute: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    
    // SEO: Helper function to add/update canonical link tags
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // SEO: Enhanced Schema.org structured data for ConstructionCompany
    const updateStructuredData = () => {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }

      const structuredData = {
        '@context': 'https://schema.org',
        '@type': seoSettings.globalSettings.businessSchema.type,
        name: seoSettings.globalSettings.companyName,
        description: seoSettings.globalSettings.tagline,
        url: window.location.origin,
        telephone: seoSettings.globalSettings.phone,
        email: seoSettings.globalSettings.email,
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
          streetAddress: seoSettings.globalSettings.address
        },
        priceRange: seoSettings.globalSettings.businessSchema.priceRange,
        areaServed: {
          '@type': 'Country',
          name: seoSettings.globalSettings.businessSchema.areaServed
        },
        sameAs: Object.values(seoSettings.globalSettings.socialMedia).filter(Boolean)
      };

      script.textContent = JSON.stringify(structuredData);
    };

    updateMetaTags();
  }, [location, seoSettings]);

  return null;
}