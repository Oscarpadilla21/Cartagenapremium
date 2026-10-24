import React from 'react';
import { MapPin } from 'lucide-react';

export default function UbicacionPage() {
  return (
    <div className="pt-32 pb-24 bg-white text-center">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Address Header */}
        <div className="max-w-3xl mx-auto mb-8 space-y-4">
          <h4 className="font-lato text-[18px] sm:text-[21px] leading-[32px] text-[#808080] font-normal">
            Hotel <span className="text-[#303030] font-semibold">Cartagena Premium</span> está ubicado frente a la Base Naval: Cra. 2 #11-113, Cartagena, Provincia de Cartagena, Bolívar, Colombia
          </h4>

          {/* Map Pin Icon Separator */}
          <div className="flex items-center justify-center pt-2">
            <span className="w-10 h-10 rounded-full border border-[#b5987a] text-[#b5987a] flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#b5987a]" />
            </span>
          </div>
        </div>

        {/* Full Interactive Google Map */}
        <div className="w-full h-[600px] border border-[#eee9e3] shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15696.654941851935!2d-75.5509179!3d10.4085672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeb4b3f6f061defea!2sHotel%20Cartagena%20Premium!5e0!3m2!1ses!2ses!4v1584349810460!5m2!1ses!2ses"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Hotel Cartagena Premium"
          />
        </div>

      </div>
    </div>
  );
}
