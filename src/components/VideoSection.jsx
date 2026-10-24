import React, { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isPlaying) {
        setIsPlaying(false);
      }
    };
    if (isPlaying) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPlaying]);

  return (
    <>
      <section
        className="relative py-28 sm:py-36 bg-cover bg-center text-center overflow-hidden"
        style={{ backgroundImage: `url('/images/hotel/5c804847-8b9e-4f22-b2c4-c0a05f2f7e47.webp')` }}
        aria-label="Video promocional"
      >
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center">
          {/* Centered Video Card Frame (Authentic video-backgroud.png) */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Reproducir video promocional de Hotel Cartagena Premium"
            className="relative w-full max-w-[500px] aspect-[500/333] shadow-2xl overflow-hidden cursor-pointer group rounded-xs border-2 border-white/60 focus-visible:ring-4 focus-visible:ring-[#b5987a]"
            onClick={() => setIsPlaying(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsPlaying(true);
              }
            }}
          >
            <img
              src="/images/hotel/video-backgroud.png"
              alt="Video Hotel Cartagena Premium"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

            {/* Play Button Icon with breathing ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full border-2 border-white bg-black/45 group-hover:bg-[#b5987a] text-white flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
                <span className="absolute inset-0 rounded-full border border-white/50 animate-ping opacity-40 group-hover:opacity-0" />
                <Play className="w-8 h-8 ml-1 fill-white" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Lightbox Modal */}
      {isPlaying && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video promocional Hotel Cartagena Premium"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsPlaying(false)}
        >
          <button
            type="button"
            onClick={() => setIsPlaying(false)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/25 transition-colors z-50 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Cerrar video"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="w-full max-w-4xl aspect-video bg-black shadow-2xl rounded-sm overflow-hidden flex items-center justify-center border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src="/videos/video-2.mp4"
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}