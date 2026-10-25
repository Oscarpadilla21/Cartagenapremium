import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { HOTEL_DATA } from '../data/hotelData';
import { Bed, MapPin, Phone, Sparkles, Menu, X, CalendarCheck, Image as ImageIcon, Award } from 'lucide-react';
import TripAdvisorIcon from './icons/TripAdvisorIcon';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'INICIO', path: '/', icon: null },
    { name: 'HABITACIONES', path: '/habitaciones', icon: Bed },
    { name: 'SERVICIOS', path: '/servicios', icon: Sparkles },
    { name: 'UBICACIÓN', path: '/ubicacion', icon: MapPin },
    { name: 'CONTACTO', path: '/contacto', icon: Phone },
  ];

  const extraMobileLinks = [
    { name: 'CLUB PREMIUM (-10%)', path: '/club-premium', icon: Award, highlight: true },
    { name: 'GALERÍA', path: '/galeria', icon: ImageIcon },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-[#FCF9F6]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-2 border-b border-[#e8e2dc]'
          : 'bg-[#FCF9F6]/90 backdrop-blur-sm py-3 border-b border-[#f0eae3]'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px]">
          
          {/* Left: Original Large Gold Logo */}
          <div className="shrink-0 flex items-center">
            <Link
              to="/"
              className="block group focus-visible:ring-2 focus-visible:ring-[#b5987a] rounded-sm transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Hotel Cartagena Premium - Inicio"
            >
              <img
                src={HOTEL_DATA.logos.gold}
                alt={HOTEL_DATA.name}
                className={`w-auto object-contain transition-all duration-300 ease-out ${
                  isScrolled ? 'h-15 sm:h-17' : 'h-18 sm:h-[84px]'
                }`}
              />
            </Link>
          </div>

          {/* Center: Main Navigation Menu with Original Icons */}
          <nav
            className="hidden md:flex items-center space-x-6 lg:space-x-8"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => {
              const IconComp = link.icon;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-[12px] tracking-[2px] font-lato font-bold uppercase transition-all duration-200 flex items-center gap-1.5 py-1.5 group focus-visible:ring-2 focus-visible:ring-[#b5987a] rounded-sm ${
                      isActive
                        ? 'text-[#b5987a]'
                        : 'text-[#303030] hover:text-[#b5987a]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {IconComp && (
                        <IconComp className={`w-3.5 h-3.5 transition-colors ${
                          isActive ? 'text-[#b5987a]' : 'text-stone-500 group-hover:text-[#b5987a]'
                        }`} />
                      )}
                      <span>{link.name}</span>
                      <span
                        className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#b5987a] transition-all duration-300 origin-left ${
                          isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Actions: Social Icons & Booking CTA */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Social Media Circular Icons */}
            <div className="flex items-center space-x-2">
              <a
                href={HOTEL_DATA.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Hotel Cartagena Premium"
                className="w-8.5 h-8.5 rounded-full border border-[#d0d0d0] text-[#2b2927] hover:border-[#b5987a] hover:text-[#b5987a] hover:scale-105 flex items-center justify-center transition-all bg-white/60 shadow-2xs focus-visible:ring-2 focus-visible:ring-[#b5987a]"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>

              <a
                href={HOTEL_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Hotel Cartagena Premium"
                className="w-8.5 h-8.5 rounded-full border border-[#d0d0d0] text-[#2b2927] hover:border-[#b5987a] hover:text-[#b5987a] hover:scale-105 flex items-center justify-center transition-all bg-white/60 shadow-2xs focus-visible:ring-2 focus-visible:ring-[#b5987a]"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href={HOTEL_DATA.socials.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TripAdvisor de Hotel Cartagena Premium"
                className="w-8.5 h-8.5 rounded-full border border-[#d0d0d0] text-[#2b2927] hover:border-[#00aa6c] hover:text-[#00aa6c] hover:scale-105 flex items-center justify-center transition-all bg-white/60 shadow-2xs focus-visible:ring-2 focus-visible:ring-[#00aa6c]"
              >
                <TripAdvisorIcon className="w-4 h-4 fill-current" />
              </a>
            </div>

            {/* Direct Booking CTA Button in Navbar */}
            {onOpenBooking && (
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="ml-2 inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xs bg-[#b5987a] hover:bg-[#303030] text-white text-[11px] font-lato font-bold uppercase tracking-[2px] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer active:scale-95"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Reservar</span>
              </button>
            )}
          </div>

          {/* Mobile Right Controls: Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#303030] hover:text-[#b5987a] transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm focus-visible:ring-2 focus-visible:ring-[#b5987a]"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown with Smooth Height & Shadow */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden bg-[#FCF9F6] border-b border-[#e8e2dc] px-5 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {navLinks.map((link) => {
            const IconComp = link.icon;
            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-3.5 py-2.5 px-3 rounded-lg text-sm font-semibold tracking-wider min-h-[44px] transition-colors ${
                    isActive
                      ? 'bg-amber-50/80 text-[#b5987a] font-bold'
                      : 'text-[#303030] hover:bg-white hover:text-[#b5987a]'
                  }`
                }
              >
                {IconComp && <IconComp className="w-4.5 h-4.5 text-[#b5987a]" />}
                <span>{link.name}</span>
              </NavLink>
            );
          })}

          <div className="pt-2 border-t border-[#eee7df]">
            {extraMobileLinks.map((link) => {
              const IconComp = link.icon;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3.5 py-2 px-3 rounded-lg text-xs font-semibold tracking-wider min-h-[40px] transition-colors ${
                      isActive
                        ? 'text-[#b5987a] font-bold'
                        : link.highlight
                        ? 'text-amber-700 bg-amber-50/60'
                        : 'text-stone-600 hover:text-[#b5987a]'
                    }`
                  }
                >
                  {IconComp && <IconComp className="w-4 h-4 text-[#b5987a]" />}
                  <span>{link.name}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Direct Booking Button */}
          {onOpenBooking && (
            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-[#b5987a] hover:bg-[#303030] text-white text-xs font-bold uppercase tracking-[2px] transition-colors shadow-sm min-h-[44px] cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Reservar Habitación Ahora</span>
              </button>
            </div>
          )}

          {/* Social Row in Mobile */}
          <div className="flex items-center justify-center gap-4 pt-3 border-t border-[#eee7df]">
            <a
              href={HOTEL_DATA.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#666] hover:text-[#b5987a] p-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
              </svg>
            </a>
            <a
              href={HOTEL_DATA.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#666] hover:text-[#b5987a] p-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href={HOTEL_DATA.socials.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TripAdvisor"
              className="text-[#666] hover:text-[#00aa6c] p-2 flex items-center justify-center transition-colors"
            >
              <TripAdvisorIcon className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}