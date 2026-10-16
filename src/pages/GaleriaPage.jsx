import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GaleriaPage() {
  const [activeTag, setActiveTag] = useState('Todas');
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const itemsPerPage = 6;

  const tags = ['Todas', 'Destino', 'Habitaciones', 'Rooftop', 'Vistas', 'Interiores'];

  const filteredItems = HOTEL_DATA.gallery.filter((item) => {
    if (activeTag === 'Todas') return true;
    return item.tag === activeTag;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const handleTagChange = (tag) => {
    setActiveTag(tag);
    setCurrentPage(1);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF8F5]">
      {/* Header Banner */}
      <div className="relative py-16 sm:py-24 bg-[#0E1E2E] text-white overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=2000&q=85"
            alt="Galería Cartagena"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E2E] via-[#0E1E2E]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-2">
            Catálogo Visual
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white">
            Galería Fotográfica de Cartagena
          </h1>
          <p className="text-stone-300 font-sans text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Explora la luz, los contrastes coloniales y el confort contemporáneo que aguardan tu llegada a Hotel Cartagena Premium.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagChange(tag)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-all cursor-pointer ${
                activeTag === tag
                  ? 'bg-[#0E1E2E] text-[#C5A880] border border-[#A88653] shadow-md'
                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Paginated Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(startIndex + idx)}
              className="relative h-72 sm:h-80 rounded-2xl overflow-hidden group cursor-pointer border border-[#C5A880]/20 shadow-deluxe hover:shadow-deluxe-lg transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-sans font-bold">
                  {item.tag}
                </span>
                <h4 className="text-white font-serif text-lg font-medium">{item.title}</h4>
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-stone-200">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-4 py-2 rounded-lg border border-stone-300 text-xs uppercase tracking-wider font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-100 flex items-center gap-1.5 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <div className="flex items-center gap-1.5">
              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${
                      currentPage === pageNum
                        ? 'bg-[#0E1E2E] text-[#C5A880] border border-[#A88653]'
                        : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="px-4 py-2 rounded-lg border border-stone-300 text-xs uppercase tracking-wider font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-100 flex items-center gap-1.5 transition-colors"
            >
              <span>Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-stone-300 hover:text-white p-2"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            type="button"
            onClick={() =>
              setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
            }
            className="absolute left-4 sm:left-8 text-stone-300 hover:text-white p-3 rounded-full bg-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] block font-bold">
                {filteredItems[lightboxIndex].tag}
              </span>
              <h3 className="text-white font-serif text-xl mt-1">
                {filteredItems[lightboxIndex].title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setLightboxIndex((prev) => (prev + 1) % filteredItems.length)}
            className="absolute right-4 sm:right-8 text-stone-300 hover:text-white p-3 rounded-full bg-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
