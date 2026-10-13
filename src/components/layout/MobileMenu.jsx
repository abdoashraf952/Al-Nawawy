import { useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import { navLinks, contactLink } from '../../data/nav';
import { useI18n } from '../../i18n/useI18n';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { whatsappLink } from '../../config/site';
import { Button } from '../ui/Button';
import { LangToggle } from './LangToggle';
import { Logo } from './Logo';

export function MobileMenu({ open, onClose }) {
  const { t } = useI18n();
  const panelRef = useRef(null);
  const reduced = useReducedMotion();

  useLockBodyScroll(open);
  useFocusTrap(panelRef, open, onClose);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.01 : 0.2 }}
        >
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

          <motion.div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={t('nav.services')}
            className="absolute inset-x-0 top-0 max-h-dvh overflow-y-auto rounded-b-[2rem] bg-surface p-5 shadow-lift"
            initial={{ y: reduced ? 0 : '-8%', opacity: reduced ? 1 : 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: reduced ? 0 : '-8%', opacity: 0 }}
            transition={{ duration: reduced ? 0.01 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={onClose}
                aria-label={t('common.closeMenu')}
                className="inline-flex size-10 items-center justify-center rounded-full border border-line text-ink transition hover:border-brand/45 hover:text-brand"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <nav className="mt-6" aria-label={t('nav.services')}>
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, y: reduced ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduced ? 0 : 0.05 + i * 0.035, duration: reduced ? 0.01 : 0.3 }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.end}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `flex items-center justify-between border-b border-line/70 py-3.5 text-base font-semibold transition ${
                          isActive ? 'text-brand' : 'text-ink hover:text-brand'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {t(link.labelKey)}
                          <span
                            aria-hidden="true"
                            className={`size-1.5 rounded-full transition ${isActive ? 'bg-brand' : 'bg-transparent'}`}
                          />
                        </>
                      )}
                    </NavLink>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: reduced ? 0 : 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduced ? 0 : 0.05 + navLinks.length * 0.035, duration: reduced ? 0.01 : 0.3 }}
                >
                  <a
                    href={contactLink.href}
                    onClick={onClose}
                    className="flex items-center justify-between border-b border-line/70 py-3.5 text-base font-semibold text-ink transition hover:text-brand"
                  >
                    {t(contactLink.labelKey)}
                  </a>
                </motion.li>
              </ul>
            </nav>

            <div className="mt-6 flex items-center gap-3">
              <Button
                href={whatsappLink(t('hero.whatsappMessage'))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
                withArrow
                onClick={onClose}
              >
                {t('nav.cta')}
              </Button>
              <LangToggle />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
