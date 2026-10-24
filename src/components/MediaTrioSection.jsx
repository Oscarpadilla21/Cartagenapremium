import React from 'react';

export default function MediaTrioSection() {
  return (
    <section className="py-20 bg-[#FCF9F6] text-center" aria-label="Destacados visuales del hotel">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
          
          {/* Column 1: Reception Photo (White framed card) */}
          <div className="p-4 bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 inline-block mx-auto max-w-[400px] w-full group border border-[#f0eae3]">
            <div className="overflow-hidden bg-stone-100">
              <img
                src="/images/hotel/recep-400x500.jpeg"
                alt="Recepción y lobby de Hotel Cartagena Premium"
                className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="pt-3 pb-1 text-center">
              <span className="text-[11px] font-lato uppercase tracking-[2.5px] text-[#b5987a] font-bold">
                Recepción 24 Horas
              </span>
            </div>
          </div>

          {/* Column 2: YouTube Short Video (White framed card taller) */}
          <div className="p-4 bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 inline-block mx-auto max-w-[400px] w-full group border border-[#c1a186]/40 relative">
            <div className="overflow-hidden bg-black h-[520px]">
              <iframe
                src="https://www.youtube.com/embed/y2TCHQ36MDs"
                title="Restaurante y ambiente en Hotel Cartagena Premium"
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="pt-3 pb-1 text-center">
              <span className="text-[11px] font-lato uppercase tracking-[2.5px] text-[#b5987a] font-bold">
                Gastronomía Caribeña & Bar
              </span>
            </div>
          </div>

          {/* Column 3: Pool View Photo (White framed card) */}
          <div className="p-4 bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 inline-block mx-auto max-w-[400px] w-full group border border-[#f0eae3]">
            <div className="overflow-hidden bg-stone-100">
              <img
                src="/images/hotel/vista-piscina-400x500.jpeg"
                alt="Piscina panorámica con vista al mar y bahía"
                className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="pt-3 pb-1 text-center">
              <span className="text-[11px] font-lato uppercase tracking-[2.5px] text-[#b5987a] font-bold">
                Piscina Panorámica
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}