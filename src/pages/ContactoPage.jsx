import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, HelpCircle, ChevronDown } from 'lucide-react';

export default function ContactoPage({ onOpenBooking }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Reserva & Tarifas',
    message: ''
  });
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: '¿A qué hora es el Check-in y el Check-out?',
      a: 'El Check-in oficial es a partir de las 3:00 PM y el Check-out hasta las 12:00 del mediodía. Contamos con custodia gratuita de equipaje si arriba antes o desea disfrutar del rooftop tras el check-out.'
    },
    {
      q: '¿El desayuno está incluido en todas las tarifas?',
      a: 'Sí, todas las reservaciones directas incluyen nuestro completo desayuno buffet caribeño servido diariamente de 07:00 AM a 10:00 AM.'
    },
    {
      q: '¿Cuentan con servicio de transporte desde el Aeropuerto?',
      a: 'Sí, podemos coordinar traslado privado puerta a puerta en vehículo climatizado desde el Aeropuerto Rafael Núñez (CTG). Puede solicitarlo al momento de reservar o vía WhatsApp.'
    },
    {
      q: '¿Los niños son bienvenidos y cuál es la política de camas supletorias?',
      a: 'Somos un hotel familiar y de negocios. Disponemos de Suites Familiares con capacidad hasta para 4 personas y cunas de cortesía previa solicitud.'
    },
    {
      q: '¿Cuál es la política de cancelación?',
      a: 'Nuestras tarifas estándar permiten cancelación flexible hasta 48 horas antes de la llegada sin penalización. Tarifas promocionales no reembolsables aplican condiciones especiales.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // WhatsApp direct fallback
    const msg = encodeURIComponent(`Hola Concierge Cartagena Premium, mi nombre es ${formData.name}. Asunto: ${formData.subject}. Mensaje: ${formData.message}`);
    setTimeout(() => {
      window.open(`https://wa.me/573106588778?text=${msg}`, '_blank');
    }, 1200);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF8F5]">
      {/* Page Header */}
      <div className="relative py-16 sm:py-24 bg-[#0E1E2E] text-white overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://cartagenapremium.com/wp-content/uploads/2025/08/recep-400x500.jpeg"
            alt="Contacto Hotel Cartagena Premium"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E2E] via-[#0E1E2E]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-2">
            Atención Personalizada 24/7
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white">
            Contacto & Concierge VIP
          </h1>
          <p className="text-stone-300 font-sans text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Estamos a su entera disposición para responder a cualquier requerimiento, coordinar transfers aeroportuarios o preparar una estadía inolvidable.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Contact Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Phones */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0E1E2E] text-[#C5A880] flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#0E1E2E]">
                Líneas Telefónicas
              </h3>
              <p className="text-xs text-stone-500">
                Línea fija y celular con atención directa de nuestro equipo de recepción.
              </p>
              <div className="space-y-1 text-sm font-semibold text-stone-800">
                {HOTEL_DATA.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s+/g, '')}`}
                    className="block hover:text-[#A88653] transition-colors"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-[#A88653] font-medium">
              Disponibilidad 24 horas al día
            </div>
          </div>

          {/* Card 2: Email & Inquiries */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0E1E2E] text-[#C5A880] flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#0E1E2E]">
                Correo Electrónico
              </h3>
              <p className="text-xs text-stone-500">
                Para cotizaciones corporativas, grupos y eventos privados.
              </p>
              <div className="space-y-1 text-sm font-semibold text-stone-800">
                <a
                  href={`mailto:${HOTEL_DATA.emails[0]}`}
                  className="block hover:text-[#A88653] transition-colors"
                >
                  {HOTEL_DATA.emails[0]}
                </a>
                <span className="block text-xs font-normal text-stone-500">
                  Respuesta promedio: &lt; 2 horas
                </span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-[#A88653] font-medium">
              Cotizaciones personalizadas
            </div>
          </div>

          {/* Card 3: Location & Hours */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0E1E2E] text-[#C5A880] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#0E1E2E]">
                Horarios & Recepción
              </h3>
              <p className="text-xs text-stone-500">
                Lobby principal y servicio de concierge presencial.
              </p>
              <div className="space-y-1 text-xs text-stone-700">
                <p><strong>Check-in:</strong> Desde las 3:00 PM</p>
                <p><strong>Check-out:</strong> Hasta las 12:00 PM</p>
                <p><strong>Recepción:</strong> Abierta las 24 horas</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-[#A88653] font-medium">
              Custodia gratuita de equipaje
            </div>
          </div>
        </div>

        {/* Contact Form & FAQs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-stone-200 shadow-sm">
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-widest text-[#A88653] font-bold block mb-1">
                Escríbanos
              </span>
              <h2 className="text-2xl font-serif text-[#0E1E2E]">
                Envíenos un Mensaje Directo
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Al enviar el formulario, lo conectaremos de inmediato con el Concierge de guardia vía WhatsApp.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-serif font-bold text-emerald-900">
                  ¡Mensaje Enviado con Éxito!
                </h3>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Gracias por contactarnos. Redirigiendo a nuestra línea VIP de WhatsApp para brindarle respuesta inmediata.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Carlos Mendoza"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="carlos@correo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+57 300 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Motivo del Contacto
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] bg-white"
                    >
                      <option value="Reserva & Tarifas">Reserva & Tarifas</option>
                      <option value="Eventos o Grupos">Eventos o Grupos</option>
                      <option value="Transfer Aeropuerto">Transfer Aeropuerto</option>
                      <option value="Tours & Experiencias">Tours & Experiencias</option>
                      <option value="Otra Consulta">Otra Consulta</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Su Mensaje o Solicitud Especial
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Indique fechas tentativas, número de huéspedes o consultas particulares..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-stone-500">
                    Garantizamos la privacidad y protección de sus datos.
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] text-[#0E1E2E] text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#0E1E2E]" />
                    <span>Enviar Consulta</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* FAQs Accordion */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-[#A88653]" />
              <h3 className="text-lg font-serif font-bold text-[#0E1E2E]">
                Preguntas Frecuentes
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-stone-200 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full p-3.5 text-left text-xs font-bold text-[#0E1E2E] flex items-center justify-between gap-3 bg-[#FAF8F5] hover:bg-stone-100 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#A88653] shrink-0 transition-transform ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="p-3.5 text-xs text-stone-600 bg-white border-t border-stone-100 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-200">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="w-full py-3 rounded-xl bg-[#0E1E2E] text-[#C5A880] text-xs font-bold uppercase tracking-wider text-center hover:bg-[#1a334d] transition-colors cursor-pointer"
              >
                Hacer Reserva Directa Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
