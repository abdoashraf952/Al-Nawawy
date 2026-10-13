import { Check, Package, Layers, FileText } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';
import { whatsappLink } from '../config/site';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';

// Order matches the `engage.paths` array in the dictionaries. The middle path is highlighted.
const icons = [Package, Layers, FileText];
const HIGHLIGHT = 1;

export function Engagement() {
  const { t } = useI18n();

  return (
    <Section id="engage" labelledBy="engage-title" className="bg-surface/60">
      <SectionHeading
        id="engage-title"
        eyebrow={t('engage.eyebrow')}
        title={t('engage.title')}
        subtitle={t('engage.subtitle')}
        align="center"
      />

      <ul className="mt-12 grid gap-5 lg:grid-cols-3">
        {t('engage.paths').map((path, i) => {
          const Icon = icons[i];
          const highlighted = i === HIGHLIGHT;
          return (
            <Reveal
              as="li"
              key={path.title}
              delay={i * 0.06}
              className={`flex flex-col rounded-3xl p-7 transition duration-300 hover:-translate-y-1 ${
                highlighted
                  ? 'border-gradient shadow-soft hover:shadow-lift'
                  : 'border border-line bg-surface shadow-ring hover:shadow-soft'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                {highlighted && (
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                    {t('engage.recommended')}
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-ink">{path.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{path.desc}</p>

              <ul className="mt-5 flex flex-col gap-2.5">
                {path.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-body">
                    <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <Button
                  href={whatsappLink(path.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={highlighted ? 'primary' : 'secondary'}
                  className="w-full"
                  withArrow
                >
                  {path.cta}
                </Button>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
