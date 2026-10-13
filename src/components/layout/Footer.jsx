import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Twitter, Mail, Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { siteConfig, telLink, whatsappLink, CONTACT_PHONE } from '../../config/site';
import { useI18n } from '../../i18n/useI18n';
import { Container } from '../ui/Container';
import { LogoMark } from './Logo';
import { routePath } from '../../data/routes';

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  x: Twitter,
  youtube: Youtube,
};

export function Footer() {
  const { t } = useI18n();

  const serviceLinks = [
    { to: routePath('ai-agents'), label: t('nav.agents') },
    { to: routePath('automation'), label: t('nav.automation') },
    { to: routePath('web'), label: t('services.items.web.title') },
    { to: routePath('marketing'), label: t('nav.marketing') },
  ];

  const companyLinks = [
    { to: routePath('services'), label: t('nav.services') },
    { to: routePath('use-cases'), label: t('nav.solutions') },
    { to: routePath('work'), label: t('nav.work') },
    { to: routePath('how-we-work'), label: t('nav.process') },
    { to: routePath('faq'), label: t('nav.faq') },
    { to: '#contact', label: t('nav.contact'), anchor: true },
  ];

  // Only render accounts that are actually configured in src/config/site.js
  const socials = Object.entries(siteConfig.social).filter(([, url]) => Boolean(url));

  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="size-10" />
              <div className="flex flex-col leading-none">
                <span className="text-lg font-extrabold text-ink">{siteConfig.name}</span>
                <span className="mt-1 text-sm font-semibold text-muted">{siteConfig.nameAr}</span>
              </div>
            </div>
            <p className="mt-3 text-sm font-semibold text-brand" dir="ltr">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-body">{t('footer.about')}</p>

            {socials.length > 0 && (
              <ul className="mt-5 flex items-center gap-2">
                {socials.map(([key, url]) => {
                  const Icon = socialIcons[key];
                  return (
                    <li key={key}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={key}
                        className="inline-flex size-9 items-center justify-center rounded-full border border-line text-body transition hover:border-brand/45 hover:text-brand"
                      >
                        <Icon aria-hidden="true" className="size-4" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <FooterColumn title={t('footer.servicesTitle')} links={serviceLinks} />
          <FooterColumn title={t('footer.companyTitle')} links={companyLinks} />

          <div>
            <h3 className="text-sm font-bold text-ink">{t('footer.contactTitle')}</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={telLink}
                  className="inline-flex items-center gap-2 text-body transition hover:text-brand"
                >
                  <Phone aria-hidden="true" className="size-4 shrink-0" />
                  <span dir="ltr">{CONTACT_PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(t('cta.secondaryMessage'))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-body transition hover:text-brand"
                >
                  <MessageCircle aria-hidden="true" className="size-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
              {siteConfig.email && (
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 text-body transition hover:text-brand"
                  >
                    <Mail aria-hidden="true" className="size-4 shrink-0" />
                    <span dir="ltr">{siteConfig.email}</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="text-sm text-muted">
            © <span dir="ltr">{new Date().getFullYear()}</span> {siteConfig.name} — {siteConfig.nameAr}.{' '}
            {t('footer.rights')}
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-body transition hover:text-brand"
          >
            <ArrowUp aria-hidden="true" className="size-4" />
            {t('footer.backToTop')}
          </button>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-ink">{title}</h3>
      <ul className="mt-4 flex flex-col gap-3 text-sm">
        {links.map((link) => (
          <li key={link.to}>
            {link.anchor ? (
              <a href={link.to} className="text-body transition hover:text-brand">
                {link.label}
              </a>
            ) : (
              <Link to={link.to} className="text-body transition hover:text-brand">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
