import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n/useI18n';
import { services } from '../../data/services';
import { Section } from './Section';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { DirArrow } from './Button';

/** The other services, shown at the bottom of a service page. */
export function RelatedServices({ current }) {
  const { t } = useI18n();
  const others = services.filter((service) => service.id !== current);

  return (
    <Section id="related" labelledBy="related-title" className="bg-surface/60">
      <SectionHeading
        id="related-title"
        title={t('related.title')}
        subtitle={t('related.subtitle')}
        align="center"
      />

      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {others.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal as="li" key={service.id} delay={i * 0.05}>
              <Link
                to={service.path}
                className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-ring transition duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-soft"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{t(`${service.key}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{t(`${service.key}.desc`)}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-brand">
                  {t(`${service.key}.cta`)}
                  <DirArrow className="transition-transform duration-200 group-hover:translate-x-[3px] rtl:group-hover:-translate-x-[3px]" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
