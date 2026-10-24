import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <section
        className="relative py-28 sm:py-36 bg-cover bg-center text-center overflow-hidden"
        style={{ backgroundImage: `url('/images/hotel/5c804847-8b9e-4f22-b2c4-c0a05f2f7e47.webp')` }}
      >
        <div className="absolute inset-0 bg-black/15" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center">
          {/* Centered Video Card Frame (Authentic video-backgroud.png) */}
          <div
            className="relative w-full max-w-[500px] aspect-[500/333] shadow-2xl overflow-hidden cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src="/images/hotel/video-backgroud.png"
              alt="Video Hotel Cartagena Premium"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

            {/* Play Button Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-18 h-18 sm:w-20 sm:h-20 rounded-full border-2 border-white bg-black/35 group-hover:bg-[#b5987a] text-white flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-xl">
                <Play className="w-8 h-8 ml-1 fill-white" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Lightbox Modal */}
      {isPlaying && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsPlaying(false)}
        >
          <button
            type="button"
            onClick={() => setIsPlaying(false)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Cerrar video"
          >
            <X className="w-7 h-7" />
          </button>

          <div
            className="w-full max-w-4xl aspect-video bg-black shadow-2xl rounded-sm overflow-hidden flex items-center justify-center"
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
