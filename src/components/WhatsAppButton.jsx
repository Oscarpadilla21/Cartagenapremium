import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const message = encodeURIComponent(
    'Hola, deseo información sobre disponibilidad y reservas para Hotel Cartagena Premium.'
  );

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Desktop Tooltip */}
      <div
        className={`hidden md:flex flex-col text-right bg-[#0E1E2E]/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#C5A880]/30 shadow-2xl transition-all duration-300 transform ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-1.5 justify-end">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
            Concierge en Línea
          </span>
        </div>
        <span className="text-xs font-serif text-white font-medium">
          ¿Deseas atención personalizada?
        </span>
        <span className="text-[10px] text-stone-300 font-sans">
          Respuesta promedio: &lt; 3 minutos
        </span>
      </div>

      {/* Main WhatsApp Button */}
      <a
        href={`https://wa.me/${HOTEL_DATA.whatsapp}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_6px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.65)] transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-white/90"
        aria-label="Contactar a Concierge por WhatsApp"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 group-hover:opacity-0" />

        {/* Authentic WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-sm"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-12.416c-5.514 0-10 4.486-10 10 0 1.764.459 3.421 1.261 4.871l-1.34 4.896 5.02-1.317c1.403.766 3.007 1.208 4.717 1.208 5.514 0 10-4.486 10-10s-4.486-10-10-10z" />
        </svg>

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-[#0E1E2E] shadow" />
      </a>
    </div>
  );
}
