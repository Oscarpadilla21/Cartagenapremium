import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { ShieldAlert, FileText, Scale, Phone, Mail, MapPin, CheckCircle2, ChevronRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AvisoLegalPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF8F5]">
      {/* Page Header */}
      <div className="relative py-14 sm:py-20 bg-[#0E1E2E] text-white overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/hotel/cuadro-palenquera-con-logo-lobby.jpeg"
            alt="Aviso Legal Hotel Cartagena Premium"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E2E] via-[#0E1E2E]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 text-[#C5A880] text-xs font-semibold uppercase tracking-widest mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>Marco Regulatorio & Términos</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-white">
            Aviso Legal & Condiciones de Uso
          </h1>
          <p className="text-stone-300 font-sans text-xs sm:text-sm mt-3 leading-relaxed max-w-xl mx-auto">
            Información legal, condiciones contractuales y normatividad turística aplicable a las reservaciones y servicios de Hotel Cartagena Premium.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-stone-700 font-sans text-sm leading-relaxed">
        {/* Card 1: Titularidad */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="w-9 h-9 rounded-lg bg-[#0E1E2E] text-[#C5A880] flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-serif font-bold text-[#0E1E2E]">
              1. Datos Identificativos y Titularidad
            </h2>
          </div>
          <p>
            En cumplimiento de la legislación comercial y de servicios de la sociedad de la información, se hace constar que el presente sitio web y sus canales de reserva son operados por:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 text-xs text-stone-800">
            <div>
              <span className="font-bold text-[#0E1E2E] block">Establecimiento:</span>
              <span>Hotel Cartagena Premium</span>
            </div>
            <div>
              <span className="font-bold text-[#0E1E2E] block">Ubicación & Domicilio:</span>
              <span>Bocagrande, Av. San Martín nº. 11-113, Cartagena de Indias, Colombia</span>
            </div>
            <div>
              <span className="font-bold text-[#0E1E2E] block">Líneas de Atención:</span>
              <span>{HOTEL_DATA.phones.join(' · ')}</span>
            </div>
            <div>
              <span className="font-bold text-[#0E1E2E] block">Correos Electrónicos:</span>
              <span>{HOTEL_DATA.emails.join(' · ')}</span>
            </div>
            <div>
              <span className="font-bold text-[#0E1E2E] block">Portal Web Oficial:</span>
              <a href="https://cartagenapremium.com" className="text-[#A88653] underline">cartagenapremium.com</a>
            </div>
            <div>
              <span className="font-bold text-[#0E1E2E] block">Registro Nacional de Turismo:</span>
              <span>RNT Vigente conforme a la Ley 300 de 1996 y Ley 2068 de 2020</span>
            </div>
          </div>
        </section>

        {/* Card 2: Protección a Menores de Edad */}
        <section className="bg-amber-50/60 p-6 sm:p-8 rounded-2xl border border-amber-200/80 shadow-sm space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-200">
            <div className="w-9 h-9 rounded-lg bg-amber-700 text-white flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-serif font-bold text-amber-950">
                2. Prevención de la Explotación Sexual de Menores (Ley 679 de 2001)
              </h2>
              <span className="text-xs text-amber-800 font-medium">Normativa Obligatoria para el Sector Turístico en Colombia</span>
            </div>
          </div>
          <p className="text-xs text-amber-900 leading-relaxed">
            En desarrollo de lo dispuesto en el artículo 17 de la <strong>Ley 679 de 2001</strong> y la <strong>Ley 1336 de 2009</strong>, Hotel Cartagena Premium advierte al huésped que la explotación y el abuso sexual de niños, niñas y adolescentes en el país son sancionados penal y civilmente conforme a las leyes colombianas con penas privativas de la libertad e inhabilidades.
          </p>
          <div className="p-3.5 rounded-lg bg-white/80 border border-amber-200 text-xs text-amber-950 space-y-1.5">
            <p className="font-bold">Requisitos de Registro de Huéspedes Menores de Edad:</p>
            <ul className="list-disc pl-5 space-y-1 text-stone-700">
              <li>Todo menor de 18 años debe presentar en recepción su <strong>Registro Civil de Nacimiento</strong> o documento de identidad oficial.</li>
              <li>Si el menor no viaja en compañía de sus padres biológicos o tutores legales, es indispensable presentar un <strong>permiso firmado y autenticado ante notaría</strong> por al menos uno de sus progenitores autorizando el hospedaje.</li>
              <li>El hotel se reserva el derecho de no permitir el ingreso de menores que no cumplan a cabalidad con este requerimiento legal.</li>
            </ul>
          </div>
        </section>

        {/* Card 3: Condiciones de Reserva y Tarifas */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="w-9 h-9 rounded-lg bg-[#0E1E2E] text-[#C5A880] flex items-center justify-center shrink-0">
              <Scale className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-serif font-bold text-[#0E1E2E]">
              3. Condiciones Generales de Reserva, Check-In & Check-Out
            </h2>
          </div>
          
          <div className="space-y-3 text-xs text-stone-600">
            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200/80 flex flex-col sm:flex-row justify-between gap-2">
              <div>
                <strong className="text-stone-900 block">Horario de Check-in:</strong>
                <span>A partir de las 3:00 PM (15:00 hrs)</span>
              </div>
              <div>
                <strong className="text-stone-900 block">Horario de Check-out:</strong>
                <span>Hasta las 12:00 PM (12:00 hrs m.)</span>
              </div>
              <div>
                <strong className="text-stone-900 block">Custodia de Equipaje:</strong>
                <span className="text-emerald-700 font-medium">Sin costo en recepción</span>
              </div>
            </div>

            <p>
              <strong>Tarifas e Impuestos:</strong> Las cotizaciones y confirmaciones de estadía especifican los impuestos de ley vigentes en Colombia (IVA del alojamiento conforme a las regulaciones de la DIAN para residentes nacionales y exenciones para turistas extranjeros bajo sello PIP-5).
            </p>
            <p>
              <strong>Política de Cancelación & No Show:</strong> Salvo promociones no reembolsables debidamente informadas, las cancelaciones recibidas con más de 48 horas de anticipación a la fecha de llegada no causan penalidad. Cancelaciones posteriores o la no presentación (No-Show) facultan el cobro de la primera noche de estancia.
            </p>
            <p>
              <strong>Derecho de Retracto (Ley 1480 de 2011):</strong> En las compras no presenciales realizadas a través de nuestros canales digitales, el consumidor podrá ejercer el derecho de retracto dentro de los cinco (5) días hábiles siguientes a la operación de compra, siempre que la prestación del servicio no deba comenzar antes de dicho término.
            </p>
          </div>
        </section>

        {/* Card 4: Propiedad Intelectual */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="w-9 h-9 rounded-lg bg-[#0E1E2E] text-[#C5A880] flex items-center justify-center shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-serif font-bold text-[#0E1E2E]">
              4. Propiedad Intelectual e Industrial
            </h2>
          </div>
          <p className="text-xs text-stone-600">
            Todos los contenidos de este portal web, incluyendo logotipos, marcas comerciales, fotografías de instalaciones, textos descriptivos, iconografía, diseño gráfico y código fuente son propiedad exclusiva de <strong>Hotel Cartagena Premium</strong> o de sus legítimos licenciantes. Queda estrictamente prohibida su reproducción, distribución o comunicación pública con fines comerciales sin autorización expresa por escrito.
          </p>
        </section>

        {/* Card 5: Jurisdicción */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-3">
          <h2 className="text-base font-serif font-bold text-[#0E1E2E]">
            5. Legislación Aplicable y Jurisdicción
          </h2>
          <p className="text-xs text-stone-600">
            Las presentes condiciones se rigen en su totalidad por las leyes de la <strong>República de Colombia</strong>. Ante cualquier controversia derivada del uso del portal o de la prestación de los servicios hoteleros, las partes se someten a los juzgados y tribunales competentes de la ciudad de <strong>Cartagena de Indias (Bolívar)</strong>, renunciando a cualquier otro fuero que pudiera corresponderles.
          </p>
          <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
            <Link
              to="/politica-privacidad"
              className="text-xs font-bold text-[#A88653] hover:text-[#0E1E2E] inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Consultar Política de Tratamiento de Datos Personales</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

