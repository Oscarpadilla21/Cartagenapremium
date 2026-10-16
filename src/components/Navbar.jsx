import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ChevronRight, Globe, Sparkles } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

export default function Navbar({ onOpenBooking, currency, setCurrency }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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
            ? 'bg-[#0E1E2E]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#C5A880]/20'
            : 'bg-gradient-to-b from-[#0E1E2E]/90 via-[#0E1E2E]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3 group">
              <img
                src={HOTEL_DATA.logos.gold}
                alt="Hotel Cartagena Premium"
                className="h-11 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden sm:block border-l border-[#C5A880]/30 pl-3">
                <span className="block text-xs uppercase tracking-[0.25em] text-[#C5A880] font-sans font-semibold">
                  Deluxe Boutique
                </span>
                <span className="block text-[11px] text-stone-300 font-sans tracking-wider">
                  Bocagrande · Cartagena
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-stone-200 hover:text-[#C5A880] text-[13px] uppercase tracking-[0.16em] font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Bar */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Currency Toggle */}
              <button
                onClick={() => setCurrency(currency === 'COP' ? 'USD' : 'COP')}
                className="px-2.5 py-1 text-xs tracking-widest uppercase rounded border border-[#C5A880]/40 text-[#C5A880] hover:bg-[#C5A880]/10 transition-colors flex items-center gap-1.5"
                title="Cambiar divisa"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{currency}</span>
              </button>

              {/* Direct Phone Concierge */}
              <a
                href={`tel:${HOTEL_DATA.phones[0].replace(/\s+/g, '')}`}
                className="text-stone-300 hover:text-white text-xs tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="hidden xl:inline">{HOTEL_DATA.phones[0]}</span>
              </a>

              {/* Gold Booking CTA */}
              <button
                onClick={() => onOpenBooking()}
                className="relative group overflow-hidden px-5 py-2.5 rounded bg-gradient-to-r from-[#A88653] via-[#C5A880] to-[#A88653] text-[#0E1E2E] font-semibold text-xs tracking-[0.18em] uppercase shadow-lg shadow-[#A88653]/20 hover:shadow-[#C5A880]/40 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#0E1E2E]" />
                <span>Reservar</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 text-xs uppercase tracking-wider font-semibold rounded bg-[#C5A880] text-[#0E1E2E]"
              >
                Reservar
              </button>
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
        <div className="fixed inset-0 z-40 bg-[#0E1E2E]/98 flex flex-col pt-24 px-6 pb-8 md:hidden animate-in fade-in duration-200">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#C5A880]/20">
            <span className="text-xs uppercase tracking-widest text-[#C5A880]">Menú de Navegación</span>
            <button
              onClick={() => setCurrency(currency === 'COP' ? 'USD' : 'COP')}
              className="text-xs tracking-wider uppercase text-stone-300 border border-stone-600 px-2 py-1 rounded"
            >
              Moneda: {currency}
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-200 hover:text-[#C5A880] text-lg font-serif flex items-center justify-between py-2 border-b border-stone-800"
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
              className="w-full py-3 rounded bg-emerald-700/80 hover:bg-emerald-700 text-white text-center text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2"
            >
              <span>WhatsApp Concierge Directo</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded bg-gradient-to-r from-[#A88653] to-[#C5A880] text-[#0E1E2E] text-xs tracking-widest uppercase font-bold"
            >
              Consultar Disponibilidad
            </button>
          </div>
        </div>
      )}
    </>
  );
}
