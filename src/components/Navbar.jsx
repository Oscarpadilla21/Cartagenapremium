import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, ChevronRight, Globe, Sparkles } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';
import Logo from './Logo';

export default function Navbar({ onOpenBooking, currency, setCurrency }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Inicio', desktopName: 'Inicio', path: '/' },
    { name: 'Suites & Habitaciones', desktopName: 'Habitaciones', path: '/habitaciones', badge: 'Catálogo' },
    { name: 'Rooftop & Servicios', desktopName: 'Servicios', path: '/servicios', badge: 'Piscina 360°' },
    { name: 'Sitios & Experiencias', desktopName: 'Experiencias', path: '/experiencias', badge: 'Cartagena' },
    { name: 'Galería de Fotos', desktopName: 'Galería', path: '/galeria', badge: 'Fotos' },
    { name: 'Ubicación Bocagrande', desktopName: 'Ubicación', path: '/ubicacion', badge: 'Bocagrande' },
    { name: 'Contacto & Concierge', desktopName: 'Contacto', path: '/contacto', badge: '24/7' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 max-w-[100vw] overflow-x-clip ${
          isScrolled
            ? 'bg-[#0E1E2E]/98 backdrop-blur-md shadow-2xl py-2.5 sm:py-3 border-b border-[#C5A880]/30'
            : 'bg-gradient-to-b from-[#0E1E2E]/98 via-[#0E1E2E]/80 to-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full">
          <div className="flex items-center justify-between gap-4 w-full">
            {/* Logo Link: Fixed shrink-0 so it NEVER squishes or truncates */}
            <Link
              to="/"
              className="shrink-0 flex items-center group"
              title="Hotel Cartagena Premium - Inicio"
            >
              <Logo />
            </Link>

            {/* Desktop Navigation Links: Clean, Uncluttered, Balanced Spacing */}
            <nav className="hidden xl:flex items-center gap-5 2xl:gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[12px] 2xl:text-[13px] uppercase tracking-[0.14em] font-medium transition-colors duration-200 relative group py-1.5 whitespace-nowrap ${
                      isActive
                        ? 'text-[#D4AF37] font-bold'
                        : 'text-stone-200 hover:text-[#C5A880]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.desktopName}</span>
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Right Action Bar */}
            <div className="hidden xl:flex items-center gap-3 shrink-0">
              {/* Phone Concierge Pill */}
              <a
                href={`tel:${HOTEL_DATA.phones[0].replace(/\s+/g, '')}`}
                className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-[#C5A880]/35 text-stone-200 hover:text-white transition-all flex items-center gap-2 group shadow-sm shrink-0"
                title="Llamar directamente a Concierge 24/7"
              >
                <div className="w-5 h-5 rounded-full bg-[#C5A880]/20 flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#0E1E2E] transition-colors">
                  <Phone className="w-3 h-3" />
                </div>
                <div className="text-left">
                  <span className="hidden 2xl:block text-[8px] uppercase tracking-wider text-[#C5A880] font-bold leading-none">
                    Concierge
                  </span>
                  <span className="text-xs font-semibold tracking-wider text-stone-100">
                    {HOTEL_DATA.phones[0]}
                  </span>
                </div>
              </a>

              {/* Currency Toggle Switch (COP | USD) */}
              <div
                className="flex items-center p-0.5 rounded-full bg-[#08131E] border border-[#C5A880]/40 shadow-inner shrink-0"
                title="Seleccionar divisa"
              >
                <button
                  type="button"
                  onClick={() => setCurrency('COP')}
                  className={`px-2.5 py-1 text-[10px] font-bold rounded-full transition-all duration-200 cursor-pointer ${
                    currency === 'COP'
                      ? 'bg-gradient-to-r from-[#C5A880] to-[#E2CFB4] text-[#0E1E2E] shadow-sm'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  COP
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-2.5 py-1 text-[10px] font-bold rounded-full transition-all duration-200 cursor-pointer ${
                    currency === 'USD'
                      ? 'bg-gradient-to-r from-[#C5A880] to-[#E2CFB4] text-[#0E1E2E] shadow-sm'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  USD
                </button>
              </div>

              {/* Deluxe Golden Reservation Button */}
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="relative overflow-hidden px-4.5 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] text-[#0E1E2E] font-bold text-xs tracking-[0.16em] uppercase shadow-[0_4px_16px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_22px_rgba(212,175,55,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 group cursor-pointer border border-[#FFF8DC]/60 shrink-0"
              >
                <Calendar className="w-3.5 h-3.5 text-[#0E1E2E]" />
                <span className="relative z-10 font-bold">Reservar</span>
              </button>
            </div>

            {/* Mobile / Tablet Header Controls (Visible below 1200px xl breakpoint) */}
            <div className="flex xl:hidden items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 text-[11px] uppercase tracking-wider font-extrabold rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] text-[#0E1E2E] shadow-md border border-[#FFF8DC]/70 active:scale-95 transition-transform shrink-0"
              >
                Reservar
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="w-10 h-10 flex items-center justify-center p-2 text-stone-200 hover:text-[#C5A880] rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 focus:outline-none shrink-0"
                aria-label="Abrir menú"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Menu Drawer (Completely within viewport, 100dvh, zero horizontal overflow) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] w-screen max-w-full h-[100dvh] bg-[#0A141F] flex flex-col p-4 sm:p-5 overflow-y-auto overflow-x-hidden box-border xl:hidden animate-in fade-in duration-200">
          {/* Top Bar with Logo & Explicit Close Button */}
          <div className="flex items-center justify-between pb-3 border-b border-[#C5A880]/20 shrink-0 gap-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="shrink-0 block"
            >
              <Logo />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5A880]/20 text-white flex items-center justify-center border border-white/20 shrink-0 active:scale-90 transition-transform"
              aria-label="Cerrar menú"
            >
              <X className="w-5 h-5 text-[#C5A880]" />
            </button>
          </div>

          {/* Currency Selector Row in Drawer */}
          <div className="flex justify-between items-center my-3 py-2.5 px-3 rounded-xl bg-white/5 border border-stone-800 shrink-0">
            <div className="flex items-center gap-2 text-xs text-stone-300">
              <Globe className="w-4 h-4 text-[#C5A880]" />
              <span className="font-medium text-[11px]">Moneda:</span>
            </div>
            
            <div className="flex items-center p-0.5 rounded-full bg-black/60 border border-[#C5A880]/40">
              <button
                type="button"
                onClick={() => setCurrency('COP')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  currency === 'COP'
                    ? 'bg-[#C5A880] text-[#0E1E2E] shadow'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                COP
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  currency === 'USD'
                    ? 'bg-[#C5A880] text-[#0E1E2E] shadow'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                USD
              </button>
            </div>
          </div>

          {/* Quick Concierge Phone Card */}
          <a
            href={`tel:${HOTEL_DATA.phones[0].replace(/\s+/g, '')}`}
            className="mb-4 p-3 rounded-xl bg-white/5 border border-[#C5A880]/30 flex items-center justify-between text-stone-200 active:bg-white/10 transition-colors shrink-0"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] uppercase tracking-wider text-[#C5A880] block font-bold truncate">
                  Concierge 24 Horas
                </span>
                <span className="text-xs font-semibold truncate block">{HOTEL_DATA.phones[0]}</span>
              </div>
            </div>
            <span className="text-[9px] uppercase font-bold text-[#0E1E2E] bg-[#C5A880] px-2.5 py-1 rounded-full shadow-sm shrink-0 ml-2">
              Llamar
            </span>
          </a>

          {/* Navigation Links with Page Routing and Badges */}
          <nav className="flex flex-col space-y-1 mb-4 flex-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-serif flex items-center justify-between py-2.5 px-3 rounded-lg border-b border-stone-800/80 transition-all ${
                    isActive
                      ? 'bg-[#C5A880]/15 text-[#D4AF37] font-bold border-l-2 border-l-[#D4AF37]'
                      : 'text-stone-200 hover:text-[#C5A880] active:bg-white/5'
                  }`
                }
              >
                <div className="flex items-center gap-2">
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-[#C5A880] font-sans">
                      {link.badge}
                    </span>
                  )}
                </div>
                <ChevronRight className="w-4 h-4 text-[#C5A880]/60 shrink-0" />
              </NavLink>
            ))}
          </nav>

          {/* Bottom Action in Drawer */}
          <div className="pt-2 border-t border-[#C5A880]/20 shrink-0 space-y-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] text-[#0E1E2E] text-xs tracking-widest uppercase font-extrabold shadow-lg flex items-center justify-center gap-2 border border-[#FFF8DC]/70 active:scale-98 transition-transform"
            >
              <Calendar className="w-4 h-4 text-[#0E1E2E]" />
              <span>Reservar Estadía Ahora</span>
            </button>
            <div className="text-center text-[10px] text-stone-400 font-sans truncate">
              Av. San Martín nº. 11-113 · Bocagrande, Cartagena
            </div>
          </div>
        </div>
      )}
    </>
  );
}
