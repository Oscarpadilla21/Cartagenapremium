import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Quote, ExternalLink } from 'lucide-react';
import TripAdvisorIcon from './icons/TripAdvisorIcon';

export default function ReviewsSection() {
  return (
    <section id="opiniones" className="py-20 bg-[#FAF8F5] border-t border-b border-[#e8dfd5]" aria-label="Opiniones de huéspedes y calificaciones de TripAdvisor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Prominent TripAdvisor Recognition */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          
          {/* Official TripAdvisor Travellers' Choice Pill Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-[#00aa6c]/30 shadow-deluxe mb-5 hover:border-[#00aa6c] transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#00aa6c]/10 flex items-center justify-center text-[#00aa6c] shrink-0">
              <TripAdvisorIcon className="w-5 h-5 fill-current" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-[13px] font-sans font-black text-[#1f242e] tracking-tight">
                  Tripadvisor
                </span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#00aa6c]/15 text-[#006644] uppercase tracking-wider">
                  Oficial
                </span>
              </div>
              <span className="text-[11px] text-stone-600 font-sans font-medium block">
                Travellers' Choice Award · Bocagrande, Cartagena
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#303030]">
            Voces de Quienes Han Vivido la Experiencia
          </h2>
          <div className="w-16 h-0.5 bg-[#b5987a] mx-auto my-3.5" />

          {/* TripAdvisor Rating Bubbles & Verified Link */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-4">
            {/* 5 TripAdvisor Iconic Green Rating Bubbles */}
            <div className="flex items-center gap-1" aria-label="Calificación TripAdvisor: 5 de 5 burbujas">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="w-3.5 h-3.5 rounded-full bg-[#00aa6c] inline-block shadow-2xs"
                />
              ))}
            </div>
            <span className="text-xs font-sans font-bold text-stone-800">
              Calificación Excelente (4.9 / 5.0)
            </span>
            <span className="text-stone-300 select-none">·</span>
            <a
              href={HOTEL_DATA.socials.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-sans font-bold text-[#00aa6c] hover:text-[#008855] hover:underline transition-colors"
            >
              <span>Más de 1,200 opiniones en Tripadvisor</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
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
                {/* TripAdvisor 5-bubble score for each review */}
                <div className="flex items-center gap-1.5" aria-label={`Calificación: ${rev.rating} de 5 burbujas`}>
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <span
                        key={i}
                        className="w-3 h-3 rounded-full bg-[#00aa6c] inline-block"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#006644] font-bold uppercase tracking-wider font-lato ml-1">
                    Tripadvisor Verificado
                  </span>
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

        {/* Bottom TripAdvisor Profile Callout */}
        <div className="mt-12 text-center">
          <a
            href={HOTEL_DATA.socials.tripadvisor}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white border border-[#ded5cb] hover:border-[#00aa6c] text-stone-800 hover:text-[#00aa6c] shadow-deluxe hover:shadow-deluxe-lg transition-all duration-300 text-xs font-bold font-lato uppercase tracking-wider hover:scale-105"
          >
            <TripAdvisorIcon className="w-5 h-5 fill-current text-[#00aa6c]" />
            <span>Consultar Todas las Reseñas en Tripadvisor</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
