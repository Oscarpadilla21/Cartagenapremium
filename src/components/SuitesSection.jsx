import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Users, Maximize2, Bed, Check, ArrowRight, Eye, ShieldCheck } from 'lucide-react';

export default function SuitesSection({ onSelectSuite, currency }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [previewSuite, setPreviewSuite] = useState(null);

  const filters = [
    { id: 'all', label: 'Todas las Suites' },
    { id: 'sea', label: 'Vista al Mar' },
    { id: 'balcony', label: 'Con Balcón Privado' },
    { id: 'family', label: 'Suites Familiares' }
  ];

  const filteredSuites = HOTEL_DATA.suites.filter((s) => {
    if (activeFilter === 'sea') return s.view.toLowerCase().includes('mar');
    if (activeFilter === 'balcony') return s.amenities.some(a => a.toLowerCase().includes('balcón'));
    if (activeFilter === 'family') return parseInt(s.capacity) >= 3 || s.id.includes('family');
    return true;
  });

  const formatPrice = (suite) => {
    if (currency === 'USD') {
      return `$${suite.priceUSD} USD`;
    }
    return `$${suite.priceCOP.toLocaleString('es-CO')} COP`;
  };

  return (
    <section id="suites" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A88653] font-semibold">
              Alojamientos Exclusivos
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#0E1E2E] mt-2">
              Suites de Lujo con Vista Panorámica
            </h2>
            <p className="text-stone-600 font-sans text-sm sm:text-base mt-3 leading-relaxed">
              Diseñadas para fundir el confort contemporáneo con las vistas más hermosas de la bahía y el mar Caribe de Bocagrande.
            </p>
          </div>

          {/* Filter Pills with horizontal scroll on mobile */}
          <div className="flex overflow-x-auto pb-2 md:pb-0 md:flex-wrap gap-2 mt-4 md:mt-0 max-w-full">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded transition-all ${
                  activeFilter === f.id
                    ? 'bg-[#0E1E2E] text-[#C5A880] border border-[#A88653] shadow-md'
                    : 'bg-[#FAF8F5] text-stone-600 hover:text-stone-900 border border-stone-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Suites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredSuites.map((suite) => (
            <div
              key={suite.id}
              className="group bg-[#FAF8F5] rounded-xl overflow-hidden border border-[#C5A880]/20 shadow-deluxe hover:shadow-deluxe-lg transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Luxury Badges */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={suite.image}
                  alt={suite.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Tier Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-[#0E1E2E]/90 backdrop-blur-md text-[#C5A880] text-[10px] font-sans font-bold uppercase tracking-[0.2em] border border-[#C5A880]/40">
                    {suite.tier}
                  </span>
                </div>

                {/* Quick View Button */}
                <button
                  onClick={() => setPreviewSuite(suite)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-[#0E1E2E] text-white backdrop-blur-md transition-colors"
                  title="Ver fotos de la suite"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* View Tag & Price in Image Footer */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[11px] font-sans tracking-wider uppercase text-[#C5A880] block">
                      {suite.view}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-medium">{suite.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-stone-300 block">
                      Desde
                    </span>
                    <span className="text-xl sm:text-2xl font-serif font-bold text-[#FAF8F5]">
                      {formatPrice(suite)}
                    </span>
                    <span className="text-[10px] text-stone-300 block">/ noche</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                {/* Specs Bar */}
                <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded bg-white border border-stone-200 text-center">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block">
                      Espacio
                    </span>
                    <span className="text-xs font-semibold text-stone-800">{suite.size}</span>
                  </div>
                  <div className="border-x border-stone-100">
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block">
                      Capacidad
                    </span>
                    <span className="text-xs font-semibold text-stone-800">{suite.capacity}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block">
                      Cama
                    </span>
                    <span className="text-xs font-semibold text-stone-800 truncate block">
                      {suite.bed.split('+')[0]}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                  {suite.description}
                </p>

                {/* Key Amenities */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#745729]">
                    Amenidades de Alta Gama Incluidas:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {suite.amenities.slice(0, 6).map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-[#A88653] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setPreviewSuite(suite)}
                    className="text-xs uppercase tracking-wider font-semibold text-stone-700 hover:text-[#A88653] flex items-center gap-1 transition-colors"
                  >
                    <span>Galería & Detalles</span>
                  </button>

                  <button
                    onClick={() => onSelectSuite(suite)}
                    className="px-5 py-2.5 rounded bg-[#0E1E2E] hover:bg-[#A88653] text-[#FAF8F5] hover:text-[#0E1E2E] border border-[#A88653] text-xs uppercase tracking-[0.18em] font-bold transition-all duration-300 shadow-md flex items-center gap-2 group/btn"
                  >
                    <span>Reservar Suite</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] group-hover/btn:text-[#0E1E2E] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Suite Modal */}
      {previewSuite && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#FAF8F5] rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#C5A880]/30 animate-in fade-in duration-200">
            <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-white">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#A88653] font-bold">
                  {previewSuite.tier}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#0E1E2E]">{previewSuite.title}</h3>
              </div>
              <button
                onClick={() => setPreviewSuite(null)}
                className="text-stone-400 hover:text-stone-700 text-sm font-sans font-bold px-3 py-1"
              >
                Cerrar ✕
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Photo Gallery Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {previewSuite.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${previewSuite.title} foto ${i + 1}`}
                    className="h-32 w-full object-cover rounded border border-stone-200"
                  />
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#745729]">
                  Descripción de la Suite
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed">{previewSuite.description}</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#745729]">
                  Todas las Amenidades
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {previewSuite.amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#A88653]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#0E1E2E] text-white flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-stone-300 block">Tarifa por noche</span>
                  <span className="text-2xl font-serif font-bold text-[#C5A880]">
                    {formatPrice(previewSuite)}
                  </span>
                </div>
                <button
                  onClick={() => {
                    const chosen = previewSuite;
                    setPreviewSuite(null);
                    onSelectSuite(chosen);
                  }}
                  className="px-6 py-2.5 rounded bg-gradient-to-r from-[#A88653] to-[#C5A880] text-[#0E1E2E] font-bold text-xs uppercase tracking-widest"
                >
                  Proceder a Reservar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
