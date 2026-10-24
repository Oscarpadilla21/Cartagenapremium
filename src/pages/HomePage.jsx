import React from 'react';
import Hero from '../components/Hero';
import MediaTrioSection from '../components/MediaTrioSection';
import StatsPillars from '../components/StatsPillars';
import BocagrandeSection from '../components/BocagrandeSection';
import VideoSection from '../components/VideoSection';
import GallerySection from '../components/GallerySection';
import CtaSection from '../components/CtaSection';
import LocationSection from '../components/LocationSection';
import MuseumsSection from '../components/MuseumsSection';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* 1. Hero with Slider Revolution 3 Slides */}
      <Hero />

      {/* 2. Media Trio: Recepción, Video YouTube, Vista Piscina */}
      <MediaTrioSection />

      {/* 3. Parallax Counters 24 / 7 / 365 */}
      <StatsPillars />

      {/* 4 & 5. Bocagrande Skyline & Panoramic Experience */}
      <BocagrandeSection />

      {/* 6. Video Banner with Lightbox Play */}
      <VideoSection />

      {/* 7 & 8. Hotel Photo Gallery with Lightbox */}
      <GallerySection />

      {/* 9. Experience Call-to-Action */}
      <CtaSection />

      {/* 10. Location Map & Direct Contact Details */}
      <LocationSection />

      {/* 11. Cultural Circuit & Museums of Cartagena */}
      <MuseumsSection />
    </div>
  );
}
