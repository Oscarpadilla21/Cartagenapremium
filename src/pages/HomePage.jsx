import React from 'react';
import Hero from '../components/Hero';
import BookingBar from '../components/BookingBar';
import StatsPillars from '../components/StatsPillars';
import SuitesSection from '../components/SuitesSection';
import RooftopSection from '../components/RooftopSection';
import ExperiencesSection from '../components/ExperiencesSection';
import GallerySection from '../components/GallerySection';
import ReviewsSection from '../components/ReviewsSection';
import LocationSection from '../components/LocationSection';
import { HOTEL_DATA } from '../data/hotelData';

export default function HomePage({ onOpenBooking, currency }) {
  const handleSearchFromBar = (params) => {
    const suite = HOTEL_DATA.suites.find((s) => s.id === params.suiteId) || null;
    onOpenBooking(suite);
  };

  return (
    <div>
      {/* Hero with Dynamic Ken Burns Slides and Countdown Bar */}
      <Hero onOpenBooking={() => onOpenBooking()} />

      {/* Floating Coastal Glassmorphism Booking Bar */}
      <BookingBar onSearch={handleSearchFromBar} />

      {/* Deluxe Architectural Pillars */}
      <StatsPillars />

      {/* Featured Suites Preview */}
      <SuitesSection
        onSelectSuite={(suite) => onOpenBooking(suite)}
        currency={currency}
      />

      {/* The Sanctuary: Rooftop Pool & Sunset Bar */}
      <RooftopSection />

      {/* Curated Cartagena Experiences & Cultural Circuit */}
      <ExperiencesSection />

      {/* Visual Gallery */}
      <GallerySection />

      {/* Verified Guest Reviews */}
      <ReviewsSection />

      {/* Prime Location & Map in Bocagrande */}
      <LocationSection />
    </div>
  );
}
