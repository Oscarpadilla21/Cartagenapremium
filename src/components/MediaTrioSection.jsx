import React from 'react';

export default function MediaTrioSection() {
  return (
    <section className="py-20 bg-[#FCF9F6] text-center">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
          
          {/* Column 1: Reception Photo (White framed card) */}
          <div className="p-4 bg-white shadow-sm inline-block mx-auto max-w-[400px] w-full">
            <div className="overflow-hidden">
              <img
                src="/images/hotel/recep-400x500.jpeg"
                alt="Recepción Hotel Cartagena Premium"
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Column 2: YouTube Short Video (White framed card taller) */}
          <div className="p-4 bg-white shadow-sm inline-block mx-auto max-w-[400px] w-full">
            <div className="overflow-hidden bg-black h-[520px]">
              <iframe
                src="https://www.youtube.com/embed/y2TCHQ36MDs"
                title="Restaurante Hotel Cartagena Premium"
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Column 3: Pool View Photo (White framed card) */}
          <div className="p-4 bg-white shadow-sm inline-block mx-auto max-w-[400px] w-full">
            <div className="overflow-hidden">
              <img
                src="/images/hotel/vista-piscina-400x500.jpeg"
                alt="Vista Piscina Hotel Cartagena Premium"
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
