import React, { useState, useEffect } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GaleriaPage() {
  const [activeTag, setActiveTag] = useState('Todas');
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const itemsPerPage = 6;

  const tags = ['Todas', 'Habitaciones', 'Rooftop', 'Vistas', 'Interiores'];
  const galleryList = HOTEL_DATA.gallery || HOTEL_DATA.galleryImages || [];

  const filteredItems = galleryList.filter((item) => {
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      }
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, filteredItems.length]);

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF8F5]">
      {/* Header Banner */}
      <div className="relative py-16 sm:py-24 bg-[#1f242e] text-white overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/images/hotel/piscina.png"
            alt="Galería Cartagena"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f242e] via-[#1f242e]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c1a186] font-semibold block mb-2 font-lato">
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
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Categorías de la galería">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              role="tab"
              aria-selected={activeTag === tag}
              onClick={() => handleTagChange(tag)}
              className={`min-h-[44px] px-5 py-2.5 text-xs uppercase tracking-wider font-semibold font-lato rounded-full transition-all cursor-pointer ${
                activeTag === tag
                  ? 'bg-[#1f242e] text-[#c1a186] border border-[#b5987a] shadow-md'
                  : 'bg-white text-stone-700 hover:text-[#b5987a] border border-stone-200'
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
              role="button"
              tabIndex={0}
              aria-label={`Ampliar imagen: ${item.title}`}
              onClick={() => setLightboxIndex(startIndex + idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(startIndex + idx);
                }
              }}
              className="relative h-72 sm:h-80 rounded-2xl overflow-hidden group cursor-pointer border border-[#c1a186]/25 shadow-deluxe hover:shadow-deluxe-lg transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#b5987a]"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] uppercase tracking-widest text-[#c1a186] font-lato font-bold">
                  {item.tag}
                </span>
                <h3 className="text-white font-serif text-lg font-medium">{item.title}</h3>
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls with min 44x44px touch targets */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-6 border-t border-stone-200">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="min-h-[44px] px-4 py-2 rounded-lg border border-stone-300 text-xs uppercase tracking-wider font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white flex items-center gap-1.5 transition-colors cursor-pointer"
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
                    className={`min-w-[44px] min-h-[44px] rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${
                      currentPage === pageNum
                        ? 'bg-[#1f242e] text-[#c1a186] border border-[#b5987a]'
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
              className="min-h-[44px] px-4 py-2 rounded-lg border border-stone-300 text-xs uppercase tracking-wider font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ${lightboxIndex + 1} de ${filteredItems.length}: ${filteredItems[lightboxIndex].title}`}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Cerrar vista previa"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center z-40 focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[75vh] max-w-full object-contain shadow-2xl rounded-xs border border-white/10"
            />
            <p className="text-white/90 font-serif tracking-wide mt-4 text-center text-base sm:text-lg">
              {filteredItems[lightboxIndex].title} <span className="text-white/60 font-sans text-xs ml-2">({lightboxIndex + 1} de {filteredItems.length})</span>
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center z-40 focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Foto siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}