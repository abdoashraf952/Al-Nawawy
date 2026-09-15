// Showcase items. An entry with an empty `src` renders a labelled placeholder slot.
//
// To add a real asset:
//   1. Drop the file into  public/assets/videos/  or  public/assets/images/
//   2. Set `src` to its path (and `poster` for videos — a still frame works well).
// Videos are hosted on Cloudinary to keep the repo small: set `src` to the full
// delivery URL with `q_auto/` after `upload/` so Cloudinary compresses it.
// Nothing else needs to change.

export const mediaItems = [
  {
    id: 'ad-01',
    type: 'video',
    src: 'https://res.cloudinary.com/i75rqecg/video/upload/q_auto/v1789430728/01_hook_AL.mp4',
    poster: 'assets/images/01_hook_AL-poster.jpg',
    path: 'assets/videos/01_hook_AL.mp4',
    aspect: '16/9',
    span: 'wide',
    title: { en: 'AI Advertising Video', ar: 'فيديو إعلاني بالذكاء الاصطناعي' },
  },
  {
    id: 'reel-01',
    type: 'video',
    src: 'https://res.cloudinary.com/i75rqecg/video/upload/q_auto/v1789430613/1.mp4',
    poster: 'assets/images/1-poster.jpg',
    path: 'assets/videos/1.mp4',
    aspect: '9/16',
    span: 'normal',
    title: { en: 'Short-form Product Promo', ar: 'إعلان منتج قصير للسوشيال' },
  },
  {
    id: 'product-01',
    type: 'image',
    src: 'assets/images/hf_20260914_233514_509f64b6-bf66-4e99-9ef6-a05518dbfc58.png',
    path: 'assets/images/hf_20260914_233514_509f64b6-bf66-4e99-9ef6-a05518dbfc58.png',
    aspect: '1/1',
    span: 'normal',
    title: { en: 'AI Product Image', ar: 'صورة منتج بالذكاء الاصطناعي' },
  },
];

// Local paths get the GitHub Pages base prefix; full URLs (e.g. Cloudinary) pass through untouched.
export const assetUrl = (path) =>
  /^https?:\/\//.test(path) ? path : `${import.meta.env.BASE_URL}${path}`;
