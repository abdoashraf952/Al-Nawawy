import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useI18n } from '../../i18n/useI18n';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand disabled:opacity-60';

const variants = {
  primary:
    'bg-brand text-white shadow-[0_10px_24px_rgb(59_130_246/0.3)] hover:bg-blue-600 hover:shadow-[0_14px_30px_rgb(59_130_246/0.38)] hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-surface text-ink border border-line hover:border-brand/45 hover:text-brand hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'text-ink hover:text-brand',
  light:
    'bg-white text-ink hover:bg-white/90 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_10px_24px_rgb(15_23_42/0.18)]',
  outlineLight:
    'border border-white/35 text-white hover:bg-white/10 hover:border-white/60 hover:-translate-y-0.5 active:translate-y-0',
};

const sizes = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[0.95rem]',
  lg: 'h-14 px-7 text-base',
};

/** Arrow that always points "forward" for the active writing direction. */
export function DirArrow({ className = '' }) {
  const { isRtl } = useI18n();
  const Icon = isRtl ? ArrowLeft : ArrowRight;
  return <Icon aria-hidden="true" className={`size-[18px] shrink-0 ${className}`} />;
}

export function Button({
  as,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className = '',
  children,
  ...rest
}) {
  const Tag = as || (rest.href ? 'a' : 'button');
  if (Tag === 'button' && !rest.type) rest.type = 'button';

  return (
    <Tag className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
      {withArrow && (
        <DirArrow className="transition-transform duration-200 group-hover:translate-x-[3px] rtl:group-hover:-translate-x-[3px]" />
      )}
    </Tag>
  );
}
