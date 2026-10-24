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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white px-4 py-3 sm:py-3.5 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-[13px] font-sans">
      <div className="flex-1 text-center sm:text-left text-white/95 leading-normal">
        Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestra web. Si sigues utilizando este sitio asumiremos que estás de acuerdo.
      </div>
      
      <div className="flex items-center gap-2.5 shrink-0">
        <button
          type="button"
          onClick={handleAccept}
          className="bg-white text-black font-semibold px-4 py-1.5 rounded-xs hover:bg-[#c1a186] hover:text-white transition-colors cursor-pointer text-xs"
        >
          Vale
        </button>
        <Link
          to="/politica-de-cookies"
          className="bg-white text-black font-semibold px-3 py-1.5 rounded-xs hover:bg-[#c1a186] hover:text-white transition-colors text-xs whitespace-nowrap"
        >
          Política de Cookies
        </Link>
        <button
          type="button"
          onClick={handleAccept}
          className="text-white/70 hover:text-white p-1 ml-1 cursor-pointer"
          aria-label="Cerrar aviso de cookies"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
