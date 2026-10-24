import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Wifi, Tv, Bath, Wind, Flame, Eye, Sparkles, Shield, Camera, Bed } from 'lucide-react';

export default function HabitacionesPage({ onOpenBooking }) {
  const [activeGalleryRoom, setActiveGalleryRoom] = useState(null);

  const getFeatureIcon = (feature) => {
    const f = feature.toLowerCase();
    if (f.includes('wifi') || f.includes('wi-fi')) return <Wifi className="w-5 h-5 text-[#c5a890]" />;
    if (f.includes('tv') || f.includes('televisión')) return <Tv className="w-5 h-5 text-[#c5a890]" />;
    if (f.includes('baño')) return <Bath className="w-5 h-5 text-[#c5a890]" />;
    if (f.includes('aire')) return <Wind className="w-5 h-5 text-[#c5a890]" />;
    if (f.includes('ducha') || f.includes('caliente')) return <Flame className="w-5 h-5 text-[#c5a890]" />;
    if (f.includes('cama')) return <Bed className="w-5 h-5 text-[#c5a890]" />;
    return <Camera className="w-5 h-5 text-[#c5a890]" />;
  };

  return (
    <div className="pt-32 pb-24 bg-white text-left">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services Header */}
        <div className="mb-10">
          <h4 className="font-lato text-[21px] leading-[32px] font-bold text-[#303030]">
            Todas las habitaciones disponen de los siguientes servicios:
          </h4>
          <div className="w-12 h-0.5 bg-[#b5987a] mt-3" />
        </div>

        {/* 6 Common Services Icons Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center py-6 border-b border-[#cccccc] mb-16">
          <div className="space-y-2 flex flex-col items-center">
            <Sparkles className="w-8 h-8 text-[#b5987a]" />
            <p className="font-lato text-[14px] leading-[22px] font-light text-[#383838]">Limpieza diaria</p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <Wifi className="w-8 h-8 text-[#b5987a]" />
            <p className="font-lato text-[14px] leading-[22px] font-light text-[#383838]">WIFI gratis</p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <Shield className="w-8 h-8 text-[#b5987a]" />
            <p className="font-lato text-[14px] leading-[22px] font-light text-[#383838]">Caja fuerte</p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <Bath className="w-8 h-8 text-[#b5987a]" />
            <p className="font-lato text-[14px] leading-[22px] font-light text-[#383838]">Baño privado</p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <Eye className="w-8 h-8 text-[#b5987a]" />
            <p className="font-lato text-[14px] leading-[22px] font-light text-[#383838]">Vistas</p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <Tv className="w-8 h-8 text-[#b5987a]" />
            <p className="font-lato text-[14px] leading-[22px] font-light text-[#383838]">Televisión plana</p>
          </div>
        </div>

        {/* Rooms Detailed List (Two Columns per Room) */}
        <div className="space-y-16">
          {HOTEL_DATA.rooms.map((room, idx) => (
            <div key={room.id}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left Column: Room Photo with gallery trigger and Reservar Button */}
                <div className="lg:col-span-6 space-y-6">
                  <div 
                    className="overflow-hidden shadow-sm cursor-pointer group relative"
                    onClick={() => setActiveGalleryRoom(room)}
                  >
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-white/90 font-lato text-[12px] font-bold text-[#303030] uppercase tracking-[2px] shadow">
                        Ver fotos ({room.gallery ? room.gallery.length : 1})
                      </span>
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => onOpenBooking(room)}
                      className="qbutton"
                    >
                      Reservar
                    </button>
                  </div>
                </div>

                {/* Right Column: Room Title, Description & Icons List */}
                <div className="lg:col-span-6 space-y-4">
                  <h3 className="font-serif text-[26px] sm:text-[30px] font-semibold text-[#303030]">
                    {room.title}
                  </h3>

                  <p className="font-lato text-[16px] leading-[27px] font-light text-[#383838]">
                    {room.description}
                  </p>

                  <div className="pt-4 space-y-3 font-lato text-[16px] leading-[27px] font-light text-[#383838]">
                    {room.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        {getFeatureIcon(feat)}
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {idx < HOTEL_DATA.rooms.length - 1 && (
                <hr className="border-t border-[#cccccc] mt-16" />
              )}
            </div>
          ))}
        </div>

        {/* Footer Quote */}
        <div className="mt-20 pt-10 border-t border-[#cccccc] text-left">
          <h4 className="font-lato text-[18px] sm:text-[21px] leading-[30px] font-normal text-[#808080]">
            Las habitaciones del Hotel Cartagena Premium no dejan indiferente, por ello nuestros clientes son nuestra mejor publicidad.
          </h4>
          <div className="w-12 h-0.5 bg-[#b5987a] mt-3" />
        </div>

      </div>

      {/* Gallery Modal */}
      {activeGalleryRoom && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveGalleryRoom(null)}
        >
          <div
            className="bg-white p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-stone-200">
              <h3 className="text-xl font-serif text-[#333333]">{activeGalleryRoom.title}</h3>
              <button
                type="button"
                onClick={() => setActiveGalleryRoom(null)}
                className="text-stone-500 hover:text-black font-bold text-lg p-2 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(activeGalleryRoom.gallery || [activeGalleryRoom.image]).map((img, i) => (
                <div key={i} className="h-64 overflow-hidden bg-stone-100">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
