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
  heroSlides: [
    {
      title: "El Lujo Caribeño Redefinido",
      subtitle: "Despierta con la brisa cálida de Bocagrande y los atardeceres dorados más memorables de Colombia.",
      badge: "VISTA PRIVILEGIADA AL MAR Y A LA BAHÍA",
      image: "https://cartagenapremium.com/wp-content/uploads/2023/04/IMG-20211202-WA0062.jpg"
    },
    {
      title: "El Descanso Que Mereces",
      subtitle: "Ubicación incomparable en la prestigiosa Avenida San Martín, en el epicentro de la sofisticación.",
      badge: "EXCELENCIA Y HOSPITALIDAD 5 ESTRELLAS",
      image: "https://cartagenapremium.com/wp-content/uploads/2023/04/razones-invertir-cartagena-colombia-scaled.jpg"
    },
    {
      title: "A 10 Minutos de la Historia",
      subtitle: "Conéctate al instante con las murallas coloniales, la alta gastronomía y la cultura viva de Cartagena.",
      badge: "PATRIMONIO DE LA HUMANIDAD",
      image: "https://cartagenapremium.com/wp-content/uploads/2023/04/centro-historico-imperialtour.com_.co_.jpg"
    },
    {
      title: "Playa, Sol & Sofisticación",
      subtitle: "Un refugio exclusivo diseñado para quienes aprecian la privacidad, el confort y la elegancia.",
      badge: "BOCAGRANDE EXCLUSIVE RETREAT",
      image: "https://cartagenapremium.com/wp-content/uploads/2023/04/fotografia-foto-photo-turismo-tourism-travel-skyline-playa-bocagrande-cartagena-mar-colombia-fondos-wallpapers-somos-motta-min.jpg"
    }
  ],
  pillars: [
    {
      number: "24/7",
      label: "Servicio de Concierge",
      description: "Atención personalizada continua para coordinar cada detalle de tu estadía."
    },
    {
      number: "10 min",
      label: "Del Centro Histórico",
      description: "Acceso inmediato a la Ciudad Amurallada, restaurantes de autor y monumentos."
    },
    {
      number: "360°",
      label: "Vistas al Mar & Bahía",
      description: "Habitaciones panorámicas con terrazas privadas orientadas hacia el horizonte caribeño."
    },
    {
      number: "Rooftop",
      label: "Piscina Infinity & Sky Lounge",
      description: "El punto de encuentro más exclusivo para disfrutar del atardecer con coctelería de autor."
    }
  ],
  suites: [
    {
      id: "master-ocean-suite",
      title: "Master Suite Vista al Mar",
      tier: "SIGNATURE DELUXE",
      capacity: "2 a 3 Huéspedes",
      size: "52 m²",
      bed: "1 Cama King Size Simmons + Sofá Cama",
      view: "Vista directa frontal al Mar Caribe",
      priceCOP: 480000,
      priceUSD: 125,
      featured: true,
      image: "https://cartagenapremium.com/wp-content/uploads/2025/08/IMG_7157.jpeg",
      gallery: [
        "https://cartagenapremium.com/wp-content/uploads/2025/08/IMG_7157.jpeg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/pic-balcon.jpeg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/BANO-TIPO-1-1.jpeg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/closet-tipo-1-1.jpeg"
      ],
      description: "Nuestra suite insignia ofrece ventanales de piso a techo, balcón privado amoblado, baño tipo spa con acabados en mármol y una vista abierta hacia el mar Caribe.",
      amenities: ["Balcón Privado", "Wi-Fi 6 de Alta Velocidad", "Aire Acondicionado Silencioso", "Smart TV 55\" 4K", "Caja Fuerte Digital", "Minibar Selección Gourmet", "Cafetera Nespresso", "Room Service 24h"]
    },
    {
      id: "junior-bay-suite",
      title: "Junior Suite Bahía de Cartagena",
      tier: "PREMIUM SELECTION",
      capacity: "2 Huéspedes",
      size: "42 m²",
      bed: "1 Cama King Size o 2 Camas Queen",
      view: "Vista panorámica a la bahía y skyline",
      priceCOP: 395000,
      priceUSD: 105,
      featured: true,
      image: "https://cartagenapremium.com/wp-content/uploads/2025/08/IMG_7160.jpeg",
      gallery: [
        "https://cartagenapremium.com/wp-content/uploads/2025/08/IMG_7160.jpeg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/pic-hab.jpeg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/TIPO-1-.jpeg"
      ],
      description: "Equilibrio perfecto entre serenidad y refinamiento. Contempla el movimiento de veleros y yates sobre las aguas mansas de la bahía desde la comodidad de tu suite.",
      amenities: ["Ventanales Acústicos", "Wi-Fi 6", "Desayuno Buffet Incluido", "Smart TV 50\"", "Bata y Pantuflas de Lujo", "Room Service", "Amenidades L'Occitane"]
    },
    {
      id: "deluxe-balcony-room",
      title: "Deluxe Balcony Room",
      tier: "DELUXE COMFORT",
      capacity: "2 Huéspedes",
      size: "36 m²",
      bed: "1 Cama Queen Size de Alta Gama",
      view: "Balcón privado con vista lateral al mar",
      priceCOP: 340000,
      priceUSD: 90,
      featured: false,
      image: "https://cartagenapremium.com/wp-content/uploads/2025/08/IMG_7166.jpeg",
      gallery: [
        "https://cartagenapremium.com/wp-content/uploads/2025/08/IMG_7166.jpeg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/HAB-SENCILLA-TIPO-1-2.jpeg",
        "https://cartagenapremium.com/wp-content/uploads/2020/03/cartagena-premium.hotel-15.jpg"
      ],
      description: "Diseñada para estancias placenteras o de negocios. Integra un escritorio de trabajo ergonómico, balcón exterior y lencería egipcia de 400 hilos.",
      amenities: ["Balcón al Aire Libre", "Escritorio Ejecutivo", "Wi-Fi Premium", "Cafetera de Cortesía", "Ducha de Lluvia", "Secador Iónico", "Cerradura RFID"]
    },
    {
      id: "family-grand-suite",
      title: "Family Grand Suite",
      tier: "FAMILY LUXURY",
      capacity: "4 Huéspedes",
      size: "65 m²",
      bed: "2 Camas Queen + Sala de Estar",
      view: "Doble vista Bahía y Mar",
      priceCOP: 590000,
      priceUSD: 155,
      featured: false,
      image: "https://cartagenapremium.com/wp-content/uploads/2025/08/IMG_8793-scaled.jpg",
      gallery: [
        "https://cartagenapremium.com/wp-content/uploads/2025/08/IMG_8793-scaled.jpg",
        "https://cartagenapremium.com/wp-content/uploads/2025/08/IMG_8809-scaled.jpg",
        "https://cartagenapremium.com/wp-content/uploads/2020/03/cartagena-premium.hotel-18-scaled.jpg"
      ],
      description: "Espacio generoso para familias o grupos selectos que valoran la amplitud, privacidad e independencia con dos ambientes independientes.",
      amenities: ["Dos Ambientes Separados", "2 Baños Completos", "Comedor Privado", "Frigobar Extendido", "2 Smart TV", "Servicio de Cuna a Solicitud"]
    }
  ],
  rooftop: {
    title: "El Santuario en las Alturas",
    subtitle: "Rooftop Pool, Sunset Bar & Lounge",
    description: "En el último nivel de Hotel Cartagena Premium, el cielo de Cartagena se funde con el azul profundo de nuestra piscina panorámica. Un espacio reservado exclusivamente para nuestros huéspedes donde los atardeceres se acompañan con cócteles de autor, gastronomía caribeña fusión y música lounge curada.",
    images: {
      poolMain: "https://cartagenapremium.com/wp-content/uploads/2025/08/piscina.png",
      poolView: "https://cartagenapremium.com/wp-content/uploads/2025/08/vista-piscina-400x500.jpeg",
      terraceNight: "https://cartagenapremium.com/wp-content/uploads/2023/04/8339dc8a-4030-4c42-971a-0481f1350403.jpg"
    },
    hours: "09:00 AM – 10:00 PM",
    videoUrl: "https://www.youtube.com/embed/y2TCHQ36MDs",
    highlights: [
      "Piscina panorámica con vista 360° a la bahía y el mar",
      "Camas balinesas y servicio de toallas premium",
      "Coctelería de autor con rones colombianos y frutas tropicales",
      "Menú de tapas gourmet servido junto al agua",
      "Atardeceres musicales con DJ set en fines de semana"
    ]
  },
  experiences: [
    {
      title: "Ciudad Amurallada & Centro Histórico",
      time: "A solo 10 minutos",
      description: "Recorre callejones adoquinados, balcones florecidos de buganvilias, catedrales históricas y restaurantes de clase mundial galardonados.",
      image: "https://cartagenapremium.com/wp-content/uploads/2023/04/centro-historico-imperialtour.com_.co_.jpg"
    },
    {
      title: "Playas de Bocagrande & Paseo Marítimo",
      time: "A 2 minutos a pie",
      description: "El sector más exclusivo y cosmopolita de Cartagena: compras de lujo, cafés modernos y la playa a escasos metros de tu lobby.",
      image: "https://cartagenapremium.com/wp-content/uploads/2023/04/fotografia-foto-photo-turismo-tourism-travel-skyline-playa-bocagrande-cartagena-mar-colombia-fondos-wallpapers-somos-motta-min.jpg"
    },
    {
      title: "Circuito Cultural & Museos Destacados",
      time: "Convenio Exclusivo",
      description: "Acceso privilegiado a los museos y galerías insignias: Museo Naval del Caribe, MAM Cartagena, MUHCA, Caribe Jewelry y La Presentación.",
      image: "https://cartagenapremium.com/wp-content/uploads/2023/04/cuadro-palenquera-con-logo-lobby.jpeg"
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
    { src: "https://cartagenapremium.com/wp-content/uploads/2025/08/piscina.png", title: "Piscina Panorámica en Rooftop", tag: "Rooftop" },
    { src: "https://cartagenapremium.com/wp-content/uploads/2025/08/IMG_7157.jpeg", title: "Master Suite con Balcón", tag: "Habitaciones" },
    { src: "https://cartagenapremium.com/wp-content/uploads/2025/08/pic-balcon.jpeg", title: "Atardecer desde el Balcón", tag: "Vistas" },
    { src: "https://cartagenapremium.com/wp-content/uploads/2025/08/recep-400x500.jpeg", title: "Lobby & Recepción Deluxe", tag: "Interiores" },
    { src: "https://cartagenapremium.com/wp-content/uploads/2023/04/cuadro-palenquera-con-logo-lobby.jpeg", title: "Arte & Identidad Cartagenera", tag: "Cultura" },
    { src: "https://cartagenapremium.com/wp-content/uploads/2025/08/vista-piscina-400x500.jpeg", title: "Solárium y Vista a la Bahía", tag: "Rooftop" },
    { src: "https://cartagenapremium.com/wp-content/uploads/2025/08/IMG_7160.jpeg", title: "Suite Ejecutiva con Luz Natural", tag: "Habitaciones" },
    { src: "https://cartagenapremium.com/wp-content/uploads/2023/04/foto-bocagrande--scaled.jpg", title: "El Litoral de Bocagrande", tag: "Destino" }
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
