import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';

export default function Logo({ variant = 'gold', className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group ${className}`}>
      {/* Luxury Crest / Monogram Emblem */}
      <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-[#D4AF37] via-[#C5A880] to-[#8C6D37] p-[1.5px] shadow-[0_2px_10px_rgba(212,175,55,0.3)] shrink-0 transition-transform duration-300 group-hover:scale-105">
        <div className="w-full h-full bg-[#0E1E2E] rounded-[7px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle gold inner shimmer */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#C5A880]/15 to-transparent" />
          
          {/* Stylized Monogram CP + Star Crown SVG */}
          <svg
            viewBox="0 0 40 40"
            className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37] fill-current"
          >
            {/* Crown of 3 stars */}
            <path d="M20 5 L21.2 8.5 L24.8 8.5 L21.9 10.6 L23 14 L20 11.8 L17 14 L18.1 10.6 L15.2 8.5 L18.8 8.5 Z" transform="scale(0.55) translate(16, 2)" fill="#F3E5AB" />
            <circle cx="12" cy="9" r="1.2" fill="#D4AF37" />
            <circle cx="28" cy="9" r="1.2" fill="#D4AF37" />
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
      <div className="flex flex-col text-left">
        <span className="font-serif text-sm sm:text-lg font-bold tracking-tight text-white leading-tight">
          Cartagena <span className="text-[#D4AF37] italic font-normal">Premium</span>
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#C5A880] font-sans font-semibold">
            Hotel Deluxe
          </span>
          <span className="text-stone-500 text-[9px]">•</span>
          <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-stone-300 font-sans">
            Bocagrande
          </span>
        </div>
      </div>
    </div>
  );
}
