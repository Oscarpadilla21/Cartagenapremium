import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Star, Quote, ExternalLink } from 'lucide-react';
import TripAdvisorIcon from './icons/TripAdvisorIcon';

export default function ReviewsSection() {
  return (
    <section id="opiniones" className="py-20 bg-[#FAF8F5] border-t border-b border-[#e8dfd5]" aria-label="Opiniones de huéspedes en TripAdvisor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Aligned with authentic Bridge luxury styling */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ded5cb] text-[#8c6d4f] text-[11px] font-lato font-bold tracking-[2px] uppercase mb-3 shadow-2xs">
            <TripAdvisorIcon className="w-3.5 h-3.5 fill-[#8c6d4f]" />
            <span>Opiniones en Tripadvisor</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#303030]">
            Lo Que Dicen Nuestros Huéspedes
          </h2>
          <div className="w-16 h-0.5 bg-[#b5987a] mx-auto my-3.5" />
          <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed max-w-lg mx-auto">
            Comentarios auténticos compartidos por viajeros que han disfrutado de su estadía y la vista a la bahía en Bocagrande.
          </p>
        </div>

        {/* Reviews Cards: Warm, Elegant & Honest */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(HOTEL_DATA.reviews || []).map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-[#e8dfd5] shadow-deluxe hover:shadow-deluxe-lg transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-[#b5987a]/20 absolute top-6 right-6 transition-colors group-hover:text-[#b5987a]/35" />

              <div className="space-y-4">
                {/* 5 Warm Gold Stars */}
                <div className="flex text-[#b5987a]" aria-label={`Calificación: ${rev.rating} estrellas`}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#b5987a] text-[#b5987a]" />
                  ))}
                </div>

                <p className="text-stone-700 font-sans text-xs sm:text-sm leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-base text-[#1f242e]">{rev.guest}</div>
                  <div className="text-[11px] text-stone-500 font-sans">{rev.suite}</div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-[#8c6d4f] font-lato">
                  <TripAdvisorIcon className="w-3.5 h-3.5 fill-[#8c6d4f]" />
                  <span>Tripadvisor</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clean, Understated TripAdvisor Link */}
        <div className="mt-12 text-center">
          <a
            href={HOTEL_DATA.socials.tripadvisor}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xs border border-[#b5987a] text-[#8c6d4f] hover:bg-[#b5987a] hover:text-white transition-all text-xs font-bold font-lato uppercase tracking-[2px] shadow-2xs active:scale-95"
            aria-label="Ver ficha y comentarios completos en TripAdvisor"
          >
            <TripAdvisorIcon className="w-4 h-4 fill-current" />
            <span>Leer más opiniones en Tripadvisor</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
