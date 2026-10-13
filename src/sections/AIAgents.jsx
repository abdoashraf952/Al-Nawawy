import {
  MessageSquare,
  Bot,
  Brain,
  Database,
  Send,
  ShoppingCart,
  Check,
  Sparkles,
} from 'lucide-react';
import { useI18n } from '../i18n/useI18n';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { ServiceCTA } from '../components/ui/ServiceCTA';
import { StatusDot } from '../components/ui/StatusDot';
import { FlowDiagram } from '../components/visuals/FlowDiagram';

const flowIcons = [MessageSquare, Bot, Brain, Database, Send, ShoppingCart];

export function AIAgents({ primary = false }) {
  const { t } = useI18n();

  return (
    <Section id="ai-agents" labelledBy="agents-title">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <SectionHeading
          id="agents-title"
          level={primary ? 1 : 2}
          eyebrow={t('agents.eyebrow')}
          eyebrowTone="accent"
          title={t('agents.title')}
          subtitle={t('agents.subtitle')}
        />
        <Reveal className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink shadow-ring">
          <StatusDot />
          <span dir="ltr">24/7</span>
        </Reveal>
      </div>

      <Reveal className="mt-6 max-w-3xl text-base leading-relaxed text-body">{t('agents.intro')}</Reveal>

      {/* Channels */}
      <Reveal className="mt-8">
        <p className="text-sm font-bold text-ink">{t('agents.channelsTitle')}</p>
        <ul className="mt-3 flex flex-wrap gap-2.5">
          {t('agents.channels').map((channel) => (
            <li
              key={channel}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-body shadow-ring transition hover:border-brand/40 hover:text-brand"
            >
              {channel}
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Not a chatbot */}
      <Reveal className="mt-10 rounded-3xl border border-accent/20 bg-accent-soft p-7 sm:p-9">
        <div className="flex items-start gap-3">
          <Sparkles aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent" />
          <div>
            <h3 className="text-xl font-extrabold text-ink sm:text-2xl">{t('agents.notChatbotTitle')}</h3>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-body">
              {t('agents.notChatbotText')}
            </p>
          </div>
        </div>

        <ul className="mt-7 grid gap-3 sm:grid-cols-3">
          {t('agents.notChatbotPoints').map((point) => (
            <li key={point.title} className="rounded-2xl border border-line bg-surface p-5">
              <p className="text-sm font-bold text-accent">{point.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-body">{point.desc}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Capabilities */}
      <Reveal className="mt-10">
        <h3 className="text-lg font-bold text-ink">{t('agents.capabilitiesTitle')}</h3>
        <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {t('agents.capabilities').map((capability) => (
            <li key={capability} className="flex items-start gap-2.5 text-sm text-body">
              <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-md bg-success/12 text-success">
                <Check aria-hidden="true" className="size-3.5" />
              </span>
              {capability}
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Flow */}
      <Reveal className="mt-12 rounded-3xl border border-line bg-surface p-7 shadow-soft sm:p-9">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-bold text-ink">{t('agents.flowTitle')}</h3>
          <p className="text-xs text-muted">{t('agents.flowHint')}</p>
        </div>
        <FlowDiagram steps={t('agents.flow')} icons={flowIcons} tone="accent" className="mt-8" />
      </Reveal>

      <ServiceCTA service="agents" />
    </Section>
  );
}
