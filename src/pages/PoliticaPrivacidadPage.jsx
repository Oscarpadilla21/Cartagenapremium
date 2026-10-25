import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { ShieldCheck, Lock, Eye, FileText, Mail, Phone, MapPin, Database, ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PoliticaPrivacidadPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF8F5]">
      {/* Page Header */}
      <div className="relative py-14 sm:py-20 bg-[#0E1E2E] text-white overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/hotel/recep-400x500.jpeg"
            alt="Política de Privacidad Hotel Cartagena Premium"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E2E] via-[#0E1E2E]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 text-[#C5A880] text-xs font-semibold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Ley 1581 de 2012 · Habeas Data</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-white">
            Política de Privacidad & Protección de Datos
          </h1>
          <p className="text-stone-300 font-sans text-xs sm:text-sm mt-3 leading-relaxed max-w-xl mx-auto">
            Lineamientos para la recolección, almacenamiento, uso y protección de los datos personales en cumplimiento con el régimen legal colombiano.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-stone-700 font-sans text-sm leading-relaxed">
        {/* Card 1: Responsable del Tratamiento */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="w-9 h-9 rounded-lg bg-[#0E1E2E] text-[#C5A880] flex items-center justify-center shrink-0">
              <Database className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-serif font-bold text-[#0E1E2E]">
              1. Responsable del Tratamiento de Datos Personales
            </h2>
          </div>
          <p>
            De conformidad con la <strong>Ley Estatutaria 1581 de 2012</strong> y su <strong>Decreto Reglamentario 1377 de 2013</strong> de la República de Colombia, la persona jurídica responsable del tratamiento de sus datos personales recolectados a través de este sitio web, vía telefónica o de forma presencial es:
          </p>
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 text-xs text-stone-800 space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="font-bold text-[#0E1E2E]">Razón Social / Comercial:</span>
              <span>Hotel Cartagena Premium</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="font-bold text-[#0E1E2E]">Domicilio Principal:</span>
              <span>Bocagrande, Av. San Martín nº. 11-113, Cartagena de Indias, Colombia</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="font-bold text-[#0E1E2E]">Correo de Habeas Data:</span>
              <a href={`mailto:${HOTEL_DATA.emails[0]}`} className="text-[#A88653] font-semibold underline">{HOTEL_DATA.emails[0]}</a>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="font-bold text-[#0E1E2E]">Línea de Atención al Titular:</span>
              <span>{HOTEL_DATA.phones[0]}</span>
            </div>
          </div>
        </section>

        {/* Card 2: Qué datos recopilamos y para qué */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="w-9 h-9 rounded-lg bg-[#0E1E2E] text-[#C5A880] flex items-center justify-center shrink-0">
              <Eye className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-serif font-bold text-[#0E1E2E]">
              2. Datos Recolectados y Finalidad del Tratamiento
            </h2>
          </div>
          
          <div className="space-y-3 text-xs text-stone-600">
            <p>
              Recopilamos datos personales indispensables para la adecuada prestación de nuestros servicios hoteleros y el cumplimiento de exigencias legales ante el Ministerio de Comercio, Industria y Turismo, DIAN y Migración Colombia:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-800 my-3">
              <li className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200/80">
                <Check className="w-4 h-4 text-[#A88653] shrink-0" />
                <span>Nombres, apellidos y número de documento (C.C., CE, Pasaporte).</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200/80">
                <Check className="w-4 h-4 text-[#A88653] shrink-0" />
                <span>Correo electrónico, teléfono móvil y país de residencia.</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200/80">
                <Check className="w-4 h-4 text-[#A88653] shrink-0" />
                <span>Fechas de estadía, preferencias de habitación y solicitudes especiales.</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200/80">
                <Check className="w-4 h-4 text-[#A88653] shrink-0" />
                <span>Información transaccional y de facturación electrónica.</span>
              </li>
            </ul>

            <h3 className="font-bold text-[#0E1E2E] text-sm pt-2">Finalidades Principales:</h3>
            <ol className="list-decimal pl-5 space-y-1.5 text-stone-700">
              <li><strong>Gestión de Reservas:</strong> Formalizar, modificar y confirmar reservaciones de hospedaje en Hotel Cartagena Premium.</li>
              <li><strong>Cumplimiento Normativo Turístico:</strong> Diligenciamiento obligatorio de la Tarjeta de Registro Hotelero (TRA) según lo dispuesto por el Gobierno Nacional de Colombia.</li>
              <li><strong>Facturación & Cobranza:</strong> Emisión de facturas electrónicas de venta ante la Dirección de Impuestos y Aduanas Nacionales (DIAN).</li>
              <li><strong>Atención al Huésped:</strong> Coordinación de solicitudes de concierge, traslados desde el aeropuerto y servicios de alimentos y bebidas.</li>
              <li><strong>Comunicaciones Informativas:</strong> Envío de novedades o promociones exclusivas únicamente si media consentimiento previo y expreso del titular.</li>
            </ol>
          </div>
        </section>

        {/* Card 3: Derechos de los Titulares (Habeas Data) */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="w-9 h-9 rounded-lg bg-[#0E1E2E] text-[#C5A880] flex items-center justify-center shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-serif font-bold text-[#0E1E2E]">
              3. Derechos de los Titulares (Derechos ARCO)
            </h2>
          </div>
          <p className="text-xs text-stone-600">
            En virtud del artículo 8 de la Ley 1581 de 2012, usted como titular de datos personales cuenta con los siguientes derechos irrevocables:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200/90">
              <strong className="text-[#0E1E2E] block mb-1">Conocer y Acceder:</strong>
              <p className="text-stone-600">Conocer qué datos personales reposan en nuestras bases de datos y la forma en que están siendo tratados.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200/90">
              <strong className="text-[#0E1E2E] block mb-1">Actualizar y Rectificar:</strong>
              <p className="text-stone-600">Solicitar la rectificación o actualización de datos inexactos, incompletos o desactualizados.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200/90">
              <strong className="text-[#0E1E2E] block mb-1">Suprimir y Revocar:</strong>
              <p className="text-stone-600">Solicitar la eliminación de sus datos o revocar la autorización cuando no medie un deber legal o contractual de permanencia.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200/90">
              <strong className="text-[#0E1E2E] block mb-1">Presentar Quejas:</strong>
              <p className="text-stone-600">Acudir ante la Superintendencia de Industria y Comercio (SIC) en caso de infracciones al régimen de protección de datos.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs text-amber-950">
            <p className="font-bold mb-1">Canal para Ejercer sus Derechos:</p>
            <p>
              Puede enviar su solicitud indicando su nombre completo, copia de documento de identidad y descripción de la petición al correo electrónico: <a href={`mailto:${HOTEL_DATA.emails[0]}`} className="font-bold underline text-amber-900">{HOTEL_DATA.emails[0]}</a>. Su solicitud será atendida en un plazo máximo de quince (15) días hábiles conforme al procedimiento de ley.
            </p>
          </div>
        </section>

        {/* Card 4: Política de Cookies */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="w-9 h-9 rounded-lg bg-[#0E1E2E] text-[#C5A880] flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-serif font-bold text-[#0E1E2E]">
              4. Política de Cookies y Tecnologías Web
            </h2>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Nuestro portal web utiliza cookies técnicas y analíticas necesarias para permitir la navegación fluida, almacenar las preferencias de navegación y medir el tráfico de forma agregada y anónima. Usted puede en cualquier momento configurar o restringir el uso de cookies desde las preferencias de su navegador web sin que ello impida consultar la información del hotel.
          </p>
        </section>

        {/* Card 5: Enlace de retorno */}
        <div className="flex items-center justify-between pt-2">
          <Link
            to="/aviso-legal"
            className="text-xs font-bold text-[#A88653] hover:text-[#0E1E2E] inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Ver Aviso Legal & Condiciones Generales de Reserva</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/"
            className="text-xs font-bold text-stone-600 hover:text-[#0E1E2E] transition-colors"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

