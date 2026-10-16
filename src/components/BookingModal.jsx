import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { X, CheckCircle, Calendar, Users, ShieldCheck, Sparkles, Send, Award, Phone } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialSuite, currency }) {
  if (!isOpen) return null;

  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];

  const [selectedSuiteId, setSelectedSuiteId] = useState(initialSuite?.id || HOTEL_DATA.suites[0].id);
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState('2');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const currentSuite = HOTEL_DATA.suites.find((s) => s.id === selectedSuiteId) || HOTEL_DATA.suites[0];

  // Calculate nights
  const calculateNights = () => {
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diffTime = Math.abs(d2 - d1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();
  const totalPriceCOP = currentSuite.priceCOP * nights;
  const totalPriceUSD = currentSuite.priceUSD * nights;

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    const text = `*SOLICITUD DE RESERVA DELUXE - HOTEL CARTAGENA PREMIUM*%0A%0A` +
      `*Huésped:* ${guestName || 'Por confirmar'}%0A` +
      `*Suite:* ${currentSuite.title} (${currentSuite.tier})%0A` +
      `*Fechas:* ${checkIn} hasta ${checkOut} (${nights} noches)%0A` +
      `*Huéspedes:* ${guests}%0A` +
      `*Total estimado:* $${totalPriceCOP.toLocaleString('es-CO')} COP / $${totalPriceUSD} USD%0A` +
      `*Email:* ${guestEmail || 'N/A'}%0A` +
      `*Teléfono:* ${guestPhone || 'N/A'}%0A` +
      `*Peticiones especiales:* ${specialRequests || 'Ninguna'}`;

    window.open(`https://wa.me/${HOTEL_DATA.whatsapp}?text=${text}`, '_blank');
    setBookingConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#FAF8F5] rounded-2xl max-w-4xl w-full overflow-hidden shadow-deluxe-lg border border-[#C5A880]/40 my-auto animate-in fade-in duration-300">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#0E1E2E] text-white flex items-center justify-between border-b border-[#C5A880]/30">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-sans font-bold">
                Reserva Directa Exclusiva
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-white mt-1">
              {bookingConfirmed ? '¡Solicitud de Reserva Registrada!' : 'Confirma Tu Estadía en Bocagrande'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {bookingConfirmed ? (
          /* Confirmation Success Screen */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle className="w-9 h-9" />
            </div>
            <div className="max-w-md mx-auto space-y-2">
              <h4 className="text-2xl font-serif text-[#0E1E2E]">
                ¡Gracias por elegir Hotel Cartagena Premium!
              </h4>
              <p className="text-sm text-stone-600 font-sans leading-relaxed">
                Hemos recibido tu solicitud para la <strong className="text-stone-900">{currentSuite.title}</strong> del <strong className="text-stone-900">{checkIn} al {checkOut}</strong>. Nuestro equipo de concierge te contactará vía WhatsApp para reconfirmar detalles y darte la bienvenida.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-stone-200 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between border-b pb-2">
                <span className="text-stone-500">Huésped principal:</span>
                <span className="font-semibold text-stone-800">{guestName || 'Por confirmar'}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-stone-500">Suite:</span>
                <span className="font-semibold text-stone-800">{currentSuite.title}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-stone-500">Duración:</span>
                <span className="font-semibold text-stone-800">{nights} noche(s)</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="font-bold text-stone-700">Total Estimado:</span>
                <span className="font-bold text-[#A88653] text-sm">
                  ${totalPriceCOP.toLocaleString('es-CO')} COP (${totalPriceUSD} USD)
                </span>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded bg-[#0E1E2E] text-white text-xs uppercase tracking-widest font-bold hover:bg-[#A88653] hover:text-[#0E1E2E] transition-colors"
              >
                Volver al Sitio
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleWhatsAppBooking} className="p-4 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
              {/* Left Column: Form Fields */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                {/* Suite Selector */}
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#745729] block mb-1">
                    Seleccionar Suite o Habitación
                  </label>
                  <select
                    value={selectedSuiteId}
                    onChange={(e) => setSelectedSuiteId(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded p-2.5 text-sm font-medium text-stone-800 focus:border-[#A88653] outline-none"
                  >
                    {HOTEL_DATA.suites.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title} — ${s.priceCOP.toLocaleString('es-CO')} COP / noche
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#745729] block mb-1">
                      Check-in
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      min={today}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded p-2.5 text-sm font-medium text-stone-800 focus:border-[#A88653] outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#745729] block mb-1">
                      Check-out
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      min={checkIn}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded p-2.5 text-sm font-medium text-stone-800 focus:border-[#A88653] outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Guests & Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#745729] block mb-1">
                      Huéspedes
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded p-2.5 text-sm font-medium text-stone-800 focus:border-[#A88653] outline-none"
                    >
                      <option value="1">1 Huésped</option>
                      <option value="2">2 Huéspedes</option>
                      <option value="3">3 Huéspedes</option>
                      <option value="4">4 Huéspedes</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#745729] block mb-1">
                      WhatsApp / Móvil
                    </label>
                    <input
                      type="tel"
                      placeholder="+57 300 000 0000"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded p-2.5 text-sm text-stone-800 focus:border-[#A88653] outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#745729] block mb-1">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Laura Martínez"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded p-2.5 text-sm text-stone-800 focus:border-[#A88653] outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#745729] block mb-1">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      placeholder="laura@ejemplo.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded p-2.5 text-sm text-stone-800 focus:border-[#A88653] outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#745729] block mb-1">
                    Peticiones Especiales (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ej: Aniversario, piso alto, hora estimada de llegada..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded p-2 text-xs text-stone-800 focus:border-[#A88653] outline-none resize-none"
                  />
                </div>
              </div>

              {/* Right Column: Order Summary & Suite Preview */}
              <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-[#C5A880]/30 flex flex-col justify-between space-y-4">
                <div>
                  <div className="h-36 rounded-lg overflow-hidden relative mb-3">
                    <img
                      src={currentSuite.image}
                      alt={currentSuite.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[#C5A880] text-[9px] uppercase font-bold tracking-widest">
                      {currentSuite.tier}
                    </div>
                  </div>

                  <h4 className="font-serif font-semibold text-lg text-[#0E1E2E]">
                    {currentSuite.title}
                  </h4>
                  <span className="text-[11px] text-stone-500 font-sans block">
                    {currentSuite.view} · {currentSuite.size}
                  </span>

                  <div className="mt-4 pt-3 border-t border-stone-100 space-y-2 text-xs">
                    <div className="flex justify-between text-stone-600">
                      <span>Tarifa por noche:</span>
                      <span className="font-semibold text-stone-900">
                        ${currentSuite.priceCOP.toLocaleString('es-CO')} COP
                      </span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                      <span>Duración:</span>
                      <span className="font-semibold text-stone-900">{nights} noche(s)</span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                      <span>Desayuno Buffet:</span>
                      <span className="font-semibold text-emerald-700">Incluido de cortesía</span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                      <span>Impuestos y seguro:</span>
                      <span className="font-semibold text-emerald-700">Incluidos</span>
                    </div>
                  </div>
                </div>

                {/* Total Price Box */}
                <div className="pt-3 border-t border-stone-200">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs uppercase font-bold tracking-wider text-stone-700">
                      Total Estimado:
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-serif font-bold text-[#A88653]">
                        ${totalPriceCOP.toLocaleString('es-CO')} COP
                      </div>
                      <div className="text-[11px] text-stone-500">Aprox. ${totalPriceUSD} USD</div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-[0.18em] shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirmar por WhatsApp VIP</span>
                  </button>

                  <p className="text-[10px] text-center text-stone-400 mt-2 font-sans">
                    Reserva garantizada con concierge directo · Sin cargos ocultos
                  </p>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
