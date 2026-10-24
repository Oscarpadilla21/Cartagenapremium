import React, { useState, useEffect } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { X, CheckCircle, Sparkles, Send } from 'lucide-react';

const getInitialToday = () => new Date().toISOString().split('T')[0];
const getInitialTomorrow = (startDate) => {
  const base = startDate ? new Date(startDate) : new Date();
  const next = new Date(base.getTime() + 86400000);
  return next.toISOString().split('T')[0];
};

export default function BookingModal({ isOpen, onClose, initialSuite }) {
  const suitesList = HOTEL_DATA.suites || HOTEL_DATA.rooms || [];
  const [selectedSuiteId, setSelectedSuiteId] = useState(initialSuite?.id || suitesList[0]?.id || 'sencilla');
  const [checkIn, setCheckIn] = useState(getInitialToday);
  const [checkOut, setCheckOut] = useState(() => getInitialTomorrow());
  const [guests, setGuests] = useState('2');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    if (initialSuite?.id) {
      setSelectedSuiteId(initialSuite.id);
    }
  }, [initialSuite]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setBookingConfirmed(false);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentSuite = suitesList.find((s) => s.id === selectedSuiteId) || suitesList[0] || {};

  // Calculate nights
  const calculateNights = () => {
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diffTime = Math.abs(d2 - d1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();
  const totalPriceCOP = (currentSuite.priceCOP || 220000) * nights;
  const totalPriceUSD = (currentSuite.priceUSD || 58) * nights;

  const handleCheckInChange = (e) => {
    const val = e.target.value;
    setCheckIn(val);
    if (val >= checkOut) {
      setCheckOut(getInitialTomorrow(val));
    }
  };

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    const text = `*SOLICITUD DE RESERVA - HOTEL CARTAGENA PREMIUM*%0A%0A` +
      `*Huésped:* ${guestName || 'Por confirmar'}%0A` +
      `*Suite:* ${currentSuite.title}%0A` +
      `*Fechas:* ${checkIn} hasta ${checkOut} (${nights} noche${nights > 1 ? 's' : ''})%0A` +
      `*Huéspedes:* ${guests}%0A` +
      `*Total estimado:* $${totalPriceCOP.toLocaleString('es-CO')} COP / $${totalPriceUSD} USD%0A` +
      `*Email:* ${guestEmail || 'N/A'}%0A` +
      `*Teléfono:* ${guestPhone || 'N/A'}%0A` +
      `*Peticiones especiales:* ${specialRequests || 'Ninguna'}`;

    window.open(`https://wa.me/${HOTEL_DATA.whatsapp}?text=${text}`, '_blank');
    setBookingConfirmed(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Confirmación de reserva directa"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F5] rounded-2xl max-w-4xl w-full overflow-hidden shadow-deluxe-lg border border-[#c1a186]/40 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#1f242e] text-white flex items-center justify-between border-b border-[#b5987a]/30">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#c1a186]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c1a186] font-lato font-bold">
                Reserva Directa Exclusiva
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-white mt-1">
              {bookingConfirmed ? '¡Solicitud de Reserva Registrada!' : 'Confirma Tu Estadía en Bocagrande'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-stone-400 hover:text-white p-2.5 rounded-full hover:bg-white/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#b5987a]"
            aria-label="Cerrar ventana de reserva"
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
              <h4 className="text-2xl font-serif text-[#1f242e]">
                ¡Gracias por elegir Hotel Cartagena Premium!
              </h4>
              <p className="text-sm text-stone-600 font-sans leading-relaxed">
                Hemos recibido tu solicitud para la <strong className="text-stone-900">{currentSuite.title}</strong> del <strong className="text-stone-900">{checkIn} al {checkOut}</strong>. Nuestro equipo de recepción te contactará vía WhatsApp para reconfirmar detalles y darte la bienvenida.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-stone-200 max-w-md mx-auto text-left text-xs space-y-2 shadow-2xs">
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
                <span className="font-bold text-[#b5987a] text-sm">
                  ${totalPriceCOP.toLocaleString('es-CO')} COP (${totalPriceUSD} USD)
                </span>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-4">
              <button
                type="button"
                onClick={onClose}
                className="min-h-[44px] px-8 py-3 rounded bg-[#1f242e] text-white text-xs uppercase tracking-widest font-bold hover:bg-[#b5987a] transition-colors cursor-pointer"
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
                  <label htmlFor="modal-suite-select" className="text-[11px] font-semibold uppercase tracking-wider text-[#8c6d4f] block mb-1">
                    Seleccionar Suite o Habitación
                  </label>
                  <select
                    id="modal-suite-select"
                    value={selectedSuiteId}
                    onChange={(e) => setSelectedSuiteId(e.target.value)}
                    className="w-full min-h-[44px] bg-white border border-stone-300 rounded-lg p-2.5 text-sm font-medium text-stone-800 focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 outline-none transition-all cursor-pointer"
                  >
                    {suitesList.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title} — ${(s.priceCOP || 220000).toLocaleString('es-CO')} COP / noche
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="modal-checkin" className="text-[11px] font-semibold uppercase tracking-wider text-[#8c6d4f] block mb-1">
                      Check-in (Llegada)
                    </label>
                    <input
                      id="modal-checkin"
                      type="date"
                      value={checkIn}
                      min={checkIn}
                      onChange={handleCheckInChange}
                      className="w-full min-h-[44px] bg-white border border-stone-300 rounded-lg p-2.5 text-sm font-medium text-stone-800 focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-checkout" className="text-[11px] font-semibold uppercase tracking-wider text-[#8c6d4f] block mb-1">
                      Check-out (Salida)
                    </label>
                    <input
                      id="modal-checkout"
                      type="date"
                      value={checkOut}
                      min={checkIn}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full min-h-[44px] bg-white border border-stone-300 rounded-lg p-2.5 text-sm font-medium text-stone-800 focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Guests & Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="modal-guests" className="text-[11px] font-semibold uppercase tracking-wider text-[#8c6d4f] block mb-1">
                      Huéspedes
                    </label>
                    <select
                      id="modal-guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full min-h-[44px] bg-white border border-stone-300 rounded-lg p-2.5 text-sm font-medium text-stone-800 focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 outline-none transition-all cursor-pointer"
                    >
                      <option value="1">1 Huésped</option>
                      <option value="2">2 Huéspedes</option>
                      <option value="3">3 Huéspedes</option>
                      <option value="4">4 Huéspedes</option>
                      <option value="5">5+ Huéspedes</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="modal-phone" className="text-[11px] font-semibold uppercase tracking-wider text-[#8c6d4f] block mb-1">
                      WhatsApp / Móvil
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      placeholder="+57 300 000 0000"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full min-h-[44px] bg-white border border-stone-300 rounded-lg p-2.5 text-sm text-stone-800 focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="modal-name" className="text-[11px] font-semibold uppercase tracking-wider text-[#8c6d4f] block mb-1">
                      Nombre Completo
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      placeholder="Ej: Laura Martínez"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full min-h-[44px] bg-white border border-stone-300 rounded-lg p-2.5 text-sm text-stone-800 focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-email" className="text-[11px] font-semibold uppercase tracking-wider text-[#8c6d4f] block mb-1">
                      Correo Electrónico
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      placeholder="laura@ejemplo.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full min-h-[44px] bg-white border border-stone-300 rounded-lg p-2.5 text-sm text-stone-800 focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="modal-requests" className="text-[11px] font-semibold uppercase tracking-wider text-[#8c6d4f] block mb-1">
                    Peticiones Especiales (Opcional)
                  </label>
                  <textarea
                    id="modal-requests"
                    rows={2}
                    placeholder="Ej: Aniversario, piso alto, hora estimada de llegada..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-lg p-2.5 text-xs text-stone-800 focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 outline-none resize-none transition-all"
                  />
                </div>
              </div>

              {/* Right Column: Order Summary & Suite Preview */}
              <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-[#c1a186]/30 flex flex-col justify-between space-y-4 shadow-sm">
                <div>
                  <div className="h-36 rounded-xl overflow-hidden relative mb-3 bg-stone-100">
                    <img
                      src={currentSuite.image}
                      alt={currentSuite.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 px-2.5 py-1 rounded bg-[#1f242e]/90 text-[#e6d0bb] text-[9px] uppercase font-bold tracking-widest border border-[#b5987a]/30">
                      {currentSuite.badge || 'Suite Seleccionada'}
                    </div>
                  </div>

                  <h4 className="font-serif font-semibold text-lg text-[#1f242e]">
                    {currentSuite.title}
                  </h4>
                  <span className="text-[11px] text-stone-500 font-sans block">
                    {currentSuite.bed} · {currentSuite.capacity}
                  </span>

                  <div className="mt-4 pt-3 border-t border-stone-100 space-y-2 text-xs">
                    <div className="flex justify-between text-stone-600">
                      <span>Tarifa por noche:</span>
                      <span className="font-semibold text-stone-900">
                        ${(currentSuite.priceCOP || 220000).toLocaleString('es-CO')} COP
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
                      <span>Cancelación flexible:</span>
                      <span className="font-semibold text-emerald-700">Garantizada</span>
                    </div>
                  </div>
                </div>

                {/* Total Price Box */}
                <div className="pt-3 border-t border-stone-200">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs uppercase font-bold tracking-wider text-stone-700 font-lato">
                      Total Estimado:
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-serif font-bold text-[#b5987a]">
                        ${totalPriceCOP.toLocaleString('es-CO')} COP
                      </div>
                      <div className="text-[11px] text-stone-500">Aprox. ${totalPriceUSD} USD</div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full min-h-[44px] py-3 rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-[0.18em] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirmar por WhatsApp</span>
                  </button>

                  <p className="text-[10px] text-center text-stone-400 mt-2 font-sans">
                    Reserva oficial directa · Sin comisiones de intermediarios
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