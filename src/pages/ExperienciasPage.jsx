import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Landmark, Compass, ExternalLink, MapPin, Sparkles, Send } from 'lucide-react';

export default function ExperienciasPage() {
  const iconicSites = [
    {
      title: "Ciudad Amurallada & Centro Histórico",
      tag: "A 10 min del Hotel",
      desc: "Patrimonio de la Humanidad por la UNESCO. Calles adoquinadas, balcones florecidos de buganvilias, la Plaza Santo Domingo, la Torre del Reloj y catedrales del siglo XVI.",
      image: "https://cartagenapremium.com/wp-content/uploads/2023/04/centro-historico-imperialtour.com_.co_.jpg"
    },
    {
      title: "Castillo San Felipe de Barajas",
      tag: "A 8 min en taxi",
      desc: "La mayor fortificación militar colonial erigida por los españoles en América. Explora su laberinto de túneles acústicos y su vista panorámica sobre toda la bahía.",
      image: "https://cartagenapremium.com/wp-content/uploads/2023/04/razones-invertir-cartagena-colombia-scaled.jpg"
    },
    {
      title: "Playas de Bocagrande & Marina",
      tag: "A 2 min a pie",
      desc: "Frente al hotel con acceso directo a la playa de arena dorada, deportes náuticos y paseos al atardecer frente al Mar Caribe.",
      image: "https://cartagenapremium.com/wp-content/uploads/2023/04/fotografia-foto-photo-turismo-tourism-travel-skyline-playa-bocagrande-cartagena-mar-colombia-fondos-wallpapers-somos-motta-min.jpg"
    },
    {
      title: "Bocagrande Nocturno & Terrazas",
      tag: "En el entorno del Hotel",
      desc: "La vida nocturna, restaurantes de gastronomía caribeña e internacional y la vibrante iluminación de la bahía de Cartagena.",
      image: "https://cartagenapremium.com/wp-content/uploads/2020/03/bocagrande-in-the-night-2.jpg"
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF8F5]">
      {/* Banner */}
      <div className="relative py-16 sm:py-24 bg-[#0E1E2E] text-white overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://cartagenapremium.com/wp-content/uploads/2023/04/foto-bocagrande--scaled.jpg"
            alt="Sitios Emblemáticos de Cartagena"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E2E] via-[#0E1E2E]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-2">
            La Magia de Cartagena de Indias
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white">
            Sitios Emblemáticos & Experiencias
          </h1>
          <p className="text-stone-300 font-sans text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Desde la vanguardia de Bocagrande hasta las murallas del siglo XVI, te conectamos con los rincones más fascinantes del Caribe colombiano.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Landmark Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {iconicSites.map((site, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-[#C5A880]/20 shadow-deluxe flex flex-col group"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={site.image}
                  alt={site.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-[#0E1E2E]/90 text-[#C5A880] text-[10px] uppercase font-bold tracking-widest border border-[#C5A880]/40">
                    {site.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-serif text-white">{site.title}</h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                  {site.desc}
                </p>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-[#A88653] font-semibold">
                  <span>Coordinación de tours privados con Concierge</span>
                  <Compass className="w-4 h-4 text-[#A88653]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Partners Circuit Banner */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#C5A880]/30 shadow-deluxe mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2 text-[#A88653] mb-1">
                <Landmark className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-bold">Circuito Cultural Exclusivo</span>
              </div>
              <h3 className="text-2xl font-serif text-[#0E1E2E]">
                Visita los Museos y Galerías de Cartagena
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md font-sans">
              Convenios y accesos prioritarios con las instituciones artísticas e históricas de la ciudad para los huéspedes de Hotel Cartagena Premium.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOTEL_DATA.culturalPartners.map((partner, idx) => (
              <a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl overflow-hidden bg-[#FAF8F5] border border-stone-200/90 hover:border-[#C5A880] transition-all duration-300 hover:shadow-lg flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-[#0E1E2E]/80 backdrop-blur-md text-[#C5A880] text-[10px] font-bold uppercase tracking-wider border border-[#C5A880]/30">
                      {partner.category}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 right-3">
                    <span className="text-[10px] text-white/90 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded font-medium">
                      {partner.distance}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-serif font-bold text-[#0E1E2E] group-hover:text-[#A88653] transition-colors flex items-center justify-between">
                      <span>{partner.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#A88653] shrink-0 opacity-70 group-hover:opacity-100" />
                    </h4>
                    <p className="text-xs text-stone-600 font-sans mt-1.5 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                  
                  <div className="pt-3 mt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-semibold text-[#A88653]">
                    <span>Asistencia en Concierge</span>
                    <span className="text-[10px] uppercase tracking-wider group-hover:translate-x-1 transition-transform">Ver Sitio →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Concierge Tour Booking Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0E1E2E] to-[#1A334B] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#C5A880]/40 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold">
              Asistencia VIP Personalizada
            </span>
            <h4 className="text-2xl font-serif">¿Deseas planificar un tour privado en yate o ciudad?</h4>
            <p className="text-xs text-stone-300">
              Nuestro concierge coordina transporte privado, guías bilingües y reservaciones prioritarias.
            </p>
          </div>
          <a
            href={`https://wa.me/${HOTEL_DATA.whatsapp}?text=Hola,%20deseo%20información%20sobre%20tours%20y%20experiencias%20en%20Cartagena`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest shrink-0 shadow-lg flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Hablar con Concierge</span>
          </a>
        </div>
      </div>
    </div>
  );
}
