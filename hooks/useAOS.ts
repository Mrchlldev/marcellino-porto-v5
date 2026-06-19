"use client";

import { useEffect, useRef, useState } from "react";

export interface AOSOptions {
  threshold?: number;
  delay?: number;
  once?: boolean;
}

export function useAOS(options: AOSOptions = {}) {
  const { threshold = 0.15, delay = 0, once = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            if (once) setHasAnimated(true);
          }, delay);
          if (once) observer.unobserve(element);
        } else {
          if (!once && !hasAnimated) {
            setIsVisible(false);
          }
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, delay, once, hasAnimated]);

  return { ref, isVisible };
}

// Variant presets
export const aosVariants = {
  "fade-up": {
    hidden: "opacity-0 translate-y-8 blur-sm",
    visible: "opacity-100 translate-y-0 blur-none",
  },
  "fade-down": {
    hidden: "opacity-0 -translate-y-8 blur-sm",
    visible: "opacity-100 translate-y-0 blur-none",
  },
  "fade-left": {
    hidden: "opacity-0 translate-x-8 blur-sm",
    visible: "opacity-100 translate-x-0 blur-none",
  },
  "fade-right": {
    hidden: "opacity-0 -translate-x-8 blur-sm",
    visible: "opacity-100 translate-x-0 blur-none",
  },
  "fade-in": {
    hidden: "opacity-0 blur-md scale-95",
    visible: "opacity-100 blur-none scale-100",
  },
  zoom: {
    hidden: "opacity-0 scale-90 blur-sm",
    visible: "opacity-100 scale-100 blur-none",
  },
};
