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
    gold: "https://cartagenapremium.com/wp-content/uploads/2020/03/logo-gold-intime-1.png",
    footer: "https://cartagenapremium.com/wp-content/uploads/2020/03/logo-footer-1.png",
    graphicAccent: "https://cartagenapremium.com/wp-content/uploads/2018/06/graphic-img-3-1-1.png"
  },
  // Real iconic sites in Cartagena de Indias (High-res royalty-free)
  heroSlides: [
    {
      id: 1,
      title: "El Lujo Caribeño Redefinido",
      subtitle: "Despierta con la brisa cálida de Bocagrande y los atardeceres dorados más memorables de la bahía de Cartagena.",
      badge: "BOCAGRANDE · VISTA AL MAR Y BAHÍA",
      shortLabel: "01 · Bocagrande Skyline",
      siteName: "Bahía de Bocagrande",
      image: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=2000&q=85"
    },
    {
      id: 2,
      title: "A 10 Minutos de la Historia",
      subtitle: "Conéctate en minutos con las murallas coloniales, los balcones florecidos de buganvilias y el centro histórico.",
      badge: "PATRIMONIO HISTÓRICO DE LA HUMANIDAD",
      shortLabel: "02 · Ciudad Amurallada",
      siteName: "Centro Histórico Colonial",
      image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=2000&q=85"
    },
    {
      id: 3,
      title: "Castillo San Felipe & Baluartes",
      subtitle: "Descubre la grandeza de la mayor fortaleza militar española en América, custodia eterna de Cartagena.",
      badge: "MONUMENTO EMBLEMÁTICO DE COLOMBIA",
      shortLabel: "03 · Castillo San Felipe",
      siteName: "Castillo San Felipe de Barajas",
      image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=2000&q=85"
    },
    {
      id: 4,
      title: "Murallas Coloniales & Océano",
      subtitle: "Los atardeceres sobre los baluartes del Caribe se disfrutan mejor con el sosiego y confort de nuestro resort.",
      badge: "CARIBE COLOMBIANO INCOMPARABLE",
      shortLabel: "04 · Murallas al Atardecer",
      siteName: "Baluartes & Murallas",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=2000&q=85"
    }
  ],
  pillars: [
    {
      number: "24/7",
      label: "Servicio de Concierge",
      description: "Atención personalizada continua para coordinar traslados VIP, yates privados y reservas gastronómicas."
    },
    {
      number: "10 min",
      label: "Del Centro Histórico",
      description: "Acceso inmediato a la Ciudad Amurallada, Torre del Reloj, museos coloniales y vida nocturna."
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
  suites: [
    {
      id: "master-ocean-suite",
      title: "Master Suite Vista al Mar",
      tier: "SIGNATURE DELUXE",
      capacity: "2 a 3 Huéspedes",
      size: "54 m²",
      bed: "1 Cama King Size Simmons + Sofá Cama",
      view: "Vista directa frontal al Mar Caribe",
      priceCOP: 480000,
      priceUSD: 125,
      featured: true,
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1400&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=1400&q=85"
      ],
      description: "Nuestra suite insignia ofrece ventanales de piso a techo, balcón privado amoblado, baño tipo spa con acabados en mármol y una vista abierta hacia el mar Caribe.",
      amenities: ["Balcón Privado Frente al Mar", "Wi-Fi 6 de Alta Velocidad", "Aire Acondicionado Silencioso", "Smart TV 55\" 4K", "Caja Fuerte Digital", "Minibar Selección Gourmet", "Cafetera Nespresso", "Room Service 24h"]
    },
    {
      id: "junior-bay-suite",
      title: "Junior Suite Bahía de Cartagena",
      tier: "PREMIUM SELECTION",
      capacity: "2 Huéspedes",
      size: "44 m²",
      bed: "1 Cama King Size o 2 Camas Queen",
      view: "Vista panorámica a la bahía y skyline",
      priceCOP: 395000,
      priceUSD: 105,
      featured: true,
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1400&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85"
      ],
      description: "Equilibrio perfecto entre serenidad y refinamiento. Contempla el movimiento de veleros y yates sobre las aguas mansas de la bahía desde la comodidad de tu suite.",
      amenities: ["Ventanales Acústicos", "Wi-Fi 6", "Desayuno Buffet Incluido", "Smart TV 50\"", "Bata y Pantuflas de Lujo", "Room Service", "Amenidades L'Occitane"]
    },
    {
      id: "deluxe-balcony-room",
      title: "Deluxe Balcony Room",
      tier: "DELUXE COMFORT",
      capacity: "2 Huéspedes",
      size: "38 m²",
      bed: "1 Cama Queen Size de Alta Gama",
      view: "Balcón privado con vista lateral al mar",
      priceCOP: 340000,
      priceUSD: 90,
      featured: false,
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85"
      ],
      description: "Diseñada para estancias placenteras o de negocios. Integra un escritorio de trabajo ergonómico, balcón exterior y lencería de algodón egipcio.",
      amenities: ["Balcón al Aire Libre", "Escritorio Ejecutivo", "Wi-Fi Premium", "Cafetera de Cortesía", "Ducha de Lluvia", "Secador Iónico", "Cerradura RFID"]
    },
    {
      id: "family-grand-suite",
      title: "Family Grand Suite",
      tier: "FAMILY LUXURY",
      capacity: "4 Huéspedes",
      size: "68 m²",
      bed: "2 Camas Queen + Sala de Estar Separada",
      view: "Doble vista panorámica Bahía y Mar",
      priceCOP: 590000,
      priceUSD: 155,
      featured: false,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85"
      ],
      description: "Espacio generoso para familias o grupos selectos que valoran la amplitud, privacidad e independencia con dos ambientes independientes.",
      amenities: ["Dos Ambientes Separados", "2 Baños Completos de Mármol", "Comedor Privado", "Frigobar Extendido", "2 Smart TV 4K", "Servicio de Cuna a Solicitud"]
    }
  ],
  rooftop: {
    title: "El Santuario en las Alturas",
    subtitle: "Rooftop Pool, Sunset Bar & Lounge",
    description: "En el último nivel de Hotel Cartagena Premium, el cielo de Cartagena se funde con el azul profundo de nuestra piscina panorámica. Un espacio reservado exclusivamente para nuestros huéspedes donde los atardeceres se acompañan con cócteles de autor, gastronomía caribeña fusión y música lounge curada.",
    images: {
      poolMain: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=85",
      poolView: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=85",
      terraceNight: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=85"
    },
    hours: "09:00 AM – 10:00 PM",
    videoUrl: "https://www.youtube.com/embed/y2TCHQ36MDs",
    highlights: [
      "Piscina infinity con vista 360° a la bahía y el mar Caribe",
      "Camas balinesas privadas y servicio de toallas premium",
      "Coctelería de autor con rones colombianos y frutas exóticas",
      "Menú de tapas gourmet servido junto al agua",
      "Atardeceres musicales con DJ set en fines de semana"
    ]
  },
  experiences: [
    {
      title: "Ciudad Amurallada & Calles Coloniales",
      time: "A solo 10 minutos",
      description: "Recorre callejones empedrados bajo balcones vestidos de buganvilias, plazas coloniales, iglesias históricas y restaurantes de alta cocina.",
      image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=1000&q=85"
    },
    {
      title: "Castillo San Felipe de Barajas",
      time: "A 8 minutos",
      description: "Visita la imponente fortaleza defensiva de la época virreinal, sus túneles subterráneos y una vista de 360 grados sobre toda Cartagena.",
      image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=85"
    },
    {
      title: "Islas del Rosario & Aguas Turquesas",
      time: "Salida desde Muelle (10 min)",
      description: "Coordinamos tu escape en catamarán o yate privado hacia el archipiélago de arrecifes coralinos y playas de arena blanca.",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=85"
    }
  ],
  culturalPartners: [
    {
      name: "Museo Naval del Caribe",
      category: "Historia Marítima Colonial",
      url: "https://museonavaldelcaribe.com/",
      logo: "https://cartagenapremium.com/wp-content/uploads/2020/03/museo-naval-color.png",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
      distance: "8 min en taxi",
      description: "Antiguo colegio de los jesuitas del siglo XVII con galeones, maquetas de batallas navales y armamento colonial."
    },
    {
      name: "Museo de Arte Moderno (MAMC)",
      category: "Artes Plásticas & Vanguardia",
      url: "https://mamcartagena.org/",
      logo: "https://cartagenapremium.com/wp-content/uploads/2020/03/museo-moderno-color.png",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      distance: "Plaza San Pedro",
      description: "Colección permanente de maestros colombianos (Grau, Obregón) en salas coloniales con vista a la plaza."
    },
    {
      name: "MUHCA - Palacio de la Inquisición",
      category: "Patrimonio Virreinal & Archivos",
      url: "http://www.muhca.gov.co/",
      logo: "https://cartagenapremium.com/wp-content/uploads/2020/03/muca-color.png",
      image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=800&q=80",
      distance: "Parque de Bolívar",
      description: "Magnífica fachada barroca, patios coloniales y salas históricas de la Cartagena del siglo XVIII."
    },
    {
      name: "Caribe Jewelry & Museo de la Esmeralda",
      category: "Orfebrería & Gemas Preciosas",
      url: "https://caribejewelry.com/es",
      logo: "https://cartagenapremium.com/wp-content/uploads/2020/03/caribe-jewelry-color.png",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
      distance: "Bocagrande (3 min)",
      description: "Taller artesanal y réplicas exactas de túneles mineros con esmeraldas puras colombianas certificadas."
    },
    {
      name: "Santuario y Claustro San Pedro Claver",
      category: "Templo Colonial del Siglo XVII",
      url: "https://sanpedroclaver.co/home/",
      logo: "https://cartagenapremium.com/wp-content/uploads/2020/03/san-pedro-color.png",
      image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
      distance: "Baluartes Centro",
      description: "Patios arbolados de piedra coralina, museo de arte religioso y vistas hacia la bahía de las Ánimas."
    },
    {
      name: "Centro Cultural La Presentación",
      category: "Jardines, Café & Exposiciones",
      url: "https://lapresentacion.art/",
      logo: "https://cartagenapremium.com/wp-content/uploads/2020/03/lapresentacion-color.png",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      distance: "Calle Estanco del Aguardiente",
      description: "Exposiciones rotativas de diseño caribeño contemporáneo, conciertos al aire libre y tienda de autor."
    }
  ],
  gallery: [
    { src: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=1200&q=85", title: "Skyline de Bocagrande al Atardecer", tag: "Destino" },
    { src: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=1200&q=85", title: "Calles de la Ciudad Amurallada", tag: "Vistas" },
    { src: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=85", title: "Castillo San Felipe de Barajas", tag: "Destino" },
    { src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=85", title: "Murallas Históricas sobre el Caribe", tag: "Vistas" },
    { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85", title: "Piscina Panorámica en Rooftop", tag: "Rooftop" },
    { src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=85", title: "Master Suite con Balcón al Mar", tag: "Habitaciones" },
    { src: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85", title: "Catamarán en Islas del Rosario", tag: "Destino" },
    { src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85", title: "Sky Bar & Coctelería de Autor", tag: "Interiores" }
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
