import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Clock, MapPin, Eye, Waves } from 'lucide-react';

export default function StatsPillars() {
  const icons = [Clock, MapPin, Eye, Waves];

  return (
    <section className="pt-24 pb-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A88653] font-semibold">
            Distinción · Serenidad · Ubicación
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0E1E2E] mt-2">
            La Esencia del Caribe en Bocagrande
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOTEL_DATA.pillars.map((pillar, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-lg border border-[#C5A880]/20 shadow-deluxe hover:shadow-deluxe-lg transition-all duration-300 transform hover:-translate-y-1 relative group"
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#C5A880]/30 flex items-center justify-center text-[#A88653] mb-4 group-hover:bg-[#0E1E2E] group-hover:text-[#C5A880] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-serif font-semibold text-[#0E1E2E] mb-1">
                  {pillar.number}
                </div>
                <h3 className="text-sm uppercase tracking-wider font-semibold text-[#745729] mb-2 font-sans">
                  {pillar.label}
                </h3>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  {pillar.description}
                </p>
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#C5A880]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
