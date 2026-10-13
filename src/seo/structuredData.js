import { siteConfig, CONTACT_PHONE_INTL } from '../config/site';
import { services } from '../data/services';
import { ar } from '../i18n/ar';
import { en } from '../i18n/en';

const dictionaries = { ar, en };
const SCRIPT_ID = 'ld-json-site';

const resolve = (dict, path) => path.split('.').reduce((acc, key) => acc?.[key], dict);

/**
 * JSON-LD built only from values that are actually configured or written in the dictionaries.
 * Anything left blank in site.js is omitted rather than invented. Re-run on language change so the
 * description, services and FAQ answers match the visible language. The FAQPage block is only
 * emitted on the FAQ page, where those questions are actually visible.
 */
export function injectStructuredData(lang = 'ar', { includeFaq = false } = {}) {
  const dict = dictionaries[lang] ?? ar;
  const sameAs = Object.values(siteConfig.social).filter(Boolean);

  const organization = {
    '@type': 'ProfessionalService',
    '@id': siteConfig.url ? `${siteConfig.url}#organization` : undefined,
    name: siteConfig.name,
    alternateName: siteConfig.nameAr,
    description: dict.meta.description,
    telephone: CONTACT_PHONE_INTL,
    ...(siteConfig.url && { url: siteConfig.url }),
    ...(siteConfig.email && { email: siteConfig.email }),
    ...(sameAs.length > 0 && { sameAs }),
    makesOffer: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: resolve(dict, `${service.key}.title`),
        description: resolve(dict, `${service.key}.desc`),
      },
    })),
  };

  const faq = {
    '@type': 'FAQPage',
    mainEntity: dict.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const data = { '@context': 'https://schema.org', '@graph': includeFaq ? [organization, faq] : [organization] };

  let script = document.getElementById(SCRIPT_ID);
  if (!script) {
    script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}
