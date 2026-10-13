// Single source of truth for every contact detail on the site.
// Change it here and it changes everywhere.

export const CONTACT_PHONE = '01012900130'; // local display format
export const CONTACT_PHONE_INTL = '+201012900130'; // tel: href
export const WHATSAPP_NUMBER = '201012900130'; // wa.me, digits only

export const siteConfig = {
  name: 'Al-Nawawy',
  nameAr: 'النواوي',
  tagline: 'AI · Automation · Web · Marketing',
  // Public GitHub Pages URL (with trailing slash). Update if a custom domain is added.
  url: 'https://abdoashraf952.github.io/Al-Nawawy/',
  email: '', // leave empty to hide the email link
  phone: CONTACT_PHONE,
  phoneIntl: CONTACT_PHONE_INTL,
  whatsapp: WHATSAPP_NUMBER,
  // Leave a value empty and its icon is not rendered at all.
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    x: '',
    youtube: '',
  },
};

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const telLink = `tel:${CONTACT_PHONE_INTL}`;
