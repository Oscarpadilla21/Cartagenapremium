import React, { useState } from 'react';
import { Calendar as CalendarIcon, Users, BedDouble, Search, Sparkles } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

export default function BookingBar({ onSearch, defaultRoom = '' }) {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState('2');
  const [selectedSuite, setSelectedSuite] = useState(defaultRoom || 'all');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      checkIn,
      checkOut,
      guests,
      suiteId: selectedSuite
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 -mt-16 sm:-mt-20 relative z-30">
      <form
        onSubmit={handleSubmit}
        className="glass-gold rounded-xl p-4 sm:p-6 shadow-deluxe-lg border border-[#C5A880]/40 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#C5A880]/20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#A88653]" />
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#745729]">
              Garantía de Mejor Tarifa Directa · Cancelación Flexible
            </span>
          </div>
          <span className="hidden sm:inline-block text-[11px] text-stone-500 font-sans tracking-wide">
            Sin comisiones de intermediarios
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          {/* Check-In */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#745729] flex items-center gap-1.5">
              <CalendarIcon className="w-3.5 h-3.5 text-[#A88653]" />
              Llegada (Check-in)
            </label>
            <input
              type="date"
              value={checkIn}
              min={today}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-white/90 border border-stone-200 focus:border-[#A88653] focus:ring-1 focus:ring-[#A88653] text-stone-800 text-sm rounded px-3 py-2.5 font-medium outline-none transition-all"
            />
          </div>

          {/* Check-Out */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#745729] flex items-center gap-1.5">
              <CalendarIcon className="w-3.5 h-3.5 text-[#A88653]" />
              Salida (Check-out)
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn || today}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-white/90 border border-stone-200 focus:border-[#A88653] focus:ring-1 focus:ring-[#A88653] text-stone-800 text-sm rounded px-3 py-2.5 font-medium outline-none transition-all"
            />
          </div>

          {/* Guests */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#745729] flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#A88653]" />
              Huéspedes
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-white/90 border border-stone-200 focus:border-[#A88653] focus:ring-1 focus:ring-[#A88653] text-stone-800 text-sm rounded px-3 py-2.5 font-medium outline-none transition-all"
            >
              <option value="1">1 Huésped (Solo/Negocios)</option>
              <option value="2">2 Huéspedes (Pareja/Doble)</option>
              <option value="3">3 Huéspedes (Triple)</option>
              <option value="4">4 Huéspedes (Familiar)</option>
              <option value="5">5+ Huéspedes (Grupo)</option>
            </select>
          </div>

          {/* Suite Preference */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#745729] flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-[#A88653]" />
              Categoría de Suite
            </label>
            <select
              value={selectedSuite}
              onChange={(e) => setSelectedSuite(e.target.value)}
              className="w-full bg-white/90 border border-stone-200 focus:border-[#A88653] focus:ring-1 focus:ring-[#A88653] text-stone-800 text-sm rounded px-3 py-2.5 font-medium outline-none transition-all truncate"
            >
              <option value="all">Todas las Suites Disponibles</option>
              {HOTEL_DATA.suites.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          {/* Submit CTA */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#0E1E2E] hover:bg-[#1A334B] text-[#FAF8F5] border border-[#A88653] py-2.5 px-4 rounded font-semibold text-xs tracking-[0.18em] uppercase transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Search className="w-4 h-4 text-[#C5A880] transition-transform duration-300 group-hover:scale-110" />
              <span>Ver Disponibilidad</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
