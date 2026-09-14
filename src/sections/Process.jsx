import { useI18n } from '../i18n/useI18n';
import { processIcons } from '../data/process';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';

export function Process() {
  const { t } = useI18n();

  return (
    <Section id="process" labelledBy="process-title">
      <SectionHeading
        id="process-title"
        eyebrow={t('process.eyebrow')}
        title={t('process.title')}
        subtitle={t('process.subtitle')}
        align="center"
      />

      <div className="relative mt-14">
        <div
          aria-hidden="true"
          className="absolute start-[31px] top-4 bottom-4 w-0.5 rounded-full bg-linear-to-b from-brand/35 to-accent/35 lg:inset-x-12 lg:top-8 lg:bottom-auto lg:h-0.5 lg:w-auto lg:bg-linear-to-r"
        />

        <ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
          {t('process.steps').map((step, i) => {
            const Icon = processIcons[i];
            return (
              <Reveal as="li" key={step.title} delay={i * 0.1} className="flex items-start gap-5 lg:flex-col lg:items-center lg:text-center">
                <span className="relative z-10 inline-flex size-16 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface text-brand shadow-soft">
                  <Icon aria-hidden="true" className="size-6" />
                  <span
                    dir="ltr"
                    className="absolute -top-2 -end-2 inline-flex size-7 items-center justify-center rounded-full bg-linear-to-br from-brand to-accent text-[0.7rem] font-extrabold text-white"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </span>
                <div className="pt-2 lg:pt-0">
                  <h3 className="text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-body">{step.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
