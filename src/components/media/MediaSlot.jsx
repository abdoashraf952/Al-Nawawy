import { ImagePlus, FilmIcon } from 'lucide-react';
import { useI18n } from '../../i18n/useI18n';

/** Rendered until a real asset is dropped into `public/assets/`. */
export function MediaSlot({ item }) {
  const { t, lang } = useI18n();
  const Icon = item.type === 'video' ? FilmIcon : ImagePlus;

  return (
    <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2.5 rounded-2xl border-2 border-dashed border-line bg-brand-soft/40 p-4 text-center transition duration-300 hover:border-brand/40 hover:bg-brand-soft/70">
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-surface text-brand shadow-ring">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <p className="text-sm font-bold text-balance text-ink">{item.title[lang]}</p>
      <code
        dir="ltr"
        className="max-w-full truncate rounded-md bg-surface px-2 py-1 font-mono text-[0.68rem] text-muted"
      >
        {item.path}
      </code>
      <span className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-wide text-muted uppercase">
        {t('common.placeholder')}
      </span>
    </div>
  );
}
