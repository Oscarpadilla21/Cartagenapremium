import React, { useState, useEffect, useRef } from 'react';
import { HOTEL_DATA } from '../data/hotelData';

function AnimatedCounter({ target, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const targetNum = parseInt(target, 10) || 0;
  const started = useRef(false);
  const elementRef = useRef(null);

  useEffect(() => {
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

  return <span ref={elementRef}>{count}</span>;
}

export default function StatsPillars() {
  return (
    <section
      className="relative pt-28 pb-36 bg-cover bg-center bg-fixed text-white overflow-hidden"
      style={{ backgroundImage: `url('/images/hotel/bocagrande-in-the-night-2.jpg')` }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {HOTEL_DATA.counters.map((c, idx) => (
            <div key={idx} className="space-y-2">
              {/* Counter number in elegant Cormorant Garamond: 60px / 60px line-height */}
              <div className="text-[60px] leading-[60px] font-serif font-light text-white">
                <AnimatedCounter target={c.digit} />
              </div>

              {/* Small Separator line */}
              <div className="w-8 h-0.5 bg-white/70" />

              {/* Counter label in Lato: 16px / 27px, tracking 1px, weight 600 */}
              <p className="text-[16px] leading-[27px] font-lato font-semibold uppercase tracking-[1px] text-white pt-1">
                {c.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
