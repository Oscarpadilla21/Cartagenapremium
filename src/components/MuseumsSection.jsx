import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';

export default function MuseumsSection() {
  return (
    <section className="pt-16 pb-16 bg-[#FCF9F6] text-left border-t border-[#f0eae3]" aria-label="Circuito cultural de Cartagena">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and small gold separator */}
        <div className="mb-10">
          <span className="text-[11px] font-lato font-bold uppercase tracking-[0.25em] text-[#b5987a] block">
            Circuito Cultural
          </span>
          <h4 className="font-serif text-2xl sm:text-3xl text-[#303030] mt-1 font-semibold">
            Visita los imprescindibles museos de Cartagena
          </h4>
          <div className="w-12 h-0.5 bg-[#b5987a] mt-3" />
        </div>

        {/* 6 Museum partner logos with fade/hover */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
          {HOTEL_DATA.museums.map((m, idx) => (
            <div key={idx} className="flex items-center justify-center p-3 group bg-white/50 rounded-lg border border-transparent hover:border-[#e8dfd5] hover:bg-white transition-all duration-300">
              <a
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                title={m.name}
                aria-label={`Visitar sitio web oficial: ${m.name}`}
                className="block transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#b5987a] rounded-xs p-1"
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-75 group-hover:opacity-100"
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}