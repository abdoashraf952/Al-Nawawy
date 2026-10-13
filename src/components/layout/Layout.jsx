import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useI18n } from '../../i18n/useI18n';
import { routes } from '../../data/routes';
import { siteConfig } from '../../config/site';
import { injectStructuredData } from '../../seo/structuredData';
import { Contact } from '../../sections/Contact';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingWhatsApp } from './FloatingWhatsApp';

/**
 * Shell shared by every page. Contact lives here, not in the pages, so it appears
 * at the bottom of all of them.
 */
export function Layout() {
  const { t, lang } = useI18n();
  const { pathname } = useLocation();
  const mainRef = useRef(null);
  const firstRender = useRef(true);

  const cleanPath = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  const route = routes.find((r) => r.path === cleanPath);
  const pageId = route?.id ?? 'notFound';
  const isHome = route?.id === 'home';

  // New page: back to the top, and move focus into it so keyboard and screen-reader users
  // land where the content starts. Skipped on first load so the browser keeps its own behaviour.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname]);

  // Per-page title, description, canonical and structured data.
  useEffect(() => {
    document.title = t(`pages.${pageId}.title`);
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t(`pages.${pageId}.description`));

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && route) {
      canonical.setAttribute('href', siteConfig.url + (isHome ? '' : `${route.path.slice(1)}/`));
    }

    injectStructuredData(lang, { includeFaq: pageId === 'faq' });
  }, [t, lang, pageId, route, isHome]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        {t('common.skipToContent')}
      </a>

      <Navbar />

      <main id="main" ref={mainRef} tabIndex={-1} className="outline-none">
        {/* Opacity-only entrance: a transform here would trap the lightbox's fixed positioning. */}
        <div key={pathname} className={`animate-page-in ${isHome ? '' : 'pt-20 lg:pt-24'}`}>
          <Outlet />
        </div>
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
