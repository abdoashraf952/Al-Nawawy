# Competitor research

Date: 2026-10-13. Method: each homepage was fetched and summarized (navigation, hero, section order, pricing, trust, FAQ, footer). Findings come from those fetches only; I did not browse each site's inner pages.

## Sites analysed (12)

**AI agents and chat automation:** Lindy, Relevance AI, Botpress, Voiceflow, respond.io
**Workflow automation:** n8n, Make, Zapier
**Software and web agencies:** thoughtbot, Toptal, 10up
**Marketing agency:** Wpromote

**Not analysed:** Single Grain, ManyChat and Zapier's marketing-site pages returned HTTP 403. Intercom Fin, Webflow, Wati and the live Al-Nawawy site could not be fetched (domain verification blocked). The Al-Nawawy audit was done from the repository instead.

Caveat: most of these are product companies or large agencies selling to Western enterprises. Their trust proof (logos, SOC 2, G2 scores) cannot be copied honestly. What transfers is the structure.

## Findings

| Pattern | Seen on | Used by Al-Nawawy before | Decision |
|---|---|---|---|
| One primary CTA repeated in header, hero and closing section | Lindy, Make, n8n, thoughtbot ("Let's talk"), Wpromote ("Let's Talk") | Yes, but generic label | Keep, relabel to name the channel (WhatsApp) |
| Sales-led contact, no public prices | Make, Zapier, Relevance AI, respond.io, Botpress | No pricing information at all | Add "Custom quote" path that says so openly |
| Three "ways to start" (free / paid / enterprise) | Make, Lindy | No | Add "One service / Combined / Custom quote" |
| Use cases by role or industry | Lindy, Relevance AI, Botpress, respond.io | No | Add "Use cases" section as labelled example scenarios |
| Services grouped by business stage or need, not tech | thoughtbot, Wpromote | Grouped by tech | Use cases section maps problems to service combinations |
| Three-step "how it works" | Toptal, Botpress | 4-step process (kept) | Keep |
| FAQ near the end | Lindy, Make | None | Add FAQ (also emitted as FAQPage JSON-LD) |
| Service-specific CTA inside each product/service block | Make, Botpress | One generic CTA | Add a service-specific WhatsApp CTA to each service section |
| Chat-channel conversion (WhatsApp as the front door) | respond.io, Botpress | WhatsApp link only in hero, nav, final CTA | Floating WhatsApp button, prefilled per-service messages, WhatsApp-composer form |
| Short contact form with a service picker | thoughtbot, Wpromote, 10up ("Contact" always visible) | None | Add a form that composes a WhatsApp message |
| Persistent header CTA | All twelve | Yes | Keep |
| Customer logos, G2 badges, case-study metrics, named testimonials | Nearly all | Intentionally absent | **Not copied.** Project rule: no fabricated credibility |
| Compliance badges (SOC 2, GDPR) | Lindy, Relevance AI, Botpress, Zapier, Make | None | **Not copied.** Not applicable and not verifiable |

## What changes follow from this

1. Contact section becomes a real conversion point: service picker, short description, one button that opens WhatsApp with a ready message.
2. Every service section ends with its own WhatsApp CTA carrying a service-specific prefill.
3. Floating WhatsApp button on all screen sizes.
4. New "Use cases" section, explicitly labelled as example scenarios (not past clients).
5. New "Ways to work together" section answering "can I buy just one thing?" and "what does it cost?" without inventing prices.
6. New FAQ with structured data.
7. Navigation shortened from 8 links to 7 by dropping the four service deep-links (the Services overview already links to them) and adding Use cases, How we work, FAQ.

## Deliberately not done

- **Testimonials, client logos, project counts, ratings:** none exist that can be verified. The page keeps neutral capability statements. Add real ones to `src/i18n/*.js` once available.
- **Pricing tables:** no prices were provided. Inventing them would be fabrication.
- **Backend form submission:** the repo is a static GitHub Pages site with no form endpoint. The form therefore composes a WhatsApp message instead of pretending to store the submission.
