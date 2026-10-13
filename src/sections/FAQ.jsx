import { ChevronDown, MessageCircle } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';
import { whatsappLink } from '../config/site';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';

/** Native <details> keeps the accordion keyboard- and screen-reader-accessible with no JS state. */
export function FAQ() {
  const { t } = useI18n();

  return (
    <Section id="faq" labelledBy="faq-title">
      <SectionHeading
        id="faq-title"
        eyebrow={t('faq.eyebrow')}
        title={t('faq.title')}
        subtitle={t('faq.subtitle')}
        align="center"
      />

      <div className="mx-auto mt-12 max-w-3xl">
        <ul className="flex flex-col gap-3">
          {t('faq.items').map((item, i) => (
            <Reveal as="li" key={item.q} delay={Math.min(i, 4) * 0.03}>
              <details className="group rounded-2xl border border-line bg-surface shadow-ring open:shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5 text-start font-bold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown
                    aria-hidden="true"
                    className="size-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-body sm:text-base">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-8 flex justify-center">
          <Button
            href={whatsappLink(t('faq.askMessage'))}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            <MessageCircle aria-hidden="true" className="size-[18px]" />
            {t('faq.askCta')}
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
