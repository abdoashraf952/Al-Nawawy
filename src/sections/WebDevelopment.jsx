import {
  Building2,
  Briefcase,
  MousePointerClick,
  Package,
  ShoppingBag,
  Wrench,
  GalleryVerticalEnd,
  AppWindow,
  Plug,
} from 'lucide-react';
import { useI18n } from '../i18n/useI18n';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { ServiceCTA } from '../components/ui/ServiceCTA';

const offeringIcons = [
  Building2,
  Briefcase,
  MousePointerClick,
  Package,
  ShoppingBag,
  Wrench,
  GalleryVerticalEnd,
  AppWindow,
];

export function WebDevelopment({ primary = false }) {
  const { t } = useI18n();

  return (
    <Section id="web" labelledBy="web-title">
      <SectionHeading
        id="web-title"
        level={primary ? 1 : 2}
        eyebrow={t('web.eyebrow')}
        title={t('web.title')}
        subtitle={t('web.subtitle')}
      />

      <Reveal className="mt-6 max-w-3xl text-base leading-relaxed font-semibold text-ink">
        {t('web.intro')}
      </Reveal>

      <Reveal className="mt-10">
        <h3 className="text-lg font-bold text-ink">{t('web.offeringsTitle')}</h3>
      </Reveal>

      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t('web.offerings').map((offering, i) => {
          const Icon = offeringIcons[i];
          return (
            <Reveal
              as="li"
              key={offering.title}
              delay={i * 0.04}
              className="rounded-2xl border border-line bg-surface p-5 shadow-ring transition duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-soft"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <h4 className="mt-4 text-[0.95rem] font-bold text-ink">{offering.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-body">{offering.desc}</p>
            </Reveal>
          );
        })}
      </ul>

      {/* Deliberately secondary: AI is an add-on here, never the framing. */}
      <Reveal className="mt-10 rounded-3xl border border-dashed border-line bg-bg p-7 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold tracking-wide text-muted uppercase">
              <Plug aria-hidden="true" className="size-3.5" />
              {t('web.optionalTag')}
            </span>
            <h3 className="mt-4 text-lg font-bold text-ink sm:text-xl">{t('web.optionalTitle')}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-body">{t('web.optionalText')}</p>
          </div>

          <ul className="flex flex-wrap gap-2">
            {t('web.optionalItems').map((item) => (
              <li
                key={item}
                className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-body"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <ServiceCTA service="web" />
    </Section>
  );
}
