"use client";

import { useEffect, useRef } from 'react';

export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          } else if (options.repeat) {
            entry.target.classList.remove('revealed');
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    // Add the scroll-reveal class initially
    element.classList.add('scroll-reveal');
    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin, options.repeat]);

  return elementRef;
};
