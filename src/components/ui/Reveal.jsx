import { useReveal } from '../../hooks/useReveal';

/**
 * Fade-up on scroll. Pure CSS transition — the global
 * prefers-reduced-motion rule flattens it to an instant appearance.
 */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, revealed] = useReveal();

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}s`, ...style }}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        revealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
