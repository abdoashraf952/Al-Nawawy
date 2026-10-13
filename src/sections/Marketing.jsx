import { useRef, useState } from 'react';
import { Compass, PenLine, Target, Clapperboard, Check, Info } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { ServiceCTA } from '../components/ui/ServiceCTA';

// AI Creative is styled identically to the other three on purpose: it is a tool
// inside the service, not the service itself.
const pillars = [
  { id: 'strategy', icon: Compass },
  { id: 'content', icon: PenLine },
  { id: 'ads', icon: Target },
  { id: 'aiCreative', icon: Clapperboard },
];

export function Marketing() {
  const { t, isRtl } = useI18n();
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);

  const onKeyDown = (e) => {
    const forward = isRtl ? 'ArrowLeft' : 'ArrowRight';
    const back = isRtl ? 'ArrowRight' : 'ArrowLeft';
    let next = null;

    if (e.key === forward || e.key === 'ArrowDown') next = (active + 1) % pillars.length;
    else if (e.key === back || e.key === 'ArrowUp') next = (active - 1 + pillars.length) % pillars.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = pillars.length - 1;

    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const current = pillars[active];
  const key = `marketing.pillars.${current.id}`;

  return (
    <Section id="marketing" labelledBy="marketing-title" className="bg-surface/60">
      <SectionHeading
        id="marketing-title"
        eyebrow={t('marketing.eyebrow')}
        title={t('marketing.title')}
        subtitle={t('marketing.subtitle')}
      />

      <Reveal className="mt-6 max-w-3xl text-base leading-relaxed text-body">{t('marketing.intro')}</Reveal>

      <Reveal className="mt-10">
        <p className="text-xs text-muted">{t('marketing.pillarsHint')}</p>

        <div
          role="tablist"
          aria-label={t('marketing.title')}
          onKeyDown={onKeyDown}
          className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const selected = i === active;
            return (
              <button
                key={pillar.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`pillar-tab-${pillar.id}`}
                aria-selected={selected}
                aria-controls={`pillar-panel-${pillar.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 rounded-2xl border p-4 text-start transition duration-300 ${
                  selected
                    ? 'border-brand/40 bg-surface shadow-soft'
                    : 'border-line bg-surface/60 hover:border-brand/25 hover:bg-surface'
                }`}
              >
                <span
                  className={`inline-flex size-10 shrink-0 items-center justify-center rounded-xl transition ${
                    selected ? 'bg-brand text-white' : 'bg-brand-soft text-brand'
                  }`}
                >
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-ink">{t(`marketing.pillars.${pillar.id}.title`)}</span>
                  <span
                    dir="ltr"
                    className={`mt-0.5 block text-xs font-semibold ${selected ? 'text-brand' : 'text-muted'}`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`pillar-panel-${current.id}`}
          aria-labelledby={`pillar-tab-${current.id}`}
          tabIndex={0}
          className="mt-5 rounded-3xl border border-line bg-surface p-7 shadow-soft sm:p-9"
        >
          <h3 className="text-xl font-extrabold text-ink sm:text-2xl">{t(`${key}.title`)}</h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-body">{t(`${key}.desc`)}</p>

          <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {t(`${key}.items`).map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-md bg-brand-soft text-brand">
                  <Check aria-hidden="true" className="size-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          {current.id === 'aiCreative' && (
            <p className="mt-6 flex items-start gap-2.5 rounded-2xl border border-line bg-bg p-4 text-sm leading-relaxed text-body">
              <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-muted" />
              {t(`${key}.note`)}
            </p>
          )}
        </div>
      </Reveal>

      <Reveal className="mt-8 rounded-3xl border-gradient p-7 shadow-soft sm:p-9">
        <div className="grid items-center gap-4 lg:grid-cols-[auto_1fr] lg:gap-8">
          <h3 className="text-xl leading-snug font-extrabold text-ink sm:text-2xl lg:max-w-xs">
            {t('marketing.closingTitle')}
          </h3>
          <p className="text-base leading-relaxed text-body">{t('marketing.closing')}</p>
        </div>
      </Reveal>

      <ServiceCTA service="marketing" />
    </Section>
  );
}
