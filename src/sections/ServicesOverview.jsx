import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';
import { services } from '../data/services';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { DirArrow } from '../components/ui/Button';

export function ServicesOverview({ primary = false }) {
  const { t } = useI18n();

  return (
    <Section id="services" labelledBy="services-title" className="bg-surface/60">
      <SectionHeading
        id="services-title"
        level={primary ? 1 : 2}
        eyebrow={t('services.eyebrow')}
        title={t('services.title')}
        subtitle={t('services.subtitle')}
        align="center"
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {services.map((service, i) => {
          const Icon = service.icon;
          const featured = service.featured;

          return (
            <Reveal
              key={service.id}
              delay={i * 0.06}
              className={featured ? 'lg:col-span-2' : ''}
            >
              <Link
                to={service.path}
                className={`group flex h-full flex-col rounded-3xl p-7 transition duration-300 hover:-translate-y-1 sm:p-8 ${
                  featured
                    ? 'border-gradient shadow-soft hover:shadow-lift'
                    : 'border border-line bg-surface shadow-ring hover:border-brand/35 hover:shadow-soft'
                }`}
              >
                <div className={featured ? 'lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10' : ''}>
                  <div>
                    <span
                      className={`inline-flex size-12 items-center justify-center rounded-2xl ${
                        featured ? 'bg-accent-soft text-accent' : 'bg-brand-soft text-brand'
                      }`}
                    >
                      <Icon aria-hidden="true" className="size-6" />
                    </span>

                    <h3
                      className={`mt-5 font-extrabold text-ink ${
                        featured ? 'text-2xl sm:text-[1.75rem]' : 'text-xl'
                      }`}
                    >
                      {t(`${service.key}.title`)}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-body sm:text-base">
                      {t(`${service.key}.desc`)}
                    </p>
                  </div>

                  <ul className={`mt-6 flex flex-col gap-2.5 ${featured ? 'lg:mt-0' : ''}`}>
                    {t(`${service.key}.bullets`).map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-body">
                        <Check
                          aria-hidden="true"
                          className={`mt-0.5 size-4 shrink-0 ${featured ? 'text-accent' : 'text-brand'}`}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <span
                  className={`mt-7 inline-flex items-center gap-2 text-sm font-bold ${
                    featured ? 'text-accent' : 'text-brand'
                  }`}
                >
                  {t(`${service.key}.cta`)}
                  <DirArrow className="transition-transform duration-200 group-hover:translate-x-[3px] rtl:group-hover:-translate-x-[3px]" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
