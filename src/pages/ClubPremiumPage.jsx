import React, { useState } from 'react';
import { Award, CheckCircle2, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const getInitialToday = () => new Date().toISOString().split('T')[0];
const getInitialTomorrow = () => {
  const next = new Date(Date.now() + 86400000);
  return next.toISOString().split('T')[0];
};

export default function ClubPremiumPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: getInitialToday(),
    checkOut: getInitialTomorrow(),
    guests: '2',
    message: '',
    agree: true
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1f242e] text-[#c1a186] border border-[#b5987a]/30 shadow-2xs">
            <Award className="w-4 h-4 text-[#c1a186]" />
            <span className="text-xs font-lato font-bold uppercase tracking-[0.2em]">Programa de Fidelización Exclusivo</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif text-[#1f242e] font-semibold">
            Club Premium
          </h1>

          <div className="w-16 h-0.5 bg-[#b5987a] mx-auto" />

          {/* Exact copy from cartagenapremium.com/club-premium */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#c1a186]/30 shadow-deluxe max-w-2xl mx-auto space-y-3 mt-6">
            <p className="text-lg sm:text-xl font-serif text-[#1f242e] font-medium">
              Únete a nuestro Club Premium y aprovecha el <span className="text-[#b5987a] font-bold">10% de descuento inmediato</span> en tu reserva.
            </p>
            <p className="text-sm text-stone-600 font-sans leading-relaxed">
              Recibe las mejores ofertas con los mejores precios. Queremos cuidarte, queremos que vuelvas a Cartagena Premium.
            </p>
          </div>
        </div>

        {/* Subscription / Reservation Form */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#e8dfd5] shadow-deluxe-lg">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif text-[#1f242e]">¡Bienvenido al Club Premium!</h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Tu registro ha sido completado y tu código de 10% de descuento ha sido asignado a tu correo (<strong>{formData.email}</strong>). Un concierge se pondrá en contacto para asistirte en tu reserva.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <Link
                  to="/"
                  className="qbutton text-xs py-2 px-6 h-[44px] leading-[44px]"
                >
                  Volver al Inicio
                </Link>
                <Link
                  to="/habitaciones"
                  className="qbutton-gold text-xs py-2 px-6 h-[44px] leading-[44px]"
                >
                  Ver Habitaciones
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="club-name" className="block text-xs font-semibold uppercase tracking-wider text-[#8c6d4f] mb-1 font-lato">
                    Nombre Completo (obligatorio)
                  </label>
                  <input
                    id="club-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre completo"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 text-sm bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="club-email" className="block text-xs font-semibold uppercase tracking-wider text-[#8c6d4f] mb-1 font-lato">
                    Tu correo electrónico (obligatorio)
                  </label>
                  <input
                    id="club-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@ejemplo.com"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 text-sm bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="club-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#8c6d4f] mb-1 font-lato">
                    Celular (obligatorio)
                  </label>
                  <input
                    id="club-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+57 300 000 0000"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 text-sm bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="club-checkin" className="block text-xs font-semibold uppercase tracking-wider text-[#8c6d4f] mb-1 font-lato">
                    Fecha Ingreso
                  </label>
                  <input
                    id="club-checkin"
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 text-sm bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="club-checkout" className="block text-xs font-semibold uppercase tracking-wider text-[#8c6d4f] mb-1 font-lato">
                    Fecha Salida
                  </label>
                  <input
                    id="club-checkout"
                    type="date"
                    required
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 text-sm bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="club-guests" className="block text-xs font-semibold uppercase tracking-wider text-[#8c6d4f] mb-1 font-lato">
                  N° Personas (obligatorio)
                </label>
                <select
                  id="club-guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 text-sm bg-white cursor-pointer"
                >
                  <option value="1">1 Persona</option>
                  <option value="2">2 Personas</option>
                  <option value="3">3 Personas</option>
                  <option value="4">4 Personas</option>
                  <option value="5+">5 o más personas</option>
                </select>
              </div>

              <div>
                <label htmlFor="club-message" className="block text-xs font-semibold uppercase tracking-wider text-[#8c6d4f] mb-1 font-lato">
                  Tu mensaje o preferencia
                </label>
                <textarea
                  id="club-message"
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Comentarios adicionales o preferencias para tu estadía..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 text-sm bg-white resize-none"
                />
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <input
                  type="checkbox"
                  id="club-agree"
                  required
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                  className="w-4 h-4 rounded text-[#b5987a] accent-[#b5987a] cursor-pointer"
                />
                <label htmlFor="club-agree" className="text-xs text-stone-600 cursor-pointer">
                  Acepto la <Link to="/politica-de-cookies" className="underline text-[#b5987a]">Política de privacidad</Link>
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full min-h-[48px] py-3.5 rounded-xs bg-[#b5987a] hover:bg-[#1f242e] text-white font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer font-lato active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Unirme al Club Premium y Obtener 10% Descuento</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}