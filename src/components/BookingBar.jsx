import React, { useState } from 'react';
import { Calendar as CalendarIcon, Users, BedDouble, Search, Sparkles } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

const getInitialToday = () => new Date().toISOString().split('T')[0];
const getInitialTomorrow = (startDate) => {
  const base = startDate ? new Date(startDate) : new Date();
  const next = new Date(base.getTime() + 86400000);
  return next.toISOString().split('T')[0];
};

export default function BookingBar({ onSearch, defaultRoom = '' }) {
  const [checkIn, setCheckIn] = useState(getInitialToday);
  const [checkOut, setCheckOut] = useState(() => getInitialTomorrow());
  const [guests, setGuests] = useState('2');
  const [selectedSuite, setSelectedSuite] = useState(defaultRoom || 'all');

  const handleCheckInChange = (e) => {
    const newCheckIn = e.target.value;
    setCheckIn(newCheckIn);
    if (newCheckIn >= checkOut) {
      setCheckOut(getInitialTomorrow(newCheckIn));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        checkIn,
        checkOut,
        guests,
        suiteId: selectedSuite
      });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 -mt-8 sm:-mt-16 relative z-30">
      <form
        onSubmit={handleSubmit}
        className="glass-gold rounded-2xl p-4 sm:p-6 shadow-deluxe-lg border border-[#c1a186]/40 backdrop-blur-xl"
        aria-label="Buscador de reservas"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 pb-3 border-b border-[#c1a186]/20 gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#b5987a]" />
            <span className="text-[11px] font-lato font-bold uppercase tracking-[0.18em] text-[#8c6d4f]">
              Garantía de Mejor Tarifa Directa · Cancelación Flexible
            </span>
          </div>
          <span className="text-[11px] text-stone-500 font-sans tracking-wide">
            Tarifas oficiales sin intermediarios ni comisiones
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
          {/* Check-In */}
          <div className="space-y-1.5">
            <label
              htmlFor="booking-checkin"
              className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8c6d4f] flex items-center gap-1.5"
            >
              <CalendarIcon className="w-3.5 h-3.5 text-[#b5987a]" />
              Llegada (Check-in)
            </label>
            <input
              id="booking-checkin"
              type="date"
              value={checkIn}
              min={checkIn}
              onChange={handleCheckInChange}
              className="w-full min-h-[44px] bg-white/95 border border-stone-200 focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/25 text-stone-800 text-sm rounded-lg px-3 py-2 font-medium outline-none transition-all shadow-2xs"
            />
          </div>

          {/* Check-Out */}
          <div className="space-y-1.5">
            <label
              htmlFor="booking-checkout"
              className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8c6d4f] flex items-center gap-1.5"
            >
              <CalendarIcon className="w-3.5 h-3.5 text-[#b5987a]" />
              Salida (Check-out)
            </label>
            <input
              id="booking-checkout"
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full min-h-[44px] bg-white/95 border border-stone-200 focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/25 text-stone-800 text-sm rounded-lg px-3 py-2 font-medium outline-none transition-all shadow-2xs"
            />
          </div>

          {/* Guests */}
          <div className="space-y-1.5">
            <label
              htmlFor="booking-guests"
              className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8c6d4f] flex items-center gap-1.5"
            >
              <Users className="w-3.5 h-3.5 text-[#b5987a]" />
              Huéspedes
            </label>
            <select
              id="booking-guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full min-h-[44px] bg-white/95 border border-stone-200 focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/25 text-stone-800 text-sm rounded-lg px-3 py-2 font-medium outline-none transition-all shadow-2xs cursor-pointer"
            >
              <option value="1">1 Huésped (Solo / Negocios)</option>
              <option value="2">2 Huéspedes (Pareja / Doble)</option>
              <option value="3">3 Huéspedes (Triple)</option>
              <option value="4">4 Huéspedes (Familiar)</option>
              <option value="5">5+ Huéspedes (Grupo)</option>
            </select>
          </div>

          {/* Suite Preference */}
          <div className="space-y-1.5">
            <label
              htmlFor="booking-suite"
              className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8c6d4f] flex items-center gap-1.5"
            >
              <BedDouble className="w-3.5 h-3.5 text-[#b5987a]" />
              Categoría de Suite
            </label>
            <select
              id="booking-suite"
              value={selectedSuite}
              onChange={(e) => setSelectedSuite(e.target.value)}
              className="w-full min-h-[44px] bg-white/95 border border-stone-200 focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/25 text-stone-800 text-sm rounded-lg px-3 py-2 font-medium outline-none transition-all shadow-2xs truncate cursor-pointer"
            >
              <option value="all">Todas las Suites Disponibles</option>
              {(HOTEL_DATA.suites || HOTEL_DATA.rooms || []).map((s) => (
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
              className="w-full min-h-[44px] bg-[#b5987a] hover:bg-[#303030] text-white border border-[#b5987a] hover:border-[#303030] py-2.5 px-4 rounded-lg font-lato font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.98]"
            >
              <Search className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" />
              <span>Ver Tarifas</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}