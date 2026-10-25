import React, { useState, useEffect } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Wifi, Tv, Bath, Wind, Flame, Eye, Sparkles, Shield, Camera, Bed, CalendarCheck, X } from 'lucide-react';

export default function HabitacionesPage({ onOpenBooking }) {
  const [activeGalleryRoom, setActiveGalleryRoom] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeGalleryRoom) {
        setActiveGalleryRoom(null);
      }
    };
    if (activeGalleryRoom) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeGalleryRoom]);

  const getFeatureIcon = (feature) => {
    const f = feature.toLowerCase();
    if (f.includes('wifi') || f.includes('wi-fi')) return <Wifi className="w-5 h-5 text-[#b5987a]" />;
    if (f.includes('tv') || f.includes('televisión')) return <Tv className="w-5 h-5 text-[#b5987a]" />;
    if (f.includes('baño')) return <Bath className="w-5 h-5 text-[#b5987a]" />;
    if (f.includes('aire')) return <Wind className="w-5 h-5 text-[#b5987a]" />;
    if (f.includes('ducha') || f.includes('caliente')) return <Flame className="w-5 h-5 text-[#b5987a]" />;
    if (f.includes('cama')) return <Bed className="w-5 h-5 text-[#b5987a]" />;
    return <Camera className="w-5 h-5 text-[#b5987a]" />;
  };

  return (
    <div className="pt-32 pb-24 bg-white text-left">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services Header */}
        <div className="mb-10">
          <span className="text-[11px] font-lato font-bold uppercase tracking-[0.25em] text-[#b5987a] block">
            Alojamiento Exclusivo en Bocagrande
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#303030] mt-1">
            Habitaciones con Vista al Mar y Bahía
          </h1>
          <div className="w-16 h-0.5 bg-[#b5987a] mt-3" />
        </div>

        {/* 6 Common Services Icons Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center py-6 border-b border-[#e8dfd5] mb-16 bg-[#FCF9F6] p-4 rounded-xl">
          <div className="space-y-2 flex flex-col items-center">
            <Sparkles className="w-7 h-7 text-[#b5987a]" />
            <p className="font-lato text-[13px] leading-[20px] font-medium text-[#303030]">Limpieza diaria</p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <Wifi className="w-7 h-7 text-[#b5987a]" />
            <p className="font-lato text-[13px] leading-[20px] font-medium text-[#303030]">WIFI gratis</p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <Shield className="w-7 h-7 text-[#b5987a]" />
            <p className="font-lato text-[13px] leading-[20px] font-medium text-[#303030]">Caja fuerte</p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <Bath className="w-7 h-7 text-[#b5987a]" />
            <p className="font-lato text-[13px] leading-[20px] font-medium text-[#303030]">Baño privado</p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <Eye className="w-7 h-7 text-[#b5987a]" />
            <p className="font-lato text-[13px] leading-[20px] font-medium text-[#303030]">Vistas panorámicas</p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <Tv className="w-7 h-7 text-[#b5987a]" />
            <p className="font-lato text-[13px] leading-[20px] font-medium text-[#303030]">TV pantalla plana</p>
          </div>
        </div>

        {/* Rooms Detailed List (Two Columns per Room) */}
        <div className="space-y-16">
          {HOTEL_DATA.rooms.map((room, idx) => (
            <div key={room.id} className="pt-2">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left Column: Room Photo with gallery trigger and Reservar Button */}
                <div className="lg:col-span-6 space-y-6">
                  <div 
                    role="button"
                    tabIndex={0}
                    aria-label={`Ver galería de fotos de ${room.title}`}
                    className="overflow-hidden shadow-deluxe border border-[#e8dfd5] cursor-pointer group relative bg-stone-100 focus-visible:ring-2 focus-visible:ring-[#b5987a]"
                    onClick={() => setActiveGalleryRoom(room)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveGalleryRoom(room);
                      }
                    }}
                  >
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-5 py-2.5 bg-white/95 font-lato text-[12px] font-bold text-[#303030] uppercase tracking-[2px] shadow-md flex items-center gap-2">
                        <Eye className="w-4 h-4 text-[#b5987a]" />
                        <span>Ver fotos ({room.gallery ? room.gallery.length : 1})</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#8c6d4f] block font-lato">
                        Reserva Directa
                      </span>
                      <span className="font-serif text-lg sm:text-xl font-bold text-[#1f242e] block">
                        Mejor Tarifa Garantizada
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenBooking ? onOpenBooking(room) : null}
                      className="qbutton flex items-center gap-2"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      <span>Reservar</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Room Title, Description & Icons List */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-block px-3 py-1 rounded bg-stone-100 text-[#8c6d4f] text-[10px] font-bold uppercase tracking-wider font-lato">
                    {room.badge}
                  </div>
                  <h2 className="font-serif text-[28px] sm:text-[34px] font-semibold text-[#303030]">
                    {room.title}
                  </h2>

                  <p className="font-lato text-[16px] leading-[28px] font-light text-[#383838]">
                    {room.description}
                  </p>

                  <div className="pt-2 pb-2 text-xs text-stone-600 font-sans border-y border-stone-100 flex items-center gap-6">
                    <div><strong>Capacidad:</strong> {room.capacity}</div>
                    <div><strong>Camas:</strong> {room.bed}</div>
                  </div>

                  <div className="pt-2 space-y-3 font-lato text-[15px] sm:text-[16px] leading-[26px] font-light text-[#383838]">
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
                <hr className="border-t border-[#e8dfd5] mt-16" />
              )}
            </div>
          ))}
        </div>

        {/* Footer Quote */}
        <div className="mt-20 pt-10 border-t border-[#e8dfd5] text-left">
          <h4 className="font-serif italic text-[20px] sm:text-[24px] leading-[34px] font-normal text-[#555555]">
            "Las habitaciones del Hotel Cartagena Premium no dejan indiferente, por ello nuestros clientes son nuestra mejor publicidad."
          </h4>
          <div className="w-12 h-0.5 bg-[#b5987a] mt-3" />
        </div>

      </div>

      {/* Gallery Modal */}
      {activeGalleryRoom && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Galería de ${activeGalleryRoom.title}`}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveGalleryRoom(null)}
        >
          <div
            className="bg-white p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-[#c1a186]/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-stone-200">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#b5987a] block font-lato">
                  Fotos de la habitación
                </span>
                <h3 className="text-xl font-serif text-[#1f242e] font-semibold">{activeGalleryRoom.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveGalleryRoom(null)}
                className="text-stone-400 hover:text-stone-800 p-2.5 rounded-full hover:bg-stone-100 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#b5987a]"
                aria-label="Cerrar fotos"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(activeGalleryRoom.gallery || [activeGalleryRoom.image]).map((img, i) => (
                <div key={i} className="h-64 overflow-hidden rounded-lg bg-stone-100 border border-stone-200">
                  <img src={img} alt={`${activeGalleryRoom.title} - Foto ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-600 font-sans font-medium">
                Garantía de mejor tarifa en reserva directa
              </span>
              <button
                type="button"
                onClick={() => {
                  const r = activeGalleryRoom;
                  setActiveGalleryRoom(null);
                  if (onOpenBooking) onOpenBooking(r);
                }}
                className="qbutton text-xs py-2 px-6 h-[44px] leading-[44px]"
              >
                Reservar esta habitación
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}