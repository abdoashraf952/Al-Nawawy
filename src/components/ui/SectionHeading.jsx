import { Reveal } from './Reveal';

export function Eyebrow({ children, tone = 'brand', className = '' }) {
  const tones = {
    brand: 'text-brand bg-brand-soft border-brand/15',
    accent: 'text-accent bg-accent-soft border-accent/15',
    light: 'text-white/80 bg-white/10 border-white/20',
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  eyebrowTone = 'brand',
  title,
  subtitle,
  align = 'start',
  tone = 'dark',
  id,
  className = '',
}) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto max-w-3xl' : 'items-start text-start';
  const titleColor = tone === 'light' ? 'text-white' : 'text-ink';
  const subColor = tone === 'light' ? 'text-white/70' : 'text-body';

  return (
    <Reveal className={`flex flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={`text-3xl leading-[1.15] font-extrabold sm:text-4xl lg:text-[2.7rem] ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && <p className={`max-w-2xl text-base leading-relaxed sm:text-lg ${subColor}`}>{subtitle}</p>}
    </Reveal>
  );
}
