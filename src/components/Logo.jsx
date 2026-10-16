import React from 'react';

export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 group max-w-full overflow-hidden ${className}`}>
      {/* Luxury Crest / Monogram Emblem */}
      <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] via-[#C5A880] to-[#8C6D37] p-[1.5px] shadow-[0_2px_8px_rgba(212,175,55,0.35)] shrink-0 transition-transform duration-300 group-hover:scale-105">
        <div className="w-full h-full bg-[#0E1E2E] rounded-[6.5px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#C5A880]/20 to-transparent" />
          
          {/* Stylized Monogram CP + Star Crown SVG */}
          <svg
            viewBox="0 0 40 40"
            className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] fill-current"
          >
            {/* Crown of stars */}
            <circle cx="20" cy="7" r="1.5" fill="#F3E5AB" />
            <circle cx="13" cy="9" r="1.2" fill="#D4AF37" />
            <circle cx="27" cy="9" r="1.2" fill="#D4AF37" />
            {/* Letter C */}
            <path
              d="M17 18 C17 14 23 14 25 16"
              fill="none"
              stroke="#F3E5AB"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            {/* Letter P entwined */}
            <path
              d="M21 16 L21 28 M21 16 C25 16 27 18 27 21 C27 24 24 24 21 24"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
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
