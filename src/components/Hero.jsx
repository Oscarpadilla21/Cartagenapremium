import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Compass, Star, Play, Pause, MapPin } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

export default function Hero({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const slideDuration = 6000;
  const progressIntervalRef = useRef(null);

  useEffect(() => {
    if (!isPlaying) {
      clearInterval(progressIntervalRef.current);
      return;
    }

    const stepTime = 50;
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
      className="relative h-[88vh] min-h-[620px] max-h-[920px] w-full overflow-hidden bg-[#0A121A] select-none"
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
              className={`w-full h-full object-cover object-center filter brightness-[0.68] contrast-[1.08] transition-transform duration-[6500ms] ease-out ${
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
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-16 sm:pt-20 pb-20 sm:pb-28">
        <div key={currentSlide} className="max-w-3xl space-y-4 sm:space-y-5 animate-in fade-in duration-500">
          {/* Eyebrow Badge & Landmark Tag */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A880]/40 text-[#C5A880] shadow-sm">
              <Compass className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white truncate">
                {slide.badge}
              </span>
            </div>

            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 border border-white/20 text-stone-300 text-[10px] font-sans">
              <MapPin className="w-3 h-3 text-[#D4AF37]" />
              <span>{slide.siteName}</span>
            </div>
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
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] text-[#0E1E2E] font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.2em] shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.65)] transition-all transform hover:-translate-y-0.5 cursor-pointer border border-[#FFF8DC]/70 active:scale-95"
            >
              Reservar Estadía
            </button>
            <a
              href="#suites"
              className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border border-white/50 text-white hover:border-[#C5A880] hover:text-[#C5A880] font-sans font-medium text-[11px] sm:text-xs uppercase tracking-[0.2em] backdrop-blur-sm transition-all hover:bg-white/5"
            >
              Explorar Suites
            </a>
          </div>

          {/* Social Proof Mini Bar */}
          <div className="pt-2 flex items-center gap-4 sm:gap-6 text-stone-300 text-xs">
            <div className="flex items-center gap-1.5 text-[#C5A880]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880]" />
              ))}
              <span className="font-bold text-white ml-1">4.9 / 5.0</span>
            </div>
            <div className="h-3 w-px bg-stone-600" />
            <span className="tracking-wide text-stone-300 text-[11px] sm:text-xs">
              Bocagrande, Cartagena de Indias
            </span>
          </div>
        </div>
      </div>

      {/* Desktop-Only Side Floating Arrows (Hidden on Mobile to Prevent Clutter) */}
      <button
        type="button"
        onClick={handlePrev}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-[#0E1E2E] border border-white/25 hover:border-[#C5A880] text-white hover:text-[#C5A880] backdrop-blur-md transition-all duration-300 group cursor-pointer shadow-lg"
        aria-label="Sitio anterior"
      >
        <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-[#0E1E2E] border border-white/25 hover:border-[#C5A880] text-white hover:text-[#C5A880] backdrop-blur-md transition-all duration-300 group cursor-pointer shadow-lg"
        aria-label="Sitio siguiente"
      >
        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Mobile-Only Sleek Navigation Bar (Integrated cleanly without clutter) */}
      <div className="flex md:hidden absolute bottom-16 left-0 right-0 z-30 px-4 justify-center">
        <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#C5A880]/30 shadow-xl">
          <button
            type="button"
            onClick={handlePrev}
            className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white active:bg-[#C5A880] active:text-[#0E1E2E] transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5 px-2">
            <span className="text-[10px] font-bold text-[#C5A880] tracking-wider uppercase truncate max-w-[150px]">
              {slide.shortLabel}
            </span>
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white active:bg-[#C5A880] active:text-[#0E1E2E] transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Desktop Bottom Interactive Landmark Bar */}
      <div className="absolute bottom-24 sm:bottom-28 left-0 right-0 z-30 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 p-2 rounded-xl bg-black/40 backdrop-blur-md border border-[#C5A880]/20 max-w-2xl shadow-2xl">
            {/* Play/Pause Button */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-lg text-[#C5A880] hover:bg-white/10 transition-colors"
              title={isPlaying ? 'Pausar rotación' : 'Reanudar rotación'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Slide Landmark Tabs with Progress Line */}
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
    </section>
  );
}
