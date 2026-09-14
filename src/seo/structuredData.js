import { siteConfig, CONTACT_PHONE_INTL } from '../config/site';

/**
 * Organization JSON-LD built only from values that are actually configured.
 * Anything left blank in site.js is omitted rather than invented.
 */
export function injectStructuredData() {
  const sameAs = Object.values(siteConfig.social).filter(Boolean);

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    alternateName: siteConfig.nameAr,
    description:
      'Al-Nawawy builds AI agents, business automation systems, professional websites, and complete marketing solutions for businesses.',
    telephone: CONTACT_PHONE_INTL,
    ...(siteConfig.url && { url: siteConfig.url }),
    ...(siteConfig.email && { email: siteConfig.email }),
    ...(sameAs.length > 0 && { sameAs }),
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}
