import React, { useState, useEffect } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Play, Sparkles, Utensils, Wine, Clock, Check, Coffee, Waves, ShieldCheck, X } from 'lucide-react';

export default function ServiciosPage({ onOpenBooking }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const rooftop = HOTEL_DATA.rooftop || {};

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && videoOpen) {
        setVideoOpen(false);
      }
    };
    if (videoOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [videoOpen]);

  const services = [
    {
      title: "Piscina Infinity en Rooftop",
      desc: "Ubicada en el último piso con vista de 360 grados al mar Caribe y a la bahía de Cartagena. Cuenta con solárium privado y camas de descanso.",
      hours: "09:00 AM – 10:00 PM",
      image: "/images/hotel/piscina.png",
      badge: "Piso Superior Panorámico"
    },
    {
      title: "Restaurante Fusión Caribeña & Salón",
      desc: "Propuesta culinaria inspirada en la pesca fresca del día, frutos tropicales y cocina tradicional cartagenera contemporánea.",
      hours: "07:00 AM – 10:30 PM",
      image: "/images/hotel/cartagena-premium.hotel-18-scaled.jpg",
      badge: "Gastronomía Local"
    },
    {
      title: "Sky Bar & Atardeceres en Azotea",
      desc: "Mixología tropical con rones añejos colombianos, ginebras botánicas y selección de tapas gourmet servidas junto a la piscina.",
      hours: "04:00 PM – 11:30 PM",
      image: "/images/hotel/bocagrande-in-the-night-2.jpg",
      badge: "Sunset Sessions"
    },
    {
      title: "Desayuno Buffet & Áreas de Estar",
      desc: "Incluido de cortesía en todas las suites: arepas tradicionales, frutas exóticas de temporada, café colombiano y panes horneados.",
      hours: "07:00 AM – 10:00 AM",
      image: "/images/hotel/cartagena-premium.hotel-15.jpg",
      badge: "Cortesía Huéspedes"
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF8F5]">
      {/* Page Header */}
      <div className="relative py-16 sm:py-24 bg-[#1f242e] text-white overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/images/hotel/piscina.png"
            alt="Servicios Hotel Cartagena Premium"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f242e] via-[#1f242e]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c1a186] font-semibold block mb-2 font-lato">
            Hospitalidad & Confort en Bocagrande
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white">
            Rooftop Pool, Gastronomía & Servicios
          </h1>
          <p className="text-stone-300 font-sans text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Disfruta de espacios diseñados para deleitar tus sentidos: desde la piscina panorámica suspendida sobre Bocagrande hasta sabores caribeños de autor.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Video Tour Banner */}
        <div className="bg-[#1f242e] text-white rounded-2xl p-8 sm:p-12 mb-16 border border-[#b5987a]/30 shadow-deluxe flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl text-left">
            <span className="text-xs uppercase tracking-widest text-[#c1a186] font-bold font-lato">
              Experiencia Audiovisual
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-white">
              Conoce Nuestro Restaurante & Terraza
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              Descubre en video el ambiente de nuestro comedor panorámico y la terraza solárium donde los atardeceres de Bocagrande cobran vida.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="min-h-[48px] px-8 py-3.5 rounded-sm bg-[#b5987a] hover:bg-white text-white hover:text-[#1f242e] font-bold text-xs uppercase tracking-[0.2em] shadow-lg transition-all flex items-center gap-3 shrink-0 cursor-pointer font-lato active:scale-95"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Reproducir Video Oficial</span>
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((serv, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-[#e8dfd5] shadow-deluxe hover:shadow-deluxe-lg transition-all duration-300 flex flex-col sm:flex-row group hover:-translate-y-1 text-left"
            >
              <div className="sm:w-2/5 relative h-56 sm:h-auto overflow-hidden bg-stone-100">
                <img
                  src={serv.image}
                  alt={serv.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#1f242e]/90 text-[#c1a186] text-[9px] font-bold uppercase tracking-wider font-lato">
                  {serv.badge}
                </div>
              </div>

              <div className="sm:w-3/5 p-6 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#b5987a]" />
                    <span>{serv.hours}</span>
                  </div>
                  <h3 className="text-xl font-serif text-[#1f242e]">{serv.title}</h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed font-sans">
                    {serv.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#8c6d4f]">
                  <span>Servicio Exclusivo Huéspedes</span>
                  <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Book */}
        {onOpenBooking && (
          <div className="text-center pt-8">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="qbutton text-xs"
            >
              Reservar Estadía Ahora
            </button>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Restaurante Hotel Cartagena Premium"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="bg-[#1f242e] rounded-2xl max-w-4xl w-full overflow-hidden border border-[#b5987a]/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex items-center justify-between border-b border-stone-700">
              <span className="text-xs uppercase tracking-widest text-[#c1a186] font-bold font-lato">
                Restaurante Hotel Cartagena Premium
              </span>
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="text-stone-400 hover:text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Cerrar video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`${rooftop.videoUrl || 'https://www.youtube.com/embed/y2TCHQ36MDs'}?autoplay=1`}
                title="Restaurante Hotel Cartagena Premium"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}