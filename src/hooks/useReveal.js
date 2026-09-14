import { useEffect, useRef, useState } from 'react';

/**
 * Scroll reveal for the whole page on a single shared, rAF-throttled listener.
 *
 * Deliberately not IntersectionObserver: jumping to an anchor moves an element
 * from "below the viewport" straight to "above" it without ever intersecting,
 * so an IO-based reveal leaves that content invisible for good. A position
 * check catches both cases.
 */
const pending = new Set();
let scheduled = false;
let listening = false;

function sweep() {
  scheduled = false;
  const limit = window.innerHeight * 0.9;
  for (const item of [...pending]) {
    if (item.el.getBoundingClientRect().top < limit) {
      pending.delete(item);
      item.show();
    }
  }
  if (pending.size === 0) stopListening();
}

function schedule() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(sweep);
}

function startListening() {
  if (listening) return;
  listening = true;
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
}

function stopListening() {
  if (!listening) return;
  listening = false;
  window.removeEventListener('scroll', schedule);
  window.removeEventListener('resize', schedule);
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export function useReveal() {
  const ref = useRef(null);
  // Reduced motion: skip the reveal entirely so content never depends on scrolling.
  const [revealed, setRevealed] = useState(prefersReducedMotion);

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return undefined;

    const item = { el, show: () => setRevealed(true) };
    pending.add(item);
    startListening();
    schedule();

    return () => {
      pending.delete(item);
      if (pending.size === 0) stopListening();
    };
  }, [revealed]);

  return [ref, revealed];
}
