import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Star, Quote, Award } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="opiniones" className="py-20 bg-[#FAF8F5] border-t border-b border-[#e8dfd5]" aria-label="Opiniones de huéspedes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-lato font-bold tracking-widest uppercase mb-3 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#b5987a]" />
            <span>Travellers' Choice · Bocagrande</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#303030]">
            Voces de Quienes Han Vivido la Experiencia
          </h2>
          <div className="w-16 h-0.5 bg-[#b5987a] mx-auto my-3.5" />
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex text-[#b5987a]" aria-label="Calificación media: 4.9 de 5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#b5987a] text-[#b5987a]" />
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
              className="bg-white p-8 rounded-2xl border border-[#e8dfd5] shadow-deluxe hover:shadow-deluxe-lg transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-[#b5987a]/25 absolute top-6 right-6 transition-colors group-hover:text-[#b5987a]/45" />

              <div className="space-y-4">
                <div className="flex text-[#b5987a]" aria-label={`Calificación: ${rev.rating} de 5 estrellas`}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#b5987a] text-[#b5987a]" />
                  ))}
                </div>

                <p className="text-stone-700 font-sans text-xs sm:text-sm leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100">
                <div className="font-serif font-bold text-base text-[#1f242e]">{rev.guest}</div>
                <div className="text-[11px] text-stone-600 font-sans">{rev.origin}</div>
                <div className="text-[10px] text-[#8c6d4f] font-semibold mt-1 uppercase tracking-wider font-lato">
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