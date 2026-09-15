import { useState } from 'react';
import { useI18n } from '../i18n/useI18n';
import { mediaItems } from '../data/media';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { MediaCard } from '../components/media/MediaCard';
import { Lightbox } from '../components/media/Lightbox';

const spanClass = {
  wide: 'sm:col-span-2',
  normal: '',
};

// The "drop your file here" hint only makes sense while placeholder slots remain.
const hasEmptySlots = mediaItems.some((item) => !item.src);

export function MediaShowcase() {
  const { t } = useI18n();
  const [openItem, setOpenItem] = useState(null);

  return (
    <Section id="work" labelledBy="work-title">
      <SectionHeading
        id="work-title"
        eyebrow={t('work.eyebrow')}
        title={t('work.title')}
        subtitle={t('work.subtitle')}
        align="center"
      />

      {hasEmptySlots && (
        <Reveal className="mt-6 text-center text-xs text-muted">{t('work.slotHint')}</Reveal>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mediaItems.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.05} className={spanClass[item.span] ?? ''}>
            <MediaCard item={item} onOpen={setOpenItem} />
          </Reveal>
        ))}
      </div>

      <Lightbox item={openItem} onClose={() => setOpenItem(null)} />
    </Section>
  );
}
