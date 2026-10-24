import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { MapPin, Smartphone, Mail, CheckCircle2 } from 'lucide-react';

export default function ContactoPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: '',
    acceptTerms: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-white text-left">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Row 1: Map and Contact Info Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#eee9e3] shadow-sm">
          {/* Left: Google Map */}
          <div className="w-full h-[450px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15696.654941851935!2d-75.5509179!3d10.4085672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeb4b3f6f061defea!2sHotel%20Cartagena%20Premium!5e0!3m2!1ses!2ses!4v1584271213206!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Hotel Cartagena Premium Mapa"
            />
          </div>

          {/* Right: Contact Info Box */}
          <div className="p-8 sm:p-12 lg:p-14 bg-[#FAF8F5]/80 flex flex-col justify-center space-y-4">
            <h2 className="font-serif text-[32px] sm:text-[40px] leading-[1.1] font-semibold text-[#303030]">
              Contacta con nosotros
            </h2>

            <div>
              <img
                src="/images/hotel/graphic-img-3-1-1.png"
                alt="ornament"
                className="w-18 h-3.5 object-contain"
              />
            </div>

            <p className="font-lato text-[16px] leading-[27px] font-light text-[#383838]">
              Reserva con antelación tu habitación y ven a descubrir Cartagena
            </p>

            <div className="pt-2 space-y-3 font-lato text-[16px] leading-[27px] font-light text-[#383838]">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#b5987a] shrink-0 mt-1" />
                <span>Cra. 2 #11-113, Cartagena, Provincia de Cartagena, Bolívar, Colombia (frente a la Base Naval) - 130001 - Cartagena - Colombia</span>
              </div>

              {HOTEL_DATA.phones.map((phone, idx) => (
                <div key={idx} className="flex items-center gap-3.5">
                  <Smartphone className="w-5 h-5 text-[#b5987a] shrink-0" />
                  <a href={`tel:${HOTEL_DATA.rawPhones[idx]}`} className="hover:text-[#b5987a]">
                    {phone}
                  </a>
                </div>
              ))}

              {HOTEL_DATA.emails.map((email, idx) => (
                <div key={idx} className="flex items-center gap-3.5">
                  <Mail className="w-5 h-5 text-[#b5987a] shrink-0" />
                  <a href={`mailto:${email}`} className="hover:text-[#b5987a]">
                    {email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Contact Form 7 and Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Form */}
          <div className="border border-[#eee9e3] p-8 sm:p-10 bg-white shadow-sm">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-[#c1a186] mx-auto" />
                <h3 className="text-2xl font-serif text-[#333333]">¡Mensaje enviado con éxito!</h3>
                <p className="text-sm text-[#777777] font-sans">
                  Nos pondremos en contacto contigo a la mayor brevedad posible para confirmar tu reserva.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                <div>
                  <label className="block text-[#333333] mb-1">Nombre (obligatorio)</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#cccccc] focus:border-[#c1a186] outline-none text-[#333333]"
                  />
                </div>

                <div>
                  <label className="block text-[#333333] mb-1">Tu correo electrónico (obligatorio)</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#cccccc] focus:border-[#c1a186] outline-none text-[#333333]"
                  />
                </div>

                <div>
                  <label className="block text-[#333333] mb-1">Celular (obligatorio)</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#cccccc] focus:border-[#c1a186] outline-none text-[#333333]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#333333] mb-1">Fecha Ingreso (obligatorio)</label>
                    <input
                      type="date"
                      required
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full px-4 py-2.5 border border-[#cccccc] focus:border-[#c1a186] outline-none text-[#333333]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#333333] mb-1">Fecha Salida (obligatorio)</label>
                    <input
                      type="date"
                      required
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full px-4 py-2.5 border border-[#cccccc] focus:border-[#c1a186] outline-none text-[#333333]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#333333] mb-1">N° Personas (obligatorio)</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#cccccc] focus:border-[#c1a186] outline-none text-[#333333]"
                  />
                </div>

                <div>
                  <label className="block text-[#333333] mb-1">Tu mensaje</label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#cccccc] focus:border-[#c1a186] outline-none text-[#333333]"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    checked={formData.acceptTerms}
                    onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                    className="accent-[#c1a186]"
                  />
                  <label htmlFor="terms" className="text-xs text-[#777777]">
                    Acepto la <a href="/aviso-legal" className="underline hover:text-[#c1a186]">Política de privacidad</a>
                  </label>
                </div>

                <div className="pt-4">
                  <button type="submit" className="qbutton">
                    Enviar
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Hotel Image */}
          <div className="overflow-hidden shadow-sm">
            <img
              src="/images/hotel/recep-400x500.jpeg"
              alt="Recepción Hotel Cartagena Premium"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
