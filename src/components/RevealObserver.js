'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Plays each `.reveal` element's entrance once, when it first scrolls into view.
// The `js-reveal` class is set by an inline script in the layout; without it nothing is hidden.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains('js-reveal')) return;
    root.dataset.revealReady = '1';

    const show = (el) => el.classList.add('is-visible');
    const pending = [...document.querySelectorAll('.reveal:not(.is-visible)')];

    if (!('IntersectionObserver' in window)) {
      pending.forEach(show);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.05 }
    );

    pending.forEach((el) => {
      // Anything already above the fold line (or scrolled past) appears straight away.
      if (el.getBoundingClientRect().bottom < 0) show(el);
      else observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
