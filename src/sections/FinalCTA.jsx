import { MessageCircle, Phone } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';
import { whatsappLink, telLink, CONTACT_PHONE } from '../config/site';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';

export function FinalCTA() {
  const { t } = useI18n();

  return (
    <section id="contact" aria-labelledby="cta-title" className="scroll-mt-28 pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink px-7 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_120%_at_50%_0%,rgb(59_130_246/0.38),transparent_60%),radial-gradient(70%_90%_at_85%_100%,rgb(139_92_246/0.32),transparent_65%)]"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 id="cta-title" className="text-3xl leading-tight font-extrabold text-white sm:text-4xl lg:text-[2.7rem]">
              {t('cta.title')}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {t('cta.subtitle')}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button
                href={whatsappLink(t('cta.primaryMessage'))}
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                size="lg"
                withArrow
              >
                {t('cta.primary')}
              </Button>
              <Button
                href={whatsappLink(t('cta.secondaryMessage'))}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlineLight"
                size="lg"
              >
                <MessageCircle aria-hidden="true" className="size-[18px]" />
                {t('cta.secondary')}
              </Button>
            </div>

            <p className="mt-7 flex flex-wrap items-center justify-center gap-2 text-sm text-white/65">
              <Phone aria-hidden="true" className="size-4" />
              {t('cta.phoneLabel')}
              <a href={telLink} dir="ltr" className="font-bold text-white underline-offset-4 hover:underline">
                {CONTACT_PHONE}
              </a>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
