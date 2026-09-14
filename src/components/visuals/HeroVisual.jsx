import { Bot, Workflow, Monitor, BarChart3 } from 'lucide-react';
import { useI18n } from '../../i18n/useI18n';
import { StatusDot } from '../ui/StatusDot';

const cards = [
  { key: 'agents', icon: Bot, tone: 'success', indent: 'lg:ms-14', delay: '0s' },
  { key: 'web', icon: Monitor, tone: 'accent', indent: 'lg:ms-2', delay: '1.1s' },
  { key: 'marketing', icon: BarChart3, tone: 'brand', indent: 'lg:ms-16', delay: '2.2s' },
  { key: 'automation', icon: Workflow, tone: 'amber', indent: 'lg:ms-6', delay: '3.3s' },
];

export function HeroVisual() {
  const { t } = useI18n();

  return (
    <div
      className="relative isolate w-full"
      role="img"
      aria-label={t('heroVisual.ariaLabel')}
    >
      {/* Soft gradient ribbon behind the composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-6 -top-10 -z-10 h-[85%] animate-ribbon rounded-[50%] bg-[radial-gradient(60%_60%_at_50%_50%,rgb(139_92_246/0.22),transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 bottom-0 -z-10 h-[60%] rounded-[50%] bg-[radial-gradient(55%_55%_at_50%_50%,rgb(59_130_246/0.2),transparent_70%)] blur-2xl"
      />

      <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-5">
        {/* Central stacked panel */}
        <div className="relative mx-auto w-full max-w-[380px] lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-x-6 -top-5 h-full rounded-[1.75rem] border border-white/60 bg-white/45 backdrop-blur-[2px]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-3 -top-2.5 h-full rounded-[1.75rem] border border-white/70 bg-white/65 backdrop-blur-[2px]"
          />
          <div className="relative rounded-[1.75rem] border border-line bg-surface p-6 shadow-soft sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <p className="text-2xl leading-[1.25] font-extrabold text-ink sm:text-[1.7rem]">
                {t('heroVisual.line1')}
                <br />
                {t('heroVisual.line2')}
                <br />
                <span className="text-gradient">{t('heroVisual.line3')}</span>
              </p>
              <BarChart3 aria-hidden="true" className="size-7 shrink-0 text-brand" />
            </div>

            <div className="mt-6 flex h-16 items-end gap-1.5" aria-hidden="true">
              {[38, 56, 30, 72, 48, 88].map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`w-full rounded-md ${
                    i === 5 ? 'bg-gradient-to-t from-brand to-accent' : 'bg-brand/12'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating capability cards */}
        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-3.5">
          {cards.map(({ key, icon: Icon, tone, indent, delay }) => (
            <li
              key={key}
              style={{ animationDelay: delay }}
              className={`animate-float rounded-2xl border border-line bg-surface p-3.5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-4 ${indent}`}
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon aria-hidden="true" className="size-[18px]" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-ink">{t(`heroVisual.cards.${key}.title`)}</p>
                  <p className="mt-1 flex items-start gap-1.5 text-xs leading-snug text-muted">
                    <StatusDot tone={tone} className="mt-1" />
                    <span>{t(`heroVisual.cards.${key}.sub`)}</span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
