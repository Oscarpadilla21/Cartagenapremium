import React from 'react';
import Hero from '../components/Hero';
import BookingBar from '../components/BookingBar';
import MediaTrioSection from '../components/MediaTrioSection';
import StatsPillars from '../components/StatsPillars';
import SuitesSection from '../components/SuitesSection';
import BocagrandeSection from '../components/BocagrandeSection';
import VideoSection from '../components/VideoSection';
import GallerySection from '../components/GallerySection';
import ReviewsSection from '../components/ReviewsSection';
import CtaSection from '../components/CtaSection';
import LocationSection from '../components/LocationSection';
import MuseumsSection from '../components/MuseumsSection';
import { HOTEL_DATA } from '../data/hotelData';

export default function HomePage({ onOpenBooking, currency }) {
  const handleSearchFromBar = (params) => {
    const suite = HOTEL_DATA.rooms?.find((s) => s.id === params.suiteId) || null;
    if (onOpenBooking) {
      onOpenBooking(suite);
    }
  };

  return (
    <div className="bg-white">
      {/* 1. Hero with Slider Revolution 3 Authentic Slides */}
      <Hero />

      {/* 2. Floating Coastal Booking Bar */}
      <BookingBar onSearch={handleSearchFromBar} />

      {/* 3. Media Trio: Recepción, Video Vertical YouTube, Vista Piscina */}
      <MediaTrioSection />

      {/* 4. Parallax Counters 24 Horas / 7 Días / 365 Días */}
      <StatsPillars />

      {/* 5. Featured Suites & Rooms Preview with Pricing & Amenities */}
      <SuitesSection
        onSelectSuite={(suite) => onOpenBooking ? onOpenBooking(suite) : null}
        currency={currency}
      />

      {/* 6. Bocagrande Skyline & Panoramic Experience with authentic background texture */}
      <BocagrandeSection />

      {/* 7. Authentic Promotional Video Section with video-backgroud.png and video-2.mp4 */}
      <VideoSection />

      {/* 8. Giant 366px "Gallery" Watermark & Interactive Lightbox Carousel */}
      <GallerySection />

      {/* 9. Verified Guest Reviews & Travellers' Choice */}
      <ReviewsSection />

      {/* 10. Experience Call-to-Action: "VIVE UNA EXPERIENCIA DE ENSUEÑO" */}
      <CtaSection />

      {/* 11. Location Map & Direct Contact Details with authentic pattern */}
      <LocationSection />

      {/* 12. Cultural Circuit & Museums of Cartagena with official logos */}
      <MuseumsSection />
    </div>
  );
}
