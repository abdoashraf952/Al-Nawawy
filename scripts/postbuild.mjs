// Runs after `vite build`. GitHub Pages only serves real files, so a deep link such as
// /Al-Nawawy/services/web/ would 404 for a client-side router. This script:
//   1. writes dist/<route>/index.html for every route, with that page's own <title>,
//      description, canonical and social tags baked in (what crawlers and link previews read);
//   2. writes dist/404.html so unknown URLs still boot the app and show its Not Found page;
//   3. writes dist/sitemap.xml from the same route list.
// The baked tags are Arabic (the site's default language); the app swaps to the visitor's
// language once it loads.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { routes } from '../src/data/routes.js';
import { ar } from '../src/i18n/ar.js';
import { siteConfig } from '../src/config/site.js';

const dist = new URL('../dist/', import.meta.url);
const template = await readFile(new URL('index.html', dist), 'utf8');

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const escapeText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const pageUrl = (path) => siteConfig.url + (path === '/' ? '' : `${path.slice(1)}/`);

function setMeta(html, attr, name, value) {
  const pattern = new RegExp(`(<meta\\s+${attr}="${name}"\\s+content=")[^"]*(")`);
  if (!pattern.test(html)) throw new Error(`index.html is missing <meta ${attr}="${name}">`);
  return html.replace(pattern, (_, a, b) => `${a}${escapeAttr(value)}${b}`);
}

function bake(html, { title, description, url }) {
  let out = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(title)}</title>`);
  out = setMeta(out, 'name', 'description', description);
  out = setMeta(out, 'property', 'og:title', title);
  out = setMeta(out, 'property', 'og:description', description);
  out = setMeta(out, 'property', 'og:url', url);
  out = setMeta(out, 'name', 'twitter:title', title);
  out = setMeta(out, 'name', 'twitter:description', description);
  return out.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
}

for (const route of routes) {
  const page = ar.pages[route.id];
  if (!page) throw new Error(`Missing pages.${route.id} in src/i18n/ar.js`);
  const html = bake(template, { ...page, url: pageUrl(route.path) });
  const target = route.path === '/' ? new URL('index.html', dist) : new URL(`${route.path.slice(1)}/index.html`, dist);
  await mkdir(new URL('./', target), { recursive: true });
  await writeFile(target, html);
}

await writeFile(new URL('404.html', dist), bake(template, { ...ar.pages.notFound, url: siteConfig.url }));

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) => `  <url><loc>${pageUrl(route.path)}</loc></url>`),
  '</urlset>',
  '',
].join('\n');
await writeFile(new URL('sitemap.xml', dist), sitemap);

console.log(`postbuild: ${routes.length} pages, 404.html, sitemap.xml`);
