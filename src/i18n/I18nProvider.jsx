import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { ar } from './ar';
import { en } from './en';

const dictionaries = { ar, en };
const STORAGE_KEY = 'al-nawawy:lang';

export const I18nContext = createContext(null);

const readStoredLang = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'ar' || stored === 'en' ? stored : 'ar';
  } catch {
    return 'ar';
  }
};

const resolve = (dict, path) =>
  path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), dict);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang);

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;

    const dict = dictionaries[lang];
    document.title = dict.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', dict.meta.description);

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage unavailable (private mode) — language still works for this visit.
    }
  }, [lang, dir]);

  const t = useCallback(
    (path) => {
      const value = resolve(dictionaries[lang], path);
      return value === undefined ? path : value;
    },
    [lang],
  );

  const toggle = useCallback(() => setLang((prev) => (prev === 'ar' ? 'en' : 'ar')), []);

  const value = useMemo(() => ({ lang, dir, isRtl: dir === 'rtl', t, toggle }), [lang, dir, t, toggle]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
