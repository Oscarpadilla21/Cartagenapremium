import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Compass, Star, Play, Pause, Sparkles } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

export default function Hero({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const slideDuration = 6000; // 6 seconds per slide
  const timerRef = useRef(null);
  const progressIntervalRef = useRef(null);

  // Auto-advance slider with progress bar
  useEffect(() => {
    if (!isPlaying) {
      clearInterval(progressIntervalRef.current);
      return;
    }

    const stepTime = 50; // update progress every 50ms
    const totalSteps = slideDuration / stepTime;
    let currentStep = 0;
    setProgress(0);

    progressIntervalRef.current = setInterval(() => {
      currentStep += 1;
      setProgress((currentStep / totalSteps) * 100);

      if (currentStep >= totalSteps) {
        setCurrentSlide((prev) => (prev + 1) % HOTEL_DATA.heroSlides.length);
        currentStep = 0;
        setProgress(0);
      }
    }, stepTime);

    return () => {
      clearInterval(progressIntervalRef.current);
    };
  }, [currentSlide, isPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HOTEL_DATA.heroSlides.length) % HOTEL_DATA.heroSlides.length);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HOTEL_DATA.heroSlides.length);
    setProgress(0);
  };

  const slide = HOTEL_DATA.heroSlides[currentSlide];

  return (
    <section
      className="relative h-[90vh] min-h-[660px] max-h-[940px] w-full overflow-hidden bg-[#0A121A] select-none"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Slides with Ken Burns Zoom Effect */}
      {HOTEL_DATA.heroSlides.map((item, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className={`w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.08] transition-transform duration-[6500ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E2E] via-black/40 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E1E2E]/85 via-black/30 to-transparent" />
          </div>
        );
      })}

      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none z-10" />

      {/* Hero Content Container */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-20 sm:pt-24 pb-20 sm:pb-28">
        <div key={currentSlide} className="max-w-3xl space-y-4 sm:space-y-5 animate-in fade-in duration-500">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A880]/40 text-[#C5A880] shadow-sm max-w-full">
            <Compass className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white truncate">
              {slide.badge}
            </span>
          </div>

          {/* Main Title with Serif Luxury Typography */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif text-white leading-[1.12] sm:leading-[1.08] tracking-tight drop-shadow-md">
            {slide.title}
          </h1>

          {/* Evocative Subtitle */}
          <p className="text-sm sm:text-lg lg:text-xl text-stone-200 font-sans font-light leading-relaxed max-w-2xl drop-shadow line-clamp-3 sm:line-clamp-none">
            {slide.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] text-[#0E1E2E] font-extrabold text-xs uppercase tracking-[0.22em] shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.65)] transition-all transform hover:-translate-y-0.5 cursor-pointer border border-[#FFF8DC]/70"
            >
              Reservar Estadía Exclusiva
            </button>
            <a
              href="#suites"
              className="px-6 py-3.5 rounded-full border border-white/50 text-white hover:border-[#C5A880] hover:text-[#C5A880] font-sans font-medium text-xs uppercase tracking-[0.2em] backdrop-blur-sm transition-all hover:bg-white/5"
            >
              Explorar Suites
            </a>
          </div>

          {/* Social Proof Mini Bar */}
          <div className="pt-3 flex items-center gap-6 text-stone-300 text-xs">
            <div className="flex items-center gap-1.5 text-[#C5A880]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880]" />
              ))}
              <span className="font-bold text-white ml-1">4.9 / 5.0</span>
            </div>
            <div className="h-3 w-px bg-stone-600" />
            <span className="tracking-wide text-stone-300">
              Ubicación Privilegiada · Bocagrande, Cartagena
            </span>
          </div>
        </div>
      </div>

      {/* Floating Side Arrows (Prev / Next) */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-[#0E1E2E] border border-white/25 hover:border-[#C5A880] text-white hover:text-[#C5A880] backdrop-blur-md transition-all duration-300 group cursor-pointer"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-[#0E1E2E] border border-white/25 hover:border-[#C5A880] text-white hover:text-[#C5A880] backdrop-blur-md transition-all duration-300 group cursor-pointer"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Bottom Interactive Thumbnail Navigation Bar with Dynamic Countdown Bar */}
      <div className="absolute bottom-24 sm:bottom-28 left-0 right-0 z-30 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 p-2 rounded-xl bg-black/40 backdrop-blur-md border border-[#C5A880]/20 max-w-2xl">
            {/* Play/Pause Button */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-lg text-[#C5A880] hover:bg-white/10 transition-colors"
              title={isPlaying ? 'Pausar reproducción automática' : 'Reanudar reproducción'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Slide Tabs with Individual Progress */}
            <div className="flex-1 grid grid-cols-4 gap-2">
              {HOTEL_DATA.heroSlides.map((item, idx) => {
                const isCurrent = idx === currentSlide;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    className={`text-left p-2 rounded-lg transition-all relative overflow-hidden group ${
                      isCurrent
                        ? 'bg-white/15 text-white'
                        : 'text-stone-400 hover:text-stone-200 hover:bg-white/5'
                    }`}
                  >
                    <span className="block text-[10px] font-sans font-semibold tracking-wider uppercase truncate">
                      {item.shortLabel}
                    </span>

                    {/* Active countdown fill */}
                    <div className="h-0.5 w-full bg-white/20 mt-1.5 rounded-full overflow-hidden">
                      {isCurrent && (
                        <div
                          className="h-full bg-gradient-to-r from-[#C5A880] to-[#F3E5AB] transition-all duration-75"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dots Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex md:hidden items-center space-x-2 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20">
        {HOTEL_DATA.heroSlides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => goToSlide(idx)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              idx === currentSlide ? 'w-6 bg-[#C5A880]' : 'w-2 bg-white/40'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
