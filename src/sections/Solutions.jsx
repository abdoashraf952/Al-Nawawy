import { ShoppingBag, Stethoscope, UtensilsCrossed, House, Briefcase } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';
import { whatsappLink } from '../config/site';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';

// Order matches the `solutions.items` array in the dictionaries.
const icons = [ShoppingBag, Stethoscope, UtensilsCrossed, House, Briefcase];

// Service id -> existing nav label key (reuses the short names already translated).
const serviceLabelKey = {
  agents: 'nav.agents',
  automation: 'nav.automation',
  web: 'nav.web',
  marketing: 'nav.marketing',
};

export function Solutions({ primary = false }) {
  const { t } = useI18n();

  return (
    <Section id="solutions" labelledBy="solutions-title">
      <SectionHeading
        id="solutions-title"
        level={primary ? 1 : 2}
        eyebrow={t('solutions.eyebrow')}
        title={t('solutions.title')}
        subtitle={t('solutions.subtitle')}
        align="center"
      />

      <ul className="mt-12 grid gap-5 lg:grid-cols-2">
        {t('solutions.items').map((item, i) => {
          const Icon = icons[i];
          // Five cards in two columns: let the last one span so there is no orphan gap.
          const last = i === 4;
          return (
            <Reveal
              as="li"
              key={item.title}
              delay={(i % 2) * 0.06}
              className={`flex flex-col rounded-3xl border border-line bg-surface p-7 shadow-ring transition duration-300 hover:-translate-y-1 hover:shadow-soft ${
                last ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
              </div>

              <dl className="mt-5 grid gap-4 text-sm leading-relaxed sm:grid-cols-2">
                <div>
                  <dt className="font-bold text-muted">{t('solutions.problemLabel')}</dt>
                  <dd className="mt-1.5 text-body">{item.problem}</dd>
                </div>
                <div>
                  <dt className="font-bold text-brand">{t('solutions.solutionLabel')}</dt>
                  <dd className="mt-1.5 text-body">{item.solution}</dd>
                </div>
              </dl>

              <ul className="mt-5 flex flex-wrap gap-2">
                {item.services.map((id) => (
                  <li
                    key={id}
                    className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand"
                  >
                    {t(serviceLabelKey[id])}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-1">
                <Button
                  href={whatsappLink(item.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                  withArrow
                >
                  {item.cta}
                </Button>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
