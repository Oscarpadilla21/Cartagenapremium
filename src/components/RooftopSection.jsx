import React from 'react';
import { Link } from 'react-router-dom';
import { HOTEL_DATA } from '../data/hotelData';

export default function RooftopSection() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Media Grid (Recepción, Video YouTube, Vista Piscina) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center justify-center mb-16">
          {/* Column 1: Recepción Photo */}
          <div className="overflow-hidden shadow-sm">
            <img 
              src="/images/hotel/recep-400x500.jpeg" 
              alt="Recepción Hotel Cartagena Premium"
              className="w-full max-w-[400px] h-[500px] object-cover mx-auto"
            />
          </div>

          {/* Column 2: YouTube Short Video */}
          <div className="overflow-hidden shadow-sm bg-black max-w-[400px] h-[500px] mx-auto w-full">
            <iframe
              src={HOTEL_DATA.youtubeShortUrl}
              title="Hotel Cartagena Premium Video"
              className="w-full h-full object-cover"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Column 3: Vista Piscina Photo */}
          <div className="overflow-hidden shadow-sm">
            <img 
              src="/images/hotel/vista-piscina-400x500.jpeg" 
              alt="Vista Piscina Hotel Cartagena Premium"
              className="w-full max-w-[400px] h-[500px] object-cover mx-auto"
            />
          </div>
        </div>

        {/* Text Column (Exact from Section 9 of cartagenapremium.com) */}
        <div className="max-w-3xl mx-auto space-y-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#333333] font-normal leading-tight">
            Nuestras habitaciones cuentan con vista al Mar y a la Bahia de Cartagena
          </h2>

          {/* Graphic Ornament */}
          <div className="flex justify-center py-1">
            <img 
              src={HOTEL_DATA.logos.graphicAccent} 
              alt="ornament" 
              className="w-18 h-3.5 object-contain"
            />
          </div>

          <p className="text-base sm:text-lg text-[#777777] font-sans font-light leading-relaxed">
            Bocagrande es una zona lujosa, famosa por sus alargadas playas de arena, que están resguardadas por paseos marítimos con palmeras.
          </p>

          <div className="pt-4">
            <Link
              to="/habitaciones"
              className="qbutton"
            >
              Ver más
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
