import { Bot, Workflow, Code2, Megaphone } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';

const icons = [Bot, Workflow, Code2, Megaphone];

export function TrustStrip() {
  const { t } = useI18n();
  const items = t('trust.items');

  return (
    <section aria-labelledby="trust-title" className="pb-4">
      <Container>
        <Reveal className="rounded-3xl border border-line bg-surface p-6 shadow-ring sm:p-8">
          <div className="text-center">
            <h2 id="trust-title" className="text-lg font-bold text-ink sm:text-xl">
              {t('trust.title')}
            </h2>
            <p className="mt-2 text-sm text-muted">{t('trust.subtitle')}</p>
          </div>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => {
              const Icon = icons[i];
              return (
                <li
                  key={item.title}
                  className="flex items-center gap-3 rounded-2xl border border-line/80 bg-bg px-4 py-3.5 transition duration-300 hover:border-brand/35 hover:bg-surface"
                >
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icon aria-hidden="true" className="size-[18px]" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-ink">{item.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">{item.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
