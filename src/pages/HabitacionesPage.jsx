import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Users, Maximize2, Bed, Check, ArrowRight, Star, ShieldCheck, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function HabitacionesPage({ onOpenBooking, currency }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // paginated view

  const filters = [
    { id: 'all', label: 'Todas las Suites' },
    { id: 'sea', label: 'Frente al Mar' },
    { id: 'balcony', label: 'Con Balcón Privado' },
    { id: 'family', label: 'Suites Familiares' }
  ];

  const filteredSuites = HOTEL_DATA.suites.filter((s) => {
    if (activeFilter === 'all') return true;
    return s.category === activeFilter;
  });

  const totalPages = Math.ceil(filteredSuites.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentSuites = filteredSuites.slice(startIndex, startIndex + itemsPerPage);

  const formatPrice = (suite) => {
    if (currency === 'USD') {
      return `$${suite.priceUSD} USD`;
    }
    return `$${suite.priceCOP.toLocaleString('es-CO')} COP`;
  };

  const handleFilterChange = (id) => {
    setActiveFilter(id);
    setCurrentPage(1);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF8F5]">
      {/* Page Header Banner */}
      <div className="relative py-16 sm:py-24 bg-[#0E1E2E] text-white overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/images/hotel/pic-hab.jpeg"
            alt="Habitaciones Hotel Cartagena Premium"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E2E] via-[#0E1E2E]/80 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-2">
            Alojamiento Exclusivo en Bocagrande
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white">
            Suites & Habitaciones Deluxe
          </h1>
          <p className="text-stone-300 font-sans text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Cada habitación ha sido concebida para ofrecer descanso silencioso, vistas duales a la bahía y al mar Caribe, y un servicio boutique 5 estrellas.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters and Total Count Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-6 mb-8 border-b border-[#C5A880]/20 gap-4">
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => handleFilterChange(f.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#0E1E2E] text-[#C5A880] border border-[#A88653] shadow-md'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-stone-500 font-sans">
            Mostrando <strong className="text-stone-800">{currentSuites.length}</strong> de{' '}
            <strong className="text-stone-800">{filteredSuites.length}</strong> suites disponibles
          </div>
        </div>

        {/* Suites Detailed List / Grid */}
        <div className="space-y-12 mb-12">
          {currentSuites.map((suite) => (
            <div
              key={suite.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#C5A880]/30 shadow-deluxe flex flex-col lg:flex-row group"
            >
              {/* Photo Showcase Carousel */}
              <div className="lg:w-1/2 relative min-h-[300px] sm:min-h-[400px]">
                <img
                  src={suite.image}
                  alt={suite.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-[#0E1E2E]/90 backdrop-blur-md text-[#C5A880] text-[10px] font-sans font-bold uppercase tracking-[0.2em] border border-[#C5A880]/40">
                    {suite.tier}
                  </span>
                </div>

                {/* Thumbnail Preview Strip */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  {suite.gallery.slice(0, 4).map((thumb, idx) => (
                    <img
                      key={idx}
                      src={thumb}
                      alt="Miniatura"
                      className="w-14 h-12 rounded object-cover border border-white/60 shadow"
                    />
                  ))}
                </div>
              </div>

              {/* Suite Details & Actions */}
              <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs uppercase tracking-widest text-[#A88653] font-bold">
                      {suite.view}
                    </span>
                    <div className="flex items-center gap-1 text-[#C5A880]">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-xs font-bold text-stone-800">4.9</span>
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif text-[#0E1E2E]">{suite.title}</h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                    {suite.description}
                  </p>

                  {/* Room Key Dimensions */}
                  <div className="grid grid-cols-3 gap-3 my-5 p-3 rounded-xl bg-[#FAF8F5] border border-stone-200 text-center">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-bold">
                        Superficie
                      </span>
                      <span className="text-xs font-semibold text-stone-800">{suite.size}</span>
                    </div>
                    <div className="border-x border-stone-200">
                      <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-bold">
                        Ocupación
                      </span>
                      <span className="text-xs font-semibold text-stone-800">{suite.capacity}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-bold">
                        Lencería
                      </span>
                      <span className="text-xs font-semibold text-stone-800 truncate block">
                        Algodón Egipcio
                      </span>
                    </div>
                  </div>

                  {/* Amenities Matrix */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#745729] block">
                      Amenidades Destacadas de la Suite:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {suite.amenities.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                          <Check className="w-3.5 h-3.5 text-[#A88653] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing & Reservation CTA */}
                <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block">
                      Tarifa directa garantizada
                    </span>
                    <div className="text-2xl font-serif font-bold text-[#A88653]">
                      {formatPrice(suite)}
                      <span className="text-xs text-stone-500 font-sans font-normal ml-1">/ noche</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(suite)}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] text-[#0E1E2E] text-xs uppercase tracking-[0.2em] font-extrabold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                  >
                    <span>Reservar Suite</span>
                    <ArrowRight className="w-4 h-4 text-[#0E1E2E]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Pagination Controls */}
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
    </div>
  );
}

