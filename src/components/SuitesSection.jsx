import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Check, ShieldCheck, ArrowRight, Eye, Wifi, Tv, Bath, Wind, Flame } from 'lucide-react';

export default function SuitesSection({ onSelectSuite, currency }) {
  const [previewRoom, setPreviewRoom] = useState(null);

  const formatPrice = (room) => {
    if (currency === 'USD') {
      return `$${room.priceUSD} USD`;
    }
    return `$${room.priceCOP.toLocaleString('es-CO')} COP`;
  };

  return (
    <section id="habitaciones" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A88653] font-semibold">
            Hotel Cartagena Premium
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#0E1E2E] mt-2">
            Nuestras Habitaciones
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto my-4" />
          
          {/* Services in all rooms - exact text from cartagenapremium.com/habitaciones */}
          <div className="bg-white p-5 rounded-xl border border-[#C5A880]/30 shadow-sm mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#A88653] mb-3">
              Todas las habitaciones disponen de los siguientes servicios:
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs font-sans text-stone-700">
              {HOTEL_DATA.roomServices.map((service, idx) => (
                <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-stone-200">
                  <Check className="w-3.5 h-3.5 text-[#A88653]" />
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Room Cards Grid (The 4 Real Rooms) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HOTEL_DATA.rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#C5A880]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image & Badges */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-100">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#0E1E2E]/90 text-[#C5A880] text-[10px] uppercase font-bold tracking-wider backdrop-blur-sm border border-[#C5A880]/30">
                    {room.badge}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewRoom(room)}
                  className="absolute bottom-4 right-4 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#0E1E2E] shadow-md backdrop-blur-sm transition-transform hover:scale-110 cursor-pointer flex items-center gap-1.5 text-xs font-medium"
                >
                  <Eye className="w-4 h-4 text-[#A88653]" />
                  <span>Ver fotos ({room.gallery.length})</span>
                </button>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#0E1E2E] group-hover:text-[#A88653] transition-colors">
                    {room.title}
                  </h3>
                  <p className="text-stone-600 font-sans text-xs sm:text-sm mt-2 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Bed & Capacity */}
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-sans">
                    <span>{room.bed}</span>
                    <span className="font-medium text-[#0E1E2E]">{room.capacity}</span>
                  </div>

                  {/* Amenities List */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-stone-100">
                    {room.features.slice(0, 4).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-[#A88653] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & CTA Button */}
                <div className="mt-6 pt-4 border-t border-[#C5A880]/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-sans">Desde</span>
                    <span className="text-lg sm:text-xl font-serif font-bold text-[#0E1E2E]">
                      {formatPrice(room)}
                    </span>
                    <span className="text-[10px] text-stone-500 ml-1">/ noche</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectSuite(room)}
                    className="px-6 py-2.5 rounded-full bg-[#0E1E2E] hover:bg-[#A88653] text-[#C5A880] hover:text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-sm transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer quote - exact from cartagenapremium.com/habitaciones */}
        <div className="mt-14 text-center">
          <p className="text-stone-600 font-serif italic text-base sm:text-lg max-w-2xl mx-auto">
            "Las habitaciones del Hotel Cartagena Premium no dejan indiferente, por ello nuestros clientes son nuestra mejor publicidad."
          </p>
        </div>
      </div>

      {/* Room Gallery Lightbox */}
      {previewRoom && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreviewRoom(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full p-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <h3 className="text-xl font-serif text-[#0E1E2E]">{previewRoom.title}</h3>
              <button
                onClick={() => setPreviewRoom(null)}
                className="text-stone-400 hover:text-stone-700 text-sm font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {previewRoom.gallery.map((img, i) => (
                <div key={i} className="h-56 rounded-lg overflow-hidden border border-stone-200">
                  <img src={img} alt={`Foto ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  const r = previewRoom;
                  setPreviewRoom(null);
                  onSelectSuite(r);
                }}
                className="px-6 py-2.5 rounded-full bg-[#0E1E2E] text-[#C5A880] hover:bg-[#A88653] hover:text-white text-xs uppercase tracking-wider font-semibold cursor-pointer"
              >
                Reservar esta habitación
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
