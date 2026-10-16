import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ChevronRight, Globe, Sparkles } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';
import Logo from './Logo';

export default function Navbar({ onOpenBooking, currency, setCurrency }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { name: 'Suites & Habitaciones', href: '#suites' },
    { name: 'Rooftop & Piscina', href: '#rooftop' },
    { name: 'Sitios & Experiencias', href: '#experiencias' },
    { name: 'Galería de Cartagena', href: '#galeria' },
    { name: 'Ubicación Bocagrande', href: '#ubicacion' },
    { name: 'Opiniones', href: '#opiniones' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E1E2E]/95 backdrop-blur-md shadow-2xl py-2.5 sm:py-3 border-b border-[#C5A880]/30'
            : 'bg-gradient-to-b from-[#0E1E2E]/95 via-[#0E1E2E]/70 to-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <a href="#" className="shrink-0">
              <Logo />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-stone-200 hover:text-[#C5A880] text-[12px] uppercase tracking-[0.16em] font-medium transition-colors duration-200 relative group py-1"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A880] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Right Action Bar */}
            <div className="hidden lg:flex items-center space-x-3 shrink-0">
              {/* Phone Concierge Pill */}
              <a
                href={`tel:${HOTEL_DATA.phones[0].replace(/\s+/g, '')}`}
                className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-[#C5A880]/35 text-stone-200 hover:text-white transition-all duration-300 flex items-center gap-2 group shadow-sm"
                title="Llamar directamente a Concierge"
              >
                <div className="w-6 h-6 rounded-full bg-[#C5A880]/20 flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#0E1E2E] transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="block text-[9px] uppercase tracking-wider text-[#C5A880] font-bold leading-none">
                    Concierge 24/7
                  </span>
                  <span className="text-xs font-semibold tracking-wider text-stone-100">
                    {HOTEL_DATA.phones[0]}
                  </span>
                </div>
              </a>

              {/* Currency Toggle Switch (COP | USD) */}
              <div
                className="flex items-center p-0.5 rounded-full bg-[#091420] border border-[#C5A880]/40 shadow-inner"
                title="Seleccionar divisa para tarifas"
              >
                <button
                  type="button"
                  onClick={() => setCurrency('COP')}
                  className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all duration-200 cursor-pointer ${
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
                  className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all duration-200 cursor-pointer ${
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
                className="relative overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] text-[#0E1E2E] font-bold text-xs tracking-[0.2em] uppercase shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group cursor-pointer border border-[#FFF8DC]/60"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <Calendar className="w-4 h-4 text-[#0E1E2E]" />
                <span className="relative z-10 font-bold">Reservar</span>
              </button>
            </div>

            {/* Mobile Header Controls: Clean, Non-crowded */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-extrabold rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] text-[#0E1E2E] shadow-md border border-[#FFF8DC]/70 active:scale-95 transition-transform"
              >
                Reservar
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-stone-200 hover:text-[#C5A880] rounded-lg bg-white/5 border border-white/10 focus:outline-none"
                aria-label="Abrir menú"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer (Completely self-contained, 100dvh, zero overflow) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] w-full h-[100dvh] bg-[#0A141F] flex flex-col p-5 overflow-y-auto overflow-x-hidden box-border lg:hidden animate-in fade-in duration-200">
          {/* Top Bar with Logo & Explicit Close Button */}
          <div className="flex items-center justify-between pb-4 border-b border-[#C5A880]/20 shrink-0">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A880]/20 text-white flex items-center justify-center border border-white/20 active:scale-90 transition-transform"
              aria-label="Cerrar menú"
            >
              <X className="w-5 h-5 text-[#C5A880]" />
            </button>
          </div>

          {/* Currency Selector Row in Mobile Drawer */}
          <div className="flex justify-between items-center my-4 py-3 px-3.5 rounded-xl bg-white/5 border border-stone-800 shrink-0">
            <div className="flex items-center gap-2 text-xs text-stone-300">
              <Globe className="w-4 h-4 text-[#C5A880]" />
              <span className="font-medium">Moneda para tarifas:</span>
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
            className="mb-5 p-3.5 rounded-xl bg-white/5 border border-[#C5A880]/30 flex items-center justify-between text-stone-200 active:bg-white/10 transition-colors shrink-0"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] uppercase tracking-wider text-[#C5A880] block font-bold truncate">
                  Concierge Directo 24 Horas
                </span>
                <span className="text-sm font-semibold truncate block">{HOTEL_DATA.phones[0]}</span>
              </div>
            </div>
            <span className="text-[10px] uppercase font-bold text-[#0E1E2E] bg-[#C5A880] px-3 py-1 rounded-full shadow-sm shrink-0 ml-2">
              Llamar
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1 mb-6 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-200 hover:text-[#C5A880] text-base font-serif flex items-center justify-between py-3 px-3 border-b border-stone-800/80 active:bg-white/5 rounded transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#C5A880]/60 shrink-0" />
              </a>
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
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] text-[#0E1E2E] text-xs tracking-widest uppercase font-extrabold shadow-lg flex items-center justify-center gap-2 border border-[#FFF8DC]/70"
            >
              <Calendar className="w-4 h-4 text-[#0E1E2E]" />
              <span>Reservar Estadía Ahora</span>
            </button>
            <div className="text-center text-[10px] text-stone-400 font-sans">
              Av. San Martín nº. 11-113 · Bocagrande, Cartagena
            </div>
          </div>
        </div>
      )}
    </>
  );
}
