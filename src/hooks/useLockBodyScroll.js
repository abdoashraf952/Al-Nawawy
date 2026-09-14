import { useEffect } from 'react';

export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    const { overflow, paddingInlineEnd } = document.body.style;
    const gap = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (gap > 0) document.body.style.paddingInlineEnd = `${gap}px`;

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingInlineEnd = paddingInlineEnd;
    };
  }, [locked]);
}
