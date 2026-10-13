import { routePath } from './routes';

// Top-bar pages. "Services" stays highlighted on every /services/* page (non-`end` match).
export const navLinks = [
  { id: 'home', to: routePath('home'), labelKey: 'nav.home', end: true },
  { id: 'services', to: routePath('services'), labelKey: 'nav.services' },
  { id: 'use-cases', to: routePath('use-cases'), labelKey: 'nav.solutions' },
  { id: 'work', to: routePath('work'), labelKey: 'nav.work' },
  { id: 'how-we-work', to: routePath('how-we-work'), labelKey: 'nav.process' },
  { id: 'faq', to: routePath('faq'), labelKey: 'nav.faq' },
];

// Contact is not a page: the Contact section renders at the bottom of every page,
// so this is a same-page anchor.
export const contactLink = { href: '#contact', labelKey: 'nav.contact' };
