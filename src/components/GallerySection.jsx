import React, { useState, useEffect } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GallerySection() {
  const images = HOTEL_DATA.galleryImages;
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Group images into pages of 3
  const itemsPerPage = 3;
  const maxPage = Math.ceil(images.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % maxPage);
    }, 6000);
    return () => clearInterval(timer);
  }, [maxPage]);

  const visibleImages = images.slice(
    carouselIndex * itemsPerPage,
    carouselIndex * itemsPerPage + itemsPerPage
  );
  // Wrap around if last page has fewer than 3
  if (visibleImages.length < 3) {
    visibleImages.push(...images.slice(0, 3 - visibleImages.length));
  }

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="galeria" className="relative pt-24 pb-20 bg-[#FCF9F6] overflow-hidden text-center">
      {/* Giant Background Watermark "Gallery" (Exact: 366px, leading 90px, tracking -2px, #FCF5ED) */}
      <div className="absolute top-10 left-0 right-0 select-none pointer-events-none flex justify-center overflow-hidden z-0">
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
                onClick={() => setLightboxIndex(actualIndex)}
                className="relative h-[480px] sm:h-[540px] bg-white p-3 shadow-md group cursor-pointer overflow-hidden transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Subtle Hover Veil */}
                <div className="absolute inset-3 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center text-lg font-light">
                    +
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center space-x-2.5 mt-10">
          {Array.from({ length: maxPage }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCarouselIndex(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === carouselIndex
                  ? 'w-6 h-2 bg-[#b5987a]'
                  : 'w-2 h-2 bg-[#d0c5b8] hover:bg-[#b5987a]'
              }`}
              aria-label={`Página ${i + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].title}
              className="max-h-[75vh] max-w-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white/80 font-sans font-light mt-4 text-center text-sm">
              {images[lightboxIndex].title} ({lightboxIndex + 1} de {images.length})
            </p>
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Foto siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
