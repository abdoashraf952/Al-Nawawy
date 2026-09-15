export const navLinks = [
  { id: 'home', href: '#home', labelKey: 'nav.home' },
  { id: 'services', href: '#services', labelKey: 'nav.services' },
  { id: 'ai-agents', href: '#ai-agents', labelKey: 'nav.agents' },
  { id: 'automation', href: '#automation', labelKey: 'nav.automation' },
  { id: 'web', href: '#web', labelKey: 'nav.web' },
  { id: 'marketing', href: '#marketing', labelKey: 'nav.marketing' },
  { id: 'work', href: '#work', labelKey: 'nav.work' },
  { id: 'contact', href: '#contact', labelKey: 'nav.contact' },
];

// The scroll spy tracks sections without a nav link too, so that while one of them
// is on screen no link is highlighted instead of the previous one staying lit.
export const sectionIds = [...navLinks.map((link) => link.id), 'problem', 'why', 'process'];
