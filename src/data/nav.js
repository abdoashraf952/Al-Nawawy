export const navLinks = [
  { id: 'home', href: '#home', labelKey: 'nav.home' },
  { id: 'services', href: '#services', labelKey: 'nav.services' },
  { id: 'solutions', href: '#solutions', labelKey: 'nav.solutions' },
  { id: 'work', href: '#work', labelKey: 'nav.work' },
  { id: 'process', href: '#process', labelKey: 'nav.process' },
  { id: 'faq', href: '#faq', labelKey: 'nav.faq' },
  { id: 'contact', href: '#contact', labelKey: 'nav.contact' },
];

// The scroll spy tracks sections without a nav link too, so that while one of them
// is on screen no link is highlighted instead of the previous one staying lit.
// The four service sections are reached from the Services overview, not the top bar.
export const sectionIds = [
  ...navLinks.map((link) => link.id),
  'ai-agents',
  'automation',
  'web',
  'marketing',
  'problem',
  'why',
  'engage',
];
