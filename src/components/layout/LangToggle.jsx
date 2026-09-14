import { Languages } from 'lucide-react';
import { useI18n } from '../../i18n/useI18n';

export function LangToggle({ className = '' }) {
  const { t, toggle } = useI18n();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t('common.langLabel')}
      className={`inline-flex h-10 items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 text-sm font-semibold text-ink transition hover:border-brand/45 hover:text-brand ${className}`}
    >
      <Languages aria-hidden="true" className="size-4" />
      <span dir="ltr">{t('common.langShort')}</span>
    </button>
  );
}
