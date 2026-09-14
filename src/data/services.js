import { Bot, Workflow, Code2, Megaphone } from 'lucide-react';

// Structure + i18n keys only. All copy lives in src/i18n/*.js
export const services = [
  {
    id: 'ai-agents',
    key: 'services.items.agents',
    icon: Bot,
    href: '#ai-agents',
    featured: true,
    accent: 'accent',
  },
  {
    id: 'automation',
    key: 'services.items.automation',
    icon: Workflow,
    href: '#automation',
    accent: 'brand',
  },
  {
    id: 'web',
    key: 'services.items.web',
    icon: Code2,
    href: '#web',
    accent: 'brand',
  },
  {
    id: 'marketing',
    key: 'services.items.marketing',
    icon: Megaphone,
    href: '#marketing',
    accent: 'brand',
  },
];
