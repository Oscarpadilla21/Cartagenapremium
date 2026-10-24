import React from 'react';
import { Link } from 'react-router-dom';

export default function CtaSection() {
  return (
    <section
      className="relative py-32 sm:py-44 bg-cover bg-center bg-fixed text-center overflow-hidden"
      style={{ backgroundImage: `url('/images/hotel/foto-bocagrande--scaled.jpg')` }}
      aria-label="Invitación a reservar"
    >
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-gold p-8 sm:p-14 shadow-deluxe-lg border border-[#c1a186]/40 rounded-2xl backdrop-blur-md space-y-6">
          <span className="text-[11px] font-lato font-bold uppercase tracking-[0.25em] text-[#b5987a] block">
            Tu próximo destino caribeño
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-serif text-[#1f242e] font-semibold leading-tight tracking-[-0.5px]">
            VIVE UNA EXPERIENCIA DE ENSUEÑO
          </h2>
          <p className="text-stone-600 font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Despierta frente al mar Caribe, disfruta de los atardeceres en nuestra piscina en la azotea y vive el confort que mereces en Bocagrande.
          </p>
          <div className="pt-2">
            <Link
              to="/habitaciones"
              className="qbutton focus-visible:ring-2 focus-visible:ring-[#b5987a]"
            >
              RESERVAR HABITACIÓN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}