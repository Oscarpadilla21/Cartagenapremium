export const HOTEL_DATA = {
  name: "Hotel Cartagena Premium",
  tagline: "Deluxe Boutique & Beach Retreat",
  location: "Bocagrande, Av. San Martín nº. 11-113, Cartagena de Indias, Colombia",
  phones: ["+57 313 504 5454", "+57 316 744 9236", "+57 324 613 7571"],
  emails: ["reservas2@cartagenapremium.com", "direccion@cartagenapremium.com"],
  whatsapp: "573135045454",
  socials: {
    facebook: "https://www.facebook.com/hotelcartagenapremium",
    instagram: "https://www.instagram.com/hotelcartagenapremium/",
    tripadvisor: "https://www.tripadvisor.es/Hotel_Review-g297476-d1735999-Reviews-Cartagena_Premium_Hotel-Cartagena_Cartagena_District_Bolivar_Department.html?m=19905"
  },
  logos: {
    gold: "/logo-gold.png",
    footer: "/logo-footer.png",
    graphicAccent: "https://cartagenapremium.com/wp-content/uploads/2018/06/graphic-img-3-1-1.png"
  },
  // Real photos extracted directly from cartagenapremium.com
  heroSlides: [
    {
      id: 1,
      title: "El Lujo Caribeño Redefinido",
      subtitle: "Despierta con la brisa cálida de Bocagrande y los atardeceres dorados más memorables de la bahía de Cartagena.",
      badge: "BOCAGRANDE · VISTA AL MAR Y BAHÍA",
      shortLabel: "01 · Bocagrande Skyline",
      siteName: "Bahía de Bocagrande",
      image: "https://cartagenapremium.com/wp-content/uploads/2023/04/foto-bocagrande--scaled.jpg"
    },
    {
      id: 2,
      title: "Piscina Panorámica en Azotea",
      subtitle: "Sumérgete en nuestra icónica piscina en el último piso con vista infinita al mar Caribe y a los rascacielos de Bocagrande.",
      badge: "ROOFTOP EXCLUSIVO PARA HUÉSPEDES",
      shortLabel: "02 · Piscina en Rooftop",
      siteName: "Rooftop Pool & Sky Bar",
      image: "https://cartagenapremium.com/wp-content/uploads/2025/08/piscina.png"
    },
    {
      id: 3,
      title: "Balcones Privados Frente a la Playa",
      subtitle: "Habitaciones con amplios balcones exteriores para disfrutar del sosiego de Cartagena a solo pasos de la arena.",
      badge: "ALIENTOS DE MAR Y DESCANSO",
      shortLabel: "03 · Balcones al Mar",
      siteName: "Balcones Frente a Bocagrande",
      image: "https://cartagenapremium.com/wp-content/uploads/2025/08/pic-balcon.jpeg"
    },
    {
      id: 4,
      title: "Bocagrande al Caer la Noche",
      subtitle: "La mejor ubicación turística con la tranquilidad y confort de nuestro resort en la prestigiosa Avenida San Martín.",
      badge: "CARIBE COLOMBIANO INCOMPARABLE",
      shortLabel: "04 · Bocagrande Nocturno",
      siteName: "Skyline Nocturno",
      image: "https://cartagenapremium.com/wp-content/uploads/2020/03/bocagrande-in-the-night-2.jpg"
    }
  ],
  pillars: [
    {
      number: "24/7",
      label: "Servicio de Concierge",
      description: "Atención bilingüe personalizada y asesoría permanente para planificar traslados, yates y reservaciones gastronómicas."
    },
    {
      number: "120m",
      label: "Acceso a la Playa",
      description: "Ubicación privilegiada en Bocagrande a escasos pasos de la franja costera caribeña y del sector gastronómico."
    },
    {
      number: "360°",
      label: "Vistas al Mar & Bahía",
      description: "Suites con terrazas privadas orientadas hacia las aguas mansas de la bahía y el mar abierto de Bocagrande."
    },
    {
      number: "Rooftop",
      label: "Piscina Infinity & Sky Lounge",
      description: "El punto de encuentro más exclusivo para contemplar los atardeceres con coctelería de autor y música lounge."
    }
  ],
  // Real room photographs from Hotel Cartagena Premium
  suites: [
    {
      id: "master-ocean-suite",
      category: "sea",
      title: "Master Suite Imperial Frente al Mar",
      tier: "SIGNATURE OCEANFRONT",
      capacity: "2 a 3 Huéspedes",
      size: "54 m²",
      bed: "1 Cama King Size + Sala de Estar",
      view: "Vista directa frontal al Mar Caribe",
      priceCOP: 480000,
      priceUSD: 125,
      featured: true,
      image: "https://cartagenapremium.com/wp-content/uploads/2025/08/pic-hab.jpeg",
      gallery: [
        "https://cartagenapremium.com/wp-content/uploads/2025/08/pic-hab.jpeg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/pic-balcon.jpeg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/BANO-TIPO-1-1.jpeg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/closet-tipo-1-1.jpeg"
      ],
      description: "Nuestra suite insignia frente a las olas de Bocagrande. Ventanales panorámicos de piso a techo, baño en mármol con acabados premium y atardeceres frente al océano.",
      amenities: ["Ventanales Panorámicos Frente al Mar", "Cama King Size", "Baño Privado Completo", "Wi-Fi 6 de Alta Velocidad", "Smart TV 55\" 4K", "Caja Fuerte Digital", "Room Service 24h"]
    },
    {
      id: "penthouse-ocean-suite",
      category: "sea",
      title: "Royal Penthouse Suite Panorámica Caribe",
      tier: "PRESIDENTIAL OCEANFRONT",
      capacity: "2 Huéspedes",
      size: "62 m²",
      bed: "1 Cama King Size Premium",
      view: "Piso 18 con vista 180° a mar abierto",
      priceCOP: 620000,
      priceUSD: 160,
      featured: true,
      image: "https://cartagenapremium.com/wp-content/uploads/2025/08/IMG_8809-scaled.jpg",
      gallery: [
        "https://cartagenapremium.com/wp-content/uploads/2025/08/IMG_8809-scaled.jpg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/IMG_8793-scaled.jpg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/vista-piscina-400x500.jpeg"
      ],
      description: "Ubicada en el nivel superior del hotel con la panorámica más imponente del Caribe colombiano. Acabados de lujo, sala de estar independiente y acceso directo al rooftop.",
      amenities: ["Piso Alto Vista 180° al Mar", "Sala de Estar de Autor", "Doble Lavabo en Mármol", "Batas & Pantuflas de Lino", "Cava de Vinos Privada", "Cerradura Biométrica"]
    },
    {
      id: "deluxe-terrace-suite",
      category: "balcony",
      title: "Suite Deluxe con Terraza & Balcón Privado",
      tier: "PRIVATE BALCONY & TERRACE",
      capacity: "2 Huéspedes",
      size: "48 m²",
      bed: "1 Cama King Size o 2 Queen",
      view: "Balcón amoblado exterior de 14m² con solárium privado",
      priceCOP: 390000,
      priceUSD: 100,
      featured: false,
      image: "https://cartagenapremium.com/wp-content/uploads/2025/08/pic-balcon.jpeg",
      gallery: [
        "https://cartagenapremium.com/wp-content/uploads/2025/08/pic-balcon.jpeg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/IMG_7166.jpeg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/BANO-TIPO-1-1.jpeg"
      ],
      description: "Su gran balcón privado amoblado permite disfrutar la brisa tibia de Cartagena con total intimidad y vista lateral a la playa de Bocagrande.",
      amenities: ["Balcón Privado Amoblado", "Desayuno en Balcón Opcional", "Mobiliario de Descanso", "Wi-Fi Premium", "Escritorio Ejecutivo", "Cafetera de Cortesía"]
    },
    {
      id: "junior-balcony-suite",
      category: "balcony",
      title: "Junior Suite Balcón Skyline & Bahía",
      tier: "PREMIUM BALCONY",
      capacity: "2 Huéspedes",
      size: "42 m²",
      bed: "1 Cama Queen Size de Alta Gama",
      view: "Balcón privado con vista al skyline de Bocagrande",
      priceCOP: 345000,
      priceUSD: 90,
      featured: false,
      image: "https://cartagenapremium.com/wp-content/uploads/2025/08/HAB-SENCILLA-TIPO-1-2.jpeg",
      gallery: [
        "https://cartagenapremium.com/wp-content/uploads/2025/08/HAB-SENCILLA-TIPO-1-2.jpeg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/TIPO-1-.jpeg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/IMG_7160.jpeg"
      ],
      description: "Equilibrio ideal para parejas o ejecutivos. Balcón privado exterior con vista a las luces nocturnas de Bocagrande y al muelle turístico.",
      amenities: ["Balcón Exterior Privado", "Aislamiento Acústico", "Ducha de Lluvia", "Amenidades de Baño", "Minibar Selección Especial"]
    },
    {
      id: "family-grand-suite",
      category: "family",
      title: "Family Grand Suite 2 Ambientes Separados",
      tier: "FAMILY LUXURY SUITE",
      capacity: "4 Huéspedes",
      size: "68 m²",
      bed: "2 Camas Queen + Sala de Estar Separada",
      view: "Doble vista panorámica Bahía y Mar",
      priceCOP: 590000,
      priceUSD: 155,
      featured: true,
      image: "https://cartagenapremium.com/wp-content/uploads/2025/08/TIPO-9-O-10-scaled.jpg",
      gallery: [
        "https://cartagenapremium.com/wp-content/uploads/2025/08/TIPO-9-O-10-scaled.jpg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/HAB-TRIPLE-TIPO-9.jpeg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/HAB-TRIP-TIPO-9.-BANO.jpeg"
      ],
      description: "Espacio generoso para familias que valoran la amplitud, privacidad e independencia con dos dormitorios independientes y dos baños completos.",
      amenities: ["2 Dormitorios Independientes", "2 Baños Completos", "Comedor Privado Familiar", "Frigobar Extendido", "2 Smart TV 4K", "Cuna de Cortesía"]
    },
    {
      id: "family-duplex-suite",
      category: "family",
      title: "Family Master Dúplex Confort 3 Camas",
      tier: "FAMILY RETREAT",
      capacity: "5 Huéspedes",
      size: "74 m²",
      bed: "1 Cama King + 2 Camas Twin + Sofá Cama",
      view: "Vista a la piscina rooftop y la bahía",
      priceCOP: 680000,
      priceUSD: 175,
      featured: false,
      image: "https://cartagenapremium.com/wp-content/uploads/2025/08/tipo-10.jpeg",
      gallery: [
        "https://cartagenapremium.com/wp-content/uploads/2025/08/tipo-10.jpeg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/HAB-TRIPLE-TIPO-9.jpeg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/IMG_7157.jpeg"
      ],
      description: "La suite más espaciosa del complejo hotelero. Diseñada para familias numerosas con múltiples camas, área social y ambientes climatizados.",
      amenities: ["Capacidad hasta 5 Personas", "3 Camas Distribuidas", "Área de Estar Amplia", "Desayuno Buffet Familiar Incluido", "Microondas y Frigobar Familiar"]
    }
  ],
  // Real Rooftop & Pool images from cartagenapremium.com
  rooftop: {
    title: "El Santuario en las Alturas",
    subtitle: "Rooftop Pool, Sunset Bar & Lounge",
    description: "En el último nivel de Hotel Cartagena Premium, el cielo de Cartagena se funde con el azul de nuestra piscina panorámica. Un espacio reservado exclusivamente para nuestros huéspedes donde los atardeceres se acompañan con cócteles de autor, gastronomía caribeña y música lounge.",
    images: {
      poolMain: "https://cartagenapremium.com/wp-content/uploads/2025/08/piscina.png",
      poolView: "https://cartagenapremium.com/wp-content/uploads/2025/08/vista-piscina-400x500.jpeg",
      terraceNight: "https://cartagenapremium.com/wp-content/uploads/2020/03/bocagrande-in-the-night-2.jpg"
    },
    hours: "09:00 AM – 10:00 PM",
    videoUrl: "https://www.youtube.com/embed/y2TCHQ36MDs",
    highlights: [
      "Piscina panorámica con vista al mar Caribe y bahía de Cartagena",
      "Solárium con camas de descanso y toallas de cortesía",
      "Coctelería de autor y bebidas tropicales",
      "Menú de snacks y gastronomía ligera servido en azotea",
      "Atardeceres musicales con ambiente selecto"
    ]
  },
  experiences: [
    {
      title: "Ciudad Amurallada & Calles Coloniales",
      time: "A solo 10 minutos",
      description: "Recorre callejones empedrados bajo balcones vestidos de buganvilias, plazas coloniales, iglesias históricas y restaurantes de alta cocina.",
      image: "https://cartagenapremium.com/wp-content/uploads/2023/04/centro-historico-imperialtour.com_.co_.jpg"
    },
    {
      title: "Castillo San Felipe de Barajas",
      time: "A 8 minutos",
      description: "Visita la imponente fortaleza defensiva de la época virreinal, sus túneles subterráneos y una vista de 360 grados sobre toda Cartagena.",
      image: "https://cartagenapremium.com/wp-content/uploads/2023/04/razones-invertir-cartagena-colombia-scaled.jpg"
    },
    {
      title: "Playas de Bocagrande & Deportes Náuticos",
      time: "A 2 minutos a pie",
      description: "Salida peatonal directa a la franja de arena dorada, deportes náuticos, carpas de descanso y la brisa cálida caribeña.",
      image: "https://cartagenapremium.com/wp-content/uploads/2023/04/fotografia-foto-photo-turismo-tourism-travel-skyline-playa-bocagrande-cartagena-mar-colombia-fondos-wallpapers-somos-motta-min.jpg"
    }
  ],
  culturalPartners: [
    {
      name: "Museo Naval del Caribe",
      category: "Historia Marítima Colonial",
      url: "https://museonavaldelcaribe.com/",
      logo: "https://cartagenapremium.com/wp-content/uploads/2020/03/museo-naval-color.png",
      image: "https://cartagenapremium.com/wp-content/uploads/2023/04/centro-historico-imperialtour.com_.co_.jpg",
      distance: "8 min en taxi",
      description: "Antiguo colegio de los jesuitas del siglo XVII con galeones, maquetas de batallas navales y armamento colonial."
    },
    {
      name: "Museo de Arte Moderno (MAMC)",
      category: "Artes Plásticas & Vanguardia",
      url: "https://mamcartagena.org/",
      logo: "https://cartagenapremium.com/wp-content/uploads/2020/03/museo-moderno-color.png",
      image: "https://cartagenapremium.com/wp-content/uploads/2023/04/cuadro-palenquera-con-logo-lobby.jpeg",
      distance: "Plaza San Pedro",
      description: "Colección permanente de maestros colombianos (Grau, Obregón) en salas coloniales con vista a la plaza."
    },
    {
      name: "MUHCA - Palacio de la Inquisición",
      category: "Patrimonio Virreinal & Archivos",
      url: "http://www.muhca.gov.co/",
      logo: "https://cartagenapremium.com/wp-content/uploads/2020/03/muca-color.png",
      image: "https://cartagenapremium.com/wp-content/uploads/2023/04/razones-invertir-cartagena-colombia-scaled.jpg",
      distance: "Parque de Bolívar",
      description: "Magnífica fachada barroca, patios coloniales y salas históricas de la Cartagena del siglo XVIII."
    },
    {
      name: "Caribe Jewelry & Museo de la Esmeralda",
      category: "Orfebrería & Gemas Preciosas",
      url: "https://caribejewelry.com/es",
      logo: "https://cartagenapremium.com/wp-content/uploads/2020/03/caribe-jewelry-color.png",
      image: "https://cartagenapremium.com/wp-content/uploads/2025/08/IMG_8793-scaled.jpg",
      distance: "Bocagrande (3 min)",
      description: "Taller artesanal y réplicas exactas de túneles mineros con esmeraldas puras colombianas certificadas."
    },
    {
      name: "Santuario y Claustro San Pedro Claver",
      category: "Templo Colonial del Siglo XVII",
      url: "https://sanpedroclaver.co/home/",
      logo: "https://cartagenapremium.com/wp-content/uploads/2020/03/san-pedro-color.png",
      image: "https://cartagenapremium.com/wp-content/uploads/2020/03/cartagena-premium.hotel-15.jpg",
      distance: "Baluartes Centro",
      description: "Patios arbolados de piedra coralina, museo de arte religioso y vistas hacia la bahía de las Ánimas."
    },
    {
      name: "Centro Cultural La Presentación",
      category: "Jardines, Café & Exposiciones",
      url: "https://lapresentacion.art/",
      logo: "https://cartagenapremium.com/wp-content/uploads/2020/03/lapresentacion-color.png",
      image: "https://cartagenapremium.com/wp-content/uploads/2020/03/cartagena-premium.hotel-18-scaled.jpg",
      distance: "Calle Estanco del Aguardiente",
      description: "Exposiciones rotativas de diseño caribeño contemporáneo, conciertos al aire libre y tienda de autor."
    }
  ],
  // Curated Real Hotel Photos for Gallery
  gallery: [
    { src: "https://cartagenapremium.com/wp-content/uploads/2025/08/piscina.png", title: "Piscina Panorámica en Azotea", tag: "Rooftop" },
    { src: "https://cartagenapremium.com/wp-content/uploads/2025/08/pic-balcon.jpeg", title: "Vista al Mar Caribe desde el Balcón", tag: "Vistas" },
    { src: "https://cartagenapremium.com/wp-content/uploads/2025/08/pic-hab.jpeg", title: "Master Suite con Cama King", tag: "Habitaciones" },
    { src: "https://cartagenapremium.com/wp-content/uploads/2025/08/recep-400x500.jpeg", title: "Lobby y Recepción Principal 24h", tag: "Interiores" },
    { src: "https://cartagenapremium.com/wp-content/uploads/2025/08/vista-piscina-400x500.jpeg", title: "Solárium y Vista a la Bahía", tag: "Rooftop" },
    { src: "https://cartagenapremium.com/wp-content/uploads/2025/08/TIPO-9-O-10-scaled.jpg", title: "Suite Triple & Familiar Tipo 9", tag: "Habitaciones" },
    { src: "https://cartagenapremium.com/wp-content/uploads/2025/08/BANO-TIPO-1-1.jpeg", title: "Baño Completo con Acabados Finos", tag: "Interiores" },
    { src: "https://cartagenapremium.com/wp-content/uploads/2023/04/cuadro-palenquera-con-logo-lobby.jpeg", title: "Obra de Palenquera en el Lobby", tag: "Interiores" },
    { src: "https://cartagenapremium.com/wp-content/uploads/2020/03/bocagrande-in-the-night-2.jpg", title: "Vista Nocturna de Bocagrande", tag: "Destino" },
    { src: "https://cartagenapremium.com/wp-content/uploads/2020/03/cartagena-premium.hotel-15.jpg", title: "Áreas de Estar y Terrazas", tag: "Rooftop" },
    { src: "https://cartagenapremium.com/wp-content/uploads/2020/03/cartagena-premium.hotel-18-scaled.jpg", title: "Salón de Eventos & Desayunos", tag: "Interiores" },
    { src: "https://cartagenapremium.com/wp-content/uploads/2023/04/foto-bocagrande--scaled.jpg", title: "Playa de Bocagrande a 1 Cuadra", tag: "Destino" }
  ],
  reviews: [
    {
      guest: "María Camila Restrepo",
      origin: "Medellín, Colombia",
      rating: 5,
      date: "Hace 1 semana",
      suite: "Master Suite Vista al Mar",
      comment: "La vista desde el piso alto y la piscina al atardecer es insuperable. El personal tiene esa calidez cartagenera que te hace sentir como en casa pero con el nivel de un hotel de lujo. ¡Volveremos sin duda!"
    },
    {
      guest: "David S. Henderson",
      origin: "Miami, Florida, EE.UU.",
      rating: 5,
      date: "Hace 3 semanas",
      suite: "Junior Suite Bahía",
      comment: "Outstanding location in Bocagrande. Very quiet, clean and modern. The concierge arranged our private boat trip to the Rosario Islands effortlessly. The breakfast buffet was authentic and delicious."
    },
    {
      guest: "Andrés Felipe Gómez",
      origin: "Bogotá, Colombia",
      rating: 5,
      date: "El mes pasado",
      suite: "Deluxe Balcony Room",
      comment: "Excelente relación calidad-precio en el mejor punto de Bocagrande. Caminas a la playa en un minuto y el centro amurallado queda a 5 minutos en taxi. El rooftop es mágico."
    }
  ]
};
