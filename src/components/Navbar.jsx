import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { HOTEL_DATA } from '../data/hotelData';
import { Bed, MapPin, Plug, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'INICIO', path: '/', icon: null },
    { name: 'HABITACIONES', path: '/habitaciones', icon: Bed },
    { name: 'UBICACIÓN', path: '/ubicacion', icon: MapPin },
    { name: 'CONTACTO', path: '/contacto', icon: Plug },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-[#FCF9F6]/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)] py-2.5 border-b border-[#e8e2dc]'
          : 'bg-[#FCF9F6] py-3.5 border-b border-[#f0eae3]'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          
          {/* Left: Original Large Gold Logo */}
          <div className="shrink-0">
            <Link to="/" className="block group">
              <img
                src={HOTEL_DATA.logos.gold}
                alt={HOTEL_DATA.name}
                className={`w-auto object-contain transition-all duration-300 ease-out group-hover:scale-105 ${
                  isScrolled ? 'h-16 sm:h-18' : 'h-20 sm:h-[90px]'
                }`}
              />
            </Link>
          </div>

          {/* Center: Main Navigation Menu with Original Icons */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((link) => {
              const IconComp = link.icon;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[12px] tracking-[2.1px] font-lato font-bold uppercase transition-colors duration-200 flex items-center gap-2 py-1 ${
                      isActive
                        ? 'text-[#c1a186]'
                        : 'text-[#303030] hover:text-[#c1a186]'
                    }`
                  }
                >
                  {IconComp && (
                    <IconComp className="w-3.5 h-3.5 text-[#303030] group-hover:text-[#c1a186]" />
                  )}
                  <span>{link.name}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Right: Circular Social Media Icons */}
          <div className="hidden md:flex items-center space-x-2.5">
            {/* Facebook */}
            <a
              href={HOTEL_DATA.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-[#d0d0d0] text-[#2b2927] hover:border-[#c1a186] hover:text-[#c1a186] flex items-center justify-center transition-colors bg-white/60 shadow-2xs"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={HOTEL_DATA.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-[#d0d0d0] text-[#2b2927] hover:border-[#c1a186] hover:text-[#c1a186] flex items-center justify-center transition-colors bg-white/60 shadow-2xs"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* TripAdvisor */}
            <a
              href={HOTEL_DATA.socials.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TripAdvisor"
              className="w-9 h-9 rounded-full border border-[#d0d0d0] text-[#2b2927] hover:border-[#c1a186] hover:text-[#c1a186] flex items-center justify-center transition-colors text-xs font-serif font-bold bg-white/60 shadow-2xs"
            >
              TA
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#303030] hover:text-[#c1a186] transition-colors cursor-pointer"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FCF9F6] border-b border-[#e8e2dc] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => {
            const IconComp = link.icon;
            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 py-2 text-sm font-semibold tracking-wider ${
                    isActive ? 'text-[#c1a186]' : 'text-[#303030]'
                  }`
                }
              >
                {IconComp && <IconComp className="w-4 h-4 text-[#c1a186]" />}
                <span>{link.name}</span>
              </NavLink>
            );
          })}
        </div>
      )}
    </header>
  );
}
