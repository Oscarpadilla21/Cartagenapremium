import React from 'react';

export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group max-w-full overflow-hidden ${className}`}>
      {/* Official Gold Crest Emblem from cartagenapremium.com */}
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <img
          src="/logo-gold.png"
          alt="Hotel Cartagena Premium Logo Oficial"
          className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]"
          loading="eager"
        />
      </div>

      {/* Typography Brand Block */}
      <div className="flex flex-col text-left min-w-0">
        <span className="font-serif text-sm sm:text-base lg:text-lg font-bold tracking-tight text-white leading-tight truncate">
          Cartagena <span className="text-[#D4AF37] italic font-normal">Premium</span>
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#C5A880] font-sans font-bold truncate">
            Hotel Deluxe
          </span>
          <span className="hidden xs:inline text-stone-500 text-[8px]">•</span>
          <span className="hidden xs:inline text-[8px] uppercase tracking-wider text-stone-300 font-sans truncate">
            Bocagrande
          </span>
        </div>
      </div>
    </div>
  );
}
