import React from 'react';
import { Link } from 'react-router-dom';
import { HOTEL_DATA } from '../data/hotelData';

export default function Footer() {
  return (
    <footer className="relative bg-[#FCF9F6] border-t border-[#eee7df] text-[#333333] pt-20 pb-14 text-center overflow-hidden">
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Centered Logo (logo-footer.png) */}
        <div className="flex justify-center">
          <Link to="/" className="inline-block hover:scale-105 transition-transform">
            <img
              src={HOTEL_DATA.logos.footer}
              alt={HOTEL_DATA.name}
              className="w-24 h-24 object-contain mx-auto"
            />
          </Link>
        </div>

        {/* Graphic Accent Image (graphic-img-3-1-1.png) */}
        <div className="flex justify-center">
          <img
            src={HOTEL_DATA.logos.graphicAccent}
            alt="adorno"
            className="w-18 h-3.5 object-contain"
          />
        </div>

        {/* Institutional Description */}
        <p className="font-lato text-[14px] leading-[24px] text-[#383838] max-w-xl mx-auto">
          En pleno Caribe,&nbsp;<strong className="text-[#303030] font-bold">Hotel Cartagena Premium</strong> con confortables suites, está ubicado en lo mejor de Cartagena.
        </p>

        {/* Social Media Circular Icons */}
        <div className="flex items-center justify-center space-x-3 pt-3">
          {/* Facebook */}
          <a
            href={HOTEL_DATA.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full border border-[#d0d0d0] text-[#2b2927] hover:text-[#b5987a] hover:border-[#b5987a] flex items-center justify-center transition-colors text-sm bg-white/70 shadow-2xs"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href={HOTEL_DATA.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-[#d0d0d0] text-[#2b2927] hover:text-[#b5987a] hover:border-[#b5987a] flex items-center justify-center transition-colors text-sm bg-white/70 shadow-2xs"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* TripAdvisor */}
          <a
            href={HOTEL_DATA.socials.tripadvisor}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TripAdvisor"
            className="w-10 h-10 rounded-full border border-[#d0d0d0] text-[#2b2927] hover:text-[#b5987a] hover:border-[#b5987a] flex items-center justify-center transition-colors text-xs font-serif font-bold bg-white/70 shadow-2xs"
          >
            TA
          </a>
        </div>

        {/* Copyright & Legal Links */}
        <div className="pt-10 font-lato text-[12px] leading-[16px] text-[#777777] flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <span>© Hotel Cartagena Premium</span>
          <span>|</span>
          <Link to="/aviso-legal" className="font-bold text-[#0D0C0C] tracking-[2.8px] hover:text-[#b5987a] transition-colors uppercase">
            AVISO LEGAL
          </Link>
          <span>|</span>
          <Link to="/politica-de-cookies" className="font-bold text-[#0D0C0C] tracking-[2.8px] hover:text-[#b5987a] transition-colors uppercase">
            POLÍTICA DE COOKIES
          </Link>
          <span>|</span>
          <span className="text-stone-400">by SASHA.PRO</span>
        </div>

      </div>
    </footer>
  );
}
