import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Play, Sparkles, Sun, Wine, Clock, Check } from 'lucide-react';

export default function RooftopSection() {
  const [videoOpen, setVideoOpen] = useState(false);
  const { rooftop } = HOTEL_DATA;

  return (
    <section id="rooftop" className="py-24 bg-[#0E1E2E] text-white relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#A88653]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#C5A880]/30 text-[#C5A880]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.25em] uppercase">
                {rooftop.subtitle}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-[#FAF8F5] leading-tight">
              {rooftop.title}
            </h2>

            <p className="text-stone-300 font-sans text-sm sm:text-base leading-relaxed">
              {rooftop.description}
            </p>

            {/* Highlights List */}
            <div className="space-y-3 pt-2">
              {rooftop.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C5A880]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                  </div>
                  <span className="text-xs sm:text-sm text-stone-200 font-sans">{item}</span>
                </div>
              ))}
            </div>

            {/* Badges / Hours */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-stone-800">
              <div className="flex items-center gap-2 text-stone-300 text-xs">
                <Clock className="w-4 h-4 text-[#C5A880]" />
                <span>Horario Piscina: {rooftop.hours}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300 text-xs">
                <Wine className="w-4 h-4 text-[#C5A880]" />
                <span>Sky Bar & Coctelería de Autor</span>
              </div>
            </div>

            {/* Video Tour Button */}
            <div className="pt-2">
              <button
                onClick={() => setVideoOpen(true)}
                className="px-6 py-3 rounded border border-[#C5A880] text-[#C5A880] hover:bg-[#C5A880] hover:text-[#0E1E2E] font-sans font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2.5 group"
              >
                <Play className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" />
                <span>Ver Video Restaurante & Terraza</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Composition with Original Images */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4">
              {/* Main Pool Image */}
              <div className="col-span-8 relative rounded-xl overflow-hidden border border-[#C5A880]/30 shadow-2xl group">
                <img
                  src={rooftop.images.poolMain}
                  alt="Piscina Rooftop Hotel Cartagena Premium"
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E2E]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-sans block">
                    Piso Superior
                  </span>
                  <span className="text-lg font-serif text-white">Vista Infinita al Mar</span>
                </div>
              </div>

              {/* Secondary Pool View */}
              <div className="col-span-4 space-y-4">
                <div className="rounded-xl overflow-hidden border border-[#C5A880]/30 shadow-xl group">
                  <img
                    src={rooftop.images.poolView}
                    alt="Solárium Piscina"
                    className="w-full h-44 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-[#C5A880]/30 shadow-xl group">
                  <img
                    src={rooftop.images.terraceNight}
                    alt="Terraza Nocturna"
                    className="w-full h-32 sm:h-44 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Floating Luxury Quote Box */}
            <div className="absolute -bottom-6 -left-6 sm:bottom-4 sm:left-4 bg-[#FAF8F5] text-[#0E1E2E] p-4 rounded-lg shadow-2xl border border-[#C5A880]/40 max-w-xs hidden sm:block">
              <span className="text-[10px] uppercase tracking-widest text-[#A88653] font-bold block mb-1">
                Atardeceres Únicos
              </span>
              <p className="text-xs font-serif italic text-stone-800">
                "Descubre la magia de los atardeceres dorados sobre el horizonte de Cartagena."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0E1E2E] rounded-xl max-w-4xl w-full overflow-hidden border border-[#C5A880]/40 shadow-2xl relative">
            <div className="p-4 flex items-center justify-between border-b border-stone-800">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold">
                Restaurante & Experiencia Hotel Cartagena Premium
              </span>
              <button
                onClick={() => setVideoOpen(false)}
                className="text-stone-400 hover:text-white text-sm font-bold px-3 py-1"
              >
                Cerrar ✕
              </button>
            </div>
            <div className="aspect-video w-full">
              <iframe
                src={`${rooftop.videoUrl}?autoplay=1`}
                title="Restaurante Hotel Cartagena Premium"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
