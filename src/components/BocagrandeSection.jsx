import React from 'react';
import { Link } from 'react-router-dom';

export default function BocagrandeSection() {
  return (
    <section className="relative bg-[#FCF9F6] pb-24 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Overlapping Grid: Left Skyline Image and Right Translucent Text Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center -mt-20 sm:-mt-28 relative z-20">
          
          {/* Left Column: Skyline Beach Photo */}
          <div className="lg:col-span-6 pt-6 lg:pt-14">
            <div className="overflow-hidden shadow-md">
              <img
                src="/images/hotel/fotografia-foto-photo-turismo-tourism-travel-skyline-playa-bocagrande-cartagena-mar-colombia-fondos-wallpapers-somos-motta-min.jpg"
                alt="Skyline y Playa de Bocagrande Cartagena"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Hotel Experience Text Box Overlapping */}
          <div className="lg:col-span-6">
            <div
              className="bg-white p-8 sm:p-12 lg:p-16 shadow-lg border border-[#e5ded7] space-y-5 text-left"
              style={{ backgroundImage: `url('/images/hotel/background-bocagrande.png')`, backgroundRepeat: 'repeat' }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[55px] font-serif text-[#303030] font-semibold leading-tight lg:leading-[55px] tracking-[-1px]">
                Nuestras habitaciones cuentan con vista al Mar y a la Bahia de Cartagena
              </h2>

              {/* Graphic Ornament (4 gold chevrons) */}
              <div className="pt-1 pb-1">
                <img
                  src="/images/hotel/graphic-img-3-1-1.png"
                  alt="adorno gráfico"
                  className="w-18 h-3.5 object-contain"
                />
              </div>

              <p className="text-[16px] leading-[27px] font-lato font-light text-[#383838]">
                Bocagrande es una zona lujosa, famosa por sus alargadas playas de arena, que están resguardadas por paseos marítimos con palmeras.
              </p>

              <div className="pt-4">
                <Link
                  to="/habitaciones"
                  className="inline-block bg-[#b5987a] hover:bg-[#303030] text-white h-[50px] leading-[50px] px-10 text-[12px] font-lato font-bold uppercase tracking-[3px] transition-colors"
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
