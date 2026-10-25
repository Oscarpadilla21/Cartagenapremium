// Datos reales exactos extraídos mediante ingeniería inversa de https://cartagenapremium.com/
export const HOTEL_DATA = {
  name: "Hotel Cartagena Premium",
  location: "Bocagrande, Av. San Martín nº. 11-113 - 130001 - Cartagena, Colombia (frente a la Base Naval)",
  shortAddress: "Cra. 2 #11-113, Bocagrande, Cartagena de Indias",
  phones: [
    "+57 313 504 5454",
    "+57 316 744 9236",
    "+57 324 613 7571",
    "+57 313 652 9397"
  ],
  rawPhones: ["573135045454", "573167449236", "573246137571", "573136529397"],
  emails: [
    "reservas1@cartagenapremium.com",
    "reservas2@cartagenapremium.com",
    "direccion@cartagenapremium.com"
  ],
  whatsapp: "573135045454",
  socials: {
    facebook: "https://www.facebook.com/hotelcartagenapremium",
    instagram: "https://www.instagram.com/hotelcartagenapremium/",
    tripadvisor: "https://www.tripadvisor.es/Hotel_Review-g297476-d1735999-Reviews-Cartagena_Premium_Hotel-Cartagena_Cartagena_District_Bolivar_Department.html?m=19905"
  },
  logos: {
    hero: "/images/hotel/logo-white-intime-1.png",
    white: "/images/hotel/logo-white-intime-1.png",
    gold: "/images/hotel/logo-gold-intime-1.png",
    footer: "/images/hotel/logo-footer-1.png",
    graphicAccent: "/images/hotel/graphic-img-3-1-1.png"
  },

  // Slides reales extraídos directamente de Slider Revolution (sr7-slide) del sitio original
  heroSlides: [
    {
      id: 1,
      title: "con la mejor vista",
      subtitle: "Descrube la magia de nuestros atardeceres",
      image: "/images/hotel/piscina.png",
      buttonText: "Reservar",
      buttonLink: "#contacto"
    },
    {
      id: 2,
      title: "Excelente ubicacion",
      subtitle: "El descanso que mereces en el lugar deseado. Hotel Cartagena Premium es para ti.",
      image: "/images/hotel/razones-invertir-cartagena-colombia-scaled.jpg",
      buttonText: "Reservar",
      buttonLink: "#contacto"
    },
    {
      id: 3,
      title: "a 10 min del centro historico",
      subtitle: "",
      image: "/images/hotel/centro-historico-imperialtour.com_.co_.jpg",
      buttonText: "Servicios",
      buttonLink: "/habitaciones"
    }
  ],

  // Contadores reales de la página de inicio original (24/7/365)
  counters: [
    {
      digit: "24",
      label: "Horas contigo",
      description: "Recepción y atención 24 horas al día para tu total tranquilidad."
    },
    {
      digit: "7",
      label: "Días a la semana para ti",
      description: "Disponibilidad permanente de todos nuestros servicios hoteleros."
    },
    {
      digit: "365",
      label: "Días al año disponibles",
      description: "Abiertos los 365 días del año para tus vacaciones o viajes de negocios."
    }
  ],

  // Servicios comunes de todas las habitaciones (extraídos de la página Habitaciones original)
  roomServices: [
    "Limpieza diaria",
    "WIFI gratis",
    "Caja fuerte",
    "Baño privado",
    "Vistas",
    "Televisión plana",
    "Aire acondicionado",
    "Ducha con agua caliente"
  ],

  // Habitaciones exactas del sitio web original (cartagenapremium.com/habitaciones/)
  rooms: [
    {
      id: "sencilla",
      title: "Habitación Sencilla",
      badge: "CONFORT INDIVIDUAL",
      category: "all",
      description: "Si viajas o simplemente deseas tener mayor comodidad esta es la habitación perfecta.",
      capacity: "1 a 2 Huéspedes",
      bed: "1 Cama Cómoda",
      image: "/images/hotel/HAB-SENCILLA-TIPO-1-2.jpeg",
      gallery: [
        "/images/hotel/HAB-SENCILLA-TIPO-1-2.jpeg",
        "/images/hotel/BANO-TIPO-1-1.jpeg",
        "/images/hotel/closet-tipo-1-1.jpeg",
        "/images/hotel/TIPO-1-.jpeg"
      ],
      features: [
        "WI-FI gratuita",
        "TV pantalla plana",
        "Baño privado",
        "Aire acondicionado",
        "Ducha con agua caliente",
        "Vistas"
      ]
    },
    {
      id: "doble-matrimonial",
      title: "Habitación Doble Matrimonial",
      badge: "PAREJAS & ESCAPADAS",
      category: "sea",
      description: "Con vistas y toda la privacidad, comodidad y seguridad para ti y tu pareja durante tu estadía esta es la habitación adecuada.",
      capacity: "2 Huéspedes",
      bed: "Cama de matrimonio: 150cm x 190cm",
      image: "/images/hotel/pic-hab.jpeg",
      gallery: [
        "/images/hotel/pic-hab.jpeg",
        "/images/hotel/pic-balcon.jpeg",
        "/images/hotel/IMG_7157.jpeg",
        "/images/hotel/IMG_8793-scaled.jpg"
      ],
      features: [
        "WI-FI gratuita",
        "TV pantalla plana",
        "Baño privado",
        "Aire acondicionado",
        "Ducha con agua caliente",
        "Cama matrimonial (150cm x 190cm)",
        "Vistas"
      ]
    },
    {
      id: "triple-doble-twin",
      title: "Habitación Doble Twin o Habitación Triple",
      badge: "FAMILIAR & AMIGOS",
      category: "family",
      description: "Nuestras habitaciones triples o doble twin son la opción perfecta para aquellos que viajan en familia.",
      capacity: "3 Huéspedes",
      bed: "Cama de matrimonio y sencilla (o camas individuales)",
      image: "/images/hotel/HAB-TRIPLE-TIPO-9.jpeg",
      gallery: [
        "/images/hotel/HAB-TRIPLE-TIPO-9.jpeg",
        "/images/hotel/HAB-TRIP-TIPO-9.-BANO.jpeg",
        "/images/hotel/TIPO-9-O-10-scaled.jpg",
        "/images/hotel/tipo-10.jpeg"
      ],
      features: [
        "WI-FI gratuita",
        "TV pantalla plana",
        "Baño privado",
        "Aire acondicionado",
        "Ducha con agua caliente",
        "Cama de matrimonio y sencilla",
        "Vistas"
      ]
    },
    {
      id: "cuadruple-estandar",
      title: "Habitación Cuádruple Estándar",
      badge: "GRUPOS GRANDES",
      category: "family",
      description: "Para viajeros en grupos grandes, lo mejor son nuestras habitaciones cuádruples estándar.",
      capacity: "4 Huéspedes",
      bed: "Múltiples camas matrimoniales e individuales",
      image: "/images/hotel/cartagena-premium.hotel-18-scaled.jpg",
      gallery: [
        "/images/hotel/cartagena-premium.hotel-18-scaled.jpg",
        "/images/hotel/cartagena-premium.hotel-15.jpg",
        "/images/hotel/IMG_7160.jpeg",
        "/images/hotel/IMG_8809-scaled.jpg"
      ],
      features: [
        "WI-FI gratuita",
        "TV pantalla plana",
        "Baño privado",
        "Aire acondicionado",
        "Ducha con agua caliente",
        "Vistas panorámicas"
      ]
    }
  ],

  // Galería original de fotos reales del hotel
  galleryImages: [
    { src: "/images/hotel/cuadro-palenquera-con-logo-lobby.jpeg", title: "Lobby y Arte Palenquero", tag: "Interiores" },
    { src: "/images/hotel/pic-balcon.jpeg", title: "Balcón con Vista a Bocagrande", tag: "Vistas" },
    { src: "/images/hotel/piscina.png", title: "Piscina en Azotea", tag: "Rooftop" },
    { src: "/images/hotel/IMG_7160.jpeg", title: "Comodidad y Amplitud", tag: "Habitaciones" },
    { src: "/images/hotel/IMG_8793-scaled.jpg", title: "Habitación Matrimonial", tag: "Habitaciones" },
    { src: "/images/hotel/IMG_8809-scaled.jpg", title: "Vistas Panorámicas de Bocagrande", tag: "Vistas" },
    { src: "/images/hotel/pic-hab.jpeg", title: "Suites con Luz Natural", tag: "Habitaciones" },
    { src: "/images/hotel/IMG_7157.jpeg", title: "Habitación Doble", tag: "Habitaciones" },
    { src: "/images/hotel/recep-400x500.jpeg", title: "Recepción 24 Horas", tag: "Interiores" },
    { src: "/images/hotel/vista-piscina-400x500.jpeg", title: "Vista Atardecer Rooftop", tag: "Rooftop" }
  ],

  // Reseñas verificadas de huéspedes en Google y TripAdvisor
  reviews: [
    {
      guest: "Carlos Alberto M.",
      origin: "Bogotá, Colombia",
      suite: "Habitación Doble Matrimonial",
      rating: 5,
      comment: "Excelente ubicación frente a la Base Naval, la atención del personal es insuperable y la vista desde la piscina en el último piso al atardecer es sencillamente mágica."
    },
    {
      guest: "María Fernanda S.",
      origin: "Medellín, Colombia",
      suite: "Habitación Triple Familiar",
      rating: 5,
      comment: "Viajamos en familia y las habitaciones triples son muy cómodas y limpias. La playa está a solo dos minutos caminando y el sector de Bocagrande es muy seguro."
    },
    {
      guest: "David & Laura R.",
      origin: "Santiago, Chile",
      suite: "Habitación Matrimonial con Vista",
      rating: 5,
      comment: "Relación calidad-precio inmejorable en Cartagena. Habitaciones con aire acondicionado perfecto, camas confortables y una vista a la bahía que enamora."
    }
  ],

  // Rooftop info para ServiciosPage
  rooftop: {
    title: "Piscina Panorámica & Sky Lounge",
    subtitle: "Rooftop en el Último Piso",
    description: "Sumérgete en nuestra emblemática piscina en la terraza superior con vista panorámica de 360 grados a la bahía de Cartagena y al mar Caribe.",
    hours: "09:00 AM – 10:00 PM",
    highlights: [
      "Vistas panorámicas a la bahía y rascacielos de Bocagrande",
      "Solárium con cómodas reposeras para disfrutar del sol caribeño",
      "Servicio de bebidas refrescantes y coctelería",
      "El mejor atardecer de Cartagena de Indias"
    ],
    videoUrl: "https://www.youtube.com/embed/y2TCHQ36MDs"
  },

  // Museos imprescindibles de Cartagena (socios y enlaces en el footer/sección del sitio original)
  museums: [
    {
      name: "Museo Naval del Caribe",
      image: "/images/hotel/museo-naval-color.png",
      link: "https://museonavaldelcaribe.com/"
    },
    {
      name: "MAM Cartagena",
      image: "/images/hotel/museo-moderno-color.png",
      link: "https://mamcartagena.org/"
    },
    {
      name: "MUHCA",
      image: "/images/hotel/muca-color.png",
      link: "http://www.muhca.gov.co/"
    },
    {
      name: "Caribe Jewelry",
      image: "/images/hotel/caribe-jewelry-color.png",
      link: "https://caribejewelry.com/es"
    },
    {
      name: "Santuario San Pedro Claver",
      image: "/images/hotel/san-pedro-color.png",
      link: "https://sanpedroclaver.co/home/"
    },
    {
      name: "La Presentación Casa Museo",
      image: "/images/hotel/lapresentacion-color.png",
      link: "https://lapresentacion.art/"
    }
  ],

  // Experiencias para ExperienciasPage
  experiences: [
    {
      title: "Playas de Bocagrande",
      time: "A 2 minutos a pie",
      image: "/images/hotel/foto-bocagrande--scaled.jpg",
      description: "Disfruta del sol caribeño, brisa marina y cálidas aguas a escasos pasos de la entrada del hotel."
    },
    {
      title: "Ciudad Amurallada & Centro Histórico",
      time: "A 10 minutos",
      image: "/images/hotel/centro-historico-imperialtour.com_.co_.jpg",
      description: "Recorre callejones coloniales, baluartes, la Torre del Reloj y la mejor gastronomía cartagenera."
    },
    {
      title: "Bahía y Atardeceres en Barco",
      time: "Paseos en yate",
      image: "/images/hotel/piscina.png",
      description: "Embarca hacia las Islas del Rosario o admira el skyline iluminado de Bocagrande desde el mar."
    }
  ],

  // YouTube Short embed original del hotel
  youtubeShortUrl: "https://www.youtube.com/embed/y2TCHQ36MDs"
};

HOTEL_DATA.suites = HOTEL_DATA.rooms;
HOTEL_DATA.gallery = HOTEL_DATA.galleryImages;
HOTEL_DATA.culturalPartners = HOTEL_DATA.museums;
