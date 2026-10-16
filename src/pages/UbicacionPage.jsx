import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { MapPin, Navigation, Clock, Plane, Compass, Phone, ShieldCheck, ExternalLink, Car } from 'lucide-react';

export default function UbicacionPage({ onOpenBooking }) {
  const address = typeof HOTEL_DATA.location === 'string' ? HOTEL_DATA.location : 'Bocagrande, Av. San Martín nº. 11-113, Cartagena de Indias';

  const distances = [
    { place: 'Playas de Bocagrande', distance: '120 metros', time: '2 min a pie', icon: Navigation, desc: 'Salida directa a la franja de arena y deportes náuticos.' },
    { place: 'Ciudad Amurallada (Centro Histórico)', distance: '3.2 km', time: '10 min en taxi', icon: Compass, desc: 'Torre del Reloj, baluartes coloniales y plazas históricas.' },
    { place: 'Castillo San Felipe de Barajas', distance: '4.5 km', time: '12 min en taxi', icon: Compass, desc: 'Imponente fortaleza militar colonial y túneles acústicos.' },
    { place: 'Muelle La Bodeguita', distance: '2.8 km', time: '8 min en taxi', icon: Navigation, desc: 'Zarpada de yates privados y lanchas a Islas del Rosario.' },
    { place: 'Aeropuerto Internacional Rafael Núñez (CTG)', distance: '8.4 km', time: '15-20 min', icon: Plane, desc: 'Servicio de transfer privado disponible bajo reserva.' },
    { place: 'Centro Comercial Plaza Bocagrande', distance: '600 metros', time: '6 min a pie', icon: MapPin, desc: 'Tiendas de lujo, boutiques internacionales y cines.' },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF8F5]">
      {/* Page Header */}
      <div className="relative py-16 sm:py-24 bg-[#0E1E2E] text-white overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://cartagenapremium.com/wp-content/uploads/2023/04/fotografia-foto-photo-turismo-tourism-travel-skyline-playa-bocagrande-cartagena-mar-colombia-fondos-wallpapers-somos-motta-min.jpg"
            alt="Ubicación Bocagrande Cartagena - Hotel Cartagena Premium"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E2E] via-[#0E1E2E]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-2">
            El Epicentro de la Bahía & el Mar
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white">
            Ubicación Estratégica en Bocagrande
          </h1>
          <p className="text-stone-300 font-sans text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Situado sobre la prestigiosa Avenida San Martín, Hotel Cartagena Premium le sitúa a pasos del mar Caribe y a minutos de la magia colonial de la Ciudad Amurallada.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Grid: Location Info + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Details Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#0E1E2E] text-[#C5A880] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#A88653] font-bold block">
                  Dirección Oficial
                </span>
                <h2 className="text-base sm:text-lg font-serif font-bold text-[#0E1E2E]">
                  {address}
                </h2>
                <p className="text-xs text-stone-500">Cartagena de Indias, Colombia</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/80 space-y-2 text-xs text-stone-600">
              <div className="flex items-center justify-between text-stone-700 font-semibold">
                <span>Sector:</span>
                <span className="text-[#0E1E2E]">Bocagrande (Zona Turística & Financiera)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Seguridad:</span>
                <span className="text-emerald-700 font-medium">Patrullaje turístico 24/7</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Playa más cercana:</span>
                <span className="font-medium text-stone-800">Playas de Bocagrande (1 cuadra)</span>
              </div>
            </div>

            {/* Direct Directions */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#0E1E2E]">
                Cómo Llegar
              </h3>
              <div className="space-y-2 text-xs text-stone-600 leading-relaxed">
                <p className="flex items-start gap-2">
                  <Car className="w-4 h-4 text-[#A88653] shrink-0 mt-0.5" />
                  <span><strong>Desde el Aeropuerto CTG:</strong> Tomar el viaducto hacia Bocagrande por la Av. Santander. Son aproximadamente 15 a 20 minutos de trayecto.</span>
                </p>
                <p className="flex items-start gap-2">
                  <Navigation className="w-4 h-4 text-[#A88653] shrink-0 mt-0.5" />
                  <span><strong>Desde el Centro Histórico:</strong> 8 a 10 minutos cruzando la Base Naval hacia la Av. San Martín.</span>
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=Hotel+Cartagena+Premium"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#0E1E2E] text-[#C5A880] text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:bg-[#1a334d] transition-colors"
              >
                <span>Abrir en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="flex-1 py-3 px-4 rounded-xl bg-[#C5A880] text-[#0E1E2E] text-xs font-bold uppercase tracking-wider text-center hover:bg-[#b8976b] transition-colors cursor-pointer"
              >
                Reservar Estadía
              </button>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 bg-white p-2 rounded-2xl border border-stone-200 shadow-sm overflow-hidden h-[420px] sm:h-[480px]">
            <iframe
              title="Mapa Ubicación Hotel Cartagena Premium"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-75.5640%2C10.3950%2C-75.5510%2C10.4060&amp;layer=mapnik&amp;marker=10.4005%2C-75.5569"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '12px' }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Proximity Grid */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-stone-200 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[10px] uppercase tracking-widest text-[#A88653] font-bold block mb-1">
              Conectividad Insuperable
            </span>
            <h3 className="text-2xl font-serif text-[#0E1E2E]">Distancias & Tiempos de Traslado</h3>
            <p className="text-xs text-stone-500 mt-2">
              Todo lo que Cartagena tiene para ofrecer se encuentra a pocos minutos de nuestro lobby.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {distances.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.place}
                  className="p-5 rounded-xl bg-[#FAF8F5] border border-stone-200/90 hover:border-[#C5A880] transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-[#0E1E2E]/5 text-[#0E1E2E] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#A88653]" />
                      </div>
                      <span className="text-[11px] font-bold text-[#0E1E2E] bg-white px-2.5 py-1 rounded-full border border-stone-200">
                        {d.time}
                      </span>
                    </div>
                    <h4 className="text-sm font-serif font-bold text-[#0E1E2E]">
                      {d.place}
                    </h4>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-200/70 text-[11px] font-medium text-[#A88653]">
                    Distancia: {d.distance}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
