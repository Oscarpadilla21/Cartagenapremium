import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GallerySection() {
  const [activeTag, setActiveTag] = useState('Todas');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const tags = ['Todas', 'Rooftop', 'Habitaciones', 'Interiores', 'Vistas'];

  const filteredItems = HOTEL_DATA.gallery.filter((item) => {
    if (activeTag === 'Todas') return true;
    return item.tag === activeTag;
  });

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A88653] font-semibold">
            Galería Fotográfica
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#0E1E2E] mt-2">
            La Atmósfera de Hotel Cartagena Premium
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider font-medium rounded-full transition-all ${
                activeTag === tag
                  ? 'bg-[#0E1E2E] text-[#C5A880] border border-[#A88653] shadow-sm'
                  : 'bg-[#FAF8F5] text-stone-600 hover:text-stone-900 border border-stone-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="relative h-64 sm:h-72 rounded-lg overflow-hidden group cursor-pointer border border-[#C5A880]/20 shadow-sm hover:shadow-deluxe transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-sans font-semibold">
                  {item.tag}
                </span>
                <h4 className="text-white font-serif text-sm font-medium">{item.title}</h4>
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-stone-300 hover:text-white p-2"
          >
            <X className="w-7 h-7" />
          </button>

          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
            }
            className="absolute left-4 sm:left-8 text-stone-300 hover:text-white p-2 rounded-full bg-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] block">
                {filteredItems[lightboxIndex].tag}
              </span>
              <h3 className="text-white font-serif text-lg">
                {filteredItems[lightboxIndex].title}
              </h3>
            </div>
          </div>

          <button
            onClick={() => setLightboxIndex((prev) => (prev + 1) % filteredItems.length)}
            className="absolute right-4 sm:right-8 text-stone-300 hover:text-white p-2 rounded-full bg-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
