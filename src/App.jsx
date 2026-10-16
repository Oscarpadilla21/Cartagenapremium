import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingBar from './components/BookingBar';
import StatsPillars from './components/StatsPillars';
import SuitesSection from './components/SuitesSection';
import RooftopSection from './components/RooftopSection';
import ExperiencesSection from './components/ExperiencesSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';
import { HOTEL_DATA } from './data/hotelData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedSuite, setSelectedSuite] = useState(null);
  const [currency, setCurrency] = useState('COP');

  const handleOpenBooking = (suite = null) => {
    setSelectedSuite(suite);
    setIsBookingOpen(true);
  };

  const handleSearchFromBar = (params) => {
    const suite = HOTEL_DATA.suites.find((s) => s.id === params.suiteId) || null;
    setSelectedSuite(suite);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1816] flex flex-col selection:bg-[#C5A880]/30 selection:text-[#0E1E2E]">
      {/* Fixed Luxury Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        currency={currency}
        setCurrency={setCurrency}
      />

      <main className="flex-1">
        {/* Hero with Panorama Slides */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Floating Coastal Glassmorphism Booking Bar */}
        <BookingBar onSearch={handleSearchFromBar} />

        {/* Deluxe Architectural Pillars */}
        <StatsPillars />

        {/* High-End Suites Showcase */}
        <SuitesSection
          onSelectSuite={(suite) => handleOpenBooking(suite)}
          currency={currency}
        />

        {/* The Sanctuary: Rooftop Pool & Sunset Bar */}
        <RooftopSection />

        {/* Curated Cartagena Experiences & Cultural Circuit */}
        <ExperiencesSection />

        {/* Curated Visual Gallery */}
        <GallerySection />

        {/* Verified Guest Reviews */}
        <ReviewsSection />

        {/* Prime Location & Map in Bocagrande */}
        <LocationSection />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Interactive Reservation Drawer / Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialSuite={selectedSuite}
        currency={currency}
      />

      {/* Floating Direct VIP WhatsApp Concierge Button */}
      <a
        href={`https://wa.me/${HOTEL_DATA.whatsapp}?text=Hola,%20deseo%20consultar%20sobre%20una%20reserva%20en%20Hotel%20Cartagena%20Premium`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl border-2 border-white/80 transition-all duration-300 transform hover:scale-110 flex items-center gap-2 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-xs font-semibold tracking-wider uppercase pr-1">
          WhatsApp Concierge
        </span>
      </a>
    </div>
  );
}
