# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install
npm run dev      # http://localhost:5173/Al-Nawawy/  (note the base path)
npm run build
npm run preview  # serves dist/ at http://localhost:4173/Al-Nawawy/
```

There is no test suite, no linter and no typechecker in this project. Verification is
visual and behavioral: build, serve, and drive the page in a browser. If you need
automated checks, install a headless browser **in the scratchpad directory**, not as a
project dependency — the dependency list is deliberately minimal (`react`, `react-dom`,
`motion`, `lucide-react`).

The dev and preview URLs include `/Al-Nawawy/` because `base` is set for GitHub Pages
project-site hosting. Loading bare `localhost:5173` yields a blank page.

## Content rules that the code enforces

These are product requirements, not style preferences. Violating them breaks the point of
the page.

- **No fabricated credibility.** No client names, testimonials, ratings, project counts,
  revenue figures, awards or invented social accounts. Where a conventional landing page
  would put social proof, this one puts neutral capability statements. Social links render
  only for non-empty values in `siteConfig.social`.
- **The four services are independent.** AI Agents, Business Automation, Web Development
  and Marketing are separate offerings, not one AI product. Specifically:
  - `sections/WebDevelopment.jsx` leads AI-free. AI appears only in a visually secondary,
    dashed-border panel explicitly marked optional. Never reframe this section as "AI
    website development".
  - `sections/Marketing.jsx` presents AI Creative Production as one of four
    identically-styled pillars. Giving it a gradient, larger size or extra prominence would
    make the section read as "AI marketing", which it is not.
  - AI Agents is the only service allowed visual dominance (full-width featured card in
    `ServicesOverview`, accent-purple tone).

## Architecture

### Content is data, not JSX

No user-facing string is hardcoded in a component. Three layers:

- `src/i18n/ar.js` and `src/i18n/en.js` — every string, in two objects of identical shape.
- `src/data/*.js` — structure only: ids, anchors, icon component references, ordering,
  feature flags. Several files (`problems.js`, `process.js`, `whyUs.js`) export **icon
  arrays positionally matched to the dictionary arrays** — reorder one and you must reorder
  the other.
- `src/sections/*.jsx` — map over data, call `t('some.path')`.

`t()` resolves a dot path and returns whatever is there: string, array, or object. Sections
routinely do `t('agents.capabilities').map(...)`. A missing key returns the path itself
rather than throwing, so a typo shows up as visible literal text.

Adding a service means one entry in `src/data/services.js` plus a matching block in both
dictionaries — no component changes.

### Bilingual and RTL

`I18nProvider` owns `lang`, writes `document.documentElement.lang`/`dir`, swaps the
`<title>` and meta description, and persists to `localStorage`. Default is Arabic, RTL.

RTL is structural, not patched:

- Use **logical Tailwind utilities everywhere** — `ms-*`/`me-*`, `ps-*`/`pe-*`,
  `start-*`/`end-*`, `text-start`/`text-end`, `border-s-*`. Physical directional classes
  (`ml-`, `pl-`, `left-`) will break the Arabic layout.
- Directional arrows go through `DirArrow` in `components/ui/Button.jsx`, which swaps the
  icon based on `isRtl`.
- Wrap Latin-script fragments that bidi would scramble in `dir="ltr"` — step numbers, the
  phone number, the tagline, file paths. A string like `"24/7"` inside Arabic text
  reorders to `"7/24"` unless isolated; prefer rewording the Arabic to avoid the problem.
- Keyboard handlers that respond to arrow keys must swap Left/Right on RTL — see the
  tablist in `sections/Marketing.jsx`.

### Scroll reveal — do not replace with IntersectionObserver

`src/hooks/useReveal.js` deliberately uses a position check (`rect.top < innerHeight * 0.9`)
on a single shared, rAF-throttled scroll listener, rather than `IntersectionObserver` or
Motion's `whileInView`.

Reason: clicking an anchor link moves an element from below the viewport straight to above
it without ever intersecting. An IO-based reveal therefore never fires and that content
stays at `opacity: 0` permanently. This was a real bug; the position check catches both
"entering from below" and "already scrolled past".

It also short-circuits to revealed when `prefers-reduced-motion` is set, so content never
depends on scrolling for those visitors.

`Reveal` is a pure CSS transition. Motion is used only for the mobile menu and lightbox
(`AnimatePresence`) and the hero's mount animation.

### Styling

Tailwind CSS v4, CSS-first. **There is no `tailwind.config.js`** — design tokens are
`@theme` custom properties in `src/styles/index.css`, which is what generates `text-ink`,
`bg-brand-soft`, `border-line`, `animate-float` and friends.

Tailwind cannot see dynamically constructed class names. `` `from-${tone}` `` produces no
CSS. Where a component varies by tone (`FlowDiagram`, `SectionHeading`, `StatusDot`,
`Button`), full class strings are selected from a lookup object — keep that pattern.

One more trap: `Button` puts `inline-flex` in its base classes, so passing
`className="hidden sm:inline-flex"` loses the display battle. Wrap the button in a `span`
with the responsive display classes instead.

### Configuration and media

`src/config/site.js` is the single source for every contact detail. Phone appears in three
forms (display, `tel:` intl, `wa.me` digits) plus a `whatsappLink(message)` helper that
takes a localized prefill message per CTA. Never inline a phone number, WhatsApp URL or
social handle anywhere else.

`src/data/media.js` drives the showcase. An entry with an empty `src` renders `MediaSlot` —
a dashed placeholder naming the expected file path. Setting `src` (and `poster` for video)
switches it to a real lazy-loaded `MediaCard` with lightbox. Asset URLs must go through
`assetUrl()`, which prefixes `import.meta.env.BASE_URL`; a leading-slash path will 404 on
GitHub Pages. Full `http(s)` URLs pass through unprefixed — videos are hosted on Cloudinary
(with `q_auto/` for compression) and local `.mp4` files are gitignored; posters and images
stay in `public/assets/images/`.

### Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on push to `main`. The
workflow passes `actions/configure-pages`' `base_path` output to the build as `BASE_PATH`,
so `base` in `vite.config.js` always matches the real repo name (even if the repo is
renamed) and becomes `/` if a custom domain is added. Locally `base` falls
back to `/Al-Nawawy/`. Pages source must be set to "GitHub Actions" in repo settings. `siteConfig.url` is
intentionally empty until the first deploy — the JSON-LD in `src/seo/structuredData.js`
omits unset fields rather than inventing them.
