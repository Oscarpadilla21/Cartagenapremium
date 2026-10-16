import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ChevronRight, Globe, Sparkles } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

export default function Navbar({ onOpenBooking, currency, setCurrency }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Suites & Habitaciones', href: '#suites' },
    { name: 'Rooftop & Piscina', href: '#rooftop' },
    { name: 'Experiencias', href: '#experiencias' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Ubicación', href: '#ubicacion' },
    { name: 'Opiniones', href: '#opiniones' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0E1E2E]/95 backdrop-blur-md shadow-2xl py-2.5 border-b border-[#C5A880]/30'
            : 'bg-gradient-to-b from-[#0E1E2E]/95 via-[#0E1E2E]/70 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3 group shrink-0">
              <img
                src={HOTEL_DATA.logos.gold}
                alt="Hotel Cartagena Premium"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden sm:block border-l border-[#C5A880]/30 pl-3">
                <span className="block text-[11px] uppercase tracking-[0.28em] text-[#C5A880] font-sans font-bold">
                  Deluxe Boutique
                </span>
                <span className="block text-[10px] text-stone-300 font-sans tracking-wider">
                  Bocagrande · Cartagena
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
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

            {/* Right Action Bar: Phone + Currency Toggle + Gold Reservar Button */}
            <div className="hidden lg:flex items-center space-x-3 shrink-0">
              {/* Phone Concierge Pill */}
              <a
                href={`tel:${HOTEL_DATA.phones[0].replace(/\s+/g, '')}`}
                className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-[#C5A880]/35 text-stone-200 hover:text-white transition-all duration-300 flex items-center gap-2 group shadow-sm"
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
                  className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all duration-200 ${
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
                  className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all duration-200 ${
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
                {/* Subtle light shimmer sweep */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <Calendar className="w-4 h-4 text-[#0E1E2E]" />
                <span className="relative z-10 font-bold">Reservar</span>
              </button>
            </div>

            {/* Mobile Header Controls */}
            <div className="flex lg:hidden items-center space-x-2">
              {/* Mobile Currency Toggle */}
              <div className="flex items-center p-0.5 rounded-full bg-black/50 border border-[#C5A880]/40">
                <button
                  onClick={() => setCurrency(currency === 'COP' ? 'USD' : 'COP')}
                  className="px-2 py-0.5 text-[10px] font-bold text-[#C5A880]"
                >
                  {currency}
                </button>
              </div>

              {/* Mobile Phone Quick Action */}
              <a
                href={`tel:${HOTEL_DATA.phones[0].replace(/\s+/g, '')}`}
                className="p-2 rounded-full bg-white/10 text-[#C5A880] border border-[#C5A880]/30"
                aria-label="Llamar al hotel"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Gold Reserve Button */}
              <button
                onClick={() => onOpenBooking()}
                className="px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-bold rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] text-[#0E1E2E] shadow-md border border-[#FFF8DC]/60"
              >
                Reservar
              </button>

              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-stone-200 hover:text-[#C5A880] focus:outline-none"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0E1E2E]/98 flex flex-col pt-24 px-6 pb-8 lg:hidden animate-in fade-in duration-200">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#C5A880]/20">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold">
              Hotel Cartagena Premium
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-400">Divisa:</span>
              <div className="flex items-center p-0.5 rounded-full bg-black/60 border border-[#C5A880]/40">
                <button
                  onClick={() => setCurrency('COP')}
                  className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                    currency === 'COP' ? 'bg-[#C5A880] text-[#0E1E2E]' : 'text-stone-300'
                  }`}
                >
                  COP
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                    currency === 'USD' ? 'bg-[#C5A880] text-[#0E1E2E]' : 'text-stone-300'
                  }`}
                >
                  USD
                </button>
              </div>
            </div>
          </div>

          {/* Concierge direct phone call in mobile drawer */}
          <a
            href={`tel:${HOTEL_DATA.phones[0].replace(/\s+/g, '')}`}
            className="mb-4 p-3 rounded-xl bg-white/5 border border-[#C5A880]/30 flex items-center justify-between text-stone-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#C5A880] block font-bold">
                  Concierge Directo 24/7
                </span>
                <span className="text-sm font-semibold">{HOTEL_DATA.phones[0]}</span>
              </div>
            </div>
            <span className="text-[10px] uppercase font-bold text-[#C5A880] bg-[#C5A880]/10 px-2 py-1 rounded">
              Llamar
            </span>
          </a>

          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-200 hover:text-[#C5A880] text-base font-serif flex items-center justify-between py-2 border-b border-stone-800"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#C5A880]" />
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-3 pt-6 border-t border-[#C5A880]/20">
            <a
              href={`https://wa.me/${HOTEL_DATA.whatsapp}?text=Hola,%20deseo%20información%20sobre%20reservas%20en%20Hotel%20Cartagena%20Premium`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-center text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              <span>WhatsApp Concierge Directo</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] text-[#0E1E2E] text-xs tracking-widest uppercase font-extrabold shadow-lg"
            >
              Reservar Estadía Ahora
            </button>
          </div>
        </div>
      )}
    </>
  );
}
