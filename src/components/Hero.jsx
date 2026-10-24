import React, { useState, useEffect, useCallback } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = HOTEL_DATA.heroSlides;

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAnimKey((k) => k + 1);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAnimKey((k) => k + 1);
  }, [slides.length]);

  const handleSelect = (idx) => {
    if (idx !== currentSlide) {
      setCurrentSlide(idx);
      setAnimKey((k) => k + 1);
    }
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Keyboard navigation for hero slider
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label="Destacados del Hotel Cartagena Premium"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className="relative w-full h-[85vh] min-h-[600px] max-h-[850px] overflow-hidden select-none bg-stone-900 mt-[76px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b5987a]"
    >
      {/* Slides */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentSlide;
        return (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${idx + 1} de ${slides.length}: ${slide.title}`}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with natural brightness matching cartagenapremium.com */}
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center ${
                isActive ? 'animate-ken-burns' : ''
              }`}
            />

            {/* Subtle atmospheric vignette gradient (top and bottom) for high text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

            {/* Slide Content with Slider Revolution Animations */}
            {isActive && (
              <div
                key={`slide-content-${animKey}`}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-20 pb-8"
              >
                <div className="max-w-4xl space-y-4">
                  
                  {/* Layer 21: 3D Perspective Animated White Badge Logo */}
                  <div className="flex justify-center mb-1 animate-hero-logo">
                    <img
                      src={HOTEL_DATA.logos.white || "/images/hotel/logo-white-intime-1.png"}
                      alt="Hotel Cartagena Premium"
                      className="w-44 sm:w-56 md:w-64 h-auto object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
                    />
                  </div>

                  {/* Big Title with Exact SR7 Typography */}
                  <h1 className="font-slider-title text-[30px] sm:text-[46px] lg:text-[67px] leading-[38px] sm:leading-[58px] lg:leading-[77px] tracking-[6px] sm:tracking-[10px] lg:tracking-[15px] font-normal uppercase text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] animate-hero-text">
                    {slide.title}
                  </h1>

                  {/* Subtitle with Exact SR7 Typography */}
                  {slide.subtitle && (
                    <p className="font-slider-subtitle text-[18px] sm:text-[24px] lg:text-[30px] leading-[24px] sm:leading-[28px] lg:leading-[29px] font-light text-white max-w-2xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] animate-hero-subtitle">
                      {slide.subtitle}
                    </p>
                  )}

                  {/* Thin Outline Action Button (Exact from SR7: 14px, 48px height, 4px tracking) */}
                  <div className="pt-3 animate-hero-button">
                    <a
                      href={slide.buttonLink || '#contacto'}
                      className="inline-flex items-center justify-center px-8 h-[48px] border border-white/80 hover:border-[#c1a186] hover:bg-[#c1a186] text-white uppercase text-[13px] tracking-[4px] font-medium transition-all duration-300 drop-shadow-md cursor-pointer hover:shadow-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                    >
                      {slide.buttonText || 'RESERVAR'}
                    </a>
                  </div>

                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Prev / Next Navigation Arrows (Touch targets 44x44px minimum) */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-black/40 hover:bg-[#b5987a] text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-xs focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none hover:scale-105 active:scale-95"
        aria-label="Diapositiva anterior"
      >
        <ChevronLeft className="w-5 h-5 -ml-0.5" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-black/40 hover:bg-[#b5987a] text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-xs focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none hover:scale-105 active:scale-95"
        aria-label="Diapositiva siguiente"
      >
        <ChevronRight className="w-5 h-5 -mr-0.5" />
      </button>

      {/* Hesperiden Bullets Navigation with min 44x44px touch targets */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-1">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer group focus-visible:outline-none"
            aria-label={`Ir a la diapositiva ${i + 1} de ${slides.length}`}
            aria-current={i === currentSlide}
          >
            <span
              className={`block transition-all duration-300 rounded-full ${
                i === currentSlide
                  ? 'w-7 h-2.5 bg-[#c1a186] shadow-sm'
                  : 'w-2.5 h-2.5 bg-white/70 group-hover:bg-white group-hover:scale-125'
              }`}
            />
          </button>
        ))}

        {/* Accessible Play/Pause Toggle */}
        <button
          type="button"
          onClick={() => setIsPaused(!isPaused)}
          className="min-w-[44px] min-h-[44px] flex items-center justify-center text-white/75 hover:text-white cursor-pointer ml-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label={isPaused ? "Reanudar rotación automática" : "Pausar rotación automática"}
        >
          {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5 fill-current" />}
        </button>
      </div>
    </div>
  );
}