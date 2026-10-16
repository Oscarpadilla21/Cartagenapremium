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
  // Breathtaking royalty-free luxury photography (Unsplash high-res)
  heroSlides: [
    {
      id: 1,
      title: "El Lujo Caribeño Redefinido",
      subtitle: "Despierta con la brisa cálida de Bocagrande y los atardeceres dorados más memorables del Caribe colombiano.",
      badge: "VISTA PRIVILEGIADA AL MAR Y A LA BAHÍA",
      shortLabel: "01 · Atardecer en Bocagrande",
      image: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=2000&q=85"
    },
    {
      id: 2,
      title: "Rooftop Sky Pool & Sunsets",
      subtitle: "Piscina infinity suspendida en las alturas, camas balinesas y coctelería de autor frente al horizonte.",
      badge: "SANTUARIO PANORÁMICO EXCLUSIVO",
      shortLabel: "02 · Rooftop & Infinity Pool",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=85"
    },
    {
      id: 3,
      title: "A 10 Minutos de la Historia",
      subtitle: "Conéctate en minutos con las murallas coloniales, los balcones floridos y la alta gastronomía de Cartagena.",
      badge: "PATRIMONIO HISTÓRICO DE LA HUMANIDAD",
      shortLabel: "03 · Ciudad Amurallada",
      image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=2000&q=85"
    },
    {
      id: 4,
      title: "Suites de Descanso Sublime",
      subtitle: "Arquitectura contemporánea, lencería egipcia de 400 hilos y balcones privados con vista al mar.",
      badge: "EXPERIENCIA BOUTIQUE 5 ESTRELLAS",
      shortLabel: "04 · Confort de Alta Costura",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=85"
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
      description: "El punto de encuentro más exclusivo para contemplar los atardeceres con coctelería de autor y DJ set."
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
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85"
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
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85",
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
      title: "Ciudad Amurallada & Centro Histórico",
      time: "A solo 10 minutos",
      description: "Recorre callejones adoquinados, balcones florecidos de buganvilias, catedrales históricas y restaurantes de clase mundial galardonados.",
      image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=1000&q=85"
    },
    {
      title: "Playas de Bocagrande & Paseo Marítimo",
      time: "A 2 minutos a pie",
      description: "El sector más exclusivo y cosmopolita de Cartagena: compras de lujo, cafés modernos y la playa a escasos metros de tu lobby.",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85"
    },
    {
      title: "Islas del Rosario & Navegación Privada",
      time: "Salida desde Muelle (10 min)",
      description: "Coordinamos tu escape en catamarán o yate privado hacia aguas cristalinas, playas de arena blanca y arrecifes de coral protegidos.",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=85"
    }
  ],
  culturalPartners: [
    { name: "Museo Naval del Caribe", url: "https://museonavaldelcaribe.com/", logo: "https://cartagenapremium.com/wp-content/uploads/2020/03/museo-naval-color.png" },
    { name: "Museo de Arte Moderno", url: "https://mamcartagena.org/", logo: "https://cartagenapremium.com/wp-content/uploads/2020/03/museo-moderno-color.png" },
    { name: "MUHCA - Museo Histórico", url: "http://www.muhca.gov.co/", logo: "https://cartagenapremium.com/wp-content/uploads/2020/03/muca-color.png" },
    { name: "Caribe Jewelry & Emeralds", url: "https://caribejewelry.com/es", logo: "https://cartagenapremium.com/wp-content/uploads/2020/03/caribe-jewelry-color.png" },
    { name: "Santuario San Pedro Claver", url: "https://sanpedroclaver.co/home/", logo: "https://cartagenapremium.com/wp-content/uploads/2020/03/san-pedro-color.png" },
    { name: "La Presentación Centro Cultural", url: "https://lapresentacion.art/", logo: "https://cartagenapremium.com/wp-content/uploads/2020/03/lapresentacion-color.png" }
  ],
  gallery: [
    { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85", title: "Piscina Panorámica en Rooftop", tag: "Rooftop" },
    { src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=85", title: "Master Suite con Balcón al Mar", tag: "Habitaciones" },
    { src: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=1200&q=85", title: "Atardecer Dorado sobre Bocagrande", tag: "Vistas" },
    { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85", title: "Solárium y Vista a la Bahía", tag: "Rooftop" },
    { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85", title: "Baño Spa con Mármol", tag: "Interiores" },
    { src: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=1200&q=85", title: "Calles Históricas de Cartagena", tag: "Vistas" },
    { src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85", title: "Junior Suite con Luz Cálida", tag: "Habitaciones" },
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
