import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Star, Quote, Award } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="opiniones" className="py-20 bg-[#FAF8F5] border-t border-b border-[#C5A880]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-sans font-bold tracking-widest uppercase mb-3">
            <Award className="w-3.5 h-3.5 text-[#A88653]" />
            <span>Travellers' Choice · Bocagrande</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0E1E2E]">
            Voces de Quienes Han Vivido la Experiencia
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3 text-[#A88653]">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#A88653]" />
              ))}
            </div>
            <span className="text-xs font-sans font-bold text-stone-700">
              4.9 de 5 · Más de 1,200 reseñas verificadas
            </span>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(HOTEL_DATA.reviews || []).map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl border border-stone-200 shadow-deluxe hover:shadow-deluxe-lg transition-all flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-[#C5A880]/30 absolute top-6 right-6" />

              <div className="space-y-4">
                <div className="flex text-[#A88653]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#A88653]" />
                  ))}
                </div>

                <p className="text-stone-700 font-sans text-xs sm:text-sm leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100">
                <div className="font-serif font-semibold text-sm text-[#0E1E2E]">{rev.guest}</div>
                <div className="text-[11px] text-stone-500 font-sans">{rev.origin}</div>
                <div className="text-[10px] text-[#A88653] font-semibold mt-1 uppercase tracking-wider">
                  Huésped en {rev.suite}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
