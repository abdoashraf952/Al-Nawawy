import { User, Inbox, Workflow, Database, Bell, CalendarClock, Zap } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { FlowDiagram } from '../components/visuals/FlowDiagram';

const flowIcons = [User, Inbox, Workflow, Database, Bell, CalendarClock];

export function Automation() {
  const { t } = useI18n();

  return (
    <Section id="automation" labelledBy="automation-title" className="bg-surface/60">
      <SectionHeading
        id="automation-title"
        eyebrow={t('automation.eyebrow')}
        title={t('automation.title')}
        subtitle={t('automation.subtitle')}
      />

      <Reveal className="mt-6 max-w-3xl text-base leading-relaxed text-body">
        {t('automation.intro')}
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
        <Reveal className="rounded-3xl border border-line bg-surface p-7 shadow-ring">
          <h3 className="text-lg font-bold text-ink">{t('automation.examplesTitle')}</h3>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {t('automation.examples').map((example) => (
              <li
                key={example}
                className="rounded-full bg-brand-soft px-3.5 py-1.5 text-sm font-semibold text-brand"
              >
                {example}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08} className="flex flex-col justify-center rounded-3xl border-gradient p-7 shadow-soft">
          <div className="flex items-start gap-3">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
              <Zap aria-hidden="true" className="size-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-ink">{t('automation.positioningTitle')}</h3>
              <p className="mt-3 text-base leading-relaxed text-body">{t('automation.positioning')}</p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-8 rounded-3xl border border-line bg-surface p-7 shadow-soft sm:p-9">
        <h3 className="text-lg font-bold text-ink">{t('automation.flowTitle')}</h3>
        <FlowDiagram steps={t('automation.flow')} icons={flowIcons} className="mt-8" />
      </Reveal>
    </Section>
  );
}
