import { useI18n } from '../i18n/useI18n';
import { problemIcons } from '../data/problems';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';

export function Problem() {
  const { t } = useI18n();
  const items = t('problem.items');

  return (
    <Section id="problem" labelledBy="problem-title">
      <SectionHeading
        id="problem-title"
        eyebrow={t('problem.eyebrow')}
        title={t('problem.title')}
        subtitle={t('problem.subtitle')}
        align="center"
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = problemIcons[i];
          return (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 0.04}
              className="rounded-2xl border border-line bg-surface/70 p-5 transition duration-300 hover:border-brand/30 hover:bg-surface"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-bg text-muted">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <h3 className="mt-4 text-[0.95rem] font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{item.desc}</p>
            </Reveal>
          );
        })}
      </ul>

      <Reveal className="mt-8 rounded-3xl border-gradient p-7 shadow-soft sm:p-9">
        <div className="grid items-center gap-4 lg:grid-cols-[auto_1fr] lg:gap-8">
          <h3 className="text-xl leading-snug font-extrabold text-ink sm:text-2xl lg:max-w-xs">
            {t('problem.solutionTitle')}
          </h3>
          <p className="text-base leading-relaxed text-body">{t('problem.solutionText')}</p>
        </div>
      </Reveal>
    </Section>
  );
}
