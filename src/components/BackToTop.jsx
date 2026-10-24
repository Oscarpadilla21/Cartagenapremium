import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      id="to_top"
      aria-label="Volver arriba en la página"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full border border-black/80 bg-white/95 hover:bg-black text-[#303030] hover:text-white shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b5987a]"
    >
      <ArrowUp className="w-5 h-5 stroke-[2.2]" />
    </button>
  );
}