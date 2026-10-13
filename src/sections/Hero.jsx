import { motion, useReducedMotion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';
import { whatsappLink } from '../config/site';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { StatusDot } from '../components/ui/StatusDot';
import { HeroVisual } from '../components/visuals/HeroVisual';

export function Hero() {
  const { t } = useI18n();
  const reduced = useReducedMotion();

  const rise = (delay) => ({
    initial: { opacity: 0, y: reduced ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0.01 : 0.6, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_-10%,#ffffff_0%,#f8fafc_45%,#f1f5f9_100%)]"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="max-w-xl">
            <motion.span
              {...rise(0)}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-semibold text-body shadow-ring"
            >
              <StatusDot />
              {t('hero.badge')}
            </motion.span>

            <motion.h1
              {...rise(0.08)}
              id="hero-title"
              className="mt-6 text-[clamp(2.25rem,6.2vw,4rem)] leading-[1.08] font-extrabold text-ink"
            >
              {t('hero.titleLead')}{' '}
              <span className="text-gradient">{t('hero.titleHighlight')}</span>
              {t('hero.titleTail')}
            </motion.h1>

            <motion.p {...rise(0.16)} className="mt-5 max-w-lg text-base leading-relaxed text-body sm:text-lg">
              {t('hero.subtitle')}
            </motion.p>

            <motion.div {...rise(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                href={whatsappLink(t('hero.whatsappMessage'))}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                withArrow
              >
                <MessageCircle aria-hidden="true" className="size-[18px]" />
                {t('hero.ctaPrimary')}
              </Button>
              <Button href="#services" variant="secondary" size="lg">
                {t('hero.ctaSecondary')}
              </Button>
            </motion.div>

            <motion.p
              {...rise(0.32)}
              className="mt-7 max-w-md border-s-2 border-brand/25 ps-4 text-sm leading-relaxed text-muted"
            >
              {t('hero.note')}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.01 : 0.7, delay: reduced ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
