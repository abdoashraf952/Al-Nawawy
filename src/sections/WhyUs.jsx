import { useI18n } from '../i18n/useI18n';
import { whyIcons } from '../data/whyUs';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';

export function WhyUs() {
  const { t } = useI18n();

  return (
    <Section id="why" labelledBy="why-title" className="bg-surface/60">
      <SectionHeading
        id="why-title"
        eyebrow={t('why.eyebrow')}
        title={t('why.title')}
        subtitle={t('why.subtitle')}
        align="center"
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t('why.items').map((item, i) => {
          const Icon = whyIcons[i];
          return (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 0.06}
              className="group rounded-3xl border border-line bg-surface p-7 shadow-ring transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-soft text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                <Icon aria-hidden="true" className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{item.desc}</p>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
