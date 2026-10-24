import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';

export default function MuseumsSection() {
  return (
    <section className="pt-16 pb-14 bg-[#FCF9F6] text-left">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and small gold separator */}
        <div className="mb-10">
          <h4 className="font-lato text-[21px] leading-[32px] font-light text-[#303030]">
            Visita los imprescindibles museos de Cartagena:
          </h4>
          <div className="w-12 h-0.5 bg-[#b5987a] mt-2.5" />
        </div>

        {/* 6 Museum partner logos with fade/hover */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {HOTEL_DATA.museums.map((m, idx) => (
            <div key={idx} className="flex items-center justify-center p-2 group">
              <a
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                title={m.name}
                className="block transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-400 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
