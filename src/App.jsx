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
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import { HOTEL_DATA } from './data/hotelData';

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
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1816] flex flex-col selection:bg-[#C5A880]/30 selection:text-[#0E1E2E] overflow-x-hidden">
      {/* Fixed Luxury Navigation Bar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        currency={currency}
        setCurrency={setCurrency}
      />

      <main className="flex-1 w-full overflow-hidden">
        {/* Hero with Dynamic Ken Burns Slides and Countdown Bar */}
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

      {/* Official Floating VIP WhatsApp Concierge Widget */}
      <WhatsAppButton />
    </div>
  );
}
