import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Compass, ShieldCheck, Star } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

export default function Hero({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HOTEL_DATA.heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = HOTEL_DATA.heroSlides[currentSlide];

  return (
    <section className="relative h-[88vh] min-h-[640px] max-h-[920px] w-full overflow-hidden bg-[#0E1E2E]">
      {/* Background Slides with Crossfade */}
      {HOTEL_DATA.heroSlides.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transform transition-transform duration-10000`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
          />
          {/* Subtle Luxury Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E2E] via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1E2E]/80 via-transparent to-transparent" />
        </div>
      ))}

      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pb-16">
        <div className="max-w-3xl space-y-5 animate-in fade-in duration-700">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A880]/40 text-[#C5A880]">
            <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.25em] uppercase text-white">
              {slide.badge}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white leading-[1.08] tracking-tight">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-stone-200 font-sans font-light leading-relaxed max-w-2xl">
            {slide.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-7 py-3.5 rounded bg-gradient-to-r from-[#A88653] via-[#C5A880] to-[#A88653] text-[#0E1E2E] font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-[#C5A880]/30 transition-all transform hover:-translate-y-0.5"
            >
              Reservar Estadía Exclusiva
            </button>
            <a
              href="#suites"
              className="px-6 py-3.5 rounded border border-white/40 text-white hover:border-[#C5A880] hover:text-[#C5A880] font-sans font-medium text-xs uppercase tracking-[0.2em] backdrop-blur-sm transition-all"
            >
              Explorar Suites
            </a>
          </div>

          {/* Social Proof Mini Bar */}
          <div className="pt-4 flex items-center gap-6 text-stone-300 text-xs">
            <div className="flex items-center gap-1.5 text-[#C5A880]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880]" />
              ))}
              <span className="font-bold text-white ml-1">4.9 / 5.0</span>
            </div>
            <div className="h-3 w-px bg-stone-600" />
            <span className="tracking-wide">Opiniones Verificadas en Bocagrande</span>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute right-6 bottom-24 z-20 hidden md:flex items-center space-x-3">
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + HOTEL_DATA.heroSlides.length) % HOTEL_DATA.heroSlides.length
            )
          }
          className="p-2.5 rounded-full border border-white/30 text-white hover:border-[#C5A880] hover:text-[#C5A880] backdrop-blur-md transition-colors"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex space-x-2">
          {HOTEL_DATA.heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                i === currentSlide ? 'w-8 bg-[#C5A880]' : 'w-2 bg-white/40'
              }`}
              aria-label={`Ir al slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HOTEL_DATA.heroSlides.length)}
          className="p-2.5 rounded-full border border-white/30 text-white hover:border-[#C5A880] hover:text-[#C5A880] backdrop-blur-md transition-colors"
          aria-label="Siguiente slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
