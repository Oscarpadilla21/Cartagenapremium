import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { ExternalLink, Compass, Landmark } from 'lucide-react';

export default function ExperiencesSection() {
  return (
    <section id="experiencias" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A88653] font-semibold">
            Destino Cartagena de Indias
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#0E1E2E] mt-2">
            Experiencias & Entorno Privilegiado
          </h2>
          <p className="text-stone-600 font-sans text-sm sm:text-base mt-3 leading-relaxed">
            Desde la vitalidad cosmopolita de Bocagrande hasta la riqueza colonial del centro histórico, el hotel es el punto de partida perfecto.
          </p>
        </div>

        {/* 3 Main Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {HOTEL_DATA.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden border border-[#C5A880]/20 shadow-deluxe hover:shadow-deluxe-lg transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="px-2.5 py-1 rounded bg-[#0E1E2E]/80 backdrop-blur-md text-[#C5A880] text-[10px] font-sans font-bold uppercase tracking-wider border border-[#C5A880]/30">
                    {exp.time}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif text-[#0E1E2E] mb-2">{exp.title}</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#A88653]">
                    Concierge Recomendado
                  </span>
                  <Compass className="w-4 h-4 text-[#A88653]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Partners Circuit Banner */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#C5A880]/30 shadow-deluxe">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2 text-[#A88653] mb-1">
                <Landmark className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-bold">Circuito Cultural</span>
              </div>
              <h3 className="text-2xl font-serif text-[#0E1E2E]">
                Visita los Museos y Espacios Emblemáticos de Cartagena
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md font-sans">
              Nuestros huéspedes disfrutan de asistencia de concierge y orientaciones personalizadas para explorar los tesoros artísticos e históricos de la ciudad.
            </p>
          </div>

          {/* Partner Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {HOTEL_DATA.culturalPartners.map((partner, idx) => (
              <a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-[#FAF8F5] border border-stone-200 hover:border-[#C5A880] transition-all flex flex-col items-center justify-center text-center group"
                title={`Visitar sitio oficial de ${partner.name}`}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 sm:h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                />
                <span className="text-[11px] text-stone-700 font-sans font-medium mt-2 leading-tight flex items-center gap-1 group-hover:text-[#A88653]">
                  <span>{partner.name}</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
