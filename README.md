# Al-Nawawy | النواوي

Landing page for Al-Nawawy — **AI · Automation · Web · Marketing**.

Bilingual (Arabic / English) with full RTL support, built with React 19, Vite 7 and Tailwind CSS v4.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:5173/Al-Nawawy/
npm run build    # production build into dist/
npm run preview  # preview the production build
```

---

## Changing contact details

Everything lives in one file: [`src/config/site.js`](src/config/site.js).

```js
export const CONTACT_PHONE = '01012900130'; // shown on the page
export const CONTACT_PHONE_INTL = '+201012900130'; // used for tel: links
export const WHATSAPP_NUMBER = '201012900130'; // used for wa.me links
```

The same file holds the email, site URL and social links:

```js
export const siteConfig = {
  url: '', // set after the first deploy
  email: '', // leave empty and the email link is not rendered
  social: { facebook: '', instagram: '', linkedin: '', x: '', youtube: '' },
};
```

Any social value left as an empty string is simply not rendered — no dead icons, no
placeholder accounts.

---

## Adding your media

The showcase section reads [`src/data/media.js`](src/data/media.js). Each entry renders a
labelled placeholder until you point it at a real file.

1. Drop the file into `public/assets/videos/` or `public/assets/images/`.
2. Set `src` on the matching entry (and `poster` for videos):

```js
{
  id: 'ad-01',
  type: 'video',
  src: 'assets/videos/ad-01.mp4',
  poster: 'assets/images/ad-01-poster.jpg',
  // ...
}
```

The card then renders a real lazy-loaded video or image with a lightbox. Add or remove
entries freely — the grid adapts.

---

## Editing the copy

No text is hardcoded in components. Both languages live in:

- [`src/i18n/ar.js`](src/i18n/ar.js) — Arabic
- [`src/i18n/en.js`](src/i18n/en.js) — English

The two files share the same shape. Structure (icons, ordering, anchors) lives in
`src/data/`, so adding a service means one entry in `src/data/services.js` plus a matching
block in each dictionary.

The site opens in Arabic; the visitor's choice is remembered in `localStorage`.

---

## Deploying to GitHub Pages

The repo ships with [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
builds and deploys on every push to `main`.

1. Push the repo to GitHub as **`Al-Nawawy`**.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The site goes live at `https://<your-username>.github.io/Al-Nawawy/`.
4. Set `siteConfig.url` in `src/config/site.js` to that URL so the Open Graph tags and
   structured data point at the right place.

Using a custom domain or a different host instead? Change `base` in
[`vite.config.js`](vite.config.js) to `'/'`.

---

## Project structure

```
src/
  components/
    layout/    navbar, mobile menu, footer, logo, language toggle
    media/     showcase cards, placeholder slots, lightbox
    ui/        container, button, section, heading, reveal
    visuals/   hero composition, flow diagrams
  config/      site.js — all contact details
  data/        structure + icons for each section
  hooks/       sticky nav, scroll spy, scroll reveal, focus trap, scroll lock
  i18n/        ar.js, en.js, provider
  sections/    one file per page section
  seo/         JSON-LD
  styles/      design tokens and base styles
```

---

## Notes

- No analytics, no tracking, no cookies.
- No client names, testimonials, ratings or statistics — nothing on the page claims
  credibility the business has not earned yet.
- Animations respect `prefers-reduced-motion`; with it on, content appears instantly
  rather than depending on scroll.
