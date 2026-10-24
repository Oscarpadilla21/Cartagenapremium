import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { MapPin, Smartphone, Mail, CheckCircle2, ExternalLink } from 'lucide-react';

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
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div>
          <span className="text-[11px] font-lato font-bold uppercase tracking-[0.25em] text-[#b5987a] block">
            Atención Inmediata 24 Horas
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#303030] mt-1">
            Contacto & Ubicación
          </h1>
          <div className="w-16 h-0.5 bg-[#b5987a] mt-3" />
        </div>

        {/* Row 1: Map and Contact Info Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#e8dfd5] shadow-deluxe overflow-hidden rounded-xs">
          {/* Left: Google Map */}
          <div className="w-full h-[450px] lg:h-[500px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15696.654941851935!2d-75.5509179!3d10.4085672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeb4b3f6f061defea!2sHotel%20Cartagena%20Premium!5e0!3m2!1ses!2ses!4v1584271213206!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Hotel Cartagena Premium Mapa"
            />
            <a
              href="https://maps.google.com/?q=Hotel+Cartagena+Premium+Bocagrande"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 bg-white/95 hover:bg-white text-stone-800 px-3 py-1.5 rounded shadow text-xs font-semibold flex items-center gap-1.5 border border-stone-200"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#b5987a]" />
              <span>Abrir en Google Maps</span>
            </a>
          </div>

          {/* Right: Contact Info Box */}
          <div className="p-8 sm:p-12 lg:p-14 bg-[#FAF8F5] flex flex-col justify-center space-y-4">
            <h2 className="font-serif text-[30px] sm:text-[38px] leading-[1.1] font-semibold text-[#303030]">
              Estamos para atenderte
            </h2>

            <div>
              <img
                src="/images/hotel/graphic-img-3-1-1.png"
                alt="adorno"
                className="w-18 h-3.5 object-contain"
              />
            </div>

            <p className="font-lato text-[16px] leading-[27px] font-light text-[#383838]">
              Reserva con antelación tu habitación y ven a descubrir la magia de Cartagena de Indias.
            </p>

            <div className="pt-2 space-y-3 font-lato text-[15px] sm:text-[16px] leading-[26px] font-light text-[#383838]">
              <div className="flex items-start gap-3.5 min-h-[44px]">
                <MapPin className="w-5 h-5 text-[#b5987a] shrink-0 mt-1" />
                <span>Cra. 2 #11-113, Cartagena, Bolívar (frente a la Base Naval, Bocagrande)</span>
              </div>

              {HOTEL_DATA.phones.map((phone, idx) => (
                <div key={idx} className="flex items-center gap-3.5 min-h-[44px]">
                  <Smartphone className="w-5 h-5 text-[#b5987a] shrink-0" />
                  <a href={`tel:${HOTEL_DATA.rawPhones[idx]}`} className="hover:text-[#b5987a] font-normal transition-colors">
                    {phone}
                  </a>
                </div>
              ))}

              {HOTEL_DATA.emails.map((email, idx) => (
                <div key={idx} className="flex items-center gap-3.5 min-h-[44px]">
                  <Mail className="w-5 h-5 text-[#b5987a] shrink-0" />
                  <a href={`mailto:${email}`} className="hover:text-[#b5987a] font-normal transition-colors">
                    {email}
                  </a>
                </div>
              ))}
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
                Atención personalizada las 24 horas del día
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}