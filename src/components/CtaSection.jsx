import React from 'react';
import { Link } from 'react-router-dom';

export default function CtaSection() {
  return (
    <section
      className="relative pt-36 pb-48 sm:pt-44 sm:pb-60 bg-cover bg-center bg-fixed text-center overflow-hidden"
      style={{ backgroundImage: `url('/images/hotel/foto-bocagrande--scaled.jpg')` }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-3xl sm:text-5xl lg:text-[55px] font-serif text-[#303030] font-semibold leading-tight lg:leading-[55px] tracking-[-1px]">
          VIVE UNA EXPERIENCIA DE ENSUEÑO
        </h2>
        <div className="pt-2">
          <Link
            to="/habitaciones"
            className="inline-block bg-[#b5987a] hover:bg-[#303030] text-white h-[50px] leading-[50px] px-10 text-[12px] font-lato font-bold uppercase tracking-[3px] transition-colors shadow-md"
          >
            RESERVAR HABITACIÓN
          </Link>
        </div>
      </div>
    </section>
  );
}
