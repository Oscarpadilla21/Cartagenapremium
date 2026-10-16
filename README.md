# Hotel Cartagena Premium — Rediseño Deluxe 5 Estrellas

Prototipo de alta gama para **Hotel Cartagena Premium** (Bocagrande, Cartagena de Indias, Colombia), desarrollado con tecnologías frontend modernas y diseñado con **Stitch MCP**.

---

## 🏛️ 1. Diagnóstico del Sitio Actual (`https://cartagenapremium.com/`)

Al auditar la página original se identificaron las siguientes oportunidades de mejora:
- **Tecnología desactualizada:** WordPress 7.1 sobre Bridge Theme, WPBakery y Slider Revolution, con scripts pesados (~140KB de inline CSS/JS) que ralentizan el Largest Contentful Paint (LCP).
- **Jerarquía visual dispersa:** Textos y fotos desarticuladas, contadores básicos ("24 Horas contigo, 7 Días a la semana"), y un motor de reservas ausente o relegado a un enlace de contacto.
- **Falta de percepción "Deluxe":** Bocagrande es una de las zonas de mayor plusvalía turística y hotelera de Colombia. El diseño anterior no reflejaba la exclusividad, los atardeceres en el rooftop ni la categoría de sus suites frente a la bahía y el mar.

---

## ✨ 2. Transformación Deluxe & Sistema de Diseño en Stitch MCP

A través de **Stitch MCP** se creó el proyecto:
- **ID de Proyecto Stitch:** `16503335465146184922`
- **Nombre:** `Hotel Cartagena Premium - Deluxe Experience`
- **Sistema de Diseño Stitch:** *Cartagena Colonial Elegance*
- **Paleta de Color:**
  - **Bronce & Oro Cálido:** `#A88653` / `#C5A880` (acentos nobles, bordes finos, microinteracciones).
  - **Azul Noche Caribeño:** `#0E1E2E` (fondos profundos, barras de navegación, botones primarios).
  - **Marfil Perla / Lino:** `#FAF8F5` / `#FFFFFF` (superficies limpias y luminosas).
  - **Carbón Tipográfico:** `#1A1816` (legibilidad editorial óptima).
- **Tipografía Editorial:**
  - *Playfair Display* & *Cormorant Garamond* para titulares con distinción lírica.
  - *Plus Jakarta Sans* para una lectura ligera, moderna y ejecutiva.

---

## 🚀 3. Funcionalidades del Prototipo Interactivo

El código de este repositorio incluye:
1. **Header Sticky con Glassmorphism:**
   - Logotipo dorado original de alta resolución (`logo-gold-intime-1.png`).
   - Navegación fluida por anclas a todas las secciones.
   - Selector de moneda dinámico (**COP / USD**).
   - Acceso telefónico directo y botón de reserva.
   - Menú móvil desplegable de alta costura.

2. **Hero Cinematográfico con Transición Suave:**
   - Carrusel fotográfico con vistas reales del hotel, la bahía de Bocagrande y el centro histórico.
   - Tipografía lírica y badges de distinción.
   - Micro-barra de prueba social con calificación **4.9 / 5.0**.

3. **Motor de Reservas Flotante (*Coastal Glassmorphism*):**
   - Selector interactivo de fechas (Check-in / Check-out).
   - Selector de número de huéspedes y categoría de suite.
   - Acceso inmediato al cálculo de tarifas sin fricción.

4. **Pilares de Distinción Deluxe:**
   - *24/7 Servicio de Concierge Personalizado*.
   - *A 10 Minutos del Centro Histórico Amurallado*.
   - *Vistas 360° al Mar Caribe & Bahía*.
   - *Rooftop Infinity Pool & Sky Lounge*.

5. **Colección de Suites con Filtro y Previsualizador:**
   - Filtros por: *Todas, Vista al Mar, Con Balcón Privado, Suites Familiares*.
   - Precios en tiempo real en COP y USD.
   - Modal interactivo con galería de fotos, amenidades detalladas (Wi-Fi 6, cama King, lencería egipcia, minibar gourmet) y llamada a la acción de reserva.

6. **El Santuario en las Alturas (Rooftop & Piscina):**
   - Destaca la piscina panorámica con fotos reales (`piscina.png`, `vista-piscina-400x500.jpeg`, etc.).
   - Modal de video con el recorrido oficial del restaurante y terraza.
   - Horarios de servicio y amenidades de solárium.

7. **Circuito Cultural y Aliados de Cartagena:**
   - Convenios y accesos con museos insignia: *Museo Naval del Caribe, MAM Cartagena, MUHCA, Caribe Jewelry, San Pedro Claver, La Presentación*.

8. **Galería Fotográfica con Lightbox:**
   - Clasificación por categorías (*Rooftop, Habitaciones, Interiores, Vistas*).
   - Visor a pantalla completa con navegación por flechas.

9. **Ubicación & Mapa Interactivo en Bocagrande:**
   - Dirección exacta: *Av. San Martín nº. 11-113*.
   - Indicadores de distancia al Aeropuerto CTG (15 min), Ciudad Amurallada (8 min), Muelle La Bodeguita (8 min) y Playa Bocagrande (2 min a pie).
   - Mapa embebido interactivo.

10. **Modal / Drawer de Reserva con Integración VIP WhatsApp:**
    - Cálculo automático de noches y tarifa total según suite seleccionada.
    - Desglose de cortesías (Desayuno buffet incluido, seguro hotelero).
    - Envío directo a WhatsApp con mensaje pre-estructurado para atención inmediata por el equipo de reservas.

11. **Botón Flotante de WhatsApp Concierge:**
    - Botón siempre accesible en la esquina inferior derecha con animación hover.

---

## 🛠️ 4. Pila Tecnológica

- **Framework:** React 19 + Vite 8
- **Estilos:** Tailwind CSS v4 con variables CSS personalizadas
- **Iconografía:** Lucide React
- **Fuentes:** Google Fonts (*Playfair Display*, *Cormorant Garamond*, *Plus Jakarta Sans*)
- **Diseño & UI:** Stitch MCP

---

## 💻 5. Instrucciones de Ejecución

Para iniciar el servidor de desarrollo local:

```bash
# Iniciar el servidor local
npm run dev
```

El prototipo estará disponible en `http://localhost:5173`.

Para compilar para producción:
```bash
npm run build
npm run preview
```
