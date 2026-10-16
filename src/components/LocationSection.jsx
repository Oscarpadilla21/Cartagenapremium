import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { MapPin, Navigation, Phone, Mail, Clock, ExternalLink, Map, Layers } from 'lucide-react';

export default function LocationSection() {
  const [mapMode, setMapMode] = useState('interactive'); // 'interactive' | 'aerial'

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

            {/* Direct Map Actions */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Hotel+Cartagena+Premium"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#0E1E2E] hover:bg-[#1A334B] text-[#C5A880] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <span>Abrir en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://waze.com/ul?q=Hotel+Cartagena+Premium"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white border border-stone-300 hover:border-[#C5A880] text-stone-700 hover:text-[#0E1E2E] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <span>Navegar con Waze</span>
                <Navigation className="w-3.5 h-3.5 text-cyan-600" />
              </a>
            </div>
          </div>

          {/* Right Map Visual with Dual Mode: Interactive OSM Map & Aerial Satellite Photo */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-[#C5A880]/30 shadow-deluxe relative h-[480px] bg-stone-100">
              {/* Map Mode Tabs */}
              <div className="absolute top-4 right-4 z-20 flex items-center p-1 rounded-lg bg-[#0E1E2E]/90 backdrop-blur-md border border-[#C5A880]/40 shadow-lg">
                <button
                  type="button"
                  onClick={() => setMapMode('interactive')}
                  className={`px-3 py-1.5 text-[11px] font-bold rounded flex items-center gap-1.5 transition-all cursor-pointer ${
                    mapMode === 'interactive'
                      ? 'bg-[#C5A880] text-[#0E1E2E] shadow-sm'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  <Map className="w-3.5 h-3.5" />
                  <span>Mapa Callejero</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMapMode('aerial')}
                  className={`px-3 py-1.5 text-[11px] font-bold rounded flex items-center gap-1.5 transition-all cursor-pointer ${
                    mapMode === 'aerial'
                      ? 'bg-[#C5A880] text-[#0E1E2E] shadow-sm'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Vista Aérea Bocagrande</span>
                </button>
              </div>

              {mapMode === 'interactive' ? (
                /* Live, reliable OpenStreetMap embed centered at Hotel Cartagena Premium */
                <iframe
                  title="Mapa Callejero Hotel Cartagena Premium"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-75.5640%2C10.3950%2C-75.5510%2C10.4060&amp;layer=mapnik&amp;marker=10.4005%2C-75.5569"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              ) : (
                /* High-Res Aerial Satellite View with Pulsing Beacon */
                <div className="relative w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=1200&q=85"
                    alt="Vista Aérea Bocagrande Cartagena"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                  
                  {/* Pulsing Beacon on Bocagrande */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <span className="relative flex h-6 w-6">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
                      <span className="relative inline-flex rounded-full h-6 w-6 bg-[#D4AF37] border-2 border-white items-center justify-center text-[#0E1E2E] font-black text-[10px]">
                        ★
                      </span>
                    </span>
                    <span className="mt-2 px-3 py-1 rounded bg-[#0E1E2E]/90 text-white text-xs font-serif font-bold shadow-lg border border-[#C5A880]/50 whitespace-nowrap">
                      Hotel Cartagena Premium
                    </span>
                  </div>
                </div>
              )}

              {/* Floating Pin Card */}
              <div className="absolute bottom-4 left-4 z-20 bg-[#0E1E2E]/95 backdrop-blur-md text-white p-3.5 rounded-xl border border-[#C5A880]/40 shadow-xl max-w-xs">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold block">
                  Ubicación Estratégica
                </span>
                <span className="text-xs font-serif font-semibold block text-stone-100">
                  Hotel Cartagena Premium
                </span>
                <span className="text-[11px] text-stone-300 block">Av. San Martín nº. 11-113 · Bocagrande</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
