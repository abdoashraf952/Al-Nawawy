import { useState } from 'react';
import { Menu } from 'lucide-react';
import { navLinks, sectionIds } from '../../data/nav';
import { useI18n } from '../../i18n/useI18n';
import { useStickyNav } from '../../hooks/useStickyNav';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { whatsappLink } from '../../config/site';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Logo } from './Logo';
import { LangToggle } from './LangToggle';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const { t } = useI18n();
  const scrolled = useStickyNav();
  const activeId = useScrollSpy(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? 'border-b border-line bg-surface/85 shadow-ring backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <Container className={`flex items-center justify-between transition-all ${scrolled ? 'h-[68px]' : 'h-20'}`}>
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const active = activeId === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      aria-current={active ? 'true' : undefined}
                      className={`relative rounded-lg px-3 py-2 text-sm font-semibold transition ${
                        active ? 'text-brand' : 'text-body hover:text-ink'
                      }`}
                    >
                      {t(link.labelKey)}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand transition-opacity duration-200 ${
                          active ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LangToggle />
            <span className="hidden sm:block">
              <Button
                href={whatsappLink(t('hero.whatsappMessage'))}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                withArrow
              >
                {t('nav.cta')}
              </Button>
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t('common.openMenu')}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition hover:border-brand/45 hover:text-brand lg:hidden"
            >
              <Menu aria-hidden="true" className="size-5" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activeId={activeId} />
    </>
  );
}
