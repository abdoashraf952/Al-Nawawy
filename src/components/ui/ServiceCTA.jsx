import { MessageCircle } from 'lucide-react';
import { useI18n } from '../../i18n/useI18n';
import { whatsappLink } from '../../config/site';
import { Button } from './Button';
import { Reveal } from './Reveal';

/** Closing call-to-action for a service section, with a service-specific WhatsApp prefill. */
export function ServiceCTA({ service, className = '' }) {
  const { t } = useI18n();

  return (
    <Reveal
      className={`mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-line bg-surface p-6 shadow-ring sm:flex-row sm:items-center sm:p-7 ${className}`}
    >
      <p className="text-base font-bold text-ink">{t('serviceCta.prompt')}</p>
      <Button
        href={whatsappLink(t(`serviceCta.${service}.message`))}
        target="_blank"
        rel="noopener noreferrer"
        withArrow
      >
        <MessageCircle aria-hidden="true" className="size-[18px]" />
        {t(`serviceCta.${service}.label`)}
      </Button>
    </Reveal>
  );
}
