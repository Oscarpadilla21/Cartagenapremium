import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export default function LegalNotice() {
  const [accepted, setAccepted] = useState(true); // default hidden until checked

  useEffect(() => {
    try {
      const isConsentGiven = localStorage.getItem('cookie_notice_accepted');
      if (!isConsentGiven) {
        setAccepted(false);
      }
    } catch {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('cookie_notice_accepted', 'true');
    } catch {}
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <aside
      role="region"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#1f242e]/98 backdrop-blur-md text-white px-4 py-3 sm:py-3.5 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-[13px] font-sans border-t border-[#b5987a]/30 animate-in slide-in-from-bottom duration-300"
    >
      <div className="flex-1 text-center sm:text-left text-white/90 leading-normal">
        Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestra web. Si sigues utilizando este sitio asumiremos que estás de acuerdo.
      </div>
      
      <div className="flex items-center gap-2.5 shrink-0">
        <button
          type="button"
          onClick={handleAccept}
          className="min-h-[44px] min-w-[70px] bg-[#b5987a] hover:bg-white text-white hover:text-[#1f242e] font-lato font-bold uppercase tracking-wider px-4 py-2 rounded-xs transition-all cursor-pointer text-xs flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white"
        >
          Aceptar
        </button>
        <Link
          to="/politica-de-cookies"
          className="min-h-[44px] bg-white/10 hover:bg-white/20 text-white font-lato font-bold uppercase tracking-wider px-3.5 py-2 rounded-xs transition-colors text-xs whitespace-nowrap flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white"
        >
          Política de Cookies
        </Link>
        <button
          type="button"
          onClick={handleAccept}
          className="min-w-[44px] min-h-[44px] text-white/70 hover:text-white flex items-center justify-center cursor-pointer rounded-xs focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Cerrar aviso de cookies"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}