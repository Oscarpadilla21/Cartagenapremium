import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { MapPin, Navigation, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export default function LocationSection() {
  const points = [
    { name: 'Playa de Bocagrande', distance: '150 metros (2 min a pie)', desc: 'Acceso directo a sol, arena y deportes acuáticos.' },
    { name: 'Ciudad Amurallada & Torre del Reloj', distance: '3.5 km (8-10 min en taxi)', desc: 'Arquitectura colonial, plazas históricas y vida nocturna.' },
    { name: 'Muelle de la Bodeguita', distance: '3.2 km (8 min)', desc: 'Punto de embarque oficial hacia las Islas del Rosario.' },
    { name: 'Aeropuerto Internacional Rafael Núñez (CTG)', distance: '8.5 km (15-20 min)', desc: 'Traslados coordinados con nuestro concierge.' },
  ];

  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#A88653] font-semibold">
                Ubicación Insuperable
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#0E1E2E] mt-2">
                En el Corazón Dorado de Bocagrande
              </h2>
              <p className="text-stone-600 font-sans text-sm sm:text-base mt-3 leading-relaxed">
                Situado sobre la prestigiosa Avenida San Martín, Hotel Cartagena Premium te coloca a pasos de las playas más vibrantes y a escasos minutos del misticismo de la ciudad colonial.
              </p>
            </div>

            {/* Address Box */}
            <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#C5A880]/30 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#A88653] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-stone-800 block">
                    Dirección Oficial:
                  </span>
                  <span className="text-sm text-stone-700 font-sans">
                    {HOTEL_DATA.location}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-stone-200">
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <Phone className="w-3.5 h-3.5 text-[#A88653]" />
                  <span>{HOTEL_DATA.phones[0]}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <Mail className="w-3.5 h-3.5 text-[#A88653]" />
                  <span className="truncate">{HOTEL_DATA.emails[0]}</span>
                </div>
              </div>
            </div>

            {/* Distances List */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#745729]">
                Distancias Clave desde el Hotel:
              </h4>
              <div className="space-y-2.5">
                {points.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-stone-50 border border-stone-200">
                    <Navigation className="w-4 h-4 text-[#A88653] shrink-0 mt-0.5" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-stone-800">{p.name}</span>
                        <span className="text-[10px] text-[#A88653] font-semibold bg-[#A88653]/10 px-2 py-0.5 rounded">
                          {p.distance}
                        </span>
                      </div>
                      <span className="text-[11px] text-stone-500 font-sans block mt-0.5">
                        {p.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Map Visual */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-[#C5A880]/30 shadow-deluxe relative h-[480px]">
              {/* Custom Styled Map Embed or Visual */}
              <iframe
                title="Mapa Hotel Cartagena Premium"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.9749508518884!2d-75.55674062408991!3d10.399587489727407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62f7481a53b51%3A0xe54ef90a1b6c8ba8!2sHotel%20Cartagena%20Premium!5e0!3m2!1ses!2sco!4v1710000000000!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(0.95)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Pin Card */}
              <div className="absolute top-4 left-4 bg-[#0E1E2E]/95 backdrop-blur-md text-white p-3.5 rounded-lg border border-[#C5A880]/40 shadow-xl max-w-xs">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold block">
                  Ubicación Premium
                </span>
                <span className="text-xs font-serif font-semibold block text-stone-100">
                  Hotel Cartagena Premium
                </span>
                <span className="text-[11px] text-stone-300 block">Av. San Martín nº. 11-113</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
