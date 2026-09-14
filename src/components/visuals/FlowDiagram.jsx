import { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { useReveal } from '../../hooks/useReveal';

/**
 * Horizontal stepped flow on desktop, vertical timeline on mobile.
 * The connector "traces" through the steps once, the first time it is seen.
 *
 * Nodes are decorative highlights, not controls, so they are deliberately not
 * tab stops — every label is plain text a screen reader already reads in order.
 */
export function FlowDiagram({ steps, icons = [], tone = 'brand', className = '' }) {
  const [ref, inView] = useReveal();
  const reduced = useReducedMotion();
  const [traced, setTraced] = useState(0);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    if (!inView) return undefined;
    if (reduced) {
      setTraced(steps.length);
      return undefined;
    }

    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTraced(i);
      if (i >= steps.length) clearInterval(id);
    }, 380);

    return () => clearInterval(id);
  }, [inView, steps.length, reduced]);

  const fill = tone === 'accent' ? 'from-accent to-brand' : 'from-brand to-accent';
  const progress = `${Math.min(100, (traced / steps.length) * 100)}%`;

  return (
    <div ref={ref} className={`relative ${className}`} onMouseLeave={() => setHovered(null)}>
      {/* Connector: vertical on mobile, horizontal from lg up */}
      <div
        aria-hidden="true"
        className="absolute start-[27px] top-6 bottom-6 w-0.5 overflow-hidden rounded-full bg-line lg:inset-x-0 lg:top-[27px] lg:bottom-auto lg:h-0.5 lg:w-auto"
      >
        <div
          style={{ height: progress }}
          className={`w-full rounded-full bg-linear-to-b transition-[height] duration-500 ease-out lg:hidden ${fill}`}
        />
        <div
          style={{ width: progress }}
          className={`hidden h-full rounded-full bg-linear-to-r transition-[width] duration-500 ease-out lg:block ${fill}`}
        />
      </div>

      <ol className="relative grid gap-6 lg:grid-cols-6 lg:gap-4">
        {steps.map((step, i) => {
          const reached = i < traced;
          const dim = hovered !== null && hovered !== i;
          const Icon = icons[i];

          return (
            <li
              key={step.title}
              onMouseEnter={() => setHovered(i)}
              className={`flex items-start gap-4 transition duration-300 lg:flex-col lg:items-start lg:gap-3 ${
                dim ? 'opacity-55' : 'opacity-100'
              }`}
            >
              <span
                className={`relative z-10 inline-flex size-14 shrink-0 items-center justify-center rounded-2xl border text-sm font-extrabold transition duration-300 ${
                  reached
                    ? `border-transparent bg-linear-to-br text-white shadow-[0_10px_22px_rgb(59_130_246/0.25)] ${fill}`
                    : 'border-line bg-surface text-muted'
                } ${hovered === i ? 'scale-105' : ''}`}
              >
                {Icon ? (
                  <Icon aria-hidden="true" className="size-5" />
                ) : (
                  <span dir="ltr">{String(i + 1).padStart(2, '0')}</span>
                )}
              </span>

              <div className="min-w-0 pt-1 lg:pt-0">
                <p className="text-sm font-bold text-ink">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-body lg:text-[0.8rem]">{step.desc}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
