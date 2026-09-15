import { useEffect, useState } from 'react';

/**
 * Returns the id of the section under a probe line a third of the way down the
 * viewport. Order of `ids` does not matter: the section whose top is lowest but
 * still above the line wins. At the very bottom of the page the last section wins,
 * since a short final section may never scroll high enough to reach the line.
 */
export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 2;
      const probe = atBottom ? Infinity : window.innerHeight / 3;

      let current = ids[0];
      let best = -Infinity;
      for (const id of ids) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= probe && top > best) {
          best = top;
          current = id;
        }
      }
      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [ids]);

  return active;
}
