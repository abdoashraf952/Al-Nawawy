// Plain data only — the post-build script (scripts/postbuild.mjs) imports this in Node,
// so keep React and icon imports out of this file.
// `id` doubles as the key under `pages.*` in the dictionaries.
export const routes = [
  { id: 'home', path: '/' },
  { id: 'services', path: '/services' },
  { id: 'ai-agents', path: '/services/ai-agents' },
  { id: 'automation', path: '/services/automation' },
  { id: 'web', path: '/services/web' },
  { id: 'marketing', path: '/services/marketing' },
  { id: 'use-cases', path: '/use-cases' },
  { id: 'work', path: '/work' },
  { id: 'how-we-work', path: '/how-we-work' },
  { id: 'faq', path: '/faq' },
];

export const routePath = (id) => routes.find((route) => route.id === id)?.path ?? '/';
