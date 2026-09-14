// Showcase slots. Each entry renders a labelled placeholder until you fill in `src`.
//
// To add a real asset:
//   1. Drop the file into  public/assets/videos/  or  public/assets/images/
//   2. Set `src` to the same path used in `path` below (and `poster` for videos).
// Nothing else needs to change.

export const mediaItems = [
  {
    id: 'ad-01',
    type: 'video',
    src: '', // e.g. 'assets/videos/ad-01.mp4'
    poster: '', // e.g. 'assets/images/ad-01-poster.jpg'
    path: 'assets/videos/ad-01.mp4',
    aspect: '16/9',
    span: 'wide',
    title: { en: 'AI Advertising Video', ar: 'فيديو إعلاني بالذكاء الاصطناعي' },
  },
  {
    id: 'reel-01',
    type: 'video',
    src: '',
    poster: '',
    path: 'assets/videos/reel-01.mp4',
    aspect: '9/16',
    span: 'normal',
    title: { en: 'Short-form Promo', ar: 'إعلان قصير للسوشيال' },
  },
  {
    id: 'product-01',
    type: 'image',
    src: '', // e.g. 'assets/images/product-01.jpg'
    path: 'assets/images/product-01.jpg',
    aspect: '1/1',
    span: 'normal',
    title: { en: 'AI Product Image', ar: 'صورة منتج بالذكاء الاصطناعي' },
  },
  {
    id: 'social-01',
    type: 'image',
    src: '',
    path: 'assets/images/social-01.jpg',
    aspect: '1/1',
    span: 'normal',
    title: { en: 'Social Media Creative', ar: 'تصميم سوشيال ميديا' },
  },
  {
    id: 'campaign-01',
    type: 'image',
    src: '',
    path: 'assets/images/campaign-01.jpg',
    aspect: '4/3',
    span: 'normal',
    title: { en: 'Campaign Concept', ar: 'فكرة حملة إعلانية' },
  },
  {
    id: 'ad-02',
    type: 'video',
    src: '',
    poster: '',
    path: 'assets/videos/ad-02.mp4',
    aspect: '16/9',
    span: 'wide',
    title: { en: 'Promotional Video', ar: 'فيديو ترويجي' },
  },
];

export const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;
