import React, { useState, useEffect } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Check, Eye, X, CalendarCheck, BedDouble, Users } from 'lucide-react';
import RoomImageSlider from './RoomImageSlider';

export default function SuitesSection({ onSelectSuite }) {
  const [previewRoom, setPreviewRoom] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && previewRoom) {
        setPreviewRoom(null);
      }
    };
    if (previewRoom) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [previewRoom]);

  return (
    <section id="habitaciones" className="py-20 bg-[#FAF8F5] relative" aria-label="Habitaciones y suites">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#b5987a] font-bold font-lato">
            Hotel Cartagena Premium
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#303030] mt-2">
            Nuestras Habitaciones
          </h2>
          <div className="w-16 h-0.5 bg-[#b5987a] mx-auto my-4" />
          
          {/* Services in all rooms - exact text from cartagenapremium.com/habitaciones */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#c1a186]/30 shadow-deluxe mt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#8c6d4f] mb-3.5 font-lato">
              Todas las habitaciones disponen de los siguientes servicios:
            </h3>
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 text-xs font-sans text-stone-700">
              {HOTEL_DATA.roomServices.map((service, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FCF9F6] border border-[#e8dfd5] text-stone-800 transition-colors hover:border-[#b5987a]"
                >
                  <Check className="w-3.5 h-3.5 text-[#b5987a] stroke-[2.5]" />
                  <span>{service}</span>
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
              className="bg-white rounded-2xl overflow-hidden border border-[#e8dfd5] shadow-deluxe hover:shadow-deluxe-lg transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Room Photo Slider with 5s Autoplay & Manual Arrows */}
              <RoomImageSlider
                images={room.gallery || [room.image]}
                title={room.title}
                badge={room.badge}
                onOpenModal={() => setPreviewRoom(room)}
                className="h-64 sm:h-72"
              />

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#303030] group-hover:text-[#b5987a] transition-colors">
                    {room.title}
                  </h3>
                  <p className="text-stone-600 font-sans text-xs sm:text-sm mt-2 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Bed & Capacity */}
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600 font-sans">
                    <span className="flex items-center gap-1.5">
                      <BedDouble className="w-3.5 h-3.5 text-[#b5987a]" />
                      <span>{room.bed}</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-medium text-stone-800">
                      <Users className="w-3.5 h-3.5 text-[#b5987a]" />
                      <span>{room.capacity}</span>
                    </span>
                  </div>

                  {/* Amenities List */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-stone-100">
                    {room.features.slice(0, 4).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-[#b5987a] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Booking & Best Rate Guaranteed CTA */}
                <div className="mt-6 pt-4 border-t border-[#e8dfd5] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8c6d4f] block font-sans font-bold">
                      Reserva Directa
                    </span>
                    <span className="text-base sm:text-lg font-serif font-bold text-[#1f242e] block">
                      Mejor Tarifa Garantizada
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectSuite(room)}
                    className="min-h-[44px] px-6 py-2.5 rounded-sm bg-[#b5987a] hover:bg-[#303030] text-white text-xs uppercase tracking-[2px] font-bold font-lato transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer active:scale-95 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#b5987a]"
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>Reservar</span>
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

      {/* Room Gallery Lightbox Modal with Keyboard accessibility */}
      {previewRoom && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Galería de fotos: ${previewRoom.title}`}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setPreviewRoom(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full p-6 max-h-[90vh] overflow-y-auto shadow-2xl border border-[#c1a186]/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#b5987a] font-bold block">
                  Galería de habitación
                </span>
                <h3 className="text-xl font-serif text-[#1f242e] font-semibold">{previewRoom.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setPreviewRoom(null)}
                className="text-stone-400 hover:text-stone-800 p-2 rounded-full hover:bg-stone-100 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#b5987a]"
                aria-label="Cerrar galería"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3.5 mt-4">
              <RoomImageSlider
                images={previewRoom.gallery || [previewRoom.image]}
                title={previewRoom.title}
                className="h-64 sm:h-[380px] rounded-xl overflow-hidden shadow-md"
              />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(previewRoom.gallery || [previewRoom.image]).map((img, i) => (
                  <div key={i} className="h-18 sm:h-20 rounded-lg overflow-hidden border border-stone-200 group bg-stone-100">
                    <img
                      src={img}
                      alt={`${previewRoom.title} - Vista ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-500 font-sans">
                {previewRoom.gallery.length} fotos en alta resolución
              </span>
              <button
                type="button"
                onClick={() => {
                  const r = previewRoom;
                  setPreviewRoom(null);
                  onSelectSuite(r);
                }}
                className="min-h-[44px] px-6 py-2.5 rounded-sm bg-[#b5987a] hover:bg-[#303030] text-white text-xs uppercase tracking-[2px] font-bold font-lato cursor-pointer transition-colors shadow-sm"
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