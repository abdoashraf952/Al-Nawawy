import { MessageCircle } from 'lucide-react';
import { useI18n } from '../../i18n/useI18n';
import { whatsappLink } from '../../config/site';

/** Always-visible WhatsApp shortcut — the primary conversion channel. */
export function FloatingWhatsApp() {
  const { t } = useI18n();

  return (
    <a
      href={whatsappLink(t('hero.whatsappMessage'))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('nav.cta')}
      className="fixed end-4 bottom-4 z-30 inline-flex h-14 items-center gap-2 rounded-full bg-[#128c4a] px-4 text-sm font-bold text-white shadow-lift transition duration-200 hover:-translate-y-0.5 hover:bg-[#0f7a40] sm:end-6 sm:bottom-6 sm:px-5"
    >
      <MessageCircle aria-hidden="true" className="size-6" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
