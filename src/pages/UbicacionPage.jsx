import React from 'react';
import { Phone, Navigation } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

export default function UbicacionPage({ onOpenBooking }) {
  const googleMapsUrl = "https://maps.google.com/?q=Hotel+Cartagena+Premium+Bocagrande";

  return (
    <div className="pt-32 pb-24 bg-white text-center">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Address Header */}
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] font-lato font-bold uppercase tracking-[0.25em] text-[#b5987a] block">
            Ubicación Inmejorable
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#303030]">
            Frente a la Base Naval, Bocagrande
          </h1>
          <div className="w-16 h-0.5 bg-[#b5987a] mx-auto" />
          <p className="font-lato text-[16px] sm:text-[18px] leading-[30px] text-[#444444] font-normal">
            Hotel <strong className="text-[#1f242e] font-semibold">Cartagena Premium</strong> está ubicado en Cra. 2 #11-113, Bocagrande, Cartagena de Indias, Bolívar, Colombia. A solo 10 minutos del Centro Histórico y con vista panorámica a la bahía y el mar.
          </p>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1f242e] hover:bg-[#b5987a] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-[#c1a186]" />
              <span>Cómo Llegar en GPS</span>
            </a>
            <a
              href={`tel:${HOTEL_DATA.rawPhones[0]}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider transition-colors border border-stone-200"
            >
              <Phone className="w-4 h-4 text-[#b5987a]" />
              <span>Llamar al Hotel</span>
            </a>
            {onOpenBooking && (
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#b5987a] hover:bg-[#1f242e] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Reservar Habitación</span>
              </button>
            )}
          </div>
        </div>

        {/* Full Interactive Google Map Frame with Shadow */}
        <div className="w-full h-[540px] sm:h-[620px] border border-[#e8dfd5] shadow-deluxe-lg rounded-xs overflow-hidden relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15696.654941851935!2d-75.5509179!3d10.4085672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeb4b3f6f061defea!2sHotel%20Cartagena%20Premium!5e0!3m2!1ses!2ses!4v1584349810460!5m2!1ses!2ses"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa interactivo Hotel Cartagena Premium"
          />
        </div>

      </div>
    </div>
  );
}