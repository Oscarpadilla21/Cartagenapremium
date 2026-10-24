import React, { useState, useEffect } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const slides = HOTEL_DATA.heroSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % slides.length;
        setAnimKey((k) => k + 1);
        return next;
      });
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAnimKey((k) => k + 1);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAnimKey((k) => k + 1);
  };

  const handleSelect = (idx) => {
    if (idx !== currentSlide) {
      setCurrentSlide(idx);
      setAnimKey((k) => k + 1);
    }
  };

  return (
    <div className="relative w-full h-[85vh] min-h-[600px] max-h-[850px] overflow-hidden select-none bg-stone-900 mt-[80px]">
      {/* Slides */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentSlide;
        return (
          <div
            key={slide.id}
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

            {/* Very soft atmospheric overlay (no heavy black darkening) */}
            <div className="absolute inset-0 bg-black/15" />

            {/* Slide Content with Slider Revolution Animations */}
            {isActive && (
              <div
                key={`slide-content-${animKey}`}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-20 pb-8"
              >
                <div className="max-w-4xl space-y-3.5">
                  
                  {/* Layer 21: 3D Perspective Animated Gold Badge Logo */}
                  <div className="flex justify-center mb-1 animate-hero-logo">
                    <img
                      src={HOTEL_DATA.logos.gold}
                      alt="Hotel Cartagena Premium"
                      className="w-44 sm:w-56 md:w-64 h-auto object-contain drop-shadow-xl"
                    />
                  </div>

                  {/* Big Title with Exact SR7 Typography */}
                  <h1 className="font-slider-title text-[30px] sm:text-[46px] lg:text-[67px] leading-[38px] sm:leading-[58px] lg:leading-[77px] tracking-[6px] sm:tracking-[10px] lg:tracking-[15px] font-normal uppercase text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] animate-hero-text">
                    {slide.title}
                  </h1>

                  {/* Subtitle with Exact SR7 Typography */}
                  {slide.subtitle && (
                    <p className="font-slider-subtitle text-[18px] sm:text-[24px] lg:text-[30px] leading-[24px] sm:leading-[28px] lg:leading-[29px] font-light text-white max-w-2xl mx-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] animate-hero-subtitle">
                      {slide.subtitle}
                    </p>
                  )}

                  {/* Thin Outline Action Button (Exact from SR7: 14px, 48px height, 4px tracking) */}
                  <div className="pt-3 animate-hero-button">
                    <a
                      href={slide.buttonLink || '#contacto'}
                      className="inline-block px-7 h-[48px] leading-[46px] border border-white/70 hover:border-[#c1a186] hover:bg-[#c1a186] text-white uppercase text-[14px] tracking-[4px] font-light transition-all duration-300 drop-shadow cursor-pointer"
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

      {/* Prev / Next Navigation Arrows */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-[#c1a186] text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5 -ml-0.5" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-[#c1a186] text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-5 h-5 -mr-0.5" />
      </button>

      {/* Hesperiden Bullets Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              i === currentSlide
                ? 'w-6 h-2 bg-[#c1a186]'
                : 'w-2 h-2 bg-white/70 hover:bg-white'
            }`}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
