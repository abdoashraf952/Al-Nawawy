import { useState } from 'react';
import { MessageCircle, Phone, Send } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';
import { whatsappLink, telLink, CONTACT_PHONE, siteConfig } from '../config/site';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';

const optionIds = ['agents', 'automation', 'web', 'marketing', 'unsure'];

const fieldClass =
  'mt-2 block w-full rounded-xl border border-line bg-bg px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:border-brand focus:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/30';

/**
 * The site is static (GitHub Pages), so there is no server to receive a submission.
 * The form therefore composes the message and hands it to WhatsApp — the primary channel anyway.
 */
export function Contact() {
  const { t } = useI18n();
  const [selected, setSelected] = useState([]);
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');

  const toggle = (id) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const onSubmit = (e) => {
    e.preventDefault();
    const lines = [t('contact.form.message.intro')];
    if (name.trim()) lines.push(`${t('contact.form.message.name')}: ${name.trim()}`);
    if (selected.length) {
      const labels = selected.map((id) => t(`contact.form.options.${id}`)).join(', ');
      lines.push(`${t('contact.form.message.services')}: ${labels}`);
    }
    if (details.trim()) lines.push(`${t('contact.form.message.details')}: ${details.trim()}`);

    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_120%_at_50%_0%,rgb(59_130_246/0.38),transparent_60%),radial-gradient(70%_90%_at_85%_100%,rgb(139_92_246/0.32),transparent_65%)]"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14">
            <div>
              <h2 id="contact-title" className="text-3xl leading-tight font-extrabold text-white sm:text-4xl">
                {t('contact.title')}
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
                {t('contact.subtitle')}
              </p>

              <p className="mt-9 text-sm font-semibold text-white/60">{t('contact.channelsTitle')}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <Button
                  href={whatsappLink(t('cta.secondaryMessage'))}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="light"
                  size="lg"
                >
                  <MessageCircle aria-hidden="true" className="size-[18px]" />
                  {t('cta.secondary')}
                </Button>
                <Button href={telLink} variant="outlineLight" size="lg">
                  <Phone aria-hidden="true" className="size-[18px]" />
                  <span dir="ltr">{CONTACT_PHONE}</span>
                </Button>
              </div>

              {siteConfig.email && (
                <p className="mt-5 text-sm text-white/65">
                  <a href={`mailto:${siteConfig.email}`} dir="ltr" className="font-bold text-white hover:underline">
                    {siteConfig.email}
                  </a>
                </p>
              )}
            </div>

            <form onSubmit={onSubmit} className="rounded-3xl bg-surface p-6 shadow-lift sm:p-8">
              <fieldset>
                <legend className="text-sm font-bold text-ink">{t('contact.form.servicesLabel')}</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {optionIds.map((id) => {
                    const checked = selected.includes(id);
                    return (
                      <label
                        key={id}
                        className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand ${
                          checked
                            ? 'border-brand bg-brand text-white'
                            : 'border-line bg-bg text-body hover:border-brand/45 hover:text-brand'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggle(id)}
                          className="sr-only"
                        />
                        {t(`contact.form.options.${id}`)}
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="mt-5">
                <label htmlFor="contact-name" className="text-sm font-bold text-ink">
                  {t('contact.form.nameLabel')}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('contact.form.namePlaceholder')}
                  className={fieldClass}
                />
              </div>

              <div className="mt-5">
                <label htmlFor="contact-details" className="text-sm font-bold text-ink">
                  {t('contact.form.detailsLabel')}
                </label>
                <textarea
                  id="contact-details"
                  name="details"
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder={t('contact.form.detailsPlaceholder')}
                  className={fieldClass}
                />
              </div>

              <Button type="submit" size="lg" className="mt-6 w-full">
                <Send aria-hidden="true" className="size-[18px] rtl:-scale-x-100" />
                {t('contact.form.submit')}
              </Button>
              <p className="mt-3 text-center text-xs leading-relaxed text-muted">{t('contact.form.note')}</p>
            </form>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
