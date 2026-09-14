import { useCallback, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { X } from 'lucide-react';
import { useI18n } from '../../i18n/useI18n';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { assetUrl } from '../../data/media';

export function Lightbox({ item, onClose }) {
  const { t, lang } = useI18n();
  const panelRef = useRef(null);
  const reduced = useReducedMotion();
  const open = Boolean(item);

  const close = useCallback(() => onClose(), [onClose]);
  useLockBodyScroll(open);
  useFocusTrap(panelRef, open, close);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.01 : 0.2 }}
        >
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={close} aria-hidden="true" />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={item.title[lang]}
            className="relative z-10 w-full max-w-4xl"
            initial={{ scale: reduced ? 1 : 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: reduced ? 1 : 0.97, opacity: 0 }}
            transition={{ duration: reduced ? 0.01 : 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between gap-4 pb-3">
              <p className="text-sm font-bold text-white">{item.title[lang]}</p>
              <button
                type="button"
                onClick={close}
                aria-label={t('common.close')}
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/10"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl bg-black shadow-lift">
              {item.type === 'video' ? (
                <video
                  src={assetUrl(item.src)}
                  poster={item.poster ? assetUrl(item.poster) : undefined}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[75dvh] w-full"
                />
              ) : (
                <img
                  src={assetUrl(item.src)}
                  alt={item.title[lang]}
                  className="max-h-[75dvh] w-full object-contain"
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
