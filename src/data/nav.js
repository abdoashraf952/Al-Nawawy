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

export const sectionIds = navLinks.map((link) => link.id);
