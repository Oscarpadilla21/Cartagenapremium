import React, { useState, useEffect, useRef } from 'react';
import { HOTEL_DATA } from '../data/hotelData';

function AnimatedCounter({ target, duration = 1800 }) {
  const targetNum = parseInt(target, 10) || 0;
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(targetNum);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const update = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(ease * targetNum);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              setCount(targetNum);
            }
          };

          requestAnimationFrame(update);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetNum, duration]);

  return <span ref={elementRef} aria-hidden="true">{count}</span>;
}

export default function StatsPillars() {
  return (
    <section
      className="relative pt-20 pb-44 sm:pb-56 lg:pb-64 bg-cover bg-center bg-fixed text-white overflow-hidden z-10"
      style={{ backgroundImage: `url('/images/hotel/8339dc8a-4030-4c42-971a-0481f1350403.jpg')` }}
      aria-label="Disponibilidad y servicio permanente"
    >
      {/* High-contrast gradient overlay ensuring counter readability while showing restaurant ambiance */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {HOTEL_DATA.counters.map((c, idx) => (
            <div
              key={idx}
              className="space-y-2 group"
              tabIndex={0}
              aria-label={`${c.digit} ${c.label}. ${c.description || ''}`}
            >
              {/* Counter number in elegant Cormorant Garamond */}
              <div className="text-[60px] leading-[60px] font-serif font-light text-white tracking-wide group-hover:text-[#c1a186] transition-colors duration-300">
                <AnimatedCounter target={c.digit} />
                <span className="sr-only">{c.digit}</span>
              </div>

              {/* Small Separator line with gold glow */}
              <div className="w-10 h-0.5 bg-[#c1a186] transition-all duration-300 group-hover:w-16" />

              {/* Counter label in Lato uppercase */}
              <p className="text-[16px] leading-[27px] font-lato font-semibold uppercase tracking-[1.5px] text-white pt-1">
                {c.label}
              </p>
              {c.description && (
                <p className="text-xs text-white/80 font-sans font-light leading-relaxed max-w-xs">
                  {c.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
