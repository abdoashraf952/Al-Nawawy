import { Link } from 'react-router-dom';
import { Lightbulb, Clapperboard, Route } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';
import { routePath } from '../data/routes';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { DirArrow } from '../components/ui/Button';

// Order matches the `explore.items` array in the dictionaries.
const targets = [
  { path: routePath('use-cases'), icon: Lightbulb },
  { path: routePath('work'), icon: Clapperboard },
  { path: routePath('how-we-work'), icon: Route },
];

/** Home-page hand-off to the rest of the site. */
export function ExploreStrip() {
  const { t } = useI18n();

  return (
    <Section id="explore" labelledBy="explore-title" className="bg-surface/60">
      <SectionHeading id="explore-title" title={t('explore.title')} align="center" />

      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {t('explore.items').map((item, i) => {
          const { path, icon: Icon } = targets[i];
          return (
            <Reveal as="li" key={item.title} delay={i * 0.06}>
              <Link
                to={path}
                className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-7 shadow-ring transition duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-soft"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.desc}</p>
                <span className="mt-auto inline-flex items-center pt-5 text-brand">
                  <DirArrow className="transition-transform duration-200 group-hover:translate-x-[3px] rtl:group-hover:-translate-x-[3px]" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
