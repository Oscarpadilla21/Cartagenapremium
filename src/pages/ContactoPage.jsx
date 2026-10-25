import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HOTEL_DATA } from '../data/hotelData';
import { MapPin, Smartphone, Mail, CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

const getInitialToday = () => new Date().toISOString().split('T')[0];
const getInitialTomorrow = () => {
  const next = new Date(Date.now() + 86400000);
  return next.toISOString().split('T')[0];
};

export default function ContactoPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: getInitialToday(),
    checkOut: getInitialTomorrow(),
    guests: '2',
    message: '',
    acceptTerms: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `*CONSULTA / CONTACTO - HOTEL CARTAGENA PREMIUM*%0A%0A` +
      `*Nombre:* ${formData.name}%0A` +
      `*Teléfono:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Llegada:* ${formData.checkIn}%0A` +
      `*Salida:* ${formData.checkOut}%0A` +
      `*Huéspedes:* ${formData.guests}%0A` +
      `*Mensaje:* ${formData.message || 'Sin observaciones adicionales'}`;
    window.open(`https://wa.me/${HOTEL_DATA.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 bg-white text-left">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div>
          <span className="text-[11px] font-lato font-bold uppercase tracking-[0.25em] text-[#b5987a] block">
            Atención Inmediata 24 Horas
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#303030] mt-1">
            Contacto Directo
          </h1>
          <div className="w-16 h-0.5 bg-[#b5987a] mt-3" />
          <p className="font-lato text-[15px] sm:text-[16px] text-[#555] font-light mt-3 max-w-2xl">
            Comunícate directamente con nuestro equipo de recepción y reservas para cotizaciones inmediatas, consultas especiales o resolver cualquier inquietud antes de tu llegada.
          </p>
        </div>

        {/* Row 1: Contact Cards (Replaces map with direct contact channels) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Dirección y Sede */}
          <div className="bg-[#FAF8F5] p-7 sm:p-8 rounded-xl border border-[#e8dfd5] shadow-deluxe hover:shadow-deluxe-lg transition-all flex flex-col justify-between space-y-4">
            <div>
              <div className="w-11 h-11 rounded-lg bg-white border border-[#ded5cb] text-[#b5987a] flex items-center justify-center mb-4 shadow-2xs">
                <MapPin className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-xl font-bold text-[#1f242e] mb-2">
                Nuestra Ubicación
              </h2>
              <p className="text-xs sm:text-sm font-sans text-stone-600 leading-relaxed">
                Cra. 2 #11-113, Bocagrande, Cartagena de Indias, Bolívar (frente a la Base Naval).
              </p>
            </div>
            <div className="pt-4 border-t border-stone-200">
              <Link
                to="/ubicacion"
                className="inline-flex items-center gap-1.5 text-xs font-bold font-lato uppercase tracking-wider text-[#8c6d4f] hover:text-[#1f242e] transition-colors"
              >
                <span>Ver mapa y cómo llegar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Teléfonos y WhatsApp */}
          <div className="bg-[#FAF8F5] p-7 sm:p-8 rounded-xl border border-[#e8dfd5] shadow-deluxe hover:shadow-deluxe-lg transition-all flex flex-col justify-between space-y-4">
            <div>
              <div className="w-11 h-11 rounded-lg bg-white border border-[#ded5cb] text-[#b5987a] flex items-center justify-center mb-4 shadow-2xs">
                <Smartphone className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-xl font-bold text-[#1f242e] mb-2">
                Líneas Telefónicas
              </h2>
              <p className="text-xs text-stone-500 font-sans mb-3">
                Llamadas directas y atención personalizada:
              </p>
              <div className="space-y-1.5">
                {HOTEL_DATA.phones.map((phone, idx) => (
                  <div key={idx}>
                    <a
                      href={`tel:${HOTEL_DATA.rawPhones[idx]}`}
                      className="text-xs sm:text-sm font-sans font-semibold text-stone-800 hover:text-[#b5987a] transition-colors block"
                    >
                      {phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-stone-200 flex items-center gap-1.5 text-xs text-emerald-700 font-medium font-sans">
              <Clock className="w-3.5 h-3.5" />
              <span>Recepción disponible 24/7</span>
            </div>
          </div>

          {/* Card 3: Correos de Reservas */}
          <div className="bg-[#FAF8F5] p-7 sm:p-8 rounded-xl border border-[#e8dfd5] shadow-deluxe hover:shadow-deluxe-lg transition-all flex flex-col justify-between space-y-4">
            <div>
              <div className="w-11 h-11 rounded-lg bg-white border border-[#ded5cb] text-[#b5987a] flex items-center justify-center mb-4 shadow-2xs">
                <Mail className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-xl font-bold text-[#1f242e] mb-2">
                Correos Electrónicos
              </h2>
              <p className="text-xs text-stone-500 font-sans mb-3">
                Cotizaciones formales y reservas corporativas:
              </p>
              <div className="space-y-2">
                {HOTEL_DATA.emails.map((email, idx) => (
                  <div key={idx}>
                    <a
                      href={`mailto:${email}`}
                      className="text-xs sm:text-sm font-sans font-semibold text-stone-800 hover:text-[#b5987a] transition-colors block break-all"
                    >
                      {email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-stone-200 flex items-center gap-1.5 text-xs text-[#8c6d4f] font-medium font-sans">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Respuesta en menos de 24 horas</span>
            </div>
          </div>

        </div>

        {/* Row 2: Contact Form and Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 border border-[#e8dfd5] p-8 sm:p-10 bg-white shadow-deluxe rounded-xs">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1f242e]">¡Mensaje enviado con éxito!</h3>
                <p className="text-sm text-stone-600 font-sans max-w-md mx-auto leading-relaxed">
                  Gracias por comunicarte con <strong className="text-stone-900">Hotel Cartagena Premium</strong>. Nuestro equipo de reservas procesará tu solicitud y se comunicará contigo de inmediato.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleSendToWhatsApp}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xs bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-widest shadow-md transition-all cursor-pointer"
                  >
                    <span>Enviar también por WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[#8c6d4f] mb-1 font-lato">
                    Nombre Completo (obligatorio)
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full min-h-[44px] px-4 py-2.5 border border-stone-300 rounded-sm focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 outline-none text-[#303030]"
                    placeholder="Tu nombre y apellido"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-[#8c6d4f] mb-1 font-lato">
                      Correo Electrónico (obligatorio)
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full min-h-[44px] px-4 py-2.5 border border-stone-300 rounded-sm focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 outline-none text-[#303030]"
                      placeholder="nombre@correo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#8c6d4f] mb-1 font-lato">
                      Celular / WhatsApp (obligatorio)
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full min-h-[44px] px-4 py-2.5 border border-stone-300 rounded-sm focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 outline-none text-[#303030]"
                      placeholder="+57 300 000 0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="contact-checkin" className="block text-xs font-semibold uppercase tracking-wider text-[#8c6d4f] mb-1 font-lato">
                      Fecha Ingreso
                    </label>
                    <input
                      id="contact-checkin"
                      type="date"
                      required
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full min-h-[44px] px-3 py-2 border border-stone-300 rounded-sm focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 outline-none text-[#303030]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-checkout" className="block text-xs font-semibold uppercase tracking-wider text-[#8c6d4f] mb-1 font-lato">
                      Fecha Salida
                    </label>
                    <input
                      id="contact-checkout"
                      type="date"
                      required
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full min-h-[44px] px-3 py-2 border border-stone-300 rounded-sm focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 outline-none text-[#303030]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-guests" className="block text-xs font-semibold uppercase tracking-wider text-[#8c6d4f] mb-1 font-lato">
                      N° Personas
                    </label>
                    <input
                      id="contact-guests"
                      type="number"
                      min="1"
                      max="10"
                      required
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full min-h-[44px] px-3 py-2 border border-stone-300 rounded-sm focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 outline-none text-[#303030]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[#8c6d4f] mb-1 font-lato">
                    Tu Mensaje o Requerimientos Especiales
                  </label>
                  <textarea
                    id="contact-message"
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 border border-stone-300 rounded-sm focus:border-[#b5987a] focus:ring-2 focus:ring-[#b5987a]/20 outline-none text-[#303030] resize-none"
                    placeholder="¿Tienes alguna preferencia de habitación, cama o solicitud especial?"
                  />
                </div>

                <div className="flex items-center gap-2.5 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    checked={formData.acceptTerms}
                    onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                    className="w-4 h-4 accent-[#b5987a] cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-xs text-stone-600 cursor-pointer">
                    Acepto la <a href="/aviso-legal" className="underline hover:text-[#b5987a]">política de privacidad</a> y tratamiento de datos
                  </label>
                </div>

                <div className="pt-3">
                  <button type="submit" className="qbutton w-full sm:w-auto">
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Hotel Image with Frame */}
          <div className="lg:col-span-5 overflow-hidden shadow-deluxe border border-[#e8dfd5] bg-stone-100 group">
            <img
              src="/images/hotel/recep-400x500.jpeg"
              alt="Recepción Hotel Cartagena Premium"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="p-4 bg-white text-center border-t border-[#e8dfd5]">
              <span className="text-xs font-serif italic text-stone-600">
                Atención personalizada las 24 horas del día en Bocagrande
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
