import React from 'react';
import { Link } from 'react-router-dom';

export default function BocagrandeSection() {
  return (
    <section className="relative bg-[#F7F4EE] pt-8 sm:pt-12 pb-24 lg:pb-32 overflow-visible z-20" aria-label="Ubicación privilegiada en Bocagrande">
      {/* Overlapping Content Container pulling up into the wicker lamps parallax image */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 -mt-40 sm:-mt-52 lg:-mt-60 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Skyline Beach Photo overlapping upwards */}
          <div className="lg:col-span-6 pt-2 sm:pt-6">
            <div className="overflow-hidden shadow-2xl bg-white border border-[#e8dfd5]">
              <img
                src="/images/hotel/fotografia-foto-photo-turismo-tourism-travel-skyline-playa-bocagrande-cartagena-mar-colombia-fondos-wallpapers-somos-motta-min.jpg"
                alt="Skyline y Playa de Bocagrande frente al Hotel Cartagena Premium"
                className="w-full h-auto object-cover block transition-transform duration-700 hover:scale-102"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: White Card with Authentic Hatched Corner */}
          <div className="lg:col-span-6">
            <div
              className="relative bg-white/95 backdrop-blur-xs p-8 sm:p-12 lg:p-16 shadow-2xl border border-[#e8dfd5] text-left"
              style={{
                backgroundImage: `url('/images/hotel/background-bocagrande.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right bottom'
              }}
            >
              {/* Hatched Corner Lines SVG guarantee matching bridge theme */}
              <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none overflow-hidden" aria-hidden="true">
                <svg viewBox="0 0 64 64" className="w-full h-full text-stone-300">
                  <line x1="28" y1="64" x2="64" y2="28" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="36" y1="64" x2="64" y2="36" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="44" y1="64" x2="64" y2="44" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="52" y1="64" x2="64" y2="52" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="60" y1="64" x2="64" y2="60" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#2c2c2c] leading-[1.18] tracking-tight">
                Nuestras habitaciones cuentan con vista al Mar y a la Bahia de Cartagena
              </h2>

              {/* Graphic Ornament (4 gold chevrons) */}
              <div className="pt-4 pb-2">
                <img
                  src="/images/hotel/graphic-img-3-1-1.png"
                  alt="adorno decorativo"
                  className="w-18 h-3.5 object-contain"
                />
              </div>

              <p className="font-sans text-[15px] sm:text-[16px] leading-[28px] text-[#666666]">
                Bocagrande es una zona lujosa, famosa por sus alargadas playas de arena, que están resguardadas por paseos marítimos con palmeras.
              </p>

              <div className="pt-6">
                <Link
                  to="/habitaciones"
                  className="inline-block bg-[#b5987a] hover:bg-[#9e8367] text-white text-[12px] font-bold tracking-[2px] uppercase px-8 py-3.5 transition-all duration-300 shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b5987a]"
                >
                  VER MÁS
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
