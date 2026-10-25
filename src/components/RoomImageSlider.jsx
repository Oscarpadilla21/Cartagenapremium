import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function RoomImageSlider({
  images = [],
  title = '',
  badge = '',
  onOpenModal,
  className = 'h-72 sm:h-80',
  interval = 5000
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideList = images && images.length > 0 ? images : ['/images/hotel/HAB-SENCILLA-TIPO-1-2.jpeg'];
  const total = slideList.length;

  const handleNext = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Automatic slide rotation every 5 seconds (5000ms)
  useEffect(() => {
    if (total <= 1 || isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, interval);

    return () => clearInterval(timer);
  }, [total, isPaused, interval]);

  return (
    <div
      role="region"
      aria-label={`Carrusel de fotos: ${title}`}
      className={`relative w-full overflow-hidden bg-stone-900 group select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Slides with smooth crossfade */}
      {slideList.map((src, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={src}
              alt={`${title} - Foto ${idx + 1} de ${total}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        );
      })}

      {/* Subtle bottom gradient to ensure arrows & indicators contrast */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />

      {/* Badge in top left */}
      {badge && (
        <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none">
          <span className="px-3.5 py-1.5 rounded-full bg-[#1f242e]/90 text-[#e6d0bb] text-[10px] uppercase font-bold tracking-wider backdrop-blur-sm border border-[#b5987a]/40 shadow-sm font-lato">
            {badge}
          </span>
        </div>
      )}

      {/* Manual Navigation Arrows (Left & Right) */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label={`Foto anterior de ${title}`}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-[#b5987a] text-white flex items-center justify-center backdrop-blur-md border border-white/25 transition-all opacity-90 sm:opacity-0 sm:group-hover:opacity-100 hover:scale-110 cursor-pointer shadow-lg active:scale-95 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-[#b5987a]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label={`Siguiente foto de ${title}`}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-[#b5987a] text-white flex items-center justify-center backdrop-blur-md border border-white/25 transition-all opacity-90 sm:opacity-0 sm:group-hover:opacity-100 hover:scale-110 cursor-pointer shadow-lg active:scale-95 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-[#b5987a]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Bottom Bar: Dot Indicators & Counter Button */}
      <div className="absolute bottom-3 inset-x-3 z-20 flex items-center justify-between pointer-events-auto">
        {/* Dots */}
        {total > 1 && (
          <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
            {slideList.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(dotIdx);
                }}
                className={`transition-all rounded-full cursor-pointer ${
                  dotIdx === currentIndex
                    ? 'w-5 h-1.5 bg-[#b5987a]'
                    : 'w-1.5 h-1.5 bg-white/60 hover:bg-white'
                }`}
                aria-label={`Ir a foto ${dotIdx + 1} de ${total}`}
              />
            ))}
          </div>
        )}

        {/* Counter & Fullscreen trigger */}
        {onOpenModal && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onOpenModal();
            }}
            className="ml-auto py-1 px-3 rounded-full bg-white/90 hover:bg-white text-[#303030] shadow-md backdrop-blur-sm transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5 text-[11px] font-semibold min-h-[30px] border border-stone-200 focus-visible:ring-2 focus-visible:ring-[#b5987a]"
            aria-label={`Ver galería completa de ${title}`}
          >
            <Eye className="w-3.5 h-3.5 text-[#b5987a]" />
            <span>{currentIndex + 1} / {total}</span>
          </button>
        )}
      </div>
    </div>
  );
}
