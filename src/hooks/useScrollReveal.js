// src/hooks/useScrollReveal.js
import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options }
    );

    // Observe the element itself and all .reveal children
    const targets = el.querySelectorAll('.reveal');
    if (targets.length) {
      targets.forEach((t) => observer.observe(t));
    } else {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
