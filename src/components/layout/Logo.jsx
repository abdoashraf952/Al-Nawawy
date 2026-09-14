import { siteConfig } from '../../config/site';

export function LogoMark({ className = '' }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="nawawy-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#nawawy-mark)" />
      <path
        d="M12 28V12.6c0-.5.6-.8 1-.5l13 9.4V12"
        fill="none"
        stroke="white"
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ tone = 'dark', className = '' }) {
  const nameColor = tone === 'light' ? 'text-white' : 'text-ink';
  const subColor = tone === 'light' ? 'text-white/60' : 'text-muted';

  return (
    <a
      href="#home"
      className={`group inline-flex items-center gap-2.5 rounded-xl ${className}`}
      aria-label={`${siteConfig.name} — ${siteConfig.tagline}`}
    >
      <LogoMark className="size-9 shrink-0 transition-transform duration-300 group-hover:scale-105 sm:size-10" />
      <span className="flex flex-col leading-none">
        <span
          className={`text-lg font-extrabold tracking-tight whitespace-nowrap sm:text-xl ${nameColor}`}
        >
          {siteConfig.name}
        </span>
        <span
          className={`mt-1 hidden text-[0.68rem] font-medium tracking-wide whitespace-nowrap sm:block ${subColor}`}
          dir="ltr"
        >
          {siteConfig.tagline}
        </span>
      </span>
    </a>
  );
}
