import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A1520] text-stone-300 pt-16 pb-12 border-t border-[#C5A880]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4 text-center md:text-left">
            <img
              src={HOTEL_DATA.logos.footer}
              alt="Hotel Cartagena Premium"
              className="h-16 w-auto mx-auto md:mx-0 object-contain filter brightness-110"
            />
            <img
              src={HOTEL_DATA.logos.graphicAccent}
              alt="Adorno"
              className="h-3 w-auto mx-auto md:mx-0 object-contain opacity-70"
            />
            <p className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed max-w-sm">
              En pleno Caribe, <strong>Hotel Cartagena Premium</strong> con confortables suites y solárium en rooftop, está ubicado en lo más exclusivo de Bocagrande.
            </p>
            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-start space-x-3 pt-2">
              <a
                href={HOTEL_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-stone-700 hover:border-[#C5A880] hover:text-[#C5A880] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={HOTEL_DATA.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-stone-700 hover:border-[#C5A880] hover:text-[#C5A880] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href={HOTEL_DATA.socials.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 h-9 rounded-full bg-white/5 border border-stone-700 hover:border-[#C5A880] hover:text-[#C5A880] flex items-center justify-center text-xs tracking-wider font-semibold transition-colors"
                aria-label="TripAdvisor"
              >
                TripAdvisor
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
              Explorar el Hotel
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <a href="#suites" className="hover:text-[#C5A880] transition-colors">
                  Suites & Habitaciones Deluxe
                </a>
              </li>
              <li>
                <a href="#rooftop" className="hover:text-[#C5A880] transition-colors">
                  Rooftop Pool & Sky Lounge
                </a>
              </li>
              <li>
                <a href="#experiencias" className="hover:text-[#C5A880] transition-colors">
                  Experiencias en Cartagena
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#C5A880] transition-colors">
                  Galería Fotográfica
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-[#C5A880] transition-colors">
                  Ubicación en Bocagrande
                </a>
              </li>
              <li>
                <a href="#opiniones" className="hover:text-[#C5A880] transition-colors">
                  Reseñas de Huéspedes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Concierge */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
              Contacto & Reservas VIP
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{HOTEL_DATA.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Líneas directas: {HOTEL_DATA.phones.join(' · ')}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>{HOTEL_DATA.emails.join(' · ')}</span>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-3">
              <a
                href={`https://wa.me/${HOTEL_DATA.whatsapp}?text=Hola,%20deseo%20hacer%20una%20consulta%20para%20Hotel%20Cartagena%20Premium`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <span>Atención VIP por WhatsApp 24/7</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 font-sans space-y-2 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} Hotel Cartagena Premium. Todos los derechos reservados.
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://cartagenapremium.com/en/aviso-legal/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-300">
              Aviso Legal
            </a>
            <span>·</span>
            <a href="https://cartagenapremium.com/politica-de-cookies" target="_blank" rel="noopener noreferrer" className="hover:text-stone-300">
              Política de Privacidad
            </a>
            <span>·</span>
            <span className="text-[#A88653]">Rediseño Deluxe Prototipo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
