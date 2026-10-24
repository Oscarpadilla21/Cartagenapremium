import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { ExternalLink, Landmark } from 'lucide-react';

export default function ExperiencesSection({ onOpenBooking }) {
  return (
    <>
      {/* Call to action Parallax Row (Row 10 from cartagenapremium.com) */}
      <section 
        className="relative py-24 bg-cover bg-center text-center text-white overflow-hidden"
        style={{ backgroundImage: `url('/images/hotel/foto-bocagrande--scaled.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#0E1E2E]/80 backdrop-blur-[1px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif text-white uppercase tracking-wider drop-shadow-md">
            VIVE UNA EXPERIENCIA DE ENSUEÑO
          </h2>
          <p className="text-stone-200 text-sm sm:text-base font-sans max-w-xl mx-auto">
            Disfruta de las mejores vistas a la bahía y al mar Caribe en el sector más exclusivo de Cartagena de Indias.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onOpenBooking ? onOpenBooking() : window.location.href='#contacto'}
              className="px-8 py-3.5 rounded-full bg-[#C5A880] hover:bg-white text-[#0E1E2E] font-semibold text-xs uppercase tracking-[0.2em] transition-all shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
            >
              Reservar habitación
            </button>
          </div>
        </div>
      </section>

      {/* Partner Museums Section (Row 12 from cartagenapremium.com) */}
      <section className="py-16 bg-white border-t border-[#eee9e3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-8">
            <h3 className="text-xl sm:text-2xl font-serif text-[#333333] font-bold">
              Visita los imprescindibles museos de Cartagena:
            </h3>
            <div className="w-12 h-0.5 bg-[#C5A880] mt-2" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {HOTEL_DATA.museums.map((m, idx) => (
              <a
                key={idx}
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-stone-100 hover:border-[#C5A880]/50 hover:shadow-md transition-all flex flex-col items-center justify-center group h-32 bg-[#FAF8F5]"
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="max-h-14 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="text-[10px] text-stone-500 group-hover:text-[#0E1E2E] text-center mt-2 font-sans line-clamp-1 flex items-center gap-1">
                  {m.name}
                  <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
