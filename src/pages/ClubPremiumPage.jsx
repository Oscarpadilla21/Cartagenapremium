import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Award, Percent, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ClubPremiumPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: '',
    agree: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1E2E] text-[#C5A880] border border-[#C5A880]/30 shadow-sm">
            <Award className="w-4 h-4 text-[#C5A880]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">Programa de Fidelización</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif text-[#0E1E2E]">
            Club Premium
          </h1>

          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto" />

          {/* Exact copy from cartagenapremium.com/club-premium */}
          <div className="bg-white p-6 rounded-2xl border border-[#C5A880]/30 shadow-sm max-w-2xl mx-auto space-y-2 mt-6">
            <p className="text-lg sm:text-xl font-serif text-[#0E1E2E] font-medium">
              Únete a nuestro Club Premium y aprovecha el <span className="text-[#A88653] font-bold">10 % de descuento inmediato</span> en tu reserva.
            </p>
            <p className="text-sm text-stone-600 font-sans">
              Recibe las mejores ofertas con los mejores precios. Queremos cuidarte, queremos que vuelvas.
            </p>
          </div>
        </div>

        {/* Subscription / Reservation Form */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#C5A880]/30 shadow-lg">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif text-[#0E1E2E]">¡Bienvenido al Club Premium!</h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto">
                Tu registro ha sido completado y tu código de 10% de descuento ha sido asignado a tu correo ({formData.email}).
              </p>
              <div className="pt-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0E1E2E] text-[#C5A880] text-xs uppercase tracking-wider font-semibold hover:bg-[#A88653] hover:text-white transition-colors"
                >
                  Volver al Inicio
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Nombre (obligatorio)
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre completo"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#A88653] text-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Tu correo electrónico (obligatorio)
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@ejemplo.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#A88653] text-sm bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Celular (obligatorio)
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+57 300 000 0000"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#A88653] text-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Fecha Ingreso (obligatorio)
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#A88653] text-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Fecha Salida (obligatorio)
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#A88653] text-sm bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  N° Personas (obligatorio)
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#A88653] text-sm bg-white"
                >
                  <option value="1">1 Persona</option>
                  <option value="2">2 Personas</option>
                  <option value="3">3 Personas</option>
                  <option value="4">4 Personas</option>
                  <option value="5+">5 o más personas</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Tu mensaje
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Comentarios adicionales o preferencias para tu estadía..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#A88653] text-sm bg-white"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="club-agree"
                  required
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                  className="rounded text-[#A88653] focus:ring-[#A88653]"
                />
                <label htmlFor="club-agree" className="text-xs text-stone-600">
                  Acepto la <Link to="/politica-de-cookies" className="underline text-[#A88653]">Política de privacidad</Link>
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#0E1E2E] hover:bg-[#A88653] text-[#C5A880] hover:text-white font-semibold text-xs uppercase tracking-[0.2em] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
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
