import React from 'react';

export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 sm:gap-4 shrink-0 group ${className}`}>
      {/* Official Gold Crest Emblem from cartagenapremium.com */}
      <img
        src="/logo-gold.png"
        alt="Hotel Cartagena Premium Logo Oficial"
        className="h-11 sm:h-13 w-auto object-contain shrink-0 filter brightness-110 drop-shadow-[0_2px_12px_rgba(212,175,55,0.45)] transition-transform duration-300 group-hover:scale-105"
        loading="eager"
      />

      {/* Typography Brand Block: Spacious, Deluxe Hierarchy without Cramping */}
      <div className="flex flex-col justify-center shrink-0 text-left">
        <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold tracking-wide text-white leading-tight whitespace-nowrap">
          Cartagena <span className="text-[#D4AF37] font-normal italic">Premium</span>
        </span>
        <div className="flex items-center gap-2 mt-1 whitespace-nowrap">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#C5A880] font-sans font-bold">
            Hotel Deluxe
          </span>
          <span className="text-stone-500 text-xs">•</span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-stone-300 font-sans font-medium">
            Bocagrande
          </span>
        </div>
      </div>
    </div>
  );
}
