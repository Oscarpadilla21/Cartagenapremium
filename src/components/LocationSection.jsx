import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { MapPin, Smartphone, Mail, ExternalLink } from 'lucide-react';

export default function LocationSection() {
  const googleMapsUrl = "https://maps.google.com/?q=Hotel+Cartagena+Premium+Bocagrande";

  return (
    <section id="contacto" className="relative bg-[#FCF9F6] py-20 lg:py-24 overflow-hidden" aria-label="Ubicación y contacto directo">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Columns Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-deluxe-lg border border-[#e5ded7] relative z-20 bg-white rounded-xs overflow-hidden">
          
          {/* Left Column: Authentic Google Maps Embed */}
          <div className="w-full h-[450px] lg:h-[530px] bg-stone-100 relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15696.654941851935!2d-75.5509179!3d10.4085672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeb4b3f6f061defea!2sHotel%20Cartagena%20Premium!5e0!3m2!1ses!2ses!4v1584349810460!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación en Google Maps del Hotel Cartagena Premium"
            />
            {/* Direct Directions Helper Button */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 bg-white/95 hover:bg-white text-stone-800 px-3.5 py-2 rounded-md shadow-md text-xs font-semibold flex items-center gap-1.5 transition-transform hover:scale-105 border border-stone-200"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#b5987a]" />
              <span>Abrir en Google Maps</span>
            </a>
          </div>

          {/* Right Column: Contact Information */}
          <div
            className="p-8 sm:p-12 lg:p-14 bg-white flex flex-col justify-center space-y-4 text-left"
            style={{ backgroundImage: `url('/images/hotel/background-img-5-2.png')`, backgroundRepeat: 'repeat' }}
          >
            <h2 className="font-serif text-[38px] sm:text-[48px] lg:text-[52px] leading-[1.1] sm:leading-[55px] tracking-[-1px] font-semibold text-[#303030]">
              Contacta con nosotros
            </h2>

            {/* Graphic Ornament (4 gold chevrons) */}
            <div className="pt-0.5 pb-0.5">
              <img
                src="/images/hotel/graphic-img-3-1-1.png"
                alt="adorno decorativo"
                className="w-18 h-3.5 object-contain"
              />
            </div>

            <p className="font-lato text-[16px] leading-[27px] font-light text-[#383838]">
              Reserva ahora tu habitación y disfruta de lo mejor de Cartagena. Atención 24/7.
            </p>

            <div className="pt-3 space-y-2.5 font-lato text-[15px] sm:text-[16px] leading-[26px] font-light text-[#383838]">
              {/* Address */}
              <div className="flex items-start gap-3.5 min-h-[44px]">
                <MapPin className="w-5 h-5 text-[#b5987a] shrink-0 mt-1" />
                <span className="font-normal">Bocagrande, Av. San Martín nº. 11-113 - Cartagena - Colombia (frente a la Base Naval)</span>
              </div>

              {/* Phones */}
              {HOTEL_DATA.phones.map((phone, idx) => (
                <div key={idx} className="flex items-center gap-3.5 min-h-[44px]">
                  <Smartphone className="w-5 h-5 text-[#b5987a] shrink-0" />
                  <a
                    href={`tel:${HOTEL_DATA.rawPhones[idx]}`}
                    className="hover:text-[#b5987a] transition-colors focus-visible:ring-2 focus-visible:ring-[#b5987a] rounded-xs font-normal"
                    aria-label={`Llamar a recepción: ${phone}`}
                  >
                    {phone}
                  </a>
                </div>
              ))}

              {/* Emails */}
              {HOTEL_DATA.emails.slice(1).map((email, idx) => (
                <div key={idx} className="flex items-center gap-3.5 min-h-[44px]">
                  <Mail className="w-5 h-5 text-[#b5987a] shrink-0" />
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-[#b5987a] transition-colors focus-visible:ring-2 focus-visible:ring-[#b5987a] rounded-xs font-normal"
                    aria-label={`Enviar correo a ${email}`}
                  >
                    {email}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}