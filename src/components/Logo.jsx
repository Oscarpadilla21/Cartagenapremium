import React from 'react';

export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 shrink-0 group ${className}`}>
      {/* Official Gold Crest Emblem from cartagenapremium.com */}
      <img
        src="/logo-gold.png"
        alt="Hotel Cartagena Premium Logo Oficial"
        className="h-10 sm:h-12 w-auto object-contain shrink-0 filter brightness-110 drop-shadow-[0_2px_10px_rgba(212,175,55,0.45)] transition-transform duration-300 group-hover:scale-105"
        loading="eager"
      />

      {/* Typography Brand Block: Strictly shrink-0 whitespace-nowrap, never clipped */}
      <div className="flex flex-col text-left shrink-0 whitespace-nowrap">
        <span className="font-serif text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white leading-none whitespace-nowrap">
          Cartagena <span className="text-[#D4AF37] italic font-normal">Premium</span>
        </span>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#C5A880] font-sans font-bold whitespace-nowrap">
            Hotel Deluxe
          </span>
          <span className="text-stone-500 text-[9px]">•</span>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-stone-300 font-sans whitespace-nowrap">
            Bocagrande
          </span>
        </div>
      </div>
    </div>
  );
}
