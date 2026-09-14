import { Play, Maximize2 } from 'lucide-react';
import { useI18n } from '../../i18n/useI18n';
import { assetUrl } from '../../data/media';
import { MediaSlot } from './MediaSlot';

export function MediaCard({ item, onOpen }) {
  const { t, lang } = useI18n();

  if (!item.src) return <MediaSlot item={item} />;

  const isVideo = item.type === 'video';
  const label = item.title[lang];

  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      aria-label={`${label} — ${isVideo ? t('work.playLabel') : t('work.lightboxLabel')}`}
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      {isVideo ? (
        <video
          src={assetUrl(item.src)}
          poster={item.poster ? assetUrl(item.poster) : undefined}
          preload="none"
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      ) : (
        <img
          src={assetUrl(item.src)}
          alt={label}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      )}

      <span
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/10 to-transparent opacity-70 transition group-hover:opacity-90"
      />

      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 inline-flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-ink shadow-lift transition duration-300 group-hover:scale-110"
      >
        {isVideo ? <Play className="size-5 translate-x-[1px]" /> : <Maximize2 className="size-5" />}
      </span>

      <span className="absolute inset-x-0 bottom-0 p-4 text-start text-sm font-bold text-white">
        {label}
      </span>
    </button>
  );
}
