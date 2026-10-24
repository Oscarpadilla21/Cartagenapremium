import React, { useState, useEffect, useCallback } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function GallerySection() {
  const images = HOTEL_DATA.galleryImages;
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Group images into pages of 3
  const itemsPerPage = 3;
  const maxPage = Math.ceil(images.length / itemsPerPage);

  const handleNextCarousel = useCallback(() => {
    setCarouselIndex((prev) => (prev + 1) % maxPage);
  }, [maxPage]);

  useEffect(() => {
    if (isPaused || lightboxIndex !== null) return;
    const timer = setInterval(() => {
      handleNextCarousel();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, lightboxIndex, handleNextCarousel]);

  // Handle keyboard events for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % images.length);
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
  }, [lightboxIndex, images.length]);

  const visibleImages = images.slice(
    carouselIndex * itemsPerPage,
    carouselIndex * itemsPerPage + itemsPerPage
  );
  // Wrap around if last page has fewer than 3
  if (visibleImages.length < 3) {
    visibleImages.push(...images.slice(0, 3 - visibleImages.length));
  }

  const handlePrevLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      id="galeria"
      className="relative pt-24 pb-20 bg-[#FCF9F6] overflow-hidden text-center"
      aria-label="Galería visual del hotel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Giant Background Watermark "Gallery" (Exact: 366px, leading 90px, tracking -2px, #FCF5ED) */}
      <div className="absolute top-10 left-0 right-0 select-none pointer-events-none flex justify-center overflow-hidden z-0" aria-hidden="true">
        <span className="text-[130px] sm:text-[220px] lg:text-[366px] font-serif text-[#FCF5ED] font-semibold leading-[90px] tracking-[-2px]">
          Gallery
        </span>
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24">
        
        {/* 3-Column Carousel Slide (Exactly matching Qode Owl Slider) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {visibleImages.map((item, idx) => {
            const actualIndex = images.findIndex((img) => img.src === item.src);
            return (
              <div
                key={`${item.src}-${idx}`}
                role="button"
                tabIndex={0}
                aria-label={`Ver imagen ampliada: ${item.title}`}
                onClick={() => setLightboxIndex(actualIndex)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightboxIndex(actualIndex);
                  }
                }}
                className="relative h-[480px] sm:h-[540px] bg-white p-3 shadow-deluxe hover:shadow-deluxe-lg group cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-1.5 border border-[#eee7df] focus-visible:ring-2 focus-visible:ring-[#b5987a]"
              >
                <div className="w-full h-full overflow-hidden bg-stone-100">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Subtle Hover Veil with Eye icon and gold border */}
                <div className="absolute inset-3 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <span className="w-12 h-12 rounded-full border-2 border-white text-white flex items-center justify-center text-lg font-light mb-2 shadow-lg backdrop-blur-xs">
                    <Eye className="w-5 h-5 text-white" />
                  </span>
                  <span className="text-white font-serif text-lg tracking-wide drop-shadow">
                    {item.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination with min 44x44px touch targets */}
        <div className="flex items-center justify-center space-x-1 mt-8">
          {Array.from({ length: maxPage }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCarouselIndex(i)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b5987a] rounded-full"
              aria-label={`Página ${i + 1} de ${maxPage}`}
              aria-current={i === carouselIndex}
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === carouselIndex
                    ? 'w-7 h-2.5 bg-[#b5987a] shadow-xs'
                    : 'w-2.5 h-2.5 bg-[#d0c5b8] group-hover:bg-[#b5987a]'
                }`}
              />
            </button>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ${lightboxIndex + 1} de ${images.length}: ${images[lightboxIndex].title}`}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Cerrar vista ampliada"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handlePrevLightbox}
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
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].title}
              className="max-h-[75vh] max-w-full object-contain shadow-2xl rounded-xs border border-white/10"
            />
            <p className="text-white/90 font-serif tracking-wide mt-4 text-center text-base sm:text-lg">
              {images[lightboxIndex].title} <span className="text-white/60 font-sans text-xs ml-2">({lightboxIndex + 1} de {images.length})</span>
            </p>
          </div>

          <button
            type="button"
            onClick={handleNextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center z-40 focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Foto siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}